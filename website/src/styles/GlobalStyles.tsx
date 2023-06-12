import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';

import { FONT, LIGHTPALETTE, DARKPALETTE } from './theme';

const CustomStyles = createGlobalStyle({
  ':root': {
    /// ////////////////////////////////////////////////////////////
    /// ///////////////////////// FONTS ////////////////////////////
    /// ////////////////////////////////////////////////////////////

    // font families
    '--ff-header': FONT.FAMILY.header,
    '--ff-body': FONT.FAMILY.body,
    '--ff-mono': FONT.FAMILY.mono,

    // font sizes
    '--fs-xs': FONT.SIZE.xs,
    '--fs-sm': FONT.SIZE.sm,
    '--fs-base': FONT.SIZE.base,
    '--fs-lg': FONT.SIZE.lg,
    '--fs-xl': FONT.SIZE.xl,
    '--fs-2xl': FONT.SIZE.xxl,
    '--fs-3xl': FONT.SIZE.xxxl,
    '--fs-4xl': FONT.SIZE.xxxxl,
    '--fs-5xl': FONT.SIZE.xxxxxl,

    // font weights
    '--fw-light': FONT.WEIGHT.light,
    '--fw-base': FONT.WEIGHT.base,
    '--fw-semibold': FONT.WEIGHT.semibold,
    '--fw-bold': FONT.WEIGHT.bold,
    '--fw-black': FONT.WEIGHT.black,

    // line heights
    '--lh-sm': FONT.HEIGHT.sm,
    '--lh-lg': FONT.HEIGHT.lg,

    // letter spacing
    '--ls-none': FONT.SPACING.none,
    '--ls-sm': FONT.SPACING.sm,
    '--ls-lg': FONT.SPACING.lg,

    /// ////////////////////////////////////////////////////////////
    /// //////////////////////// COLORS ////////////////////////////
    /// ////////////////////////////////////////////////////////////

    // neutral palette
    '--neutral-100': LIGHTPALETTE.NEUTRAL.n100,
    '--neutral-200': LIGHTPALETTE.NEUTRAL.n200,
    '--neutral-300': LIGHTPALETTE.NEUTRAL.n300,
    '--neutral-400': LIGHTPALETTE.NEUTRAL.n400,
    '--neutral-500': LIGHTPALETTE.NEUTRAL.n500,
    '--neutral-600': LIGHTPALETTE.NEUTRAL.n600,
    '--neutral-700': LIGHTPALETTE.NEUTRAL.n700,
    '--neutral-800': LIGHTPALETTE.NEUTRAL.n800,
    '--neutral-900': LIGHTPALETTE.NEUTRAL.n900,
    '--bg': LIGHTPALETTE.NEUTRAL.bg,
    '--fg': LIGHTPALETTE.NEUTRAL.fg,

    // blue palette
    '--blue-100': LIGHTPALETTE.BLUE.b100,
    '--blue-200': LIGHTPALETTE.BLUE.b200,
    '--blue-300': LIGHTPALETTE.BLUE.b300,
    '--blue-400': LIGHTPALETTE.BLUE.b400,
    '--blue-500': LIGHTPALETTE.BLUE.b500,

    // cyan palette
    '--cyan-100': LIGHTPALETTE.CYAN.c100,
    '--cyan-200': LIGHTPALETTE.CYAN.c200,
    '--cyan-300': LIGHTPALETTE.CYAN.c300,
    '--cyan-400': LIGHTPALETTE.CYAN.c400,
    '--cyan-500': LIGHTPALETTE.CYAN.c500,

    // green palette
    '--green-100': LIGHTPALETTE.GREEN.g100,
    '--green-200': LIGHTPALETTE.GREEN.g200,
    '--green-300': LIGHTPALETTE.GREEN.g300,
    '--green-400': LIGHTPALETTE.GREEN.g400,
    '--green-500': LIGHTPALETTE.GREEN.g500,

    // magenta palette
    '--magenta-100': LIGHTPALETTE.MAGENTA.m100,
    '--magenta-200': LIGHTPALETTE.MAGENTA.m200,
    '--magenta-300': LIGHTPALETTE.MAGENTA.m300,
    '--magenta-400': LIGHTPALETTE.MAGENTA.m400,
    '--magenta-500': LIGHTPALETTE.MAGENTA.m500,

    // yellow palette
    '--yellow-100': LIGHTPALETTE.YELLOW.y100,
    '--yellow-200': LIGHTPALETTE.YELLOW.y200,
    '--yellow-300': LIGHTPALETTE.YELLOW.y300,
    '--yellow-400': LIGHTPALETTE.YELLOW.y400,
    '--yellow-500': LIGHTPALETTE.YELLOW.y500,

    // red palette
    '--red-100': LIGHTPALETTE.RED.r100,
    '--red-200': LIGHTPALETTE.RED.r200,
    '--red-300': LIGHTPALETTE.RED.r300,
    '--red-400': LIGHTPALETTE.RED.r400,
    '--red-500': LIGHTPALETTE.RED.r500,

    // shadow palette
    '--shadow-100': LIGHTPALETTE.NEUTRAL.shadow,

    // gradient palette
    '--gr-primary': LIGHTPALETTE.GRADIENT.primary,
    '--gr-secondary': LIGHTPALETTE.GRADIENT.secondary,
  },

  /// ////////////////////////////////////////////////////////////
  /// /////////////////////// DARK MODE //////////////////////////
  /// ////////////////////////////////////////////////////////////

  '.dark': {
    // neutral palette
    '--neutral-100': DARKPALETTE.NEUTRAL.n100,
    '--neutral-200': DARKPALETTE.NEUTRAL.n200,
    '--neutral-300': DARKPALETTE.NEUTRAL.n300,
    '--neutral-400': DARKPALETTE.NEUTRAL.n400,
    '--neutral-500': DARKPALETTE.NEUTRAL.n500,
    '--neutral-600': DARKPALETTE.NEUTRAL.n600,
    '--neutral-700': DARKPALETTE.NEUTRAL.n700,
    '--neutral-800': DARKPALETTE.NEUTRAL.n800,
    '--neutral-900': DARKPALETTE.NEUTRAL.n900,
    '--bg': DARKPALETTE.NEUTRAL.bg,
    '--fg': DARKPALETTE.NEUTRAL.fg,

    // blue palette
    '--blue-100': DARKPALETTE.BLUE.b100,
    '--blue-200': DARKPALETTE.BLUE.b200,
    '--blue-300': DARKPALETTE.BLUE.b300,
    '--blue-400': DARKPALETTE.BLUE.b400,
    '--blue-500': DARKPALETTE.BLUE.b500,

    // cyan palette
    '--cyan-100': DARKPALETTE.CYAN.c100,
    '--cyan-200': DARKPALETTE.CYAN.c200,
    '--cyan-300': DARKPALETTE.CYAN.c300,
    '--cyan-400': DARKPALETTE.CYAN.c400,
    '--cyan-500': DARKPALETTE.CYAN.c500,

    // green palette
    '--green-100': DARKPALETTE.GREEN.g100,
    '--green-200': DARKPALETTE.GREEN.g200,
    '--green-300': DARKPALETTE.GREEN.g300,
    '--green-400': DARKPALETTE.GREEN.g400,
    '--green-500': DARKPALETTE.GREEN.g500,

    // magenta palette
    '--magenta-100': DARKPALETTE.MAGENTA.m100,
    '--magenta-200': DARKPALETTE.MAGENTA.m200,
    '--magenta-300': DARKPALETTE.MAGENTA.m300,
    '--magenta-400': DARKPALETTE.MAGENTA.m400,
    '--magenta-500': DARKPALETTE.MAGENTA.m500,

    // yellow palette
    '--yellow-100': DARKPALETTE.YELLOW.y100,
    '--yellow-200': DARKPALETTE.YELLOW.y200,
    '--yellow-300': DARKPALETTE.YELLOW.y300,
    '--yellow-400': DARKPALETTE.YELLOW.y400,
    '--yellow-500': DARKPALETTE.YELLOW.y500,

    // red palette
    '--red-100': DARKPALETTE.RED.r100,
    '--red-200': DARKPALETTE.RED.r200,
    '--red-300': DARKPALETTE.RED.r300,
    '--red-400': DARKPALETTE.RED.r400,
    '--red-500': DARKPALETTE.RED.r500,

    // shadow palette
    '--shadow-100': DARKPALETTE.NEUTRAL.shadow,

    // gradient palette
    '--gr-primary': DARKPALETTE.GRADIENT.primary,
    '--gr-secondary': DARKPALETTE.GRADIENT.secondary,
  },

  html: {
    minWidth: '350px',
    scrollBehavior: 'smooth',
    '--scroll-behavior': 'smooth',
    scrollPaddingTop: theme`space.16`
  },

  body: {
    ...tw`antialiased font-body bg-bg text-fg bg-cover bg-no-repeat min-h-screen`,
    backgroundColor: theme`colors.bg`,
    backgroundImage: `radial-gradient(at 80% 20%, ${theme`colors.gradient.secondary`} 0px, transparent 35%), radial-gradient(at 80% 100%, ${theme`colors.gradient.primary`} 0px, transparent 60%)`,
  },

  '.keyword': { fontWeight: `${theme`fontWeight.bold`} !important` }
});

function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
    </>
  );
}

export default GlobalStyles;
