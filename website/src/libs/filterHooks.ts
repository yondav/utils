import type { MethodNode } from '../models';

interface ExtendedPost<T extends MethodNode = MethodNode> {
  post: T
  methodId: string
  demoId: string
}

// Attach a hook and a demo to a post and ignore alone items
function filterMethod<T extends MethodNode = MethodNode>(
  posts: T[],
  methods: MethodNode[],
  demos: MethodNode[],
): ExtendedPost<T>[] {
  const matchesPosts: ExtendedPost<T>[] = [];

  console.log({ matchesPosts });
  posts.forEach(post => {
    // Check if have the corresponding hook and demo
    const method = methods.find(
      ({ fields }) => fields.name === post.fields.name);
    const demo = demos.find(({ fields }) => fields.name === post.fields.name);

    if (method && demo) {
      const extendedPost = { post, methodId: method.id, demoId: demo.id };
      matchesPosts.push(extendedPost);
    }
  });

  return matchesPosts;
}

// Sort alphabetically
function sortPosts<T extends MethodNode = MethodNode>(
  posts: ExtendedPost<T>[],
): ExtendedPost<T>[] {
  return posts.sort((a, b) => {
    if (a.post.fields.name < b.post.fields.name) return -1;
    if (a.post.fields.name > b.post.fields.name) return 1;
    return 0;
  });
}

export type { ExtendedPost };
export { filterMethod, sortPosts };
