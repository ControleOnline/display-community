<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  
  methods: {
    ...mapActions({
      setIndexRoute: 'auth/setIndexRoute'
    })
  },
  
  created() {
    /* global configs */
    this.setIndexRoute('HomeIndex');
  }
}
</script>
