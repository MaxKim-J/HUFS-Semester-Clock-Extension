import Vue from "vue";
import Vuex from "vuex";
import store from "../store";
import App from "./App";

Vue.use(require("vue-moment"));
Vue.use(Vuex);

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
});
