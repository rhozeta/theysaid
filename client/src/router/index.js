import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Land from '@/components/Land'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Main',
      component: Main
    },
    {
      path: '/',
      name: 'Landing',
      component: Land
    }
  ]
})
