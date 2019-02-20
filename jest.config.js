module.exports = {
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,vue}"
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
  roots: ['test'],
  verbose: true
};
