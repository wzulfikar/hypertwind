// Use `shim` so we don't have to wrap each class with `tw`
import { apply, setup, silent } from "twind/shim"

// See: https://twind.dev/handbook/configuration.html
setup({
  mode: silent, // Ignore warnings
  darkMode: "class",
  preflight: (preflight) => ({
    ...preflight,
    body: apply`antialiased`,
  }),
})
