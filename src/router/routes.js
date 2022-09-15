const routes = [
  {
    path: "/",
    component: () => import("../pages/SignIn/SignIn.vue"),
    // children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // {
  //   path: "/",
  //   component: () => import("layouts/SignIn/SignInLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  // },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
