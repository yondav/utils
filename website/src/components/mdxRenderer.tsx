/* eslint-disable react/no-unstable-nested-components */
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import type { HTMLProps } from 'react';
import { Children, ReactNode } from 'react';
import { useEffect } from 'react';
import type { Options } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import tw from 'twin.macro';

import CodeBlock from './CodeBlock';
import {
  A, H1, H2, H3, Li, Overline, P, Pre, Ul
} from './Typography';
// import { Children, Fragment } from 'react';
// import type { HTMLProps } from 'react';

// import Code from './code';

const childrenToString = (
  children: HTMLProps<HTMLElement>['children'],
): string => {
  let label = '';

  Children.map(children, child => {
    if (typeof child === 'string') {
      label += child;
    }
  });

  return label;
};

export default function MdxRenderer({ children }: { children: string }) {
  const shortCodes: Options[ 'components' ] = {
    h1: props => <H1 css={{ ...tw`my-4` }} {...props}>{props.children}</H1>,
    h2: props => <H2 css={{ ...tw`my-4` }} {...props}>{props.children}</H2>,
    h3: props => <H3 css={{ ...tw`my-4` }} {...props}>{props.children}</H3>,
    h4: props => <Overline css={{ ...tw`mt-4 mb-1` }} {...props}>{props.children}</Overline>,
    p: props => <P {...props} css={{ ...tw`mb-6` }}>{props.children}</P>,
    a: props => (props.href?.startsWith('/')
      ? <A as={Link} to={props.href} hover="color">{props.children}</A>
      : <A {...props} hover="color">{props.children}</A>),
    // pre: props => <Pre {...props}>{props.children}</Pre>,
    code: props => <CodeBlock {...props} language="ts" code={childrenToString(props.children)} />,
    ul: props => <Ul {...props}>{props.children}</Ul>,
    li: props => <Li {...props}>{props.children}</Li>
  };

  return (
    <ReactMarkdown components={shortCodes}>
      {childrenToString(children)}
    </ReactMarkdown>
  );
}

// {
// Typography
//   h1: (props) => <H1>{props.children}</H1>,
//   h2: (props) => <H2>{props.children}</H2>,
//   h3: (props) => <H3>{props.children}</H3>,
//   a: (props) => <A>{props.children}</A>,
//   p: (props) => <P>{props.children}</P>,
//   blockquote: props => (
//     <blockquote {...props} />
//   ),

//   // Code
//   pre: props => <Fragment {...props} />,
//   code: props => (
//     <code {...props} />
//   ),
//   inlineCode: props => (
//     <code {...props} />
//   ),

//   // Lists
//   li: props => <li {...props} />,

//   // Tables
//   table: props => (
//     <div>
//       <table {...props} />
//     </div>
//   ),
//   tr: props => <tr {...props} />,
//   td: props => <td {...props} align="left" />,
//   th: props => <th {...props} align="left" />,

//   // Mixins
//   hr: () => <hr />,
//   thematicBreak: () => <hr />,
// }
//
