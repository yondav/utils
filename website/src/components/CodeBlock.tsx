/* eslint-disable react/no-array-index-key */
import { Highlight } from 'prism-react-renderer';
import tw, { theme } from 'twin.macro';

import { Code, Pre } from './Typography';

interface CodeProps {
  code: string
  language?: string
}

function CodeBlock({ code, language = 'ts' }: CodeProps) {
  return (
    <Highlight
      code={code.trim()}
      theme={{
        plain: {
          color: theme`colors.neutral.800`,
          backgroundColor: '#282A36',
        },
        styles: [
          {
            types: [
              'prolog',
              'constant',
              'builtin'
            ],
            style: {
              color: theme`colors.green.500`,
            },
          },
          {
            types: [ 'inserted', 'function' ],
            style: {
              color: theme`colors.blue.500`,
            },
          },
          {
            types: [ 'deleted' ],
            style: {
              color: theme`colors.red.300`,
            },
          },
          {
            types: [ 'changed' ],
            style: {
              color: 'rgb(255, 184, 108)',
            },
          },
          {
            types: [ 'operator', 'regex' ],
            style: {
              color: theme`colors.cyan.500`,
            },
          },
          {
            types: [ 'punctuation', 'symbol' ],
            style: {
              color: theme`colors.yellow.500`,
            },
          },
          {
            types: [
              'string',
              'char',
              'tag',
              'selector'
            ],
            style: {
              color: theme`colors.magenta.100`,
            },
          },
          {
            types: [ 'keyword', 'variable' ],
            style: {
              color: theme`colors.red.200`,
              fontStyle: 'normal',
            },
          },
          {
            types: [ 'comment' ],
            style: {
              color: theme`colors.neutral.500`,
            },
          },
          {
            types: [ 'attr-name' ],
            style: {
              color: theme`colors.yellow.500`,
            },
          },
        ],
      }}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <Pre css={{ ...tw`overflow-scroll w-full` }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <Code key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
}

export type { CodeProps };
export default CodeBlock;
