import type { RouteConfig } from "@react-router/dev/routes";

import { index, prefix } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  index("routes/home.tsx"),
  ...prefix("about", [index("routes/about/index.tsx")]),
];
