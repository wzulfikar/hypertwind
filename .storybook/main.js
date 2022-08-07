const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-console"
  ],
  core: {
    builder: "webpack5"
  },
  webpackFinal: async (config) => {
    if (!config.resolve.plugins) config.resolve.plugins = [];
    config.resolve.plugins.push(new TsconfigPathsPlugin());

    return config;
  }
};
