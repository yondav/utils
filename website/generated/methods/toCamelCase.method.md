```tsfunction toCamelCase(input: string) {
  const regex = /[^a-z|A-Z|0-9]+/;

  return input
    .split(regex)
    .map((word, i) => (i > 0
      ? word.toLowerCase()
        .charAt(0)
        .toUpperCase() + word.slice(1)
        .toLowerCase()
      : word.toLowerCase())
    )
    .join('')
    .trim()
    .trimStart();
}
```