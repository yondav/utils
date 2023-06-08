import tw, { styled } from 'twin.macro';

const BarContainer = styled.div<{ bg?: boolean }>(({ bg }) => ([ tw`flex justify-between items-center p-5`, bg && tw`bg-bg` ]));

const IconButton = styled.button.attrs({ type: 'button' })(tw`text-neutral-800 hover:text-fg transition`);

const LinkContainer = styled.div(tw`flex items-center gap-1 mt-auto`);

export { BarContainer, IconButton, LinkContainer };
