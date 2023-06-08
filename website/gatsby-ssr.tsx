/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import type { GatsbySSR } from 'gatsby';

const GoogleFontTag = (
  <>
    <link
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin=""
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400;1,600&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
  </>
);

const DarkModeScript = (
  // eslint-disable-next-line react/no-danger
  <script dangerouslySetInnerHTML={{
    __html: `(function() {
      // Update the current theme to either 'light' or 'dark'
      function setTheme(theme) {
        window.__theme = theme;
        console.log('Theme updated:', theme);

        if (theme === 'dark') {
          document.documentElement.className = 'dark';
        } else {
          document.documentElement.className = '';
        }
      };

      // Save the user's explicit theme preference.
      // We're attaching this to window so we can access it anywhere.
      // We'll need it later in this post.
      window.__setPreferredTheme = function(theme) {
        setTheme(theme);
        try {
          localStorage.setItem('preferred-theme', theme);
        } catch (e) {}
      };

      // Is there a Saved Theme Preference in localStorage?
      let preferredTheme;
      try {
        preferredTheme = localStorage.getItem('preferred-theme');
      } catch (e) {}

      // Is there an Operating System Preference?
      let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

      // PICK THE INITIAL THEME
      // 1. Use the theme from localStorage, if any
      // 2. Use the OS theme, if any
      // 3. Default to light
      setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
    })();`
  }}
  />
);

export const onRenderBody: GatsbySSR['onRenderBody'] = props => {
  props.setHtmlAttributes({ lang: 'en' });
  props.setHeadComponents([ GoogleFontTag, DarkModeScript ]);
};

export { default as wrapPageElement } from './src/libs/wrapPageElement';
