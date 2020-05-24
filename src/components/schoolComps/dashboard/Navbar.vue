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
              <router-link to="/school/dashboard" :class="{'active': home_active}">
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
              <router-link to="/school/dashboard/parent" :class="{'active': parent_active}">
                <span class="icon-parent-child"></span>
                <div class="nav-text">Parents</div>
              </router-link>
            </div>

            <!-- MESSAGES ICON -->
            <div class="nav-item">
              <router-link to="/school/dashboard/message" :class="{'active': message_active}">
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
      <div class="container h-auto d-md-none tablet">
        <div class="row d-flex justify-content-between align-items-center nowrap">
          <!-- GEAR ICON -->
          <div class="gear-icon">
            <div class="icon avatar avatar-square">
              <span
                class="icon-gear"
                v-on-clickaway="onSlideOutMobile"
                @click.self="toggleSettingsMobile"
              ></span>
            </div>
          </div>

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
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE NAVIGATIONS -->
    <div class="mobile-navigations index-99 w-100 h-auto white d-md-none">
      <!-- HOME ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard" :class="{'active': home_active}">
          <span class="icon-tachometer"></span>
          <div class="nav-text">Home</div>
        </router-link>
      </div>

      <!-- TEACHER ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard/teacher" :class="{'active': teacher_active}">
          <span class="icon-teacher"></span>
          <div class="nav-text">Teacher</div>
        </router-link>
      </div>

      <!-- PARENT ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard/parent" :class="{'active': parent_active}">
          <span class="icon-parent-child"></span>
          <div class="nav-text">Parents</div>
        </router-link>
      </div>

      <!-- MESSAGE ICON -->
      <div class="mobile-nav">
        <router-link to="/school/dashboard/message" :class="{'active': message_active}">
          <span class="icon-message"></span>
          <div class="nav-text">Messages</div>
        </router-link>
      </div>
    </div>

    <!-- SETTINGS PANEL -->
    <SettingsPanel v-if="slide_panel" @onClose="slide_panel=false"></SettingsPanel>
    <SettingsPanel v-if="slide_panel_mobile" @onClose="slide_panel_mobile=false"></SettingsPanel>
  </div>
</template>

<script>
import SettingsPanel from "@/components/schoolComps/dashboard/modals/SettingsPanel";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Navbar",
  components: {
    SettingsPanel
  },
  mixins: [clickaway],
  data() {
    return {
      home_active: false,
      teacher_active: false,
      parent_active: false,
      message_active: false,
      slide_panel: false,
      slide_panel_mobile: false
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
      url === "SchoolDashboard"
        ? (this.home_active = true)
        : (this.home_active = false);
      url === "SchoolDashboardTeacher"
        ? (this.teacher_active = true)
        : (this.teacher_active = false);
      url === "SchoolDashboardParent"
        ? (this.parent_active = true)
        : (this.parent_active = false);
      url === "SchoolDashboardMessage"
        ? (this.message_active = true)
        : (this.message_active = false);
    },

    toggleSettings() {
      this.slide_panel = !this.slide_panel;
    },

    toggleSettingsMobile() {
      this.slide_panel_mobile = !this.slide_panel_mobile;
    },

    onSlideOut() {
      this.slide_panel = false;
    },

    onSlideOutMobile() {
      this.slide_panel_mobile = false;
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
