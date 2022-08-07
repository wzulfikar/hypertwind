const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("../tsconfig.json");

const paths = compilerOptions.paths ? compilerOptions.paths : {};

module.exports = {
  rootDir: "../",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest"
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths, { prefix: "<rootDir>/" }),
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    window: {}
  }
};
