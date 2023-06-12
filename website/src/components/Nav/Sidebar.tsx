import type { PageProps } from 'gatsby';
import { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import tw, { styled, theme } from 'twin.macro';

import { useMediaQuery, useOnClickOutside } from '../../hooks';
import { IconButton } from '../Clickable';
import Container from '../Container';
import SiteTitle from '../SiteTitle';

import Nav from './Nav';

interface SidebarProps {
  location: PageProps[ 'location' ];
  open: boolean;
  onClose: () => void;
}

const Dimmer = styled.div(tw`fixed w-screen h-screen z-[1202] bg-bg brightness-50 opacity-60`);

const SidebarContainer = styled.div<Omit<SidebarProps, 'onClose' | 'location'>>(({ open }) => [ tw`lg:z-[1200] z-[1203] fixed top-0 gap-10 bg-bg shadow-bar h-full w-72 p-5 flex flex-col justify-between items-center -translate-x-full transition-all duration-200 ease-linear`, open && tw`translate-x-0` ]);

const SideBarHeader = styled(Container).attrs({
  as: 'header',
  variant: 'row'
})(tw`p-0 justify-start gap-4`);

const SideBarBackButton = styled(IconButton)(tw`text-h3-sm md:text-h3-md lg:text-h3-lg`);

export default function Sidebar({ location, open, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const isTablet = useMediaQuery(`(max-width: ${theme`screens.lg`})`);

  useOnClickOutside(sidebarRef, () => {
    if (isTablet) onClose();
  });

  return (
    <>
      {isTablet && open && <Dimmer />}
      <SidebarContainer
        open={open}
        ref={sidebarRef}
      >
        <SideBarHeader>
          {isTablet && (
          <SideBarBackButton onClick={onClose}>
            <IoIosArrowBack />
          </SideBarBackButton>
          )}
          <SiteTitle variant="sm" />
        </SideBarHeader>
        <Nav location={location} />
      </SidebarContainer>
    </>
  );
}
