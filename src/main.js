import Vue from "vue";
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";

// IMPORT APPLICATION STYLING LINKS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'mdbvue/lib/css/mdb.min.css';
import 'mdbvue/lib/mdbvue.css';
import '../public/css/app.css';
// IMPORT APPLICATION STYLING LINKS

import vueHeadful from "vue-headful";
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueLazyload from "vue-lazyload";
import vWow from 'v-wow';
import RenderAssets from "@/scripts/mixins/RenderAssets";

// SETUP API VARIABLES
Vue.prototype.$axios = Axios;
Vue.prototype.$api_version = "v2"; //API CURRENT VERSION
Vue.prototype.$base_api = `https://apitest.gradely.ng/`; //BASE API URL
Vue.prototype.$api_path = `${Vue.prototype.$base_api}${Vue.prototype.$api_version}`; //FULL API URL PATH

// GET TOKEN FROM LOCAL STORAGE
const authToken = localStorage.getItem('gradelyAuthToken');
if (authToken) {
  Vue.prototype.$axios.defaults.headers.common['Authorization'] = authToken;
}

Vue.component("vue-headful", vueHeadful);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(CKEditor);
Vue.use(VueLazyload);
Vue.use(vWow);
Vue.mixin(
  RenderAssets
)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");