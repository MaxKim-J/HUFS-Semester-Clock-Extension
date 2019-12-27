import Vue from 'vue'
import App from './App'

Vue.use(require('vue-moment'))

new Vue({
  el: '#app',
  render: h => h(App)
})
