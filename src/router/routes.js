import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Queues from "@controleonline/quasar-queues-ui/src/router/routes";

const routes = [
  ...Login.routes, 
  ...Queues.routes, 
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "tv",
        component: () =>
          import("@controleonline/quasar-queues-ui/src/pages/Hardwares/AllDisplays.vue"),
      },
    ],
  },  
  {
    path: "*",
    redirect: "/",
  },
];

export default routes;
