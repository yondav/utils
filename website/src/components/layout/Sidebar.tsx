import { Link } from 'gatsby';
import { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import tw, { styled, theme } from 'twin.macro';

import { useMethodList, useMediaQuery, useOnClickOutside } from '../../hooks';
import { filterMethod, sortPosts } from '../../libs/filterHooks';
import { H3 } from '../Typography';

import SiteTitle from './SiteTitle';
import { BarContainer, IconButton } from './styled';

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const SidebarContainer = styled.div<Omit<SidebarProps, 'onClose'>>(({ open }) => [ tw`lg:z-[1200] z-[1203] fixed top-0 flex flex-col gap-10 bg-bg shadow-bar h-full w-72 p-5 -translate-x-full transition-all duration-200 ease-linear`, open && tw`translate-x-0` ]);
const SidebarInnerContainer = styled.nav(tw`flex flex-col gap-5 h-full overflow-y-scroll`);
const SidebarNavList = styled.ul(tw`flex flex-col gap-2.5`);
const SidebarNavItem = styled.li(tw`font-mono p-1 cursor-pointer hover:(text-yellow-500 bg-neutral-100)`);
const Dimmer = styled.div(tw`fixed w-screen h-screen z-[1202] bg-bg brightness-50 opacity-60`);

function Sidebar({ open, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { posts, methods, demos } = useMethodList();

  const isTablet = useMediaQuery(`(max-width: ${theme`screens.lg`})`);

  const extendedPosts = filterMethod(posts.nodes, methods.nodes, demos.nodes);
  const sortedPosts = sortPosts(extendedPosts);

  useOnClickOutside(sidebarRef, () => {
    if (isTablet) onClose();
  });

  return (
    <>
      {isTablet && open && <Dimmer />}
      <SidebarContainer open={open} ref={sidebarRef}>
        <BarContainer css={{ ...tw`p-0 justify-start gap-4` }}>
          {isTablet && (
          <IconButton
            onClick={onClose}
            css={{ ...tw`text-h3-sm md:text-h3-md lg:text-h3-lg` }}
          >
            <IoIosArrowBack />
          </IconButton>
          )}
          <SiteTitle />
        </BarContainer>

        <SidebarInnerContainer>
          <H3>Explore</H3>
          <SidebarNavList>
            {sortedPosts.map(({ post: { frontmatter, fields } }) => (
              <SidebarNavItem
                key={fields.path}
                as={Link}
                to={`/method${fields.path}`}
              >

                {`${frontmatter.title}()`}

              </SidebarNavItem>
            ))}
          </SidebarNavList>
        </SidebarInnerContainer>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
