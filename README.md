# eslint-plugin-react-query-options

Eslint plugin for tanstack query to enforce using the `queryOptions` api inspired by [this post](https://tkdodo.eu/blog/the-query-options-api) from TkDodo

## Usage

```js
import eslintPluginReactQueryOptions from "eslint-plugin-react-query-options";

export default [
  // ...
  eslintPluginReactQueryOptions.configs.recommended,
];
```

## Rules

<!-- prettier-ignore-start -->
<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.

| Name                                                         | Description                                                         | 💼 |
| :----------------------------------------------------------- | :------------------------------------------------------------------ | :- |
| [require-query-options](docs/rules/require-query-options.md) | Enforce use*Query functions are called with a queryOptions pattern. | ✅  |

<!-- end auto-generated rules list -->
<!-- prettier-ignore-end -->
