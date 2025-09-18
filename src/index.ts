import requireQueryOptions from "./rules/require-query-options.js";
import pkg from "../package.json" with { type: "json" };

const reactQueryOptions = {
  meta: {
    name: pkg.name,
    version: pkg.version,
    namespace: "react-query-options",
  },
  get configs() {
    return configs;
  },
  rules: {
    "require-query-options": requireQueryOptions,
  },
};

const configs = {
  recommended: [
    {
      plugins: {
        "react-query-options": reactQueryOptions,
      },
      rules: {
        "react-query-options/require-query-options": "error",
      },
    },
  ],
};

export default reactQueryOptions;
