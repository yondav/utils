import { RiGithubFill, RiRssLine, RiNpmjsFill } from 'react-icons/ri';
import tw, { styled } from 'twin.macro';

import { useSiteMetadata } from '../../hooks';
import { IconButton } from '../Clickable';
import Container from '../Container';
import { A, Overline } from '../Typography';

const FooerContainer = styled(Container).attrs({
  as: 'footer',
  variant: 'row'
})(tw`lg:(ml-auto w-[calc(100% - 18rem)])`);

const Copyright = styled(Overline)(tw`mx-auto`);

const IconGroup = styled(Container).attrs({ variant: 'row' })(tw`gap-1 p-0 mt-auto`);

function Footer() {
  const { author } = useSiteMetadata();

  const copyright = `© Copyright ${new Date().getFullYear()} `;

  return (
    <FooerContainer>
      <Copyright>
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
      </Copyright>
      <IconGroup>
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
      </IconGroup>
    </FooerContainer>
  );
}

export default Footer;
