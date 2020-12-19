export default {
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  preCommit: {
    eslint: true,
    prettier: true,
  },
  disableTypeCheck: false,
  // https://github.com/umijs/father#runtimehelpers
  runtimeHelpers: true,
  typescriptOpts: {
    check: false,
  }
};
