import type { GatsbyNode } from 'gatsby';

import createFunctionPages from './createPages/createFunctionPages';
import createTypePages from './createPages/createTypePages';

export const createPages: GatsbyNode['createPages'] = async args => {
  // await Promise.all([ createFunctionPages(args) ]);
  await createFunctionPages(args);
  await createTypePages(args);
};
