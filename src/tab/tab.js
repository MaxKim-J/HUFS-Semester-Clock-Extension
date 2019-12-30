import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from '../../routes.js'

Vue.use(VueRouter)
Vue.use(require('vue-moment'))

const router = new VueRouter({
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
