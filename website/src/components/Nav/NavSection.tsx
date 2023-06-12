import type { PageProps } from 'gatsby';
import { Link } from 'gatsby';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';

import type { ExportCategories, ExportTypes, GroupedExportNodes } from '../../libs/filterExports';
import { A, Overline } from '../Typography';

interface NavSectionProps {
  location: PageProps[ 'location' ];
  exports: GroupedExportNodes<ExportTypes>;
}

const NavList = styled.ul(tw`flex flex-col gap-2.5 transition ease-linear duration-75`);

const NavItem = styled.li<{ hover?: boolean }>(({ hover = false }) => [ tw`font-mono p-1 cursor-pointer`, hover && tw`hover:(text-yellow-500 bg-neutral-100)` ]);

export default function NavSection({ location, exports }: NavSectionProps) {
  const { pathname } = location;
  const exportType = Object.keys(exports)[0] as keyof typeof exports;
  const exportCategories = Object.keys(
    exports[exportType]
  ) as ExportCategories[];

  // eslint-disable-next-line max-len
  const [ openCategory, setOpenCategory ] = useState<Nullable<ExportCategories>>(exportCategories.map(c => (pathname.includes(c) ? c : null))[0]);
  const [ openType, setOpenType ] = useState<boolean>(
    pathname.includes(exportType)
  );

  return (
    <NavList>
      <NavItem hover={!openType}>
        <Overline>
          <A
            hover="color"
            as={Link}
            to={`/${exportType}`}
            onClick={() => setOpenType(!openType)}
          >
            {exportType}
          </A>
        </Overline>
        <NavList css={openType ? { ...tw`h-auto mt-4 ml-2` } : { ...tw`h-0 overflow-hidden` }}>
          {exportCategories.map((category, i) => (
            <NavItem
              key={`${exportType}-${category}`}
              hover={!openCategory}
            >
              <Overline
                css={openCategory ? { ...tw`mb-4` } : {}}
                onClick={() => setOpenCategory(openCategory ? null : category)}
              >
                {category}
              </Overline>
              <NavList css={openCategory ? { ...tw`h-auto ml-2` } : { ...tw`h-0 overflow-hidden` }}>
                {exports[exportType][exportCategories[i]].map(ex => (
                  <NavItem
                    key={ex.id}
                    hover
                  >
                    <A
                      hover="color"
                      as={Link}
                      to={ex.fields.path}
                    >
                      {ex.fields.name}
                      ()
                    </A>
                  </NavItem>
                ))}
              </NavList>
            </NavItem>
          ))}
        </NavList>
      </NavItem>
    </NavList>
  );
}
