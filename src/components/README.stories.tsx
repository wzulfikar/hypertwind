import { seeInGithub } from "@storybook-util"

const docs = `
#### Why did I created this?

I want to have a repo that I can use to play around with React. 

#### Example of Story

\`\`\`jsx
// src/components/Button.stories.tsx
import { story, noop } from "@storybook-util"
import { Button } from "."

export default story(Button)

export const Basic = () => <Button>Basic button</Button>
export const WithHandler = () => <Button onClick={noop("onClick")}>Button</Button>
\`\`\`

#### Conventions

- To create new component, use \`yarn create-component MyComponent\`. For example, running \`yarn create-component Button\` will create these files:

  <pre>
  src
   └─ components
      └─ Button
         ├─ Button.stories.tsx
         ├─ Button.test.tsx
         ├─ Button.tsx
         └─ index.ts 
  </pre>


- Use \`story\` to export your component. Your story will automatically have the "See in Github" link in its documentation. This is equivalent to [storybook default export](https://storybook.js.org/docs/react/writing-stories/introduction#default-export):

  <pre>
  export default {
    component: YourComponent,
    // ...
  }
  </pre>

  With \`story\`, it's more concise because you just need to do \`export default story(YourComponent)\`. You'll have the Github link of your component in the "Docs" tab and you can pass optional description as second argument: \`story(YourComponent, "This is my component")\`.


- Use \`noop\` for your component handlers. It'll logs to console which will show up in "Actions" tab (next to "Controls" tab) of the canvas. Example:

  <pre>
  import { noop } from "@storybook-util"
  export const WithHandler = () => &lt;Button onClick={noop("onClick")}>Button</Button>
  </pre>


- Run \`yarn test MyComponent\` to test your component. 


- Put utility (helper) functions close to where it'll be used. For example, \`src/components/util.ts\` contains utility functions that can be used by components while \`src/util\` contains utility functions that can be used in the wider scope (eg. your backend code, if you have one).


- CI/CD is available out of the box via Github Action (see \`.github/workflows/storybook.yml\`). The job will trigger on push if the changes affect any .ts/.tsx files in src/components.

---
`

export default {
  title: "README",
  parameters: {
    docs: {
      description: {
        component: "<div>" + docs + "</div><br/>" + seeInGithub(),
      },
    },
  },
}

export const StartHere = () => (
  <div>Click the "Docs" tab to see the content.</div>
)
