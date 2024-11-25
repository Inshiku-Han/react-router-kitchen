import type { RouteConfig } from '@react-router/dev/routes';

import { index, prefix } from '@react-router/dev/routes';

export default [
  index('routes/home/index.tsx'),
  ...prefix('about', [index('routes/about/index.tsx')]),
] satisfies RouteConfig;
