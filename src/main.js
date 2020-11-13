import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import './plugins/base';
import Axios from 'axios'

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
