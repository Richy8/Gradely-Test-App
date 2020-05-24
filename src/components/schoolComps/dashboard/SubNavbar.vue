<template>
  <div>
    <div class="navbar-section position-fixed w-100 index-9 white">
      <!-- DESKTOP SCREEN VIEW -->
      <div class="container h-auto d-none d-md-block">
        <div class="row d-flex justify-content-between align-items-center nowrap">
          <!-- BRAND LOGO -->
          <div class="brand-logo">
            <router-link to="/school/dashboard">
              <img src="@/assets/images/Gradely.png" alt="Gradely.ng">
            </router-link>
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
            <router-link
              to="/school/dashboard"
              class="d-flex justify-content-start align-items-center color_text"
            >
              <span class="icon-arrow-left transparent_bg"></span>
            </router-link>
          </div>

          <!-- BRAND LOGO -->
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

    <!-- SUB NAVBAR SECTION -->
    <div class="sub-navbar-section position-fixed index-9 white">
      <div class="container h-auto d-none d-md-block">
        <div class="row d-flex justify-content-between align-items-center">
          <!-- GO BACK HOME -->
          <div class="back-to-home">
            <router-link
              to="/school/dashboard"
              class="d-flex justify-content-start align-items-center color_text"
            >
              <span class="icon-arrow-left transparent_bg"></span>
              <div class="title">Home</div>
            </router-link>
          </div>

          <!-- NAVIGATION -->
          <div class="nav-items d-flex justify-content-center align-items-center nowrap">
            <!-- HOME ICON -->
            <div class="nav-item">
              <router-link to="/school/dashboard/class" :class="{'active': feeds_active}">
                <span class="icon-feeds"></span>
                <div class="nav-text">Feeds</div>
              </router-link>
            </div>

            <!-- TEACHER ICON -->
            <div class="nav-item">
              <router-link to="/school/dashboard/class/members" :class="{'active': members_active}">
                <span class="icon-members"></span>
                <div class="nav-text">Members</div>
              </router-link>
            </div>

            <!-- PARENTS ICON -->
            <div class="nav-item">
              <router-link
                to="/school/dashboard/class/homework"
                :class="{'active': homework_active}"
              >
                <span class="icon-library"></span>
                <div class="nav-text">Homework</div>
              </router-link>
            </div>

            <!-- MESSAGES ICON -->
            <div class="nav-item">
              <router-link to="/school/dashboard/class/report" :class="{'active': report_active}">
                <span class="icon-pie-chart"></span>
                <div class="nav-text">Report</div>
              </router-link>
            </div>
          </div>

          <!-- MORE ICONS -->
          <div class="back-to-home d-flex justify-content-end align-items-center" v-if="homework_active">
            <router-link
              to="/school/dashboard"
              class="d-flex justify-content-start align-items-center color_text"
            >
              <span class="icon-gear transparent_bg"></span>
              <div class="title">Class Settings</div>
            </router-link>
          </div>

          <div class="back-to-home d-flex justify-content-end align-items-center invisible" v-else>
            <router-link
              to="/school/dashboard"
              class="d-flex justify-content-start align-items-center color_text"
            >
              <span class="icon-gear transparent_bg"></span>
              <div class="title">Class Settings</div>
            </router-link>
          </div>
          <!-- MORE ICONS -->
        </div>
      </div>
    </div>

    <!-- MOBILE NAVIGATIONS -->
    <div class="mobile-navigations index-99 w-100 h-auto white d-md-none">
      <!-- HOME ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard/class" :class="{'active': feeds_active}">
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
        <router-link to="/school/dashboard/class/report" :class="{'active': report_active}">
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
  name: "SubNavbar",

  components: {
    SettingsPanel
  },

  mixins: [clickaway],
  data() {
    return {
      feeds_active: false,
      members_active: false,
      homework_active: false,
      report_active: false,
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
      if (url === "ClassFeeds") {
        this.feeds_active = true;
        this.class_title = "Class Feeds";
      } else {
        this.feeds_active = false;
      }

      if (url === "ClassMembers" || url === "AddStudents") {
        this.members_active = true;
        this.class_title = "Class Members";
      } else {
        this.members_active = false;
      }

      if (url === "ClassHomework") {
        this.homework_active = true;
        this.class_title = "Class Homework";
      } else {
        this.homework_active = false;
      }

      if (url === "ClassReport") {
        this.report_active = true;
        this.class_title = "Class Report";
      } else {
        this.report_active = false;
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
