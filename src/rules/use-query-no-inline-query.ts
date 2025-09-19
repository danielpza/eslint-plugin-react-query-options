import {
  AST_NODE_TYPES,
  ESLintUtils,
  TSESTree,
} from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/danielpza/eslint-plugin-react-query/docs/rules/${name}.md`,
);

const useQueryHooks = [
  // see https://tanstack.com/query/latest/docs/framework/react/reference/useQuery
  "useQuery",
  "useQueries",
  "useInfiniteQuery",
  "useSuspenseQuery",
  "useSuspenseQueries",
  "useSuspenseInfiniteQuery",
];

const invalidProperties = ["queryKey", "queryFn"];

function isValidQueryNode(queryNode: TSESTree.Node) {
  // we only care about object expressions
  if (queryNode.type !== AST_NODE_TYPES.ObjectExpression) return true;

  // check if any of the properties is queryKey or queryFn
  const hasInvalidProperties = queryNode.properties.find(
    (property) =>
      property.type === AST_NODE_TYPES.Property &&
      property.key.type === AST_NODE_TYPES.Identifier &&
      invalidProperties.includes(property.key.name),
  );

  return !hasInvalidProperties;
}

const name = "use-query-no-inline-query";

export default {
  name,
  rule: createRule({
    name,
    defaultOptions: [],
    meta: {
      type: "suggestion",
      messages: {
        "no-inline-query": "Expected query hook to use queryOptions pattern",
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
          if (node.callee.type !== AST_NODE_TYPES.Identifier) return;
          if (!useQueryHooks.includes(node.callee.name)) return;

          // use*Query hook call
          if (!node.arguments[0]) return;

          // if if caller first argument is an object
          const queryNode = node.arguments[0];

          if (!isValidQueryNode(queryNode))
            context.report({
              messageId: "no-inline-query",
              node,
            });
        },
      };
    },
  }),
};
