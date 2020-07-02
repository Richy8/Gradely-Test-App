import BaseEntry from "@/views/parentViews/EntryViews/BaseEntry";

const parentsRoute = [
    {
        path: "/parent/signup",
        name: "parentSignup",
        component: () => import( /* webpackChunkName: "signup" */ "@/views/parentViews/Signup.vue")
    },
    {
        path: "/parent/dashboard/feeds",
        component: BaseEntry,
        children: [{
                path: "",
                name: "ParentFeeds",
                component: () => import( /* webpackChunkName: "teacherdashboard" */ "@/views/parentViews/Dashboard/Feeds"),
                meta: {
                    requiresAuth: true
                },
            },
            
        ]

    }
]

export default parentsRoute;