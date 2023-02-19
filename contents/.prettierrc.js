module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  // https://github.com/trivago/prettier-plugin-sort-imports#apis
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
