// Keep these to be purely about FORMATTING, not linting
// https://blog.theodo.com/2019/08/empower-your-dev-environment-with-eslint-prettier-and-editorconfig-with-no-conflicts/
module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,

  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      options: {
        singleQuote: false
      }
    }
  ]
};
