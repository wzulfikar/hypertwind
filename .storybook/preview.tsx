import "@storybook/addon-actions/register";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import type { GlobalArgs, GlobalArgTypes } from "./util";
import "../twind.install";

// Add decorators
addDecorator((storyFn, ctx) => withConsole()(storyFn)(ctx));
addDecorator((storyFn, ctx) => {
  // Toggle dark mode based on value `_darkMode`. Will also change canvas background.
  const isDarkMode = ctx.args._darkMode;
  const darkColor = ctx.parameters.backgrounds.values.find(
    (v) => v.name == "dark"
  ).value;
  document.querySelector(".sb-show-main").style.background = isDarkMode
    ? darkColor
    : null;
  return <div className={isDarkMode ? "dark" : ""}>{storyFn(ctx)}</div>;
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(border|background|color)/i,
      date: /Date$/,
    },
  },
};

export const argTypes: GlobalArgTypes = {
  _darkMode: { control: "boolean" },
  _label: { control: "text" },
};

export const args: GlobalArgs = {
  _darkMode: false,
  _label: undefined,
};
