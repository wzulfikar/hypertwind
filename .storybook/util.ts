import { ComponentStory as SBComponentStory } from "@storybook/react";

const GITHUB_REPO = "https://github.com/wzulfikar/unwind"

/**
 * `GlobalArgs` will be injected into component's props so you can use it inside "Template".
 * Example:
 * ```
 * const Template: ComponentStory<typeof Button> = (args) => (
 *   <Button {...args}>{args._label || "Button"}</Button>
 * );
 * ```
 * 
 * To add new global arg, add the entry in `GlobalArgs` and run `tsc` to see 
 * which other places you need to update.
 */
export type GlobalArgs = {
  _darkMode: boolean
  _label: string
}
export type GlobalArgTypes = Record<keyof GlobalArgs, { control: "boolean" | "string" }>

/**
 * Helper type to tie component story with global args
 */
export type ComponentStory<T extends (...args: any) => any> = SBComponentStory<
  (args: Parameters<T>[0] & GlobalArgs) => JSX.Element
>;

export const noop =
  (name: string) =>
    (...args: any[]) =>
      console.log(name, ...args)

export const seeInGithub = ({ componentName = '', componentPath = '' }) => {
  if (!componentName) {
    return `See in Github: <a href='${GITHUB_REPO}'>${GITHUB_REPO}</a>`
  }
  const path = `src/${componentPath}/${componentName}/${componentName}.tsx`
  return `See in Github: <a href='${GITHUB_REPO}/tree/main/${path}'>${path}</a>`
}

export const story = (component: React.FC<any>, { docs = '', path = "components" } = {}) => {
  const githubLink = seeInGithub({ componentName: component.displayName, componentPath: path })
  const componentDocs = docs ? docs + "<br/>" + githubLink : githubLink
  return {
    component: component,
    parameters: {
      docs: {
        description: {
          component: componentDocs,
        },
      },
    },
  }
}

/**
 * Styles for common elements
 */
export const styles = {
  button: "text-xs border border-gray-200 rounded px-1"
}
