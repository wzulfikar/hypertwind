const GITHUB_REPO = "https://github.com/wzulfikar/hypertwind"

export const noop =
  (name) =>
  (...args) =>
    console.log(name, args)

const seeInGithub = ({ component }) => {
  const path = `src/components/${component}/${component}.tsx`
  return `See in Github: <a href='${GITHUB_REPO}/tree/main/${path}'>${path}</a>`
}

export const story = (component, docs) => {
  const githubLink = seeInGithub({ component: component.displayName })
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
