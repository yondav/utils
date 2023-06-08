import type { GatsbyNode } from 'gatsby';

import createMethods from './createPages/createMethods';

export const createPages: GatsbyNode['createPages'] = async args => {
  await Promise.all([ createMethods(args) ]);
};
