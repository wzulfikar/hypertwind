const seeInGithub = ({ component }) => {
  let path = ""
  if (component) path = `src/components/${component}/${component}.tsx`
  return `See in Github: <a href='https://github.com/wzulfikar/hypertwind/tree/main/${path}'>${path}</a>`
}

export const story = (component) => {
  return {
    component: component,
    parameters: {
      docs: {
        description: {
          component: seeInGithub({ component: component.displayName }),
        },
      },
    },
  }
}
