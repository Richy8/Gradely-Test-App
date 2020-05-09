<template>
<div>
    <div class="navbar-section position-fixed w-100 index-9 white">

        <!-- DESKTOP SCREEN VIEW -->
        <div class="container h-auto d-none d-md-block">
            <div class="row d-flex justify-content-between align-items-center nowrap">
                <!-- BRAND LOGO -->
                <div class="brand-logo">
                    <a href="/school/dashboard">
                        <img src="@/assets/images/Gradely.png" alt="Gradely.ng">
                    </a>
                </div>

                <!-- NAVIGATION -->
                <div class="nav-items d-flex justify-content-center align-items-center nowrap">
                    <!-- HOME ICON -->
                    <div class="nav-item">
                        <router-link to="/school/dashboard" @mouseenter.native.self="navHover($event, 'home')" @mouseleave.native.self="navHover($event, 'home')">
                            <div class="nav-icon cust_icon home_icon" :class="{'home_icon_color': home_active}" id="homeIcon"></div>
                            <div class="nav-text">Home</div>
                        </router-link>
                    </div>

                    <!-- TEACHER ICON -->
                    <div class="nav-item">
                        <router-link to="/school/dashboard/teacher" @mouseenter.native.self="navHover($event, 'teacher')" @mouseleave.native.self="navHover($event, 'teacher')">
                            <div class="nav-icon cust_icon teacher_icon" :class="{'teacher_icon_color': teacher_active}" id="teacherIcon"></div>
                            <div class="nav-text">Teachers</div>
                        </router-link>
                    </div>

                    <!-- PARENTS ICON -->
                    <div class="nav-item">
                        <router-link to="/school/dashboard/parent" @mouseenter.native.self="navHover($event, 'parent')" @mouseleave.native.self="navHover($event, 'parent')">
                            <div class="nav-icon cust_icon parent_icon" :class="{'parent_icon_color': parent_active}" id="parentIcon"></div>
                            <div class="nav-text">Parents</div>
                        </router-link>
                    </div>

                    <!-- MESSAGES ICON -->
                    <div class="nav-item">
                        <router-link to="/school/dashboard/message" @mouseenter.native.self="navHover($event, 'message')" @mouseleave.native.self="navHover($event, 'message')">
                            <div class="nav-icon cust_icon message_icon" :class="{'message_icon_color': message_active}" id="messageIcon"></div>
                            <div class="nav-text">Messages</div>
                        </router-link>
                    </div>
                </div>

                <!-- MORE ICONS -->
                <div class="more-icons d-flex justify-content-end align-items-center">
                    <div class="icon avatar avatar-square" @mouseenter.self="fillSearch($event)" @mouseleave.self="fillSearch($event)">
                        <div class="avatar-img cust_icon search_icon icon_sm_mid"></div>
                    </div>

                    <div class="icon avatar avatar-square" @mouseenter.self="fillBell($event)" @mouseleave.self="fillBell($event)">
                        <div class="avatar-img cust_icon bell_icon icon_sm_mid"></div>
                        <div class="badge-circle brand_red_bg index-9"></div>
                    </div>

                    <div class="icon avatar avatar-square" @mouseenter.self="fillGear($event)" @mouseleave.self="fillGear($event)">
                        <div class="avatar-img cust_icon gear_icon icon_sm_mid"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- TABLET - MOBILE NAVIGATION VIEW -->
        <div class="container h-auto d-md-none tablet">
            <div class="row d-flex justify-content-between align-items-center nowrap">
                <!-- GEAR ICON -->
                <div class="gear-icon">
                    <div class="icon avatar avatar-square" @mouseenter.self="fillGear($event)" @mouseleave.self="fillGear($event)">
                        <div class="avatar-img cust_icon gear_icon icon_sm_mid"></div>
                    </div>
                </div>

                <!-- BRAND LOGO -->
                <div class="brand-logo">
                    <a href="/school/dashboard">
                        <img src="@/assets/images/Gradely.png" alt="Gradely.ng">
                    </a>
                </div>

                <!-- MORE ICONS -->
                <div class="more-icons d-flex justify-content-end align-items-center">
                    <div class="icon avatar avatar-square" @mouseenter.self="fillSearch($event)" @mouseleave.self="fillSearch($event)">
                        <div class="avatar-img cust_icon search_icon icon_sm_mid"></div>
                    </div>

                    <div class="icon avatar avatar-square" @mouseenter.self="fillBell($event)" @mouseleave.self="fillBell($event)">
                        <div class="avatar-img cust_icon bell_icon icon_sm_mid"></div>
                        <div class="badge-circle brand_red_bg index-9"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- MOBILE NAVIGATIONS -->
    <div class="mobile-navigations index-99 w-100 h-auto white d-md-none">
        <!-- HOME ICON -->
        <div class="mobile-nav">
            <router-link to="/school/dashboard" @mouseenter.native.self="navHover($event, 'home')" @mouseleave.native.self="navHover($event, 'home')">
                <div class="nav-icon cust_icon home_icon" :class="{'home_icon_color': home_active}" id="homeMobileIcon"></div>
                <div class="nav-text">Home</div>
            </router-link>
        </div>

        <!-- TEACHER ICON -->
        <div class="mobile-nav">
            <router-link to="/" @mouseenter.native.self="navHover($event, 'teacher')" @mouseleave.native.self="navHover($event, 'teacher')">
                <div class="nav-icon cust_icon teacher_icon" :class="{'teacher_icon_color': teacher_active}" id="teacherMobileIcon"></div>
                <div class="nav-text">Teacher</div>
            </router-link>
        </div>

        <!-- PARENT ICON -->
        <div class="mobile-nav">
            <router-link to="/" @mouseenter.native.self="navHover($event, 'parent')" @mouseleave.native.self="navHover($event, 'parent')">
                <div class="nav-icon cust_icon parent_icon" :class="{'parent_icon_color': parent_active}" id="parentMobileIcon"></div>
                <div class="nav-text">Parents</div>
            </router-link>
        </div>

        <!-- MESSAGE ICON -->
        <div class="mobile-nav">
            <router-link to="/" @mouseenter.native.self="navHover($event, 'message')" @mouseleave.native.self="navHover($event, 'message')">
                <div class="nav-icon cust_icon message_icon" :class="{'message_icon_color': message_active}" id="messageMobileIcon"></div>
                <div class="nav-text">Messages</div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Navbar",

    data() {
        return {
            home_active: false,
            teacher_active: false,
            parent_active: false,
            message_active: false,
            active_route: ""
        };
    },

    mounted() {
        // SELECTORS
        let homeIcon = document.getElementById("homeIcon");
        let teacherIcon = document.getElementById("teacherIcon");
        let parentIcon = document.getElementById("parentIcon");
        let messageIcon = document.getElementById("messageIcon");
        let homeMobileIcon = document.getElementById("homeMobileIcon");
        let teacherMobileIcon = document.getElementById("teacherMobileIcon");
        let parentMobileIcon = document.getElementById("parentMobileIcon");
        let messageMobileIcon = document.getElementById("messageMobileIcon");

        this.active_route = this.$router.currentRoute.name;

        if (this.active_route === "SchoolDashboard") {
            this.home_active = true;
            homeIcon.parentElement.classList.add("active");
            homeMobileIcon.parentElement.classList.add("active");
        } else if (this.active_route === "SchoolDashboardTeacher") {
            this.teacher_active = true;
            teacherIcon.parentElement.classList.add("active");
            teacherMobileIcon.parentElement.classList.add("active");
        } else if (this.active_route === "SchoolDashboardParent") {
            this.parent_active = true;
            parentIcon.parentElement.classList.add("active");
            parentMobileIcon.parentElement.classList.add("active");
        } else if (this.active_route === "SchoolDashboardMessage") {
            this.message_active = true;
            messageIcon.parentElement.classList.add("active");
            messageMobileIcon.parentElement.classList.add("active");
        }
    },

    methods: {
        navHover(event, nav) {
            if (nav === "home") {
                if (this.active_route !== "SchoolDashboard") {
                    if (event.target.classList.contains("active")) {
                        event.target.classList.remove("active");
                        event.target.firstElementChild.classList.remove("home_icon_color");
                    } else {
                        event.target.classList.add("active");
                        event.target.firstElementChild.classList.add("home_icon_color");
                    }
                }
            } else if (nav === "teacher") {
                if (this.active_route !== "SchoolDashboardTeacher") {
                    if (event.target.classList.contains("active")) {
                        event.target.classList.remove("active");
                        event.target.firstElementChild.classList.remove(
                            "teacher_icon_color"
                        );
                    } else {
                        event.target.classList.add("active");
                        event.target.firstElementChild.classList.add("teacher_icon_color");
                    }
                }
            } else if (nav === "parent") {
                if (this.active_route !== "SchoolDashboardParent") {
                    if (event.target.classList.contains("active")) {
                        event.target.classList.remove("active");
                        event.target.firstElementChild.classList.remove(
                            "parent_icon_color"
                        );
                    } else {
                        event.target.classList.add("active");
                        event.target.firstElementChild.classList.add("parent_icon_color");
                    }
                }
            } else if (nav === "message") {
                if (this.active_route !== "SchoolDashboardMessage") {
                    if (event.target.classList.contains("active")) {
                        event.target.classList.remove("active");
                        event.target.firstElementChild.classList.remove(
                            "message_icon_color"
                        );
                    } else {
                        event.target.classList.add("active");
                        event.target.firstElementChild.classList.add("message_icon_color");
                    }
                }
            }
        },

        fillSearch(event) {
            event.target.firstElementChild.classList.contains("search_icon_color") ?
                event.target.firstElementChild.classList.remove("search_icon_color") :
                event.target.firstElementChild.classList.add("search_icon_color");
        },

        fillBell(event) {
            event.target.firstElementChild.classList.contains("bell_icon_color") ?
                event.target.firstElementChild.classList.remove("bell_icon_color") :
                event.target.firstElementChild.classList.add("bell_icon_color");
        },

        fillGear(event) {
            event.target.firstElementChild.classList.contains("gear_icon_color") ?
                event.target.firstElementChild.classList.remove("gear_icon_color") :
                event.target.firstElementChild.classList.add("gear_icon_color");
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
