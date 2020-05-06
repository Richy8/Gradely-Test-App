import Vue from "vue";
import VueRouter from "vue-router";

import schoolRoute from "./schoolRoute.js";

Vue.use(VueRouter);

const routes = [...schoolRoute];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  duplicateNavigationPolicy: 'reload' 
});

export default router;