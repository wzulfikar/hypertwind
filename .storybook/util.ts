import { ComponentStory as SBComponentStory } from "@storybook/react";

const GITHUB_REPO = "https://github.com/wzulfikar/unwind"

export type StoryArgs = {
  _darkMode: boolean
  _label: string
}

export type ComponentStory<T extends (...args: any) => any> = SBComponentStory<
  (args: Parameters<T>[0] & StoryArgs) => JSX.Element
>;

export const noop =
  (name: string) =>
    (...args: any[]) =>
      console.log(name, ...args)

export const seeInGithub = (componentName?: string, componentPath?: string) => {
  if (!componentName) {
    return `See in Github: <a href='${GITHUB_REPO}'>${GITHUB_REPO}</a>`
  }
  const path = `src/${componentPath}/${componentName}/${componentName}.tsx`
  return `See in Github: <a href='${GITHUB_REPO}/tree/main/${path}'>${path}</a>`
}

export const story = (component: React.FC<any>, { docs = '', path = "component" } = {}) => {
  const githubLink = seeInGithub(component.displayName, path)
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
