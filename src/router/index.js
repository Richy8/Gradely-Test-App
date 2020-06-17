import Vue from "vue";
import VueRouter from "vue-router";

import authRoute from "./authRoute.js";
import schoolRoute from "./schoolRoute.js";
import teachersRoute from "./teachersRoute.js";

Vue.use(VueRouter);

const routes = [...authRoute, ...schoolRoute, ...teachersRoute];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  duplicateNavigationPolicy: 'reload'
});

// CHECK ALL ROUTE BEFORE ENTRY
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem('token') === null) {
//       next({
//         name: 'GradelyLogin'
//       })
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// })

export default router;