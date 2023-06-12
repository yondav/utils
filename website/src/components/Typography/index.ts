import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

import { containerVariant, defaultTransition } from '../../styles/animations';

const animation = {
  variants: containerVariant,
  initial: 'hidden',
  animate: 'visible',
  transition: { ...defaultTransition, ease: 'easeInOut', duration: 0.5 }
};

const H1 = styled(motion.h1).attrs(animation)(tw`font-mono font-base text-h1-sm md:text-h1-md lg:text-h1-lg`);
const H2 = styled(motion.h2).attrs(animation)(tw`font-mono font-base text-h2-sm md:text-h2-md lg:text-h2-lg`);
const H3 = styled(motion.h3).attrs(animation)(tw`font-body font-black text-h3-sm md:text-h3-md lg:text-h3-lg`);
const P = styled(motion.p).attrs(animation)(tw`font-body font-base text-p-sm md:text-p-md lg:text-p-lg`);
const Overline = styled(motion.p).attrs(animation)(tw`uppercase font-body font-semibold text-o-sm md:text-o-md lg:text-o-lg`);
const Helper = styled(motion.p).attrs(animation)(tw`italic font-body font-light text-helper`);
const Code = styled(motion.code).attrs(animation)(tw`font-mono font-semibold text-code-sm md:text-code-md`);
const A = styled(motion.a).attrs(animation)<{ inherit?: boolean; hover?: 'underline' | 'color' }>(({ inherit = true, hover = undefined }) => [
  tw`transition`,
  inherit ? tw`text-inherit` : tw`text-magenta-500`,
  hover === 'underline' && tw`hover:underline`,
  hover === 'color' && tw`hover:(text-yellow-500)`,
]);
const Ul = styled(motion.ul).attrs(animation)(tw`p-0 m-5 border-l border-magenta-300 w-fit`);
const Li = styled(motion.li).attrs(animation)`${tw`px-5 py-1 my-1 w-full hover:(bg-neutral-100)`}
&a {
  ${tw`w-full h-full`}
}`;
const Pre = styled(motion.pre).attrs(animation)(tw`relative bg-bg p-5 rounded-lg shadow-bar w-full`);

export {
  H1,
  H2,
  H3,
  P,
  Overline,
  Helper,
  Code,
  A,
  Ul,
  Li,
  Pre
};
