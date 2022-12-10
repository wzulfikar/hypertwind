import "@storybook/addon-actions/register";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import type { GlobalArgs } from "./util";
import "../twind.install";

// Add decorators
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator((storyFn, context) => {
  // Toggle dark mode based on value `_darkMode`. Will also change canvas background.
  const isDarkMode = context.args._darkMode;
  const darkColor = context.parameters.backgrounds.values.find(
    (v) => v.name == "dark"
  ).value;
  document.querySelector(".sb-show-main").style.background = isDarkMode
    ? darkColor
    : null;
  return <div className={isDarkMode ? "dark" : ""}>{storyFn(context)}</div>;
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

export const argTypes: Record<
  keyof GlobalArgs,
  { control: "boolean" | "string" }
> = {
  _darkMode: { control: "boolean" },
  _label: { control: "text" },
};

export const args: GlobalArgs = {
  _darkMode: false,
  _label: "My label",
};
