# React Router Kitchen

## Project structure

[Bulletproof react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

## Setup

> 💡 You can use Yarn or pnpm as alternatives to npm

### Copy .env.example

```sh
cp .env.example .env
```

### Install node_modules

```sh
npm ci
```

### Execute npm run setup

```sh
npm run setup
```

### Preview (Only works with client-side rendering)

> 💡 Avoid using preview in production environments.

1. build

```sh
npm run build
// or
npm run build:static
```

2. preview

```sh
npm run preview
```

## How to serve

### Client-side rendering

1. build

```sh
npm run build
// or
npm run build:static
```

2. serve `build/client/`

You can serve `build/client/` using [nginx](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/), [serve](https://www.npmjs.com/package/serve), [sirv-cli](https://www.npmjs.com/package/sirv-cli)...etc.

### Server-side rendering

1. build

```sh
npm run build:server
```

2. serve

```sh
npm run start:server
```

## References

- [react](https://react.dev/)
- [react-router](https://reactrouter.com/dev)
- [vite](https://vite.dev/guide/)
- [vitest](https://vitest.dev/guide/)
- [testing-library](https://testing-library.com/docs)
- [playwright](https://playwright.dev/docs/intro)
- [storybook](https://storybook.js.org/docs)
- [eslint](https://eslint.org/docs/latest/)
- [prettier](https://prettier.io/docs/en/)
- [knip](https://knip.dev/overview/getting-started)
