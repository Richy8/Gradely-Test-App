import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "@/pages/school/signup/Signup.vue";
import Setup from "@/pages/school/signup/Setup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Signup",
    component: Signup,
    children: [{
      path: "/setup",
      name: "Setup",
      component: Setup
    }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
