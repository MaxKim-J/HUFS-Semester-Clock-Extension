import Vue from 'vue'
import App from './App'
import VueMoment from 'vue-moment'

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueMoment)
