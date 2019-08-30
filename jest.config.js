module.exports = {
  collectCoverageFrom: [
    'src/app/**/*.ts',
    'projects/**/*.ts',
    '!src/polyfills.ts',
    '!src/**/*.animations.ts',
    '!src/**/*.config.ts',
    '!src/**/*.constants.ts',
    '!src/**/*.enum.ts',
    '!src/**/*.map.ts',
    '!src/**/*.mock.ts',
    '!src/**/*.model.ts',
    '!src/**/*.module.ts',
    '!src/**/*.routes.ts',
    '!src/**/*.actions.ts',
    '!src/**/*.state.ts',
    '!src/**/index.ts',
    '!src/**/main.ts',
    '!src/environments/**',
    '!projects/polyfills.ts',
    '!projects/**/*.animations.ts',
    '!projects/**/*.config.ts',
    '!projects/**/*.constants.ts',
    '!projects/**/*.enum.ts',
    '!projects/**/*.map.ts',
    '!projects/**/*.mock.ts',
    '!projects/**/*.model.ts',
    '!projects/**/*.module.ts',
    '!projects/**/*.routes.ts',
    '!projects/**/*.actions.ts',
    '!projects/**/*.state.ts',
    '!projects/**/index.ts',
    '!projects/**/main.ts',
    '!projects/**/public-api.ts',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  globals: {
    'ts-jest': {
      astTransformers: [require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')],
      diagnostics: {
        pathRegex: '\\.(spec|test)\\.ts$'
      },
      stringifyContentPathRegex: '\\.html$',
      tsConfig: './tsconfig.spec.json'
    }
  },
  moduleDirectories: ['.', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '@mod/(.*)': '<rootDir>/src/app/modules/$1',
    '@tst/(.*)': '<rootDir>/test_helpers/$1',
    '@bab/(.*)': '<rootDir>/dist/@bab/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/node_modules/@angular-builders/jest/dist/jest-config/setup.js'],
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  testMatch: ['**/__tests__/**/*.spec.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'src/app/*.{js}'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)']
};
