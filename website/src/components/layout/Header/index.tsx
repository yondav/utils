import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import tw from 'twin.macro';

import { H3 } from '../../Typography';
import SiteTitle from '../SiteTitle';
import ThemeToggle from '../ThemeToggle';
import { BarContainer, IconButton } from '../styled';

interface HeaderProps {
  openSidebar: () => void
}

const HeaderContainer = styled(BarContainer).attrs({ as: 'header' })(tw`z-[1201] shadow-bar fixed w-full max-h-16`);

function Header({ openSidebar }: HeaderProps) {
  return (
    <HeaderContainer bg>
      <BarContainer css={{ ...tw`p-0 cursor-pointer` }}>
        <IconButton as={H3} css={{ ...tw`mr-4 lg:hidden` }} onClick={openSidebar}>
          <GiHamburgerMenu />
        </IconButton>
        <SiteTitle />
      </BarContainer>
      {/* <IconButton aria-label="Search">
        <RiSearchLine />
      </IconButton> */}
      <ThemeToggle />
    </HeaderContainer>
  );
}

export type { HeaderProps };
export default Header;
