import { Link } from 'gatsby';
import { VscLibrary } from 'react-icons/vsc';
import tw, { theme } from 'twin.macro';

import { useSiteMetadata } from '../../hooks';
import { A, H3 } from '../Typography';

export default function SiteTitle() {
  const { author, title } = useSiteMetadata();

  return (
    <H3 css={{ ...tw`flex items-center text-h3-md` }}>
      <A href="https://yondav.us" target="_blank" rel="noopener noreferrer" style={{ fontWeight: theme`fontWeight.black` }}>
        <span>@</span>
        {author}
      </A>
      <span>/</span>
      <A as={Link} to="/" color="inherit">
        {title}
      </A>
      <div style={{ marginBottom: 'auto', paddingLeft: theme`space.1`, color: theme`colors.red.300` }}>
        <VscLibrary size=".875rem" />
      </div>
    </H3>
  );
}
