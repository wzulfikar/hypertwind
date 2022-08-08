const fs = require("fs")
const path = require("path")

const title = process.argv[2]
const filePath = "../storybook-static/index.html"

try {
  console.log("Rewriting document title of `index.html`..")
  const document = fs.readFileSync(path.resolve(__dirname, filePath), "utf8")
  const output = document.replace(
    /<title>.*<\/title>/,
    `<title>${title}</title>`
  )
  fs.writeFileSync(path.resolve(__dirname, filePath), output)
  console.log("→ Title rewrite complete")
} catch (error) {
  console.log("→ Title rewrite failed")
  console.error(error)
  process.exit(1)
}
