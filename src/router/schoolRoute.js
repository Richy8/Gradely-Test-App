import Signup from "@/views/schoolViews/Signup";
import Setup from "@/views/schoolViews/Setup";
import DashboardView from "@/views/schoolViews/Dashboard/DashboardView";
import SettingsView from "@/views/schoolViews/Settings/SettingsView";
import Home from "@/views/schoolViews/Dashboard/Home";
import Calendar from "@/views/schoolViews/Dashboard/Calendar";
import Teacher from "@/views/schoolViews/Dashboard/Teacher";
import Parent from "@/views/schoolViews/Dashboard/Parent";
import SchoolProfile from "@/views/schoolViews/Dashboard/SchoolProfile";
import SchoolSettings from "@/views/schoolViews/Settings/SchoolSettings";
import SchoolSettingsPersonalUser from "@/views/schoolViews/Settings/SchoolSettingsPersonalUser";
import SchoolSettingsPersonal from "@/views/schoolViews/Settings/SchoolSettingsPersonal";
import SchoolSettingsPreferences from "@/views/schoolViews/Settings/SchoolSettingsPreferences";
import SchoolSettingsAccount from "@/views/schoolViews/Settings/SchoolSettingsAccount";

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
        path: "/school/dashboard",
        component: DashboardView,
        children: [{
                path: "",
                name: "SchoolDashboard",
                component: Home
            },
            {
                path: "/school/dashboard/calendar",
                name: "SchoolDashboardCalendar",
                component: Calendar
            },
            {
                path: "/school/dashboard/teacher",
                name: "SchoolDashboardTeacher",
                component: Teacher
            },
            {
                path: "/school/dashboard/parent",
                name: "SchoolDashboardParent",
                component: Parent
            },
            {
                path: "/school/dashboard/profile",
                name: "SchoolDashboardProfile",
                component: SchoolProfile
            },
            {
                path: "/school/dashboard/settings",
                component: SettingsView,
                children: [{
                        path: "",
                        name: "SchoolSettings",
                        component: SchoolSettings
                    },
                    {
                        path: "/school/dashboard/settings/user",
                        name: "SchoolSettingsUser",
                        component: SchoolSettingsPersonalUser
                    },
                    {
                        path: "/school/dashboard/settings/personal_information",
                        name: "SchoolSettingsPersonal",
                        component: SchoolSettingsPersonal
                    },
                    {
                        path: "/school/dashboard/settings/preferences",
                        name: "SchoolSettingsPreferences",
                        component: SchoolSettingsPreferences
                    },
                    {
                        path: "/school/dashboard/settings/account_settings",
                        name: "SchoolSettingsAccount",
                        component: SchoolSettingsAccount
                    },
                ]
            }
        ]
    }
]

export default schoolRoute;