// IMPORT ROUTE VIEWS
import BaseSchoolEntry from "@/views/schoolViews/EntryViews/BaseSchoolEntry";
import BaseEntry from "@/views/schoolViews/EntryViews/BaseEntry";
import SubEntry from "@/views/schoolViews/EntryViews/SubEntry";
import BaseClassEntry from "@/views/schoolViews/EntryViews/BaseClassEntry";
import PostEntry from "@/views/schoolViews/EntryViews/PostEntry";
import SettingsEntry from "@/views/schoolViews/EntryViews/SettingsEntry";

const schoolRoute = [{
        path: "/school/signup",
        name: "SchoolSignup",
        component: () => import( /* webpackChunkName: "signup" */ "@/views/schoolViews/Signup")
    },
    {
        path: "/school/setup",
        name: "SchoolSetup",
        component: () => import( /* webpackChunkName: "setup" */ "@/views/schoolViews/Setup")
    },
    {
        path: "/school/calendar",
        component: BaseSchoolEntry,
        children: [{
            path: "",
            name: "SchoolCalendar",
            component: () => import( /* webpackChunkName: "SchoolCalendar" */ "@/views/globalViews/Calendar")
        }]
    },
    {
        path: "/school/dashboard",
        component: BaseEntry,
        children: [{
                path: "",
                name: "SchoolDashboard",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/schoolViews/Dashboard/Home")
            },
            {
                path: "/school/dashboard/teacher",
                name: "SchoolDashboardTeacher",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/schoolViews/Dashboard/Teacher")
            },
            {
                path: "/school/dashboard/parent",
                name: "SchoolDashboardParent",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/schoolViews/Dashboard/Parent")
            },
            {
                path: "/school/dashboard/message",
                name: "SchoolDashboardMessage",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/schoolViews/Dashboard/Message")
            },
            {
                path: "/school/dashboard/profile",
                name: "SchoolProfile",
                component: () => import( /* webpackChunkName: "schoolprofile" */ "@/views/schoolViews/Dashboard/Profile/SchoolProfile")
            }
        ]
    },
    {
        path: "/school/dashboard/settings",
        component: SettingsEntry,
        children: [{
                path: "",
                name: "SchoolSettingsProfile",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SchoolSettingsProfile")
            },
            {
                path: "/school/dashboard/settings/user",
                name: "SchoolSettingsUser",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SchoolSettingsUser")
            },
            {
                path: "/school/dashboard/settings/personal_information",
                name: "SchoolSettingsUserEdit",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SchoolSettingsUserEdit")
            },
            {
                path: "/school/dashboard/settings/preferences",
                name: "SchoolSettingsPreferences",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SchoolPreferences")
            },
            {
                path: "/school/dashboard/settings/notification",
                name: "SchoolSettingsNotification",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsNotification")
            },
            {
                path: "/school/dashboard/settings/account_settings",
                name: "SchoolSettingsAccount",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsAccount")
            },
        ]
    },
    {
        path: "/school/dashboard/class",
        component: SubEntry,
        children: [{
                path: "",
                name: "ClassFeeds",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassFeeds")
            },
            {
                path: "/school/dashboard/class/members",
                name: "ClassMembers",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassMembers")
            },
            {
                path: "/school/dashboard/class/homework",
                name: "ClassHomework",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassHomework")
            },
            {
                path: "/school/dashboard/class/report",
                name: "ClassReport",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassReport")
            },
            {
                path: "/school/dashboard/class/add_students",
                name: "AddStudents",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/AddStudents")
            }
        ]
    },
    {
        path: "/school/dashboard/class/:post_id",
        component: PostEntry,
        children: [{
            path: "",
            name: "ClassFeedView",
            component: () => import( /* webpackChunkName: "classfeedview" */ "@/views/schoolViews/Dashboard/Classes/ClassFeedView")
        }]
    },
    {
        path: "/school/dashboard/class/homework_review",
        component: BaseClassEntry,
        children: [{
                path: "",
                name: "HomeworkReview",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/HomeworkReview")
            },
            {
                path: "/school/dashboard/teacher/profile",
                name: "TeacherProfile",
                component: () => import( /* webpackChunkName: "profile" */ "@/views/schoolViews/Dashboard/Profile/TeacherProfile")
            },
            {
                path: "/school/dashboard/student/profile",
                name: "StudentProfile",
                component: () => import( /* webpackChunkName: "profile" */ "@/views/schoolViews/Dashboard/Profile/StudentProfile")
            }
        ]
    },
]

export default schoolRoute;