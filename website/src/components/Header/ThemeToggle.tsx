/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/rules-of-hooks */
import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

import Toggle from '../Form/Toggle';

function ThemeToggle() {
  if (typeof window === 'undefined') {
    // Never server-side render this, since we can't determine
    // the correct initial state until we get to the client.
    // Alternatively, use a loading placeholder here.
    return null;
  }
  const [ isDark, setIsDark ] = useState(window.__theme === 'dark');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setIsDark(!!isChecked);
    window.__setPreferredTheme(isChecked ? 'dark' : 'light');
  },
  [ setIsDark ]
  );

  return (
    <Toggle.Lable>
      <Toggle.Input
        variant="vertical"
        checked={isDark}
        onChange={onChange}
        isDark={isDark}
      />
    </Toggle.Lable>
  );
}

export default ThemeToggle;
