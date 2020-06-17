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
        path: "/school/onboarding",
        name: "SchoolOnboarding",
        component: () => import( /* webpackChunkName: "setup" */ "@/views/schoolViews/Onboarding"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/school/calendar",
        component: BaseSchoolEntry,
        children: [{
            path: "",
            name: "SchoolCalendar",
            component: () => import( /* webpackChunkName: "SchoolCalendar" */ "@/views/globalViews/Calendar"),
            meta: {
                requiresAuth: true
            }
        }]
    },
    {
        path: "/school/dashboard",
        component: BaseEntry,
        children: [{
                path: "",
                name: "SchoolDashboard",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/schoolViews/Dashboard/Home"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/teacher",
                name: "SchoolDashboardTeacher",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/schoolViews/Dashboard/Teacher"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/parent",
                name: "SchoolDashboardParent",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/schoolViews/Dashboard/Parent"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/message",
                name: "SchoolDashboardMessage",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/globalViews/Message"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/profile",
                name: "SchoolProfile",
                component: () => import( /* webpackChunkName: "schooldashboard" */ "@/views/schoolViews/Dashboard/Profile/SchoolProfile"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: "/school/dashboard/settings",
        component: SettingsEntry,
        children: [{
                path: "",
                name: "SchoolSettingsProfile",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SchoolSettingsProfile"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/settings/user",
                name: "SchoolSettingsUser",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SchoolSettingsUser"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/settings/personal_information",
                name: "SchoolSettingsUserEdit",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SchoolSettingsUserEdit"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/settings/preferences",
                name: "SchoolSettingsPreferences",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SchoolPreferences"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/settings/notification",
                name: "SchoolSettingsNotification",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsNotification"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/settings/account_settings",
                name: "SchoolSettingsAccount",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsAccount"),
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },
    {
        path: "/school/dashboard/class",
        component: SubEntry,
        children: [{
                path: "",
                name: "ClassFeeds",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassFeeds"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/class/members",
                name: "ClassMembers",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassMembers"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/class/homework",
                name: "ClassHomework",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassHomework"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/class/report",
                name: "ClassReport",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassReport"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/add_students",
                name: "AddStudents",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/AddStudents"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: "/school/dashboard/class/:post_id",
        component: PostEntry,
        children: [{
            path: "",
            name: "ClassFeedView",
            component: () => import( /* webpackChunkName: "classfeedview" */ "@/views/schoolViews/Dashboard/Classes/ClassFeedView"),
            meta: {
                requiresAuth: true
            }
        }]
    },
    {
        path: "/school/dashboard/class/homework_review",
        component: BaseClassEntry,
        children: [{
                path: "",
                name: "HomeworkReview",
                component: () => import( /* webpackChunkName: "classdashboard" */ "@/views/schoolViews/Dashboard/Classes/HomeworkReview"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/teacher/profile",
                name: "TeacherProfile",
                component: () => import( /* webpackChunkName: "profile" */ "@/views/schoolViews/Dashboard/Profile/TeacherProfile"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/student/profile",
                name: "StudentProfile",
                component: () => import( /* webpackChunkName: "profile" */ "@/views/schoolViews/Dashboard/Profile/StudentProfile"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/student/topic_trend",
                name: "StudentTopicTrend",
                component: () => import( /* webpackChunkName: "profile" */ "@/views/schoolViews/Dashboard/Classes/StudentTopicTrend"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
]

export default schoolRoute;