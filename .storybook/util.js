const GITHUB_REPO = "https://github.com/wzulfikar/unwind"

export const noop =
  (name) =>
    (...args) =>
      console.log(name, ...args)

export const seeInGithub = (componentName, componentPath) => {
  if (!componentName) {
    return `See in Github: <a href='${GITHUB_REPO}'>${GITHUB_REPO}</a>`
  }
  const path = `src/${componentPath}/${componentName}/${componentName}.tsx`
  return `See in Github: <a href='${GITHUB_REPO}/tree/main/${path}'>${path}</a>`
}

export const story = (component, { docs = '', path = "component" } = {}) => {
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
