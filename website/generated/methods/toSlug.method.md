```ts
  const regex = /[^a-z|A-Z|0-9]/g;

  return input
    .toLowerCase()
    .trim()
    .replace(regex, '-');
}
```