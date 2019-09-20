import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Admin from '@/views/Admin'
import AddNewItems from '@/components/admin/AddNewItems'
import Menu from '@/views/Menu'

Vue.use(Router)

export default new Router({
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
      component: Admin
    },
    {
      path: '/addNew',
      name: 'AddNew',
      component: AddNewItems
    }
  ]
})
