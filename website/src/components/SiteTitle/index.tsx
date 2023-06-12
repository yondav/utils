import { Link } from 'gatsby';
import { VscLibrary } from 'react-icons/vsc';
import tw, { styled, theme } from 'twin.macro';

import { useSiteMetadata } from '../../hooks';
import { A, H1 } from '../Typography';

interface SiteTitleProps {
  variant: 'sm' | 'lg';
}

const SiteTitleWrapper = styled(H1)<SiteTitleProps>(({ variant }) => [ tw`flex items-center`, variant === 'sm' && tw`text-h3-md md:text-h3-md lg:text-h3-md` ]);

export default function SiteTitle({ variant }: SiteTitleProps) {
  const { author, title } = useSiteMetadata();

  return (
    <SiteTitleWrapper variant={variant}>
      <A href="https://yondav.us" target="_blank" rel="noopener noreferrer" style={{ fontWeight: theme`fontWeight.black` }}>
        <span>@</span>
        {author}
      </A>
      <span>/</span>
      <A as={Link} to="/" color="inherit">
        {title}
      </A>
      <div style={{ marginBottom: 'auto', paddingLeft: theme`space.1`, color: theme`colors.red.500` }}>
        <VscLibrary size={variant === 'sm' ? '.875rem' : '1.8rem'} />
      </div>
    </SiteTitleWrapper>
  );
}
