import { RiGithubFill, RiRssLine, RiNpmjsFill } from 'react-icons/ri';
import tw, { styled } from 'twin.macro';

import { useSiteMetadata } from '../../../hooks';
import { A, Overline } from '../../Typography';
import { BarContainer, IconButton, LinkContainer } from '../styled';

const FooerContainer = styled(BarContainer).attrs({ as: 'footer' })(tw`lg:(ml-auto w-[calc(100% - 18rem)])`);

function Footer() {
  const { author } = useSiteMetadata();

  const copyright = `© Copyright ${new Date().getFullYear()} `;

  return (
    <FooerContainer>
      <Overline css={{ ...tw`mx-auto` }}>
        {copyright}
        <A
          inherit
          hover="underline"
          href={`http://github.com/${author}`}
          target="_blank"
          rel="noreferrer"
        >
          {author}
        </A>
      </Overline>
      <LinkContainer>
        <IconButton
          aria-label="npm"
          as="a"
          href="https://www.npmjs.com/package/" // TODO: link to npm package
          target="_blank"
          rel="noreferrer"
        >
          <RiNpmjsFill size="1.5rem" />
        </IconButton>
        <IconButton
          aria-label="Github"
          as="a"
          href={`https://github.com/${author}/`} // TODO: link to repo
          target="_blank"
          rel="noreferrer"
        >
          <RiGithubFill size="1.5rem" />
        </IconButton>
        <IconButton
          aria-label="RSS"
          as="a"
          href="/rss.xml"
          target="_blank"
          rel="noreferrer"
        >
          <RiRssLine size="1.5rem" />
        </IconButton>
      </LinkContainer>
    </FooerContainer>
  );
}

export default Footer;
