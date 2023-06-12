import type { GatsbyNode } from 'gatsby';

const camelToKebabCase = (str: string): string => str
  .split('')
  .map(letter => (/[A-Z]/.test(letter) ? `-${letter.toLowerCase()}` : letter))
  .join('');

const onCreateNode: GatsbyNode['onCreateNode'] = args => {
  const { node, actions } = args;

  if (node.internal.type === 'Mdx') {
    const absolutePath = node.internal.contentFilePath as string;
    const pathChunks = absolutePath.split('/');
    const { 0: type, 1: category, 2: file } = pathChunks.slice(pathChunks.indexOf('generated') + 1);
    const filename = file.split('.')[0];
    const slug = camelToKebabCase(filename);
    const path = `/${type}/${category}/${slug}`;

    actions.createNodeField({
      node,
      name: 'category',
      value: category,
    });

    actions.createNodeField({
      node,
      name: 'name',
      value: filename,
    });

    actions.createNodeField({
      node,
      name: 'path',
      value: path,
    });

    actions.createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    actions.createNodeField({
      node,
      name: 'type',
      value: type,
    });
  }
};

export { onCreateNode };
