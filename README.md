# HyperTwind

React components built with HyperUI and Twind.

Run locally:
- Install dependencies: `yarn`
- Run storybook: `yarn start`

Storybook URL:
https://wzulfikar.github.io/hypertwind

Try in CodeSandbox:
https://codesandbox.io/s/github/wzulfikar/hypertwind

### Why?

- Tailwind is good but I don't really like long class names. Twind solves this problem because I can create base styles with `apply` and override them as component props.
- I want to have a component that I can use across projects.
- I want to have a setup that has clear pattern, from design to development. Hence it has storybook and test out of the box
- I like HyperUI. It's open source and easy to understand.
- I don't like dealing with setting up all the above everytime I start a new project. - I use [Superplate](https://github.com/pankod/superplate) to generate new project but I don't like the fact that I can't do it on my own. So this is an attempt to fix my setback.

This repo reflects what I know to be reliable for my workflow.
- Typescript
- Jest, React Testing Library
- Storybook
- Colocating component with stories and test (one folder per component)
