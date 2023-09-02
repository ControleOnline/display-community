<template>
  <div id="q-app">
    <Analytics />
    <router-view />
  </div>
</template>
<script>
import Analytics from "@controleonline/quasar-common-ui/src/components/Common/Analytics";
import { mapActions } from "vuex";
export default {
  components: {
    Analytics,
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
