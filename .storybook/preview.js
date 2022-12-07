import "@storybook/addon-actions/register";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

// Install twind
require("@twind/core").install(require('../twind.config'))

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(border|background|color)/i,
      date: /Date$/
    }
  }
};
