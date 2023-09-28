module.exports = {
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
   '^.+\\.(ts|tsx)$': 'ts-jest', 
  },
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-dom/'],
    
};
