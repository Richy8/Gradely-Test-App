import BaseParentEntry from "@/views/parentViews/EntryViews/BaseParentEntry";
import BaseEntry from "@/views/parentViews/EntryViews/BaseEntry";
import DarkBaseEntry from "@/views/parentViews/EntryViews/DarkBaseEntry";
import SettingsEntry from "@/views/parentViews/EntryViews/SettingsEntry";

const parentsRoute = [{
        path: "/parent/signup",
        name: "ParentSignup",
        component: () => import( /* webpackChunkName: "signup" */ "@/views/parentViews/Signup")
    },
    {
        path: "/parent/onboarding/new_child",
        name: "ParentNewChildOnboarding",
        component: () => import( /* webpackChunkName: "setup" */ "@/views/parentViews/OnboardingOne"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/onboarding/connect_child",
        name: "ParentConnectChildOnboarding",
        component: () => import( /* webpackChunkName: "setup" */ "@/views/parentViews/OnboardingTwo"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/settings/upgrade_plan",
        name: "ParentUpgradePlan",
        component: () => import( /* webpackChunkName: "billing" */ "@/views/globalViews/Settings/PlanUpgrade"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/settings/subscription_success",
        name: "ParentSubscriptionSuccess",
        component: () => import( /* webpackChunkName: "billing" */ "@/views/globalViews/Settings/SubscriptionSuccess"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/catchup/book_session",
        name: "ParentSessionBooking",
        component: () => import( /* webpackChunkName: "billing" */ "@/views/parentViews/Dashboard/BookSession"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/catchup/booking_success",
        name: "ParentBookingSuccess",
        component: () => import( /* webpackChunkName: "billing" */ "@/views/parentViews/Dashboard/BookingSuccess"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/homework/homework_test",
        name: "ParentHomeworkTest",
        component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/HomeworkTest"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/homework/practice_test",
        name: "ParentPracticeTest",
        component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/PracticeTest"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/homework/practice_summary",
        name: "ParentPracticeSummary",
        component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/PracticeTestSummary"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/parent/calendar",
        component: BaseParentEntry,
        children: [{
            path: "",
            name: "ParentCalendar",
            component: () => import( /* webpackChunkName: "calendar" */ "@/views/globalViews/Calendar"),
            meta: {
                requiresAuth: true
            }
        }]
    },
    {
        path: "/parent/dashboard",
        component: BaseEntry,
        children: [{
                path: "",
                name: "ParentFeeds",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/Feeds"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/homework",
                name: "ParentHomework",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/Homework"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/report",
                name: "ParentReport",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/Report"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/student/topic_trend",
                name: "StudentTopicTrend_PP",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/schoolViews/Dashboard/Classes/StudentTopicTrend"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/homework/homework_review",
                name: "ParentHomeworkReview",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/HomeworkReview"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: "/parent/dashboard/catchup",
        component: DarkBaseEntry,
        children: [{
                path: "",
                name: "ParentCatchup",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/Catchup"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/catchup/video_lesson",
                name: "ParentCatchupVideo",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/CatchupVideo"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/catchup/tutor_profile",
                name: "ParentCatchupTutor",
                component: () => import( /* webpackChunkName: "dashboard" */ "@/views/parentViews/Dashboard/CatchupTutor"),
                meta: {
                    requiresAuth: true
                }
            }
        ]
    },
    {
        path: "/parent/dashboard/settings",
        component: SettingsEntry,
        children: [{
                path: "",
                name: "ParentSettingsProfile",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsProfile"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/settings/preferences",
                name: "ParentSettingsPreferences",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsPreferences"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/settings/billing",
                name: "ParentSettingsBilling",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsBilling"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/settings/notification",
                name: "ParentSettingsNotification",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsNotification"),
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: "/parent/dashboard/settings/account_settings",
                name: "ParentSettingsAccount",
                component: () => import( /* webpackChunkName: "settings" */ "@/views/globalViews/Settings/SettingsAccount"),
                meta: {
                    requiresAuth: true
                }
            },
        ]
    },
]

export default parentsRoute;