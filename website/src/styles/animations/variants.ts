import type { Variants } from 'framer-motion';

const containerVariant: Variants = {
  hidden: {
    opacity: 0,
    y: -5
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export { containerVariant };
