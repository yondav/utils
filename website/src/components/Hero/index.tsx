import type { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import SiteTitle from '../SiteTitle';
import { P } from '../Typography';

interface HeroProps {
  description?: string;
  children?: ReactNode;
}

const HeroContainer = styled.div(tw`flex flex-col justify-center items-center gap-5 h-full w-full mt-40`);

function Hero({ description = '', children }: HeroProps) {
  return (
    <HeroContainer>
      <SiteTitle variant="lg" />
      <P>
        {description}
      </P>
      {children}
    </HeroContainer>
  );
}

export type { HeroProps };
export default Hero;
