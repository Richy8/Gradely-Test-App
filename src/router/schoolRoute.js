import Signup from "@/views/schoolViews/Signup.vue";
import Setup from "@/views/schoolViews/Setup.vue";
import WelcomeDialog from "@/views/schoolViews/WelcomeDialog.vue";
import DashboardView from "@/views/schoolViews/Dashboard/DashboardView.vue";
import Home from "@/views/schoolViews/Dashboard/Home.vue";

const schoolRoute = [{
        path: "/school/signup",
        name: "SchoolSignup",
        component: Signup
    },

    {
        path: "/school/setup",
        name: "SchoolSetup",
        component: Setup
    },

    {
        path: "/school/welcome",
        name: "SchoolWelcome",
        component: WelcomeDialog
    },

    {
        path: "/school/dashboard",
        component: DashboardView,
        children: [{
            path: "",
            name: "SchoolDashboard",
            component: Home
        }]
    }
]

export default schoolRoute;