import Vue from "vue";
import VueRouter from "vue-router";

import Signup from "@/pages/school/Signup.vue";
import SchoolSetup from "@/pages/school/SchoolSetup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {title: 'SignUp - Gradely.Ng'}
  },
  {
    path: "/school_setup",
    name: "SchoolSetup",
    component: SchoolSetup,
    meta: {title: 'School Setup - Gradely.Ng'},
  },
  {
    path: "/",
    // name: "Home",
    // component: Home,
    redirect: {name: "Signup"},
    meta: {title: 'Welcome to Gradely.Ng'}
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
