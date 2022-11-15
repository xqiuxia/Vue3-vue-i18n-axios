const routes = [
  { path: "/", redirect: "/login" },
  {
    name: "index",
    path: "/index",
    component: () => import("@/view/index"),
    meta: {
      showBar: true,
    },
  },
  {
    name: "list",
    path: "/list",
    component: () => import("@/view/list"),
    meta: {
      showBar: true,
    },
  },
  {
    name: "totalList",
    path: "/totalList",
    component: () => import("@/view/totalList"),
    meta: {
      showBar: true,
    },
  },
  {
    name: "user",
    path: "/user",
    component: () => import("@/view/user"),
    meta: {
      showBar: true,
    },
  },
  { name: "detail", path: "/detail", component: () => import("@/view/detail") },
  { name: "login", path: "/login", component: () => import("@/view/login") },
  {
    name: "download",
    path: "/download",
    component: () => import("@/view/downLoad"),
  },
];
export default routes;
