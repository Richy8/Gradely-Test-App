import Vue from "vue";
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueHeadful from "vue-headful";
import CKEditor from '@ckeditor/ckeditor5-vue';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'mdbvue/lib/css/mdb.min.css';
import 'mdbvue/lib/mdbvue.css';
import vWow from 'v-wow';

import '../public/css/app.css';

import jQuery from 'jquery'
global.$ = jQuery;

Vue.component("vue-headful", vueHeadful);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(CKEditor);
Vue.use(vWow);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");