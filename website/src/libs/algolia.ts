import type { MethodNode, Nodes, Post } from '../models';

const query = `
  {
    posts: allMdx(limit: 1000, filter: {fields: {type: {eq: "post"}}}) {
      nodes {
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
        }
      }
    }
    methods: allMdx(limit: 1000, filter: {fields: {type: {eq: "method"}}}) {
      nodes {
        id
        fields {
          name
        }
      }
    }
    demos: allMdx(limit: 1000, filter: {fields: {type: {eq: "demo"}}}) {
      nodes {
        id
        fields {
          name
        }
      }
    }
  }
`;

interface Data {
  posts: Nodes<Omit<Post, 'body'>>
  methods: Nodes<Omit<MethodNode, 'path'>>
  demos: Nodes<Omit<MethodNode, 'path'>>
}

const transformer = ({ data }: { data: Data }) => {
  const matchesPosts: Omit<Post, 'body'>[] = [];
  data.posts.nodes.forEach(post => {
    const { fields } = post;

    // Check if have the corresponding hook
    const method = data.methods.nodes.find(
      ({ fields: { name } }) => name === fields.name,
    );

    // Check if have the corresponding hook demo
    const demo = data.demos.nodes.find(
      ({ fields: { name } }) => name === fields.name,
    );

    if (method && demo) {
      matchesPosts.push(post);
    }
  });

  return matchesPosts.map(({ frontmatter, excerpt, fields }) => {
    const id = fields.path.split('/')[1];
    return {
      objectID: id,
      id,
      path: `/method${fields.path}`,
      title: frontmatter.title,
      // Allow querying by title without the "use" prefix
      titleWithoutUse: frontmatter.title.slice(3),
      excerpt,
    };
  });
};

export const queries = [
  {
    query,
    transformer,
    indexName: 'Posts',
  },
];
