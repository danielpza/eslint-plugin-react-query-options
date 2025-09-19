# Enforces queryClient.invalidateQueries don't have inline queries. Will error if queryKey or queryFn properties are passed to the function (`react-query-options/invalidate-queries-no-inline-query`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

## Fail

```js
queryClient.invalidateQueries({
  queryKey: [/**/],
  /* additional properties */
})

queryClient.invalidateQueries({
  queryFn: () => { /**/ }
  /* additional properties */
})
```

## Pass

```js
const query = {
  queryKey: [/**/],
  queryFn: () => { /**/ }
}

const queryBuilder = () => ({
  queryKey: [/**/],
  queryFn: () => { /**/ }
})

queryClient.invalidateQueries(query)
queryClient.invalidateQueries(queryBuilder())
queryClient.invalidateQueries({
  ...queryBuilder(),
  /* additional properties */
  select: (data) => data
})
```
