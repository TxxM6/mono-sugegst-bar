import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("suggest", [
    index("./suggest/index.page.tsx"),
    route("normal", "./suggest/normal/index.page.tsx"),
    route("abort", "./suggest/abort/index.page.tsx"),
  ]),
] satisfies RouteConfig;
