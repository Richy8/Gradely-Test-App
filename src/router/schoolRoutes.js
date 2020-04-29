import Signup from "@/pages/school/Signup.vue";
import SchoolSetup from "@/pages/school/SchoolSetup.vue";

import DashboardView from "@/pages/school/DashboardView.vue";
import Dashboard from "@/pages/school/Dashboard.vue";
import Teachers from "@/pages/school/Teachers.vue";
import Parents from "@/pages/school/Parents.vue";
import Messages from "@/pages/school/Messages.vue";
import Classes from "@/pages/school/Classes.vue";

const schoolRoutes = [{
        path: "/signup",
        name: "Signup",
        component: Signup,
        meta: {
            title: 'SignUp - Gradely.Ng'
        }
    },

    {
        path: "/school_setup",
        name: "SchoolSetup",
        component: SchoolSetup,
        meta: {
            title: 'School Setup - Gradely.Ng'
        },
    },

    {
        path: "/school",
        component: DashboardView,
        children: [{
                path: "",
                name: "Dashboard",
                component: Dashboard,
                meta: {
                    title: 'School Dashboard - Gradely.Ng'
                }
            },
            {
                path: "/school/teachers",
                name: "Teachers",
                component: Teachers,
                meta: {
                    title: 'School Teachers - Gradely.Ng'
                }
            },
            {
                path: "/school/parents",
                name: "Parents",
                component: Parents,
                meta: {
                    title: 'School Parents - Gradely.Ng'
                }
            },
            {
                path: "/school/messages",
                name: "Messages",
                component: Messages,
                meta: {
                    title: 'School Messages - Gradely.Ng'
                }
            },
            {
                path: "/school/classes",
                name: "Classes",
                component: Classes,
                meta: {
                    title: 'School Classes - Gradely.Ng'
                }
            }
        ]
    },
]

export default schoolRoutes