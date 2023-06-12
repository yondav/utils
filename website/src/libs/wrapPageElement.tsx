import type { WrapPageElementNodeArgs } from 'gatsby';
// import type { ReactNode } from 'react';

import TopLayout from '../components/Layout';

const wrapPageElement = ({ element, ...props }: WrapPageElementNodeArgs) => (
  <TopLayout {...props}>{element}</TopLayout>
);

export default wrapPageElement;
