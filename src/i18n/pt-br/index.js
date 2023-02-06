// This is just an example,
// so you can safely delete all default props below

// This is just an example,
// so you can safely delete all default props below

import * as Common from "@controleonline/quasar-common-ui/src/i18n/pt-br/index";
import * as Dashboard from "@controleonline/quasar-dashboard-ui/src/i18n/pt-br/index";
import * as Login from "@controleonline/quasar-login-ui/src/i18n/pt-br/index";
import * as Orders from "@controleonline/quasar-orders-ui/src/i18n/pt-br/index";
import * as Financial from "@controleonline/quasar-financial-ui/src/i18n/pt-br/index";
import * as Contracts from "@controleonline/quasar-contracts-ui/src/i18n/pt-br/index";
import * as Tasks from "@controleonline/quasar-tasks-ui/src/i18n/pt-br/index";
import * as Professionals from "@controleonline/quasar-professionals-ui/src/i18n/pt-br/index";
import * as Carriers from "@controleonline/quasar-carrier-ui/src/i18n/pt-br/index";
import * as Quote from "@controleonline/quasar-quote-ui/src/i18n/pt-br/index";
import * as Coupon from "@controleonline/quasar-coupon-ui/src/i18n/pt-br/index";
import * as Accounting from "@controleonline/quasar-accounting-ui/src/i18n/pt-br/index";
import * as Import from "@controleonline/quasar-import-ui/src/i18n/pt-br/index";
import * as CRM from "@controleonline/quasar-crm-ui/src/i18n/pt-br/index";
import * as People from "@controleonline/quasar-people-ui/src/i18n/pt-br/index";
import * as Docs from "@controleonline/quasar-docs-ui/src/i18n/pt-br/index";
import * as Config from "@controleonline/quasar-config-ui/src/i18n/pt-br/index";
import * as Products from "@controleonline/quasar-products-ui/src/i18n/pt-br/index";
import * as Queues from "@controleonline/quasar-queues-ui/src/i18n/pt-br/index";

export default {
  app: {
    name: "Controle Online",
  },
  ...People.translate,
  ...Accounting.translate,
  ...Coupon.translate,
  ...Common.translate,
  ...Dashboard.translate,
  ...Orders.translate,
  ...Financial.translate,
  ...Contracts.translate,
  ...Tasks.translate,
  ...Professionals.translate,
  ...Carriers.translate,
  ...Quote.translate,
  ...Import.translate,
  ...CRM.translate,
  ...Docs.translate,
  ...Config.translate,
  ...Products.translate,
  ...Login.translate,
  ...Queues.translate,
};
