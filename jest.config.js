module.exports = {
  collectCoverageFrom: [
    'src/components/*.{ts,tsx,vue}',
    'src/layouts/*.{ts,tsx,vue}',
    'src/middleware/*.{ts,tsx,vue}',
    'src/pages/*.{ts,tsx,vue}',
    'src/plugins/*.{ts,tsx,vue}',
    'src/server/*.{ts,tsx,vue}',
    'src/store/*.{ts,tsx,vue}',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  verbose: true
};
