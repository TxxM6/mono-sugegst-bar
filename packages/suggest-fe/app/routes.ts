import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("suggest", [
    route("step1", "./pages/suggest/step1/index.page.tsx"),
    route("step2", "./pages/suggest/step2/index.page.tsx"),
    route("step3", "./pages/suggest/step3/index.page.tsx"),
    route("step4", "./pages/suggest/step4/index.page.tsx"),
    route("step5", "./pages/suggest/step5/index.page.tsx"),
    route("react", "./pages/suggest/reactExample/index.page.tsx"),
  ]),
] satisfies RouteConfig;
