import Signup from "@/views/schoolViews/Signup";
import Setup from "@/views/schoolViews/Setup";

import DashboardView from "@/views/schoolViews/Dashboard/DashboardView";
import Home from "@/views/schoolViews/Dashboard/Home";
import Calendar from "@/views/schoolViews/Dashboard/Calendar";
import Teacher from "@/views/schoolViews/Dashboard/Teacher";
import Parent from "@/views/schoolViews/Dashboard/Parent";
import Message from "@/views/schoolViews/Dashboard/Message";

import ProfileView from "@/views/schoolViews/Profile/ProfileView"
import StudentProfile from "@/views/schoolViews/Profile/StudentProfile";
import TeacherProfile from "@/views/schoolViews/Profile/TeacherProfile";

import SettingsView from "@/views/schoolViews/Settings/SettingsView";
import SchoolProfile from "@/views/schoolViews/Dashboard/SchoolProfile";
import SchoolSettings from "@/views/schoolViews/Settings/SchoolSettings";
import SchoolSettingsPersonalUser from "@/views/schoolViews/Settings/SchoolSettingsPersonalUser";
import SchoolSettingsPersonal from "@/views/schoolViews/Settings/SchoolSettingsPersonal";
import SchoolSettingsPreferences from "@/views/schoolViews/Settings/SchoolSettingsPreferences";
import SchoolSettingsAccount from "@/views/schoolViews/Settings/SchoolSettingsAccount";

import ClassView from "@/views/schoolViews/Classes/ClassView";
import ClassFeeds from "@/views/schoolViews/Classes/ClassFeeds";
import ClassMembers from "@/views/schoolViews/Classes/ClassMembers";
import ClassHomework from "@/views/schoolViews/Classes/ClassHomework";
import HomeworkReview from "@/views/schoolViews/Classes/HomeworkReview";
import ClassReport from "@/views/schoolViews/Classes/ClassReport";
import AddStudents from "@/views/schoolViews/Classes/AddStudents";

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
        path: "/school/dashboard/teacher_profile",
        component: ProfileView,
        children: [{
                path: "",
                name: "TeacherProfile",
                component: TeacherProfile
            },
            {
                path: "/school/dashboard/student_profile",
                name: "StudentProfile",
                component: StudentProfile
            },
            {
                path: "/school/dashboard/class/homework_review",
                name: "HomeworkReview",
                component: HomeworkReview
            }
        ]
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
                path: "/school/dashboard/message",
                name: "SchoolDashboardMessage",
                component: Message
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
            },
            {
                path: "/school/dashboard/class",
                component: ClassView,
                children: [{
                        path: "",
                        name: "ClassFeeds",
                        component: ClassFeeds
                    },
                    {
                        path: "/school/dashboard/class/members",
                        name: "ClassMembers",
                        component: ClassMembers
                    },
                    {
                        path: "/school/dashboard/class/homework",
                        name: "ClassHomework",
                        component: ClassHomework
                    },
                    {
                        path: "/school/dashboard/class/report",
                        name: "ClassReport",
                        component: ClassReport
                    },
                    {
                        path: "/school/dashboard/add_students",
                        name: "AddStudents",
                        component: AddStudents
                    }
                ]
            }
        ]
    }
]

export default schoolRoute;