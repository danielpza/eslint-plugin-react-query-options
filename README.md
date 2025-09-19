# eslint-plugin-react-query-options

Eslint plugin for tanstack query to enforce using the `queryOptions` api inspired by [this post](https://tkdodo.eu/blog/the-query-options-api) from TkDodo

## Usage

```js
import reactQueryOptions from "eslint-plugin-react-query-options";

export default [
  // ...
  reactQueryOptions.configs.recommended,
];
```

## Rules

<!-- prettier-ignore-start -->
<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.

| Name                                                                                   | Description                                                                                                                                          | 💼 |
| :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :- |
| [invalidate-queries-no-inline-query](docs/rules/invalidate-queries-no-inline-query.md) | Enforces queryClient.invalidateQueries don't have inline queries. Will error if queryKey or queryFn properties are passed to the function            | ✅  |
| [use-query-no-inline-query](docs/rules/use-query-no-inline-query.md)                   | Enforces useQuery (and family) hooks use some form of query constructor pattern. Will error if queryKey or queryFn properties are passed to the hook | ✅  |

<!-- end auto-generated rules list -->
<!-- prettier-ignore-end -->

## Configs

<!-- begin auto-generated configs list -->

|    | Name          |
| :- | :------------ |
| ✅  | `recommended` |

<!-- end auto-generated configs list -->
