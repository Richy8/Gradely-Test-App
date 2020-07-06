<template>
  <div>
    <div class="navbar-section fixed-top w-100 index-9 white">
      <!-- DESKTOP SCREEN VIEW -->
      <div class="container h-auto d-none d-md-block">
        <div class="row d-flex justify-content-between align-items-center nowrap">
          <!-- BRAND LOGO -->
          <div class="brand-logo">
            <router-link :to="{name: 'StudentDashboard'}">
              <img :src="localImg('Gradely.png')" alt="Gradely.ng">
            </router-link>
          </div>

          <!-- NAVIGATION -->
          <div
            class="student-nav-items d-flex justify-content-center align-items-center nowrap"
            v-if="show_nav"
          >
            <div class="nav-item" v-for="(text, index) in nav_text" :key="index">
              <router-link :to="{name: nav_name[index]}" :class="{'active': nav_active[index]}">
                <div class="nav-text text-uppercase">{{text}}</div>
              </router-link>
              <div class="badge-circle brand_red_bg" v-if="text==='Homework'"></div>
            </div>
          </div>
          <!-- NAVIGATION -->

          <!-- MORE ICONS -->
          <div class="more-icons d-flex justify-content-end align-items-center">
            <!-- HELP ICON -->
            <div
              class="icon student-icons transparent_bg d-flex justify-content-start align-items-center no-wrap"
            >
              <div class="avatar avatar-square">
                <span class="icon-help-circle border_grey_dark font-22"></span>
              </div>
              <div class="border_grey_dark font-14">Help</div>
            </div>

            <!-- ICON NOTIFICATION -->
            <div class="icon student-icons transparent_bg ml-4 position-relative">
              <span class="icon-notification-fill border_grey_dark font-23-5"></span>
              <div class="badge-circle-counter brand_accent_bg index-9">
                <div class="count color_text">2</div>
              </div>
            </div>

            <!-- ICON AVATAR TEXT -->
            <div
              class="icon rounded-circle brand_inverse_bg icon__user"
              v-on-clickaway="onUserSlideOut"
              @click="toggleUserSettings"
            >
              <div class="avatar-text white-text font-10-5">RH</div>
              <i class="icon-caret-fill-down color_text font-9"></i>
            </div>
          </div>
          <!-- MORE ICONS -->
        </div>
      </div>
    </div>

    <!-- SETTINGS PANEL -->
    <!-- DESKTOP -->
    <SettingsPanel
      user_name="Kunle Ajayi"
      school_name="Christland Intl College"
      email="rotimi_os@gmail.com"
      student_code="KUNLEAJ"
      :panel_type="nav_type"
      v-if="slide_panel"
      @onClose="slide_panel=false"
    ></SettingsPanel>

    <!-- MOBILE VIEW -->
    <SettingsPanel
      user_name="Anthony Joshua"
      school_name="Christland Intl College"
      email="rotimi_os@gmail.com"
      student_code="ANTHOJO"
      :panel_type="nav_type"
      v-if="slide_user_panel"
      @onClose="slide_user_panel=false"
    ></SettingsPanel>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import SettingsPanel from "@/components/globalComps/SettingsPanel";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "StudentNav",

  components: {
    SettingsPanel
  },

  mixins: [clickaway, RenderImages],

  props: {
    nav_text: Array,
    nav_name: Array,
    nav_type: {
      type: String,
      default: "school"
    },
    show_nav: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      nav_active: Array(4).fill(false),
      slide_panel: false,
      slide_user_panel: false
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
      this.nav_active = Array(4).fill(false); //RESET THE ACTIVE NAV ARRAY TO FALSE

      let activeIndex = this.nav_name.findIndex(nav => {
        return nav === url;
      }); //FIND THE INDEX OF THE CURRENT ROUTE

      this.nav_active[activeIndex] = true; //SET THE CURRENT ROUTE TO ACTIVE
    },

    toggleSettings() {
      this.slide_panel = !this.slide_panel;
    },

    onSlideOut() {
      this.slide_panel = false;
    },

    onUserSlideOut() {
      this.slide_user_panel = false;
    },

    toggleUserSettings() {
      this.slide_user_panel = !this.slide_user_panel;
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
