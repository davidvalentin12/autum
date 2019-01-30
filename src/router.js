
import firebase from 'firebase'
import Vue from 'vue'
import Router from 'vue-router'
import Overview from './views/pages/Overview.vue'
import Clients from './views/pages/Clients.vue'
import Client from './views/components/Client.vue'
import MainLayout from './views/MainLayout.vue'
import Login from '@/views/pages/Login'
import SignUp from '@/views/pages/SignUp'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/overview',
      component: MainLayout,
      children: [{ name: 'overview', path: '', component: Overview }],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/clients',
      component: MainLayout,
      children: [
        { name: 'clients', path: '/clients', component: Clients },
        { name: 'client', path: '/clients/:id', component: Client }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('overview')
  else next()
})

export default router
