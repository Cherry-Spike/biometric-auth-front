import Vue from 'vue';
import store from './store.js';
import Router from 'vue-router';
import Login from './views/pages/Login';
import UsuariosCadastrados from './views/dashboard/UsuariosCadastrados';
import Agrotoxicos from './views/dashboard/Agrotoxicos';
import Registro from './views/pages/Registro';
import Layout from './layouts/Layout';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      props: false,
    },
    {
      path: '/dashboard',
      component: Layout,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'usuarios-cadastrados',
          component: UsuariosCadastrados,
        },
        {
          path: 'registro',
          component: Registro,
        },
        {
          path: 'agrotoxicos',
          component: Agrotoxicos,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
