// vite_solidjs
// kreate ~/Code/kreate-scripts/vite_solidjs_ts ~/Code/tmp/PROJECT_NAME -n PROJECT_NAME

setDefaultPackageManager("yarn");

initProject((name) => ({
  name,
  version: "0.1.0",
  scripts: (add) => {
    add("dev", "vite");
    add("build", "vite build");
    add("serve", "vite preview");
  },
  license: 'MIT',
}));

dependencies(({ add, addDev }) => {
  addDev("typescript", "^4.9.5");
  addDev("vite", "^4.1.1");
  addDev("vite-plugin-solid", "^2.5.0");
  add("solid-js", "^1.6.10");

  addDev("@trivago/prettier-plugin-sort-imports", "^4.0.0");
  addDev("@typescript-eslint/eslint-plugin", "^5.52.0");
  addDev("@typescript-eslint/parser", "^5.52.0");
  addDev("eslint", "^8.34.0");
  addDev("eslint-config-prettier", "^8.6.0");
  addDev("eslint-plugin-prettier", "^4.2.1");
  addDev("prettier", "^2.8.4");
});

copyContentsToProjectRoot();

gitInit();
