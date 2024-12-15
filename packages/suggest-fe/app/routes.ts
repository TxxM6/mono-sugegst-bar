import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("suggest", [
    route("step1", "./suggest/step1/index.page.tsx"),
    route("step2", "./suggest/step2/index.page.tsx"),
    route("step3", "./suggest/step3/index.page.tsx"),
    route("step4", "./suggest/step4/index.page.tsx"),
    route("step5", "./suggest/step5/index.page.tsx"),
  ]),
] satisfies RouteConfig;
