module.exports = {
  semi: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^react$", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
