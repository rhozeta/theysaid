// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Main from './components/Main'
import router from './router'
import 'vue-awesome/icons'
import Icon from '../node_modules/vue-awesome/components/Icon'
import 'bootstrap'
import {sync} from 'vuex-router-sync'
import VueParticles from 'vue-particles'
import PostsService from './services/PostsService.js'
import store from '@/store/store'
Vue.use(PostsService)
Vue.use(VueParticles)
Vue.component('icon', Icon)
Vue.use(require('vue-moment'))
sync(store, router)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    'Main': Main
  },
  template: '<App/>'
})
