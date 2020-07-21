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
  duplicateNavigationPolicy: 'reload',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});


// CHECK USER SESSION TIMEOUT
const checkTimeout = minutes => {
  let timeout = Number(minutes) * 60000;
  let entry_time = Number(localStorage.timestamp);
  let current_time = Number(+new Date())

  if ((current_time - entry_time) > timeout) {
    delete localStorage.gradelyAuthToken;
    delete localStorage.authUser;
    delete localStorage.timestamp;
    return true;
  } else {
    localStorage.timestamp = +new Date();
    return false
  }
}


// CHECK ALL ROUTE BEFORE ENTRY
router.beforeEach((to, from, next) => {
  // VERIFY IF ROUTE NEEDS AUTHENTICATION
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('gradelyAuthToken') === null) {
      next({
        name: 'GradelyLogin'
      })
    } else if (localStorage.getItem('gradelyAuthToken') !== null) {
      let route_type_to = to.path.split("/")[1]; // ACCOUNT TYPE ACCESSING 
      let user_type = JSON.parse(localStorage.getItem('authUser')).type; // CURRENT ACCOUNT TYPE

      // CHECK SESSION TIMEOUT
      if (checkTimeout(50)) {
        next({
          name: 'GradelyLogin'
        })
      } else {
        (route_type_to !== user_type) ? next(`${user_type}/dashboard`): next(); // CHECK CORRECT ACCOUNT TYPE
      }

    }
  }
  // VERIFY IF ROUTE IS A JUST A GUEST 
  else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('gradelyAuthToken') === null) {
      next();
    } else {
      let user_type = JSON.parse(localStorage.getItem('authUser')).type;

      // CHECK SESSION TIMEOUT
      if (checkTimeout(45)) {
        next({
          name: 'GradelyLogin'
        })
      } else {
        next(`/${user_type}/dashboard`)
      }

    }
  } else {
    next();
  }
})

export default router;