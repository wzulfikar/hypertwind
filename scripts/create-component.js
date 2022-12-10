const fs = require("fs")

const splitArg = process.argv[2].split("/");
const path = splitArg.slice(0, -1).join("/");
const componentName = splitArg.pop();
if (!componentName) {
  console.log("Usage: pnpm create-component {path/ComponentName}")
  console.log("Example: pnpm create-component components/MyButton")
  process.exit(1)
}

const dir = `./src/${path}/${componentName}`
if (fs.existsSync(dir)) {
  console.log("Error: component already exists")
  console.log("→", dir)
  process.exit(1)
}

console.log("- Creating directory..")
console.log("  →", dir)
fs.mkdirSync(dir)

const templates = {
  "index.ts": `export * from "./${componentName}"\n`,
  [`${componentName}.tsx`]: `import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

type Variants = VariantProps<typeof style>;
export type ${componentName}Props = Variants & {
  children: React.ReactNode;
};

export const style = cva(
  ["text-white"],
  {
    variants: {
      intent: {
        basic: "bg-gray-400",
      },
    },
    defaultVariants: {
      intent: "basic",
    },
  }
);

export const ${componentName} = ({ children, ...variants }: ${componentName}Props) => {
  return (
    <div className={style(variants)}>
      {children}
    </div>
  );
};
`,
  [`${componentName}.test.tsx`]: `import { render } from "@test"
import { ${componentName} } from "."

describe("${componentName}", () => {
  const props = {
    children: "Hello world!",
  }
  it("renders without error", () => {
    const { getByText } = render(<${componentName}>{props.children}</${componentName}>)

    expect(getByText(props.children)).toBeInTheDocument()
  })
})
`,
  [`${componentName}.stories.tsx`]: `import { story, ComponentStory } from "@storybook-util";

import { ${componentName} } from "./${componentName}";

export default {
  ...story(${componentName}, { path: "ui/design" }),
  argTypes: {
    rounded: { control: "boolean" },
  },
  args: {
    _label: "${componentName}",
  },
};

const Template: ComponentStory<typeof ${componentName}> = (args) => (
  <${componentName} {...args}>{args._label}</${componentName}>
);

export const Basic = Template.bind({});
Basic.args = { intent: "basic" };
`,
}

console.log("- Creating files..")
for (const filename of Object.keys(templates)) {
  const content = templates[filename]
  fs.writeFileSync(`${dir}/${filename}`, content)
  console.log("  →", filename)
}

console.log("\nDone! Run the test:")
console.log(`yarn test ${componentName}`)
