import { graphql } from 'gatsby';

interface MethodNode {
  id: string
  fields: {
    name: string
    path: string
  }
  internal: {
    contentFilePath: string
  }
}

const MethodNodeQuery = graphql`
  fragment MethodNode on Mdx {
    id
    fields {
      name
      path
    }
  }
`;

interface Post extends MethodNode {
  id: string
  excerpt: string
  shortDescription: string
  fields: {
    path: string
    name: string
    type: 'method'
  }
  frontmatter: {
    title: string
    date: string
    relatedFunctions: {
      type: string;
      category: string;
      slug: string;
      title: string;
    }[]
  }
  body: string
}

const PostPreviewQuery = graphql`
  fragment PostPreview on Mdx {
    id
    excerpt(pruneLength: 155)
    shortDescription: excerpt(pruneLength: 280)
    fields {
      name
      type
      path
    }
    frontmatter {
      title
      date
      relatedFunctions {
        type
        category
        slug
        title
      }
    }
  }
`;

const PostQuery = graphql`
  fragment Post on Mdx {
    id
    excerpt(pruneLength: 155)
    shortDescription: excerpt(pruneLength: 280)
    fields {
      name
      type
      path
    }
    frontmatter {
      title
      date
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

export type { MethodNode, Post };
export {
  MethodNodeQuery,
  PostPreviewQuery,
  PostQuery
};
