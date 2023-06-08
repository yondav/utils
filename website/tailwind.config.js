/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        bar: '0px 12px 12px var(--shadow-100)',
      },
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        neutral: {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        blue: {
          100: 'var(--blue-100)',
          200: 'var(--blue-200)',
          300: 'var(--blue-300)',
          400: 'var(--blue-400)',
          500: 'var(--blue-500)',
        },
        cyan: {
          100: 'var(--cyan-100)',
          200: 'var(--cyan-200)',
          300: 'var(--cyan-300)',
          400: 'var(--cyan-400)',
          500: 'var(--cyan-500)',
        },
        green: {
          100: 'var(--green-100)',
          200: 'var(--green-200)',
          300: 'var(--green-300)',
          400: 'var(--green-400)',
          500: 'var(--green-500)',
        },
        magenta: {
          100: 'var(--magenta-100)',
          200: 'var(--magenta-200)',
          300: 'var(--magenta-300)',
          400: 'var(--magenta-400)',
          500: 'var(--magenta-500)',
        },
        yellow: {
          100: 'var(--yellow-100)',
          200: 'var(--yellow-200)',
          300: 'var(--yellow-300)',
          400: 'var(--yellow-400)',
          500: 'var(--yellow-500)',
        },
        red: {
          100: 'var(--red-100)',
          200: 'var(--red-200)',
          300: 'var(--red-300)',
          400: 'var(--red-400)',
          500: 'var(--red-500)',
        },
        gradient: {
          primary: 'var(--gr-primary)',
          secondary: 'var(--gr-secondary)',
        }
      },
      fontFamily: {
        header: [ 'var(--ff-header)', 'serif' ],
        body: [ 'var(--ff-body)', 'sans-serif' ],
        mono: [ 'var(--ff-mono)', 'mono' ],
      },
      fontSize: {
        xs: 'var(--fs-xs)',
        sm: 'var(--fs-sm)',
        base: 'var(--fs-base)',
        lg: 'var(--fs-lg)',
        xl: 'var(--fs-xl)',
        '2xl': 'var(--fs-2xl)',
        '3xl': 'var(--fs-3xl)',
        '4xl': 'var(--fs-4xl)',
        '5xl': 'var(--fs-5xl)',
        'h1-lg': [ 'var(--fs-5xl)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'h1-md': [ 'var(--fs-4xl)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'h1-sm': [ 'var(--fs-2xl)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'h2-lg': [ 'var(--fs-4xl)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'h2-md': [ 'var(--fs-3xl)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'h2-sm': [ 'var(--fs-xl)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'h3-lg': [ 'var(--fs-xl)', { lineHeight: 'var(--lh-lg)', } ],
        'h3-md': [ 'var(--fs-xl)', { lineHeight: 'var(--lh-lg)', } ],
        'h3-sm': [ 'var(--fs-sm)', { lineHeight: 'var(--lh-lg)', } ],
        'p-lg': [ 'var(--fs-sm)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'p-md': [ 'var(--fs-base)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'p-sm': [ 'var(--fs-sm)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-sm)' } ],
        'o-lg': [ 'var(--fs-sm)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-lg)' } ],
        'o-md': [ 'var(--fs-xs)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-lg)' } ],
        'o-sm': [ 'var(--fs-xs)', { lineHeight: 'var(--lh-lg)', letterSpacing: 'var(--ls-lg)' } ],
        helper: [ 'var(--fs-xs)', { lineHeight: 'var(--lh-sm)', letterSpacing: 'var(--ls-sm)' } ],
        'code-sm': [ 'var(--fs-xs)', { lineHeight: 'var(--lh-sm)', letterSpacing: 'var(--ls-sm)' } ],
        'code-md': [ 'var(--fs-sm)', { lineHeight: 'var(--lh-sm)', letterSpacing: 'var(--ls-sm)' } ],
      },
      fontWeight: {
        light: 'var(--fw-light)',
        base: 'var(--fw-base)',
        semibold: 'var(--fw-semibold)',
        bold: 'var(--fw-bold)',
        black: 'var(--fw-black)',
      },
      lineHeight: {
        sm: 'var(--lh-sm)',
        lg: 'var(--lh-lg)',
      },
      letterSpacing: {
        none: 'var(--ls-none)',
        sm: 'var(--ls-sm)',
        lg: 'var(--ls-lg)',
      }
    },
  },
  plugins: [],
};
