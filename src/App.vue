<template>
  <div id="q-app">
    <Analytics /> 
<ThemeConfig/>
    <router-view />
  </div>
</template>
<script>
import Analytics from "@controleonline/quasar-common-ui/src/components/Common/Analytics";
import ThemeConfig from "@controleonline/quasar-layout-ui/src/layouts/ThemeConfig";

import { mapActions } from "vuex";
export default {
  components: {
    Analytics,
    ThemeConfig
  },
  name: "App",
  methods: {
    ...mapActions({
      setIndexRoute: "auth/setIndexRoute",
    }),
  },
  created() {
    this.setIndexRoute();
  },
};
</script>
