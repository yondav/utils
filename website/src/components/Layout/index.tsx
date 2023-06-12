import type { PageProps } from 'gatsby';
import type { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

// import BackToTop from '../backToTop';
// import SearchModal from '../search/SearchModal';

import { Styles } from '../../styles';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';
import { Nav, useNav } from '../Nav';

// import useSearchModal from './useSearchModal';

// import useSiteMetadata from '~/hooks/useSiteMetadata';

const Main = styled(Container).attrs({
  as: 'main',
  variant: 'column'
})(tw`min-h-[calc(100vh - 4rem)] h-full ml-auto pt-32 lg:(px-10 w-[calc(100% - 18rem)])`);

function Layout({ location, children }: { location:PageProps[ 'location' ]; children: ReactNode }) {
  const [ isSidebarOpen, { openSidebar, closeSidebar } ] = useNav();
  // const [ isModalOpen, { openModal, closeModal } ] = useSearchModal();

  return (
    <>
      <Header
        openSidebar={openSidebar}
        // openSidebar={openSidebar}
        // openSearch={openModal}
      />

      <Nav
        open={isSidebarOpen}
        onClose={closeSidebar}
        location={location}
      />

      <Main>
        {children}
      </Main>
      <Footer />

      {/* <SearchModal open={isModalOpen} onClose={closeModal} /> */}

      {/* <BackToTop /> */}
    </>
  );
}

function TopLayout({ children, ...rest }: { children: ReactNode }) {
  const { props: { location } } = rest as { props: PageProps };

  return (
    <>
      <Styles />
      <Layout location={location}>{children}</Layout>
    </>
  );
}

export default TopLayout;
