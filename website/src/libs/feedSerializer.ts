import type { SiteMetadata } from '../hooks/useSiteMetadata';
import type { Nodes, ExportNode } from '../models';

interface SerializeProps {
  query: {
    posts: Nodes<Omit<ExportNode, 'body'>>;
  };
}

const query = `{
  posts: allMdx(
    sort: { order: DESC, fields: [frontmatter___date] },
    limit: 1000,
    filter: { fields: { type: { eq: "post" } } }
  ) {
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
}`;

const serializer = ({
  siteMetadata,
  // eslint-disable-next-line @typescript-eslint/no-shadow
  query,
}: {
  siteMetadata: SiteMetadata;
  query: { posts: Nodes<Omit<ExportNode, 'body'>> };
}) => query.posts.nodes.map(({ frontmatter, fields }) => {
  const { title, date } = frontmatter;
  const url = `${siteMetadata.siteUrl}/method${fields.path}`;
  return {
    title: `${title}`,
    description: frontmatter.description || '',
    author: siteMetadata.author,
    date,
    url,
    guid: url,
  };
});

export type { SerializeProps };
export { query, serializer };
