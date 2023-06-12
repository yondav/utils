/* eslint-disable react/no-unstable-nested-components */
import { Link } from 'gatsby';
import type { HTMLProps } from 'react';
import { Children } from 'react';
import type { Options } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import tw from 'twin.macro';

import CodeBlock from '../CodeBlock';
import {
  A, H1, H2, H3, Li, Overline, P, Pre, Ul
} from '../Typography';

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

export default function MDX({ children }: { children: string }) {
  const shortCodes: Options[ 'components' ] = {
    h1: props => <H1 css={{ ...tw`my-4` }} {...props}>{props.children}</H1>,
    h2: props => <H2 css={{ ...tw`my-4` }} {...props}>{props.children}</H2>,
    h3: props => <H3 css={{ ...tw`my-4` }} {...props}>{props.children}</H3>,
    h4: props => <Overline css={{ ...tw`mt-4 mb-1` }} {...props}>{props.children}</Overline>,
    p: props => <P {...props} css={{ ...tw`mb-6` }}>{props.children}</P>,
    a: props => (props.href?.startsWith('/')
      ? <A as={Link} to={props.href} hover="color">{props.children}</A>
      : <A {...props} hover="color">{props.children}</A>),
    pre: props => <Pre {...props} css={{ ...tw`mb-8` }}>{props.children}</Pre>,
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
