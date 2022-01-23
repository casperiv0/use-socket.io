export default {
  entries: ["src/index"],
  declaration: true,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
  },
};
