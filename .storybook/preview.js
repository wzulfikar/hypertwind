import "@storybook/addon-actions/register";
import { addDecorator } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs, boolean } from '@storybook/addon-knobs';

import "../twind.install"

// Add decorators
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator((storyFn, context) => {
  // Toggle twind dark mode based on value from knob. Will also change canvas background.
  const isDarkMode = boolean('dark mode', false);
  const darkColor = context.parameters.backgrounds.values.find(v => v.name == "dark").value;
  document.querySelector('.sb-show-main').style.background = isDarkMode ? darkColor : null;
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {withKnobs()(storyFn, context)}
    </div>
  )
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(border|background|color)/i,
      date: /Date$/
    }
  }
};
