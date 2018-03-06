import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Land from '@/components/Land'
import NewPost from '@/components/NewPost'

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
      component: NewPost
    }
  ]
})
