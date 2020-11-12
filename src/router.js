import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/pages/Login';
import UsuariosCadastrados from './views/dashboard/UsuariosCadastrados';
import Alerts from './views/pages/Alerts';
import Registro from './views/pages/Registro';
import Layout from './layouts/Layout';

Vue.use(Router);

export default new Router({
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
      children: [
        // Components
        {
          path: 'usuarios-cadastrados',
          component: UsuariosCadastrados,
        },
        {
          path: 'alerts',
          component: Alerts,
        },
        {
          path: 'registro',
          component: Registro,
        },
        {
          name: 'Icons',
          path: 'icons',
          component: () => import('@/views/pages/Icons'),
        },
      ],
    },
  ],
});
