module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/pages/_document.tsx',
    '!src/pages/_app.tsx',
    '!src/**/*/index.tsx',
  ],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
