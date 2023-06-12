import { graphql } from 'gatsby';

type ExportFields = {
  category: 'methods';
  name: string;
  path: string;
  slug: string;
  type: 'string';
}

interface ExportNode {
  id: string;
  fields: ExportFields;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    relatedFunctions: {
      type: string;
      category: string;
      slug: string;
      title: string;
    }[];
  };
  body: string;
}

const ExportNodeQuery = graphql`
  fragment ExportNode on Mdx {
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
  }
`;

const ExportNodePreviewQuery = graphql`
  fragment ExportNodePreview on Mdx {
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
  }
`;

export type { ExportNode };
export { ExportNodeQuery, ExportNodePreviewQuery, };
