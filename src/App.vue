<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
//import { BrowserAgent } from '@newrelic/browser-agent/src/loaders/browser-agent';
import { mapActions } from "vuex";

export default {
  name: "App",

  methods: {
    ...mapActions({
      setIndexRoute: "auth/setIndexRoute",
    }),
  },

  created() {
    /* global configs */
    this.newrelic();
    //this.setIndexRoute("HomeIndex");
  },

  methods: {
    newrelic() {
      const options = {
        init: {
          distributed_tracing: { enabled: true },
          privacy: { cookies_enabled: true },
          ajax: { deny_list: ["bam.nr-data.net"] },
        }, // NREUM.init
        info: {
          beacon: "bam.nr-data.net",
          errorBeacon: "bam.nr-data.net",
          licenseKey: "NRJS-53f2ae2e19f86352a61",
          applicationID: "1103260930",
          sa: 1,
        }, // NREUM.info
        loader_config: {
          accountID: "4036155",
          trustKey: "4036155",
          agentID: "1103260930",
          licenseKey: "NRJS-53f2ae2e19f86352a61",
          applicationID: "1103260930",
        }, // NREUM.loader_config
      };
      //new BrowserAgent(options);
    },
  },
};
</script>
