import type { ReactNode } from 'react';
import tw from 'twin.macro';

import { Styles } from '../../styles';
// import BackToTop from '../backToTop';
// import SearchModal from '../search/SearchModal';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
// import useSearchModal from './useSearchModal';
import useSidebar from './useSidebar';

// import useSiteMetadata from '~/hooks/useSiteMetadata';

function Layout({ children }: { children: ReactNode}) {
  const [ isSidebarOpen, { openSidebar, closeSidebar } ] = useSidebar();
  // const [ isModalOpen, { openModal, closeModal } ] = useSearchModal();

  return (
    <div>
      {/* <CustomScrollbar theme={theme} /> */}
      <Header
        openSidebar={openSidebar}
        // openSidebar={openSidebar}
        // openSearch={openModal}
      />

      <Sidebar open={isSidebarOpen} onClose={closeSidebar} />

      <main css={{ ...tw`min-h-[calc(100vh - 4rem)] h-full flex flex-col justify-between items-center ml-auto pt-32 p-5 lg:(px-10 w-[calc(100% - 18rem)])` }}>
        {children}
      </main>
      <Footer />

      {/* <SearchModal open={isModalOpen} onClose={closeModal} /> */}

      {/* <BackToTop /> */}
    </div>
  );
}

function TopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Styles />
      <Layout>{children}</Layout>
    </>
  );
}

export default TopLayout;

// function CustomScrollbar({ theme }: { theme: Theme }) {
//   return (
//     <GlobalStyles
//       styles={css`
//       *::-webkit-scrollbar {
//         width: ${theme.spacing(1.5)};
//         border-radius: ${theme.shape.borderRadius}px;
//       }
//       *::-webkit-scrollbar-track {
//         background: ${theme.palette.background.default};
//       }

//       *::-webkit-scrollbar-thumb {
//         background: ${theme.palette.divider};
//         border-radius: ${theme.shape.borderRadius}px;

//         border: 3px solid ${theme.palette.background.default};
//       }

//       *::-webkit-scrollbar-thumb:hover {
//         background: ${theme.palette.divider};
//       }
//     `}
//     />
//   );
// }
