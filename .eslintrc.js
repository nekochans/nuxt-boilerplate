module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  // required to lint *.vue files
  plugins: [
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error'],
    'camelcase': 'off'
  }
};
