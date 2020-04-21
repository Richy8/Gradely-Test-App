import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "@/pages/school/signup/Signup.vue";
import Setup from "@/pages/school/signup/Setup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    // component: Home,
    redirect: {name: "Signup"},
    meta: {title: 'Welcome to Gradely.Ng'}
  },

  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {title: 'SignUp - Gradely.Ng'},
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


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
