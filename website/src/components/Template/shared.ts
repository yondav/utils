import tw, { styled } from 'twin.macro';

import Container from '../Container';

const TemplateWrapper = styled(Container).attrs({
  variant: 'column'
})(tw`items-start gap-1 w-full lg:w-3/4`);

const TemplateHeader = styled.header(tw`w-full mb-8 flex flex-col gap-4`);

export { TemplateWrapper, TemplateHeader };
