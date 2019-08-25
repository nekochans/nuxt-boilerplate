module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  // required to lint *.vue files
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
      }
    }],
    'prettier/prettier': ['error'],
    'camelcase': 'off'
  }
};
