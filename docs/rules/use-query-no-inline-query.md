# Enforces useQuery (and family) hooks use some form of query constructor pattern. Will error if queryKey or queryFn properties are passed to the hook (`react-query-options/use-query-no-inline-query`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

Enforces useQuery (and family) hooks use some form of query constructor pattern. Will error if queryKey or queryFn properties are passed to the hook

## Fail

```js
useQuery({
  queryKey: [/**/],
  /* additional properties */
})

useQuery({
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

useQuery(query)
useQuery(queryBuilder())
useQuery({
  ...queryBuilder(),
  /* additional properties */
  select: (data) => data
})
```
