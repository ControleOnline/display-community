// This is just an example,
// so you can safely delete all default props below

// This is just an example,
// so you can safely delete all default props below

import * as Common from "@controleonline/quasar-common-ui/src/i18n/pt-br/index";
import * as Queues from "@controleonline/quasar-queues-ui/src/i18n/pt-br/index";
import * as Login from "@controleonline/quasar-login-ui/src/i18n/pt-br/index";
export default {
  app: {
    name: "Controle Online",
  },

  ...Common.translate,
  ...Login.translate,
  ...Queues.translate,
};

