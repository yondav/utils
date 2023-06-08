import { Link } from 'gatsby';
import type { ReactNode } from 'react';
import { VscLibrary } from 'react-icons/vsc';
import tw, { styled, theme } from 'twin.macro';

import { A, H1, P } from './Typography';

interface HeroProps {
  author: string;
  title: string
  description?: string
  children?: ReactNode
}

const HeroContainer = styled.div(tw`flex flex-col justify-center items-center gap-5 h-full w-full mt-40`);

function Hero({
  author, title, description = '', children
}: HeroProps) {
  return (
    <HeroContainer>
      <H1 css={{ ...tw`flex items-center` }}>
        <A href="https://yondav.us" target="_blank" rel="noopener noreferrer" style={{ fontWeight: theme`fontWeight.black` }}>
          <span>@</span>
          {author}
        </A>
        <span>/</span>
        <A as={Link} to="/" color="inherit">
          {title}
        </A>
        <div style={{ marginBottom: 'auto', paddingLeft: theme`space.1`, color: theme`colors.red.300` }}>
          <VscLibrary size="1.8rem" />
        </div>
      </H1>
      <P>
        {description}
      </P>
      {children}
    </HeroContainer>
  );
}

export type { HeroProps };
export default Hero;
