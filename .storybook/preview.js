import "@storybook/addon-actions/register";
import "@components/setupTwind";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(border|background|color)/,
      date: /Date$/
    }
  }
};
