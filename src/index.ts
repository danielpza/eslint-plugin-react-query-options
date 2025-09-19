import useQueryNoInlineQuery from "./rules/use-query-no-inline-query.js";
import invalidateQueriesNoInlineQuery from "./rules/invalidate-queries-no-inline-query.js";

import pkg from "../package.json" with { type: "json" };

const rules = [useQueryNoInlineQuery, invalidateQueriesNoInlineQuery];

const reactQueryOptions = {
  meta: {
    name: pkg.name,
    version: pkg.version,
    namespace: "react-query-options",
  },
  get configs() {
    return configs;
  },
  rules: Object.fromEntries(rules.map((rule) => [rule.name, rule.rule])),
};

const configs = {
  recommended: [
    {
      plugins: {
        [reactQueryOptions.meta.namespace]: reactQueryOptions,
      },
      rules: Object.fromEntries(
        rules.map((rule) => [
          [`${reactQueryOptions.meta.namespace}/${rule.name}`],
          "error",
        ]),
      ),
    },
  ],
};

export default reactQueryOptions;
