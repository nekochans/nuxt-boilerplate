module.exports = {
  collectCoverageFrom: [
    'src/components/*.{ts,tsx,vue}',
    'src/layouts/*.{ts,tsx,vue}',
    'src/middleware/*.{ts,tsx,vue}',
    'src/pages/*.{ts,tsx,vue}',
    'src/plugins/*.{ts,tsx,vue}',
    'src/store/*.{ts,tsx,vue}',
    'src/domain/*.{ts,tsx,vue}',
    'server/**/*.{ts,tsx,vue}'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  verbose: true
};
