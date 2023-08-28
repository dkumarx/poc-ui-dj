module.exports = {};

module.exports = {
  preset: 'ts-jest',
  roots: ['src'],
  reporters: ['default', 'jest-junit'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  verbose: true,

  testEnvironment: 'node',
  testMatch: ['**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  testTimeout: 10000,

  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },

  modulePaths: ['<rootDir>/src/lib/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json'],

  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },

  collectCoverage: true,
  coverageReporters: ['text', 'cobertura'],
  coverageDirectory: '<rootDir>/reports',
  coveragePathIgnorePatterns: ['node_modules', '.stories.{jsx|tsx}']
};
