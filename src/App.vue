<template>
  <v-app
    id="materialpro"
    :class="`${
      !$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'
    }`"
  >
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  },
};
</script>
