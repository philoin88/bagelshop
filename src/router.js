import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Admin from '@/views/Admin'
import AddNewItems from '@/components/admin/AddNewItems'
import Menu from '@/views/Menu'
import Login from '@/components/admin/Login'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addNew',
      name: 'AddNew',
      component: AddNewItems,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else next()
})

export default router
