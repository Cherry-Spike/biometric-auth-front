import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/pages/Login'
import BasicDashboard from './views/dashboard/BasicDashboard'
import Alerts from './views/pages/Alerts'
import Profile from './views/pages/Profile'
import Layout from './layouts/Layout'

Vue.use(Router)

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
            props: false
        },
        {
            path: '/dashboard',
            component: Layout,
            children: [
                // Components
                {
                    path: '',
                    component: BasicDashboard,
                },
                {
                    path: 'alerts',
                    component: Alerts,
                },
                {
                    path: 'profile',
                    component: Profile,
                },
                {
                    name: 'Icons',
                    path: 'icons',
                    component: () => import('@/views/pages/Icons'),
                }
            ]
        },


    ],
})