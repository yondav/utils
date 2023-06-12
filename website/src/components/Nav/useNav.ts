import { useEffect, useState } from 'react';
import { theme } from 'twin.macro';

import { useMediaQuery } from '../../hooks';

type UseNavOutput = [
  boolean,
  {
    openSidebar: () => void;
    closeSidebar: () => void;
  },
]

export default function useNav(): UseNavOutput {
  const isMobile = useMediaQuery(`(max-width: ${theme`screens.lg`})`);
  const [ isOpen, setOpen ] = useState(false);

  const closeSidebar = () => {
    if (isMobile) {
      setOpen(false);
    }
  };

  const openSidebar = () => setOpen(true);

  useEffect(() => {
    // Hide sidebar by default on small screen
    if (isMobile && isOpen) {
      closeSidebar();
    }

    // Show sidebar by default on large screen
    if (!isMobile && !isOpen) {
      openSidebar();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isMobile ]);

  return [
    isOpen,
    {
      openSidebar,
      closeSidebar,
    },
  ];
}
