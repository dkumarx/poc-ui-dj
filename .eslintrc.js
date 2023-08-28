module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '17.0.2'
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ],
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['src/**/*.stories.tsx'],

      rules: {
        'no-console': 'off'
      }
    }
  ],
  ignorePatterns: ['.eslintrc.js', 'dist/**/*']
};
