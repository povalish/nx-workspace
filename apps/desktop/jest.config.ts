/* eslint-disable */
export default {
  displayName: 'desktop',
  preset: '../../jest.preset.js',
  resolver: '@nx/jest/plugins/resolver',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/desktop',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
};
