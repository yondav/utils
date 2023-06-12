import type { PageProps } from 'gatsby';
import tw, { styled } from 'twin.macro';

import { useExportList } from '../../hooks';
import { filterExports } from '../../libs/filterExports';
import Container from '../Container';
import { H3 } from '../Typography';

import NavSection from './NavSection';

interface NavProps {
  location: PageProps[ 'location' ];
}

const NavContainer = styled(Container).attrs({
  as: 'nav',
  variant: 'column'
})(tw`justify-start items-start gap-5 h-full overflow-y-scroll`);

export default function Nav({ location }: NavProps) {
  const { string } = useExportList();
  const stringExports = filterExports('string', string);

  return (
    <NavContainer>
      <H3>Explore</H3>
      <NavSection
        location={location}
        exports={stringExports}
      />
    </NavContainer>
  );
}
