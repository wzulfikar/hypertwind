import { apply, setup, silent } from "twind"

// See: https://twind.dev/handbook/configuration.html
setup({
  mode: silent, // Ignore warnings
  darkMode: "class",
  preflight: (preflight) => ({
    ...preflight,
    body: apply`antialiased`,
  }),
})
