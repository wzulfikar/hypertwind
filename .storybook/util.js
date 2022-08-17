const GITHUB_REPO = "https://github.com/wzulfikar/hypertwind"

export const noop =
  (name) =>
  (...args) =>
    console.log(name, args)

export const seeInGithub = (componentName) => {
  if (!componentName) {
    return `See in Github: <a href='${GITHUB_REPO}'>${GITHUB_REPO}</a>`
  }
  const path = `src/components/${componentName}/${componentName}.tsx`
  return `See in Github: <a href='${GITHUB_REPO}/tree/main/${path}'>${path}</a>`
}

export const story = (component, docs) => {
  const githubLink = seeInGithub(component.displayName)
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
