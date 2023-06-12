// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// gatsby-mdx-plugin is unable to read file with type declarations
import { graphql } from 'gatsby';

import { Post } from '../components/Template';

function PostTemplate(props) {
  const {
    data: {
      mdx: {
        body, frontmatter
      }
    },
  } = props;

  return (
    <Post
      title={frontmatter.title}
      description={frontmatter.description}
      relatedFunctions={frontmatter.relatedFunctions}
      body={body}
    />
  );
}

const pageQuery = graphql`
  query ($id: String!) {
      mdx(id: {eq: $id}) {
      ...ExportNode
    }
  }
`;

export { pageQuery };
export default PostTemplate;
