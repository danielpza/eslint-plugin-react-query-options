import "../_test/setup.js";

import { RuleTester } from "@typescript-eslint/rule-tester";

import requireQueryOptions from "./require-query-options.js";

const ruleTester = new RuleTester({});

ruleTester.run("require-query-options", requireQueryOptions, {
  valid: [
    { code: `useQuery(usersQuery)` },
    { code: `useQuery({ ...usersQuery })` },
    { code: `useQuery({ ...usersQuery() })` },
    { code: `useQuery({ ...usersQuery, meta: {} })` },
  ],
  invalid: [
    {
      code: `useQuery({ queryKey: [] })`,
      errors: [{ messageId: "require-query-options" }],
    },
    {
      code: `const users = useQuery({ ...queryOptions, queryKey: [] })`,
      errors: [{ messageId: "require-query-options" }],
    },
    {
      code: `const users = useQuery({ queryFn: () => {} })`,
      errors: [{ messageId: "require-query-options" }],
    },
    {
      code: `const users = useQuery({ ...queryOptions, queryFn: () => {} })`,
      errors: [{ messageId: "require-query-options" }],
    },
  ],
});
