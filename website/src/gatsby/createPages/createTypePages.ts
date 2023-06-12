import path from 'path';

import type { CreatePagesArgs } from 'gatsby';

import { filterExports } from '../../libs/filterExports';
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
    }
  }
`;

export default async function createTypePages({
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

    const stringExports = filterExports('string', string);

    const pageData = {
      path: '/string',
      component: path.resolve('./src/templates/type.tsx'),
      context: {
        exports: stringExports,
        title: 'String',
        description: 'A collection of utilities surrounding strings written in TypeScript.'
      }
    };

    actions.createPage(pageData);
  }
}
