import path from 'path';

import type { CreatePagesArgs } from 'gatsby';

import type { ExportNode } from '../../models';

type PageNode = ExportNode & { internal: { contentFilePath: string } }
interface PageQuery {
  string: { nodes: PageNode[] };
}

const pageQuery = `
  nodes {
    id
    fields {
      category
      name
      path
      slug
      type
    }
    frontmatter {
      title
      date
      description
      relatedFunctions {
        type
        category
        slug
        title
      }
    }
    body
    internal {
      contentFilePath
    }
  }
`;

export default async function createFunctionPages({
  graphql, actions, reporter
}: CreatePagesArgs) {
  const results = await graphql<PageQuery>(
    `
      {
        string: allMdx(filter: {fields: {type: {eq: "string"}}}) {
          ${pageQuery}
        }
      }
    `,
  );

  if (results.errors) {
    reporter.panicOnBuild('Error loading MDX result', results.errors);
    return;
  }

  if (results.data) {
    const { string } = results.data;

    string.nodes.forEach(({
      id, fields, internal
    }) => {
      const pageData = {
        path: fields.path,
        component: `${path.resolve(
          './src/templates/post.tsx'
        )}?__contentFilePath=${internal.contentFilePath}`,
        context: { id },
      };

      actions.createPage(pageData);
    });
  }
}
