# Unwind Design

React components based on [HyperUI](https://github.com/markmead/hyperui) built with [Twind](https://github.com/tw-in-js/twind).

Run locally:

- Install dependencies: `yarn`
- Run storybook: `yarn start`

Storybook URL:
https://unwind.design

Try in CodeSandbox:
https://codesandbox.io/s/github/wzulfikar/unwind

### Why?

- Tailwind is good but I don't really like long class names. Twind solves this problem because I can create base styles with `apply` and override them as component props.
- I want to have a component that I can use across projects.
- I want to have a setup that has clear pattern, from design to development. Hence it has storybook and test out of the box
- I like HyperUI. It's open source and easy to understand.

This repo is a reflection of what I know to be reliable for my workflow.

- Colocating component with stories and tests (one folder per component)
- Common folder and utility files
- [Typescript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook](https://storybook.js.org)
- [`react-hook-form`](https://react-hook-form.com) for form
- [`zod`](https://github.com/colinhacks/zod) for validation and type safety at runtime
- [`react-icons`](https://react-icons.github.io) for icons

---

notes:

- pnpm not supported
