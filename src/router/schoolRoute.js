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
        component: () => import( /* webpackChunkName: "signup" */ "@/views/schoolViews/Signup"),
        meta: {
            guest: true
        }
    },
    {
        path: "/school/onboarding",
        name: "SchoolOnboarding",
        component: () => import( /* webpackChunkName: "setup" */ "@/views/schoolViews/Onboarding"),
        meta: {
            requiresAuth: true
        },
        // beforeEnter(to, from, next) {
        //     let is_boarded = JSON.parse(localStorage.getItem('authUser')).is_boarded;
        //     is_boarded === 1 ? next({
        //         name: 'SchoolDashboard'
        //     }) : next();
        // }
    },
    {
        path: "/school/dashboard/viewer",
        name: "SchoolViewer",
        component: () => import( /* webpackChunkName: "onboarding" */ "@/views/globalViews/LibraryViewer"),
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
            component: () => import( /* webpackChunkName: "calendar" */ "@/views/globalViews/Calendar"),
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
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Home"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/teacher",
                name: "SchoolDashboardTeacher",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Teacher"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/parent",
                name: "SchoolDashboardParent",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Parent"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/message",
                name: "SchoolDashboardMessage",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/globalViews/Message"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/profile",
                name: "SchoolProfile",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Profile/SchoolProfile"),
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
                path: "/school/dashboard/settings/personal-information",
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
                path: "/school/dashboard/settings/account-settings",
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
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassFeeds"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/class/members",
                name: "ClassMembers",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassMembers"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/class/homework",
                name: "ClassHomework",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassHomework"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/class/report",
                name: "ClassReport",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassReport"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/documents",
                name: "SchoolDocuments",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/teacherViews/Dashboard/Documents"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/videos",
                name: "SchoolVideos",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/teacherViews/Dashboard/Videos"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/assessments",
                name: "SchoolAssessments",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/teacherViews/Dashboard/Assessments"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/discussions",
                name: "SchoolDiscussions",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/teacherViews/Dashboard/Discussions"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/school/dashboard/add-students",
                name: "AddStudents",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/AddStudents"),
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
            component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/ClassFeedView"),
            meta: {
                requiresAuth: true
            }
        }]
    },
    {
        path: "/school/dashboard/class/homework-review",
        component: BaseClassEntry,
        children: [{
                path: "",
                name: "HomeworkReview",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/HomeworkReview"),
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
                path: "/school/dashboard/student/topic-trend",
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