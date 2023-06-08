module.exports = {
  env: {
    es2021: true,
    node: true
  },
  ignorePatterns: [ 'node_modules' ], // overrides ignore pattern for local config files
  root: true,
  extends: [ './node_modules/@yondav-configs/eslint-config/configs/core.base.js' ], // using core js node config at root level
  overrides: [
    {
      files: [ '**/*.{ts,tsx}' ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        tsconfigRootDir: __dirname,
        project: 'tsconfig.eslint.json',
        sourceType: 'module'
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: 'tsconfig.eslint.json'
          }
        }
      },
      extends: [ './node_modules/@yondav-configs/eslint-config/configs/core.typescript-react.js' ],
      rules: {
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'off'
      }
    },
    {
      files: [ '**/*.{test,spec}.{js,jsx,ts,tsx}' ],
      env: { jest: true },
      plugins: [ 'jest' ],
      extends: [ 'plugin:jest/recommended', 'plugin:jest/style' ]
    }
  ]
};
