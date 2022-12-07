const fs = require("fs")

const componentName = process.argv[2]
if (!componentName) {
  console.log("Usage: yarn create-component {ComponentName}")
  console.log("Example: yarn create-component MyComponent")
  process.exit(1)
}

const dir = `./src/components/${componentName}`
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
  [`${componentName}.tsx`]: `
const base = {
  container: "flex",
}

const colors = {
  red: "text-red-500",
  green: "text-green-500",
}

type Props = {
  children: React.ReactNode
  color?: keyof typeof colors
  styles?: StyleOverride<typeof base>
}

export const ${componentName} = ({ children, color = "red", styles }: Props) => {
  return <div className={cx(base.container, styles?.container, colors[color])}>{children}</div>
}
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
  [`${componentName}.stories.tsx`]: `import { story } from "@storybook-util"
import { ${componentName} } from "."

export default story(${componentName})

export const Basic = () => <${componentName}>Hello world!</${componentName}>
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
