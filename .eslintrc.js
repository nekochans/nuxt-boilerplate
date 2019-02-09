module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error']
  },
  overrides: [
    {
      files: ["*.ts", "*.vue"],
      parserOptions: {
        parser: "typescript-eslint-parser"
      },
      plugins: ['vue', 'prettier', 'typescript']
    }
  ]
};
