# ReactRouter base template

## Project structure

[Bulletproof react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

## How to serve

### Without server

1. build

```sh
npm run build
// or
npm run build:static
```

2. serve `build/client/`

You can serve `build/client/` using [nginx](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/), [serve](https://www.npmjs.com/package/serve), [sirv-cli](https://www.npmjs.com/package/sirv-cli)...etc.

### With server

1. build

```sh
npm run build:ssr
```

2. serve

```sh
npm run start:ssr
```

## References

- [react](https://react.dev/)
- [react-router](https://reactrouter.com/dev)
- [vite](https://vite.dev/guide/)
- [eslint](https://eslint.org/docs/latest/)
