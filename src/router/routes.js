import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Queues from "@controleonline/quasar-queues-ui/src/router/routes";

const routes = [
  ...Login.routes,
  ...Queues.routes,
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "displays",
        component: () =>
          import("@controleonline/quasar-queues-ui/src/pages/Display/Displays.vue"),
      },
    ],
  },
  /*
  {
    path: "*",
    redirect: "/",
  },
  */
];

export default routes;
