// GLOBAL ROUTES

const authRoute = [{
        path: "/login",
        name: "GradelyLogin",
        component: () => import( /* webpackChunkName: "auth" */ "@/views/globalViews/Auth/Login")
    },
    {
        path: "/forget_password",
        name: "GradelyForgetPassword",
        component: () => import( /* webpackChunkName: "auth" */ "@/views/globalViews/Auth/ForgetPassword")
    },
    {
        path: "/reset_password",
        name: "GradelyResetPassword",
        component: () => import( /* webpackChunkName: "auth" */ "@/views/globalViews/Auth/PasswordReset")
    },
]

export default authRoute;