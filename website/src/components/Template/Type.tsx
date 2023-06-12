import { Link } from 'gatsby';
import tw, { styled } from 'twin.macro';

import type { ExportTypes, GroupedExportNodes } from '../../libs/filterExports';
import {
  A, H1, H3, Li, Overline, Ul
} from '../Typography';

import { TemplateWrapper, TemplateHeader } from './shared';

interface TypeProps {
  title: string;
  description: string;
  exports: GroupedExportNodes<ExportTypes>;
}

const Title = styled(H1)(tw`w-full text-green-500`);

export default function Type({ title, description, exports }: TypeProps) {
  return (
    <TemplateWrapper>
      <TemplateHeader>
        <Title>{title}</Title>
        <Overline>{description}</Overline>
      </TemplateHeader>
      {Object.entries(exports.string).map(([ k, v ]) => (
        <div key={k} id={`#${k}`}>
          <H3>{k.split('').map((char, i) => (i === 0 ? char.toUpperCase() : char.toLowerCase())).join('')}</H3>
          <Ul css={{ ...tw`grid grid-cols-12 gap-4 w-full p-4 mx-0` }}>
            {v.map(({ id, fields, frontmatter }) => (
              <Li key={id} css={{ ...tw`col-span-12 sm:col-span-6 md:col-span-4 w-fit` }}>
                <A
                  hover="color"
                  as={Link}
                  to={fields.path}
                  title={frontmatter.description}
                >
                  {fields.name}
                  ()
                </A>
              </Li>
            ))}
          </Ul>
        </div>
      ))}
    </TemplateWrapper>
  );
}
