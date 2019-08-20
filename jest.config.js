module.exports = {
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/polyfills.ts',
    '!src/**/*.animations.ts',
    '!src/**/*.config.ts',
    '!src/**/*.constants.ts',
    '!src/**/*.enum.ts',
    '!src/**/*.map.ts',
    '!src/**/*.mocks.ts',
    '!src/**/*.model.ts',
    '!src/**/*.module.ts',
    '!src/**/*.routes.ts',
    '!src/**/index.ts',
    '!src/**/main.ts',
    '!src/environments/**',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80
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
  moduleDirectories: ['.', 'src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '@mod/(.*)': '<rootDir>/src/app/modules/$1'
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
