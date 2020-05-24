<template>
  <div>
    <div class="navbar-section fixed-top w-100 index-9 white">
      <!-- DESKTOP SCREEN VIEW -->
      <div class="container h-auto d-none d-md-block">
        <div class="row d-flex justify-content-between align-items-center nowrap">
          <!-- BRAND LOGO -->
          <div class="brand-logo">
            <router-link to="/school/dashboard">
              <img src="@/assets/images/Gradely.png" alt="Gradely.ng">
            </router-link>
          </div>

          <!-- NAVIGATION -->
          <div class="nav-items d-flex justify-content-center align-items-center nowrap">
            <!-- HOME ICON -->
            <div class="nav-item">
              <router-link to="/school/dashboard">
                <span class="icon-tachometer"></span>
                <div class="nav-text">Home</div>
              </router-link>
            </div>

            <!-- TEACHER ICON -->
            <div class="nav-item">
              <router-link to="/school/dashboard/teacher" :class="{'active': teacher_active}">
                <span class="icon-teacher"></span>
                <div class="nav-text">Teachers</div>
              </router-link>
            </div>

            <!-- PARENTS ICON -->
            <div class="nav-item">
              <router-link to="/school/dashboard/parent">
                <span class="icon-parent-child"></span>
                <div class="nav-text">Parents</div>
              </router-link>
            </div>

            <!-- MESSAGES ICON -->
            <div class="nav-item">
              <router-link to="/school/dashboard/message">
                <span class="icon-message"></span>
                <div class="nav-text">Messages</div>
              </router-link>
            </div>
          </div>

          <!-- MORE ICONS -->
          <div class="more-icons d-flex justify-content-end align-items-center">
            <div class="icon avatar avatar-square">
              <span class="icon-search"></span>
            </div>

            <div class="icon avatar avatar-square">
              <span class="icon-bell"></span>
              <div class="badge-circle brand_red_bg index-9"></div>
            </div>

            <div class="icon avatar avatar-square">
              <span class="icon-gear" v-on-clickaway="onSlideOut" @click.self="toggleSettings"></span>
            </div>
          </div>
          <!-- MORE ICONS -->
        </div>
      </div>

      <!-- TABLET - MOBILE NAVIGATION VIEW -->
      <div class="container h-auto d-md-none sub-tablet">
        <div class="row d-flex justify-content-between align-items-center nowrap">
          <!-- GEAR ICON -->
          <div class="back-to-home">
            <router-link to
              @click.native="$router.go(-1)"
              class="d-flex justify-content-start align-items-center color_text"
            >
              <span class="icon-arrow-left transparent_bg"></span>
            </router-link>
          </div>

          <!-- CLASS TITLE -->
          <div class="class-title">{{ class_title }}</div>

          <!-- MORE ICONS -->
          <div class="more-icons d-flex justify-content-end align-items-center">
            <div class="icon avatar avatar-square border-0 transparent_bg">
              <span class="icon-search"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE NAVIGATIONS -->
    <div class="mobile-navigations index-99 w-100 h-auto white d-md-none">
      <!-- HOME ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard/class">
          <span class="icon-feeds"></span>
          <div class="nav-text">Feeds</div>
        </router-link>
      </div>

      <!-- TEACHER ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard/class/members" :class="{'active': members_active}">
          <span class="icon-members"></span>
          <div class="nav-text">Members</div>
        </router-link>
      </div>

      <!-- PARENT ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard/class/homework" :class="{'active': homework_active}">
          <span class="icon-library"></span>
          <div class="nav-text">Homework</div>
        </router-link>
      </div>

      <!-- MESSAGE ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard/class/report">
          <span class="icon-pie-chart"></span>
          <div class="nav-text">Report</div>
        </router-link>
      </div>
    </div>

    <!-- SETTINGS PANEL -->
    <SettingsPanel v-if="slide_panel" @onClose="slide_panel=false"></SettingsPanel>
  </div>
</template>

<script>
import SettingsPanel from "@/components/schoolComps/dashboard/modals/SettingsPanel";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ProfileNavbar",

  components: {
    SettingsPanel
  },

  mixins: [clickaway],
  data() {
    return {
      teacher_active: false,
      homework_active: false,
      members_active: true,
      slide_panel: false,
      class_title: ""
    };
  },

  watch: {
    $route: "onRouteClick"
  },

  mounted() {
    let url = this.$router.currentRoute.name;
    this.activeRoute(url);
  },

  methods: {
    activeRoute(url) {
      if (url === "TeacherProfile") {
        this.teacher_active = true;
        this.class_title = "Teacher Profile";
      } else {
        this.teacher_active = false;
      }

      if (url === "StudentProfile") {
        this.class_title = "Student Profile";
      }

      if (url === "HomeworkReview") {
        this.homework_active = true;
        this.members_active = false;
        this.class_title = "Homework Review";
      }
    },

    toggleSettings() {
      this.slide_panel = !this.slide_panel;
    },

    onSlideOut() {
      this.slide_panel = false;
    },

    onRouteClick() {
      this.active_route = this.$router.currentRoute.name;
      this.activeRoute(this.active_route);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
