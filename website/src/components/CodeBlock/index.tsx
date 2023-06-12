/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import { Highlight } from 'prism-react-renderer';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { LuCopy, LuCopyCheck, LuCopyX } from 'react-icons/lu';
import tw, { styled, theme } from 'twin.macro';

import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import { containerVariant, defaultTransition } from '../../styles/animations';
import { IconButton } from '../Clickable';
import { Code, Overline } from '../Typography';

interface CodeProps {
  code: string;
  language?: string;
}

const CodeWrapper = styled(motion.div)(tw`overflow-scroll w-full`);
const CopyButton = styled(IconButton)<{ readonly?: boolean }>(({ readonly }) => [ tw`relative left-[98%] bottom-full`, readonly && tw`pointer-events-none` ]);

function CodeBlock({ code, language = 'ts' }: CodeProps) {
  const [ copied, setCopied ] = useState<boolean | 'blank'>('blank');
  const [ , setCopiedText ] = useCopyToClipboard();

  const handleCopy = () => setCopiedText(code).then((res) => {
    setCopied(res);

    if (res) toast(<Overline>Copied!</Overline>, { style: { background: theme`colors.green.500` } });
    else toast(<Overline>Clipboard unsupported</Overline>, { style: { background: theme`colors.red.400` } });

    setTimeout(() => setCopied('blank'), 4000);
  });

  return (
    <>
      <Toaster toastOptions={{ style: { boxShadow: theme`boxShadow.bar`, color: '#F1EBF3' }, position: 'bottom-right' }} />
      <CopyButton
        readonly={copied !== 'blank'}
        onClick={handleCopy}
      >
        {copied === 'blank' && <LuCopy />}
        {copied === true && <LuCopyCheck color={theme`colors.green.500`} />}
        {copied === false && <LuCopyX color={theme`colors.red.400`} />}
      </CopyButton>
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
                color: theme`colors.blue.400`,
              },
            },
            {
              types: [ 'deleted' ],
              style: {
                color: theme`colors.red.500`,
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
                color: theme`colors.cyan.300`,
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
                color: theme`colors.red.400`,
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
          <CodeWrapper
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            transition={defaultTransition}
          >
            {tokens.map((line, i) => (
              <motion.div
                key={i}
                variants={containerVariant}
                {...getLineProps({ line, key: i })}
              >
                {line.map((token, key) => (
                  <Code key={key} {...getTokenProps({ token, key })} />
                ))}
              </motion.div>
            ))}
          </CodeWrapper>
        )}
      </Highlight>
    </>
  );
}

export type { CodeProps };
export default CodeBlock;
