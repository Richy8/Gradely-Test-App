import Vue from "vue";
import Vuex from "vuex";
import auth from "./authModule/auth";
// import school from "./schoolModule/school";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});