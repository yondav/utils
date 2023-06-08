// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// gatsby-mdx-plugin is unable to read file with type declarations
import { Link, graphql } from 'gatsby';

import {
  H3, Li, Overline, Ul
} from '../components/Typography';
import MdxRenderer from '../components/mdxRenderer';
// import SEO from '../components/seo';

import { Function, PostContainer } from './styled';
// import type { Post } from '../models';

// interface PostTemplateProps {
//   data: {
//     post: Post
//     method?: {
//       body: string
//     }
//     demo?: {
//       body: string
//     }
//   }
// }

// function Head({ data }) {
//   return (
//     <SEO
//       title={`${data.post.frontmatter.title}() react hook - usehooks-ts`}
//       description={data.post.excerpt}
//     />
//   );
// }

function SubSection({ title, body }) {
  if (!body) return null;
  return (
    <PostContainer fullWidth>
      <H3>
        {title}
      </H3>
      <MdxRenderer>{body}</MdxRenderer>
    </PostContainer>
  );
}

function PostTemplate(props) {
  const { data: { post, method, demo } } = props;
  const { body, frontmatter } = post;

  return (
    <PostContainer as="article">
      <header>
        <Function.Declaration>
          {frontmatter.title}
          <Function.CallSignature>
            ()
          </Function.CallSignature>
        </Function.Declaration>
      </header>
      <div>
        <MdxRenderer>{body}</MdxRenderer>
        <Overline>Related Functions</Overline>
        <Ul>
          {frontmatter.relatedFunctions.map((func, i) => (
            <Li key={i}>
              <Link to={`/${func.category}/${func.slug}`}>{func.title}</Link>
            </Li>
          ))}
        </Ul>
      </div>

      <SubSection title="The Method" body={method?.body} />
      <SubSection title="Usage" body={demo?.body} />
    </PostContainer>
  );
}
const pageQuery = graphql`
  query ($id: String!, $methodId: String!, $demoId: String!) {
    post: mdx(id: { eq: $id }) {
      ...Post
    }
    method: mdx(id: { eq: $methodId }) {
      body
    }
    demo: mdx(id: { eq: $demoId }) {
      body
    }
  }
`;

// export type { PostTemplateProps };
export { pageQuery };
export default PostTemplate;
