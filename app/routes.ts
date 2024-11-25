import type { RouteConfig } from '@react-router/dev/routes';

import { index, prefix } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  ...prefix('about', [index('routes/about.tsx')]),
] satisfies RouteConfig;
