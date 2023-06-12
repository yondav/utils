import { Link } from 'gatsby';
import tw, { styled } from 'twin.macro';

import MDX from '../MDX';
import {
  A, H1, H3, Li, Overline, Ul
} from '../Typography';

import { TemplateHeader, TemplateWrapper } from './shared';

interface PostProps {
  title: string;
  description: string;
  relatedFunctions: {
    type: string;
    category: string;
    slug: string;
    title: string;
  }[];
  body: string;
}

const Declaration = styled(H1)(tw`w-full text-blue-400`);

const CallSignature = styled.span(tw`w-full text-yellow-500`);

const RelatedContainer = styled.aside(tw`w-full mb-8`);

export default function Post({
  title,
  description,
  relatedFunctions,
  body
}: PostProps) {
  return (
    <TemplateWrapper as="article">
      <TemplateHeader>
        <Declaration>
          {title}
          <CallSignature>
            ()
          </CallSignature>
        </Declaration>
        <Overline>{description}</Overline>
      </TemplateHeader>
      <RelatedContainer>
        <H3 css={{ ...tw`my-4` }}>Related Functions</H3>
        <Ul>
          {relatedFunctions.map(func => (
            <Li key={`${func.type}-${func.category}-${func.slug}`}>
              <A
                hover="color"
                as={Link}
                to={`/${func.type}/${func.category}/${func.slug}`}
              >
                {func.title}

              </A>
            </Li>
          ))}
        </Ul>
      </RelatedContainer>
      <MDX>{body}</MDX>
    </TemplateWrapper>
  );
}
