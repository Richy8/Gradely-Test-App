import BaseStudentEntry from "@/views/studentViews/EntryViews/BaseStudentEntry";
import BaseEntry from "@/views/studentViews/EntryViews/BaseEntry";
import DarkBaseEntry from "@/views/studentViews/EntryViews/DarkBaseEntry";
import SettingsEntry from "@/views/studentViews/EntryViews/SettingsEntry";

const studentsRoute = [{
        path: "/student/signup",
        name: "StudentSignup",
        component: () => import( /* webpackChunkName: "signup" */ "@/views/studentViews/Signup"),
        meta: {
            guest: true
        }
    },
    {
        path: "/student/onboarding",
        name: "StudentOnboarding",
        component: () => import( /* webpackChunkName: "setup" */ "@/views/studentViews/Onboarding"),
        meta: {
            requiresAuth: true
        },
        beforeEnter(to, from, next) {
            let is_boarded = JSON.parse(localStorage.getItem('authUser')).is_boarded;
            is_boarded === 1 ? next({
                name: 'StudentFeeds'
            }) : next();
        }
    },
    {
        path: "/student/parent-invitation",
        name: "ParentInvitation",
        component: () => import( /* webpackChunkName: "invitation" */ "@/views/studentViews/ParentInvitation"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/student/settings/upgrade-plan",
        name: "StudentUpgradePlan",
        component: () => import( /* webpackChunkName: "billing" */ "@/views/globalViews/Settings/PlanUpgrade"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/student/settings/subscription-success",
        name: "StudentSubscriptionSuccess",
        component: () => import( /* webpackChunkName: "billing" */ "@/views/globalViews/Settings/SubscriptionSuccess"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/student/catchup/book-session",
        name: "StudentSessionBooking",
        component: () => import( /* webpackChunkName: "billing" */ "@/views/parentViews/Dashboard/BookSession"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/student/catchup/booking-success",
        name: "StudentBookingSuccess",
        component: () => import( /* webpackChunkName: "billing" */ "@/views/parentViews/Dashboard/BookingSuccess"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/student/homework/homework-test",
        name: "StudentHomeworkTest",
        component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/HomeworkTest"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/student/homework/practice-test",
        name: "StudentPracticeTest",
        component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/PracticeTest"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/student/homework/practice-summary",
        name: "StudentPracticeSummary",
        component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/PracticeTestSummary"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/student/calendar",
        component: BaseStudentEntry,
        children: [{
            path: "",
            name: "StudentCalendar",
            component: () => import( /* webpackChunkName: "calendar" */ "@/views/globalViews/Calendar"),
            meta: {
                requiresAuth: true
            }
        }]
    },
    {
        path: "/student/dashboard",
        component: BaseEntry,
        children: [{
                path: "",
                name: "StudentFeeds",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/Feeds"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/homework",
                name: "StudentHomework",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/Homework"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/report",
                name: "StudentReport",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/Report"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/student/topic-trend",
                name: "StudentTopicTrend_SP",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/StudentTopicTrend"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/homework/homework-review",
                name: "StudentHomeworkReview",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/HomeworkReview"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: "/student/dashboard/catchup",
        component: DarkBaseEntry,
        children: [{
                path: "",
                name: "StudentCatchup",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/Catchup"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/catchup/video-lesson",
                name: "StudentCatchupVideo",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/CatchupVideo"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/catchup/tutor-profile",
                name: "StudentCatchupTutor",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/CatchupTutor"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: "/student/dashboard/settings",
        component: SettingsEntry,
        children: [{
                path: "",
                name: "StudentSettingsProfile",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsProfile"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/settings/preferences",
                name: "StudentSettingsPreferences",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsPreferences"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/settings/billing",
                name: "StudentSettingsBilling",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsBilling"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/settings/notification",
                name: "StudentSettingsNotification",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsNotification"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/student/dashboard/settings/account-settings",
                name: "StudentSettingsAccount",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsAccount"),
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },
]

export default studentsRoute;