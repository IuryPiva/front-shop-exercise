module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/src/setupTestsFile.js",
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/mocks/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/src/mocks/styleMock.ts",
    '^components(.*)$': '<rootDir>/src/components/$1',
    '^contexts(.*)$': '<rootDir>/src/contexts/$1',
    '^reducers(.*)$': '<rootDir>/src/reducers/$1',
    '^types(.*)$': '<rootDir>/src/types/$1',
    '^pages(.*)$': '<rootDir>/src/pages/$1',
  },
};
