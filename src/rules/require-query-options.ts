import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/danielpza/eslint-plugin-react-query/src/rules/${name}.ts`,
);

const hooks = [
  // see https://tanstack.com/query/latest/docs/framework/react/reference/useQuery
  "useQuery",
  "useQueries",
  "useInfiniteQuery",
  "useSuspenseQuery",
  "useSuspenseQueries",
  "useSuspenseInfiniteQuery",
];

const invalidProperties = ["queryKey", "queryFn"];

export default createRule({
  name: "require-query-options",
  defaultOptions: [],
  meta: {
    type: "suggestion",
    messages: {
      "require-query-options":
        "Expected query hook to use queryOptions pattern",
    },
    docs: {
      description:
        "Enforces useQuery (and family) hooks use some form of query constructor pattern. Will error if queryKey or queryFn properties are passed to the hook",
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        // Check if it's use*Query hook
        if (node.callee.type !== AST_NODE_TYPES.Identifier) return;
        if (!hooks.includes(node.callee.name)) return;

        if (!node.arguments[0]) return;

        // if if caller first argument is an object
        if (node.arguments[0].type !== AST_NODE_TYPES.ObjectExpression) return;

        // check if any of the properties is queryKey or queryFn
        const hasInvalidProperties = node.arguments[0].properties.find(
          (property) =>
            property.type === AST_NODE_TYPES.Property &&
            property.key.type === AST_NODE_TYPES.Identifier &&
            invalidProperties.includes(property.key.name),
        );

        if (hasInvalidProperties)
          context.report({
            messageId: "require-query-options",
            node,
          });
      },
    };
  },
});
