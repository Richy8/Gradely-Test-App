<template>
  <div>
    <div class="navbar-section fixed-top w-100 index-9 white">
      <!-- DESKTOP SCREEN VIEW -->
      <div class="container h-auto d-none d-md-block">
        <div class="row d-flex justify-content-between align-items-center nowrap">
          <!-- BRAND LOGO -->
          <div class="brand-logo">
            <router-link :to="'/'+nav_type+'/dashboard'">
              <img :src="localImg('Gradely.png')" alt="Gradely.ng">
            </router-link>
          </div>

          <!-- NAVIGATION -->
          <div
            class="nav-items d-flex justify-content-center align-items-center nowrap"
            v-if="show_nav"
          >
            <div class="nav-item" v-for="(text, index) in nav_text" :key="index">
              <router-link :to="{name: nav_name[index]}" :class="{'active': nav_active[index]}">
                <span :class="nav_icon[index]"></span>
                <div class="nav-text">{{text}}</div>
              </router-link>
            </div>
          </div>
          <!-- NAVIGATION -->

          <!-- MORE ICONS -->
          <div class="more-icons d-flex justify-content-end align-items-center">
            <!-- ICON SEARCH -->
            <div class="icon avatar avatar-square" v-if="nav_type==='school'">
              <span class="icon-search"></span>
            </div>

            <!-- ICON MESSAGE -->
            <!-- <div
              class="icon avatar avatar-square"
              v-if="nav_type==='parent' || nav_type==='teacher'"
            >
              <router-link :to="'/'+nav_type+'/dashboard/message'">
                <span class="icon-message brand_navy"></span>
              </router-link>
            </div>-->

            <!-- ICON NOTIFICATION -->
            <div class="icon avatar avatar-square">
              <span class="icon-bell"></span>
              <div class="badge-circle brand_red_bg index-9"></div>
            </div>

            <!-- ICON SETTINGS SCHOOL TYPE  -->
            <div class="icon avatar avatar-square" v-if="nav_type==='school'">
              <span class="icon-gear" v-on-clickaway="onSlideOut" @click.self="toggleSettings"></span>
            </div>

            <!-- ICON AVATAR TEXT -->
            <div
              class="icon rounded-5 icon__user"
              :class="[nav_type==='parent' ? 'brand_navy_bg' : 'brand_tonic_bg']"
              v-on-clickaway="onUserSlideOut"
              @click="toggleUserSettings"
              v-if="nav_type==='parent' || nav_type==='teacher'"
            >
              <div
                class="avatar-text white-text font-10-5"
                :class="[nav_type==='parent' ? 'brand_navy_bg' : 'brand_tonic_bg']"
              >AJ</div>
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
      :panel_type="nav_type"
      v-if="slide_panel"
      @onClose="slide_panel=false"
    ></SettingsPanel>

    <!-- MOBILE VIEW -->
    <SettingsPanel
      user_name="Anthony Joshua"
      school_name="Christland Intl College"
      email="rotimi_os@gmail.com"
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
  name: "BaseNav",

  components: {
    SettingsPanel
  },

  mixins: [clickaway, RenderImages],

  props: {
    nav_text: Array,
    nav_icon: Array,
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

      if (
        url === "StudentTopicTrend" ||
        url === "StudentTopicTrend_TP" ||
        url === "StudentProfile" ||
        url === "StudentProfile_TP"
      ) {
        this.nav_active[1] = true;
      }
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
