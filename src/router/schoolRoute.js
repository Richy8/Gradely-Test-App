import Signup from "@/views/schoolViews/Signup.vue";
import Setup from "@/views/schoolViews/Setup.vue";
import WelcomeDialog from "@/views/schoolViews/WelcomeDialog.vue";

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
    }
]

export default schoolRoute;