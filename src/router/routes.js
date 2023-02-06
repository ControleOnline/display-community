import * as Login from "@controleonline/quasar-login-ui/src/router/routes";
import * as Quote from "@controleonline/quasar-quote-ui/src/router/routes";
import * as Shop from "@controleonline/quasar-shop-ui/src/router/routes";
import * as Financial from "@controleonline/quasar-financial-ui/src/router/routes";
import * as Providers from "@controleonline/quasar-providers-ui/src/router/routes";
import * as Customers from "@controleonline/quasar-customers-ui/src/router/routes";
import * as Contracts from "@controleonline/quasar-contracts-ui/src/router/routes";
import * as Tasks from "@controleonline/quasar-tasks-ui/src/router/routes";
import * as Quotations from "@controleonline/quasar-orders-ui/src/router/routes";
import * as Users from "@controleonline/quasar-users-ui/src/router/routes";
import * as Carrier from "@controleonline/quasar-carrier-ui/src/router/routes";
import * as Dashboard from "@controleonline/quasar-dashboard-ui/src/router/routes";
import * as Support from "@controleonline/quasar-support-ui/src/router/routes";
import * as Coupon from "@controleonline/quasar-coupon-ui/src/router/routes";
import * as Accounting from "@controleonline/quasar-accounting-ui/src/router/routes";
import * as Import from "@controleonline/quasar-import-ui/src/router/routes";
import * as Crm from "@controleonline/quasar-crm-ui/src/router/routes";
import * as Docs from "@controleonline/quasar-docs-ui/src/router/routes";
import * as Config from "@controleonline/quasar-config-ui/src/router/routes";
import * as Products from "@controleonline/quasar-products-ui/src/router/routes";
import * as Professionals from "@controleonline/quasar-professionals-ui/src/router/routes";
import * as Freight from "@controleonline/quasar-freight-ui/src/router/routes";
import * as Queues from "@controleonline/quasar-queues-ui/src/router/routes";

const routes = [
  ...Login.routes,
  ...Quote.routes,
  ...Quotations.routes,
  ...Financial.routes,
  ...Providers.routes,
  ...Customers.routes,
  ...Contracts.routes,
  ...Tasks.routes,
  ...Carrier.routes,
  ...Users.routes,
  ...Dashboard.routes,
  ...Support.routes,
  ...Coupon.routes,
  ...Accounting.routes,
  ...Import.routes,
  ...Crm.routes,
  ...Docs.routes,
  ...Config.routes,
  ...Products.routes,
  ...Professionals.routes,
  ...Shop.routes,
  ...Freight.routes,
  ...Queues.routes,
  {
    path: "/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () =>
          import("@controleonline/quasar-dashboard-ui/src/pages/Dashboard.vue"),
      },
    ],
  },

  {
    path: "/calc",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "CalculatorIndex",
        path: "calculator",
        component: () => import("pages/Calculator.vue"),
      },
    ],
  },
  {
    path: "/infos/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "BasicInfoIndex",
        path: ":id",
        component: () => import("pages/BasicInfo/Index.vue"),
      },
    ],
  },
  {
    path: "/planos/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "PlansIndex",
        path: "",
        component: () => import("pages/Plans/Index.vue"),
      },
      {
        name: "PlansDetails",
        path: ":id",
        component: () => import("pages/Plans/Details.vue"),
      },
      {
        name: "PlansCreate",
        path: "novo",
        component: () => import("pages/Plans/Create.vue"),
      },
    ],
  },
  {
    path: "/etapas-do-cadastro/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "StepsRegistration",
        path: "",
        component: () => import("pages/StepsRegistration/Index.vue"),
      },
      {
        name: "StepsRegistrationAnalysis",
        path: ":id",
        component: () => import("pages/StepsRegistration/Analysis.vue"),
      },
      {
        name: "StepsRegistrationHistory",
        path: ":id/historico",
        component: () => import("pages/StepsRegistration/Historico.vue"),
      },
    ],
  },

  {
    path: "/servicos-adicionais/",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        name: "ServicosAdicionaisIndex",
        path: "",
        component: () => import("pages/Servicos/Index.vue"),
      },
      {
        name: "ServicosAdicionaisCreate",
        path: "novo",
        component: () => import("pages/Servicos/Create.vue"),
      },
      {
        name: "ServicosAdicionaisEdit",
        path: ":id",
        component: () => import("pages/Servicos/Edit.vue"),
      },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
];

export default routes;
