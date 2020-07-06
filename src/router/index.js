import Vue from "vue";
import VueRouter from "vue-router";

import globalRoute from "./globalRoute.js";
import authRoute from "./authRoute.js";
import schoolRoute from "./schoolRoute.js";
import teachersRoute from "./teachersRoute.js";
import parentsRoute from "./parentsRoute.js";
import studentsRoute from "./studentsRoute.js";

Vue.use(VueRouter);

const routes = [
  ...globalRoute,
  ...authRoute,
  ...schoolRoute,
  ...parentsRoute,
  ...teachersRoute,
  ...studentsRoute,
];

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