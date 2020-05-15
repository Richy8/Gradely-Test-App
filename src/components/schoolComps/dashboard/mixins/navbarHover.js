export const navHover = {
    data() {
        return {
            active_route: ""
        };
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
        }
    }
}