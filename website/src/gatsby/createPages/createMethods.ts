import path from 'path';

import type { CreatePagesArgs } from 'gatsby';

import { filterMethod } from '../../libs/filterHooks';
import type { MethodNode } from '../../models';

interface Query {
  posts: { nodes: MethodNode[] }
  methods: { nodes: MethodNode[] }
  demos: { nodes: MethodNode[] }
}

const methodQuery = `
  nodes {
    id
    fields {
      name
      path
    }
    internal {
      contentFilePath
    }
  }
`;

export default async function createMethods({
  graphql, actions, reporter
}: CreatePagesArgs) {
  const results = await graphql<Query>(
    `
      {
        posts: allMdx(filter: { fields: { type: { eq: "post" } } }) {
          ${methodQuery}
        }
        methods: allMdx(filter: { fields: { type: { eq: "method" } } }) {
          ${methodQuery}
        }
        demos: allMdx(filter: { fields: { type: { eq: "demo" } } }) {
          ${methodQuery}
        }
      }
    `,
  );

  if (results.errors) {
    reporter.panicOnBuild('Error loading MDX result', results.errors);
    return;
  }

  if (results.data) {
    const { posts, methods, demos } = results.data;

    const filteredPosts = filterMethod(posts.nodes, methods.nodes, demos.nodes);

    filteredPosts.forEach(({ post, methodId, demoId }) => {
      const { id, fields, internal } = post;

      const pageData = {
        // component: path.resolve('./src/templates/post.tsx'),
        path: `/method${fields.path}`,
        // eslint-disable-next-line max-len
        component: `${path.resolve('./src/templates/post.tsx')}?__contentFilePath=${internal.contentFilePath}`,
        context: { id, methodId, demoId },
      };

      actions.createPage(pageData);

      actions.createRedirect({
        fromPath: fields.path,
        toPath: `/method${fields.path}`,
        isPermanent: true,
      });
    });
  }
}
