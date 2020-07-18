// GLOBAL ROUTES

const authRoute = [{
        path: "/login",
        name: "GradelyLogin",
        component: () => import( /* webpackChunkName: "auth" */ "@/views/globalViews/Auth/Login"),
        meta: {
            guest: true
        }
    },
    {
        path: "/signup-lander",
        name: "GradelySignupLander",
        component: () => import( /* webpackChunkName: "auth" */ "@/views/globalViews/Auth/SignupLander"),
        meta: {
            guest: true
        }
    },
    {
        path: "/forget-password",
        name: "GradelyForgetPassword",
        component: () => import( /* webpackChunkName: "auth" */ "@/views/globalViews/Auth/ForgetPassword"),
        meta: {
            guest: true
        }
    },
    {
        path: "/reset-password",
        name: "GradelyResetPassword",
        component: () => import( /* webpackChunkName: "auth" */ "@/views/globalViews/Auth/PasswordReset"),
        meta: {
            guest: true
        }
    },
]

export default authRoute;