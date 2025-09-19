import useQueryNoInlineQuery from "./rules/use-query-no-inline-query.js";

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
    [useQueryNoInlineQuery.name]: useQueryNoInlineQuery.rule,
  },
};

const configs = {
  recommended: [
    {
      plugins: {
        [reactQueryOptions.meta.namespace]: reactQueryOptions,
      },
      rules: {
        [`${reactQueryOptions.meta.namespace}/${useQueryNoInlineQuery.name}`]:
          "error",
      },
    },
  ],
};

export default reactQueryOptions;
