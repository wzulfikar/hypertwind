import { install } from "@twind/core"
import config from "./twind.config"

// Override `warning` event from Twind to suppress false warnings.
// This override need to run before installing twind (`install(config)`).
addEventListener('warning', (event) => {
  event.preventDefault()

  const warning = event.detail

  // Skip warnings for css classes from Storybook
  if (warning.code === "TWIND_INVALID_CLASS" && warning.detail.match(/(dark)|(sb-.+)|(_.+)/)) {
    return
  }

  // { message: '...', code: 'TWIND_INVALID_CLASS', detail: '<className>'}
  // { message: '...', code: 'TWIND_INVALID_CSS', detail: '<css>'}
  console.warn(warning.message)
})

install(config)
