import { graphql, useStaticQuery } from 'gatsby';

import type { MethodNode, Post } from '~/models';

interface GroupedMethodList {
  posts: { nodes: Omit<Post, 'body'>[] }
  methods: { nodes: MethodNode[] }
  demos: { nodes: MethodNode[] }
}

function useMethodList(): GroupedMethodList {
  const data = useStaticQuery<GroupedMethodList>(graphql`
    {
      posts: allMdx(filter: { fields: { type: { eq: "post" } } }) {
        nodes {
          ...PostPreview
        }
      }
      methods: allMdx(filter: { fields: { type: { eq: "method" } } }) {
        nodes {
          ...MethodNode
        }
      }
      demos: allMdx(filter: { fields: { type: { eq: "demo" } } }) {
        nodes {
          ...MethodNode
        }
      }
    }
  `);

  return data;
}

export type { GroupedMethodList };
export default useMethodList;
