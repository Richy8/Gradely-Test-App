import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/pages/Home"
import schoolRoutes from "./schoolRoutes.js";

Vue.use(VueRouter);

const routes = [
  ...schoolRoutes,
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Welcome to Gradely.Ng'
    }
  },
  {
    path: "/About",
    name: "About",      
    meta: {
      title: 'About page of Gradely'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;