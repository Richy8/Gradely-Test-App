<template>
  <div>
    <!-- SUB NAVBAR SECTION -->
    <div class="sub-navbar-section position-fixed index-9 white">
      <div class="container h-auto d-none d-md-block">
        <div class="row d-flex justify-content-between align-items-center">
          <!-- GO BACK HOME -->
          <div class="back-to-home">
            <router-link
              :to="{name: 'SchoolDashboard'}"
              class="d-flex justify-content-start align-items-center color_text"
            >
              <span class="icon-arrow-left transparent_bg"></span>
              <div class="title">Home</div>
            </router-link>
          </div>

          <!-- NAVIGATION -->
          <div class="nav-items d-flex justify-content-center align-items-center nowrap">
            <div class="nav-item" v-for="(text, index) in nav_text" :key="index">
              <router-link :to="{name: nav_name[index]}" :class="{'active': nav_active[index]}">
                <span :class="nav_icon[index]"></span>
                <div class="nav-text">{{text}}</div>
              </router-link>
            </div>
          </div>
          <!-- NAVIGATION -->

          <!-- CLASS SETTINGS -->
          <div
            class="back-to-home d-flex justify-content-end align-items-center"
            v-if="show_settings"
          >
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
  </div>
</template>

<script>
export default {
  name: "SubNav",

  props: {
    nav_text: Array,
    nav_icon: Array,
    nav_name: Array,
    settings_route: Array
  },

  data() {
    return {
      nav_active: Array(4).fill(false),
      show_settings: false
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
      this.nav_active = Array(4).fill(false);

      let activeIndex = this.nav_name.findIndex(nav => {
        return nav === url;
      });

      this.nav_active[activeIndex] = true;

      // INCLUDE ADD STUDENTS ROUTE FOR MEMBERS
      url === "AddStudents" ? (this.nav_active[1] = true) : "";

      // CHECK IF CURRENT URL IS IN SETTINGS ROUTE ARRAY
      this.show_settings = false;
      this.settings_route.includes(url)
        ? (this.show_settings = true)
        : (this.show_settings = false);
    },

    onRouteClick() {
      this.active_route = this.$router.currentRoute.name;
      this.activeRoute(this.active_route);
    }
  }
};
</script>

<style>
</style>
