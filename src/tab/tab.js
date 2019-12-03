import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(require('vue-moment'))

new Vue({
  el: '#app',
  render: h => h(App)
})
