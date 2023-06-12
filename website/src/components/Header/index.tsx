import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import tw from 'twin.macro';

import { IconButton } from '../Clickable';
import Container from '../Container';
import SiteTitle from '../SiteTitle';
import { H3 } from '../Typography';

import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  openSidebar: () => void;
}

const HeaderContainer = styled(Container).attrs({
  as: 'header',
  variant: 'row'
})(tw`z-[1201] shadow-bar fixed w-full max-h-16 bg-bg`);

const TitleContainer = styled(Container).attrs({ variant: 'row' })(tw`p-0 cursor-pointer`);

function Header({ openSidebar }: HeaderProps) {
  return (
    <HeaderContainer>
      <TitleContainer>
        <IconButton as={H3} css={{ ...tw`mr-4 lg:hidden` }} onClick={openSidebar}>
          <GiHamburgerMenu />
        </IconButton>
        <SiteTitle variant="sm" />
      </TitleContainer>
      {/* <IconButton aria-label="Search">
        <RiSearchLine />
      </IconButton> */}
      <ThemeToggle />
    </HeaderContainer>
  );
}

export type { HeaderProps };
export default Header;
