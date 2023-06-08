import tw, { styled } from 'twin.macro';

import { H1 } from '../components/Typography';

const PostContainer = styled.div<{fullWidth?: boolean}>(({ fullWidth = false }) => [ tw`flex flex-col gap-5 w-full sm:w-4/5`, tw`sm:(max-w-3xl w-full)` ]);

const Function = {
  Declaration: styled(H1)(tw`text-blue-500`),
  CallSignature: styled.span(tw`text-yellow-500`)
};

export { Function, PostContainer };
