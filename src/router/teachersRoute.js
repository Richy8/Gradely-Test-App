// IMPORT ROUTE VIEWS
import BaseTeacherEntry from "@/views/teacherViews/EntryViews/BaseTeacherEntry";
import BaseEntry from "@/views/teacherViews/EntryViews/BaseEntry";
import BaseSubEntry from "@/views/teacherViews/EntryViews/BaseSubEntry";
import SettingsEntry from "@/views/teacherViews/EntryViews/SettingsEntry";

const teachersRoute = [{
        path: "/teacher/signup",
        name: "TeacherSignup",
        component: () => import( /* webpackChunkName: "signup" */ "@/views/teacherViews/Signup")
    },
    {
        path: "/teacher/onboarding",
        name: "TeacherOnboarding",
        component: () => import( /* webpackChunkName: "onboarding" */ "@/views/teacherViews/Onboarding")
    },
    {
        path: "/teacher/calendar",
        component: BaseTeacherEntry,
        children: [{
            path: "",
            name: "TeacherCalendar",
            component: () => import( /* webpackChunkName: "teacherCalendar" */ "@/views/globalViews/Calendar"),
            meta: {
                requiresAuth: true
            }
        }]
    },
    {
        path: "/teacher/dashboard/feeds",
        component: BaseEntry,
        children: [{
                path: "",
                name: "TeacherFeeds",
                component: () => import( /* webpackChunkName: "teacherdashboard" */ "@/views/teacherViews/Dashboard/Feeds"),
                meta: {
                    requiresAuth: true
                },
            },
            {
                path: "/teacher/dashboard/members",
                name: "TeacherMembers",
                component: () => import( /* webpackChunkName: "teacherdashboard" */ "@/views/teacherViews/Dashboard/Members"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/homework",
                name: "TeacherHomework",
                component: () => import( /* webpackChunkName: "teacherdashboard" */ "@/views/teacherViews/Dashboard/Homework"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/report",
                name: "TeacherReport",
                component: () => import( /* webpackChunkName: "teacherdashboard" */ "@/views/teacherViews/Dashboard/Report"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/message",
                name: "TeacherDasboardMessage",
                component: () => import( /* webpackChunkName: "teacherdashboard" */ "@/views/globalViews/Message"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/add_students",
                name: "AddStudents_TP",
                component: () => import( /* webpackChunkName: "teacherdashboard" */ "@/views/schoolViews/Dashboard/Classes/AddStudents"),
                meta: {
                    requiresAuth: true
                }
            }
        ]

    },
    {
        path: "/teacher/dashboard/settings",
        component: SettingsEntry,
        children: [{
                path: "",
                name: "TeacherSettingsProfile",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/TeacherSettingsProfile"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/settings/preferences",
                name: "TeacherSettingsPreferences",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/TeacherPreferences"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/settings/notification",
                name: "TeacherSettingsNotification",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsNotification"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/settings/account_settings",
                name: "TeacherSettingsAccount",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsAccount"),
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },
    {
        path: "/teacher/dashboard/homework_review",
        component: BaseSubEntry,
        children: [{
                path: "",
                name: "HomeworkReview_TP",
                component: () => import( /* webpackChunkName: "teacherdashboard" */ "@/views/schoolViews/Dashboard/Classes/HomeworkReview"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/teacher/profile",
                name: "TeacherProfile_TP",
                component: () => import( /* webpackChunkName: "profile" */ "@/views/schoolViews/Dashboard/Profile/TeacherProfile"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/student/profile",
                name: "StudentProfile_TP",
                component: () => import( /* webpackChunkName: "profile" */ "@/views/schoolViews/Dashboard/Profile/StudentProfile"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/teacher/dashboard/student/topic_trend",
                name: "StudentTopicTrend_TP",
                component: () => import( /* webpackChunkName: "profile" */ "@/views/schoolViews/Dashboard/Classes/StudentTopicTrend"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
]

export default teachersRoute;