import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

import { containerVariant, defaultTransition } from '../../styles/animations';

interface ContainerProps {
  variant: 'row' | 'column' | 'grid';
}

const Container = styled(motion.div).attrs({
  variants: containerVariant,
  initial: 'hidden',
  whileInView: 'visible',
  transition: defaultTransition
})<ContainerProps>(({ variant = 'row' }) => [
  tw`p-5`,
  (variant === 'row' || variant === 'column') && tw`flex justify-between items-center`,
  variant === 'row' && tw`flex-row`,
  variant === 'column' && tw`flex-col`,
  variant === 'grid' && tw`grid grid-cols-12 gap-4`
]);

export default Container;
