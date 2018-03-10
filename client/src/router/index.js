import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Land from '@/components/Land'
import Profile from '@/components/Profile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/',
      name: 'Landing',
      component: Land
    },
    {
      path: '/main/new',
      name: 'NewPost',
      component: require('@/components/NewPost.vue').default
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/components/Login.vue').default
    },
    {
      path: '/register',
      name: 'Register',
      component: require('@/components/Signup.vue').default
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
