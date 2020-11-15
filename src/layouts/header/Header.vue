<template>
  <v-app-bar app clipped-left clipped-right color="green darken-4" dark>
    <v-toolbar-title class="align-center d-flex">
      <h4><v-icon>mdi-fingerprint</v-icon>  Biometric Auth</h4>
    </v-toolbar-title>
    <v-app-bar-nav-icon
      class="d-block d-md-none"
      @click="
        $vuetify.breakpoint.smAndDown
          ? setSidebarDrawer(!Sidebar_drawer)
          : $emit('input', !value)
      "
    />
    <v-spacer />
    <!---right part -->
    <v-menu bottom left transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          :key="Sair"
          @click="logout"
          :active-class="`teal white--text`"
          link
          ><v-list-item-title>Sair</v-list-item-title></v-list-item
        >
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Header',

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(['Sidebar_drawer']),
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    ...mapMutations({
      setSidebarDrawer: 'SET_SIDEBAR_DRAWER',
    }),
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>
