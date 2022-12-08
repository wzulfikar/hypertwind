require("dotenv").config({ path: ".env.test" })

const { pathsToModuleNameMapper } = require("ts-jest")
const { compilerOptions } = require("./tsconfig.json")

const paths = compilerOptions.paths ? compilerOptions.paths : {}

module.exports = {
  rootDir: "./",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/setup.js"],
  transform: {
    "^.+\\.(js|ts|tsx)$": [
      "@swc/jest",
      { jsc: { transform: { react: { runtime: "automatic" } } } },
    ],
  },
  transformIgnorePatterns: ["!node_modules/@twind/core/core.browser.js", "!node_modules/@tiptap/core/dist/tiptap-core.cjs"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths, { prefix: "<rootDir>/" }),
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    window: {},
  },
}
