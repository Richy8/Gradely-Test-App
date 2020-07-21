<template>
  <div>
    <div class="navbar-section fixed-top w-100 index-9" :class="color_theme">
      <!-- MOBILE TOP NAVIGATION VIEW -->
      <div
        class="container h-auto d-md-none mobile-top"
        :class="[nav_type==='class' || nav_type==='single' ? 'sub-mobile-top' : '']"
      >
        <!-- SCHOOL -->
        <div class="row d-flex justify-content-between align-items-center nowrap">
          <!-- GEAR ICON -->
          <div class="gear-icon" v-if="nav_type==='school'">
            <div class="icon avatar avatar-square">
              <span class="icon-gear" v-on-clickaway="onSlideOut" @click.self="toggleSettings"></span>
            </div>
          </div>

          <!-- AVATAR -->
          <!-- PARENT AND TEACHER -->
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

          <!-- STUDENT -->
          <div
            class="icon rounded-5 icon__user"
            :class="[nav_type==='student' ? 'brand_inverse_light_bg' : '']"
            v-on-clickaway="onUserSlideOut"
            @click="toggleUserSettings"
            v-if="nav_type==='student'"
          >
            <img v-lazy="dynamicImg('MaleChild.png')" alt>
            <i class="icon-caret-fill-down color_text font-9"></i>
          </div>

          <!-- GO BACK ICON -->
          <div class="back-to-home" v-if="nav_type==='class' || nav_type==='single'">
            <!--CLASS -->
            <router-link
              to="/school/dashboard"
              class="d-flex justify-content-start align-items-center color_text"
              v-if="nav_type==='class'"
            >
              <span class="icon-arrow-left transparent_bg"></span>
            </router-link>

            <!-- SINGLE -->
            <router-link
              to
              @click.native="$router.go(-1)"
              class="d-flex justify-content-start align-items-center color_text"
              v-else-if="nav_type==='single'"
            >
              <span class="icon-arrow-left transparent_bg"></span>
            </router-link>

            <!-- OTHERS-->
            <router-link
              :to="'/'+nav_type+'/dashboard'"
              class="d-flex justify-content-start align-items-center color_text"
              v-else
            >
              <span class="icon-arrow-left transparent_bg"></span>
            </router-link>
          </div>

          <!-- BRAND LOGO -->
          <div
            class="brand-logo"
            v-if="nav_type==='school' || nav_type==='parent' || nav_type==='teacher' || nav_type==='student'"
          >
            <router-link :to="'/'+nav_type+'/dashboard'">
              <img :src="localImg('Gradely.png')" alt="Gradely.ng">
            </router-link>
          </div>

          <!-- CLASS TITLE -->
          <div
            class="class-title"
            v-if="nav_type==='class' || nav_type==='single'"
          >{{ class_title }}</div>

          <!-- MORE ICONS -->
          <div class="more-icons d-flex justify-content-end align-items-center">
            <!-- SEARCH ICON -->
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

            <!-- CLASS SEARCH ICON -->
            <div
              class="more-icons d-flex justify-content-end align-items-center"
              v-if="nav_type==='class'"
            >
              <div class="icon avatar avatar-square border-0 transparent_bg">
                <span class="icon-search"></span>
              </div>
            </div>

            <!-- SINGLE INVISIBLE ICON -->
            <div
              class="more-icons d-flex justify-content-end align-items-center invisible"
              v-if="nav_type==='single'"
            >
              <div class="icon avatar avatar-square border-0 transparent_bg">
                <span class="icon-search"></span>
              </div>
            </div>

            <!-- NOTIFICATION ICON -->
            <div
              class="icon avatar avatar-square"
              v-if="nav_type==='school' || nav_type==='parent' || nav_type==='teacher' || nav_type==='student'"
            >
              <span class="icon-bell"></span>
              <div class="badge-circle brand_red_bg index-9"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SETTINGS PANEL -->
    <SettingsPanel
      user_name="Kunle Ajayi"
      school_name="Christland Intl"
      email="rotimi_os@gmail.com"
      student_code="KUNLEAJA"
      student_image="MaleChild.png"
      :panel_type="nav_type"
      v-if="slide_panel"
      @onClose="slide_panel=false"
    ></SettingsPanel>

    <SettingsPanel
      user_name="Anthony Joshua"
      school_name="Christland Intl"
      email="rotimi_os@gmail.com"
      student_code="ANTHOJO"
      student_image="MaleChild.png"
      :panel_type="nav_type"
      v-if="slide_user_panel"
      @onClose="slide_user_panel=false"
    ></SettingsPanel>
  </div>
</template>

<script>
import SettingsPanel from "@/components/globalComps/SettingsPanel";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "MobileTopNav",

  props: {
    nav_type: {
      type: String,
      default: "school"
    },
    color_theme: {
      type: String,
      default: "white"
    }
  },

  components: {
    SettingsPanel
  },

  mixins: [clickaway],

  watch: {
    $route: "onRouteClick"
  },

  mounted() {
    let url = this.$router.currentRoute.name;
    this.activeRoute(url);
  },

  data() {
    return {
      slide_panel: false,
      slide_user_panel: false,
      class_title: ""
    };
  },

  methods: {
    activeRoute(url) {
      switch (url) {
        case "ClassFeeds":
          this.class_title = "Class Feeds";
          break;

        case "ClassMembers":
          this.class_title = "Class Members";
          break;

        case "AddStudents":
          this.class_title = "Add Students";
          break;

        case "StudentProfile":
          this.class_title = "Student Profile";
          break;

        case "TeacherProfile":
          this.class_title = "Teacher Profile";
          break;

        case "ClassHomework":
          this.class_title = "Class Homework";
          break;

        case "HomeworkReview":
          this.class_title = "Homework Review";
          break;

        case "ClassReport":
          this.class_title = "Class Report";
          break;

        case "SchoolCalendar":
          this.class_title = "Calendar";
          break;

        default:
          this.class_title = "Gradely.ng";
      }
    },

    onRouteClick() {
      this.active_route = this.$router.currentRoute.name;
      this.activeRoute(this.active_route);
    },

    toggleSettings() {
      this.slide_panel = !this.slide_panel;
    },

    onSlideOut() {
      this.slide_panel = false;
    },

    toggleUserSettings() {
      this.slide_user_panel = !this.slide_user_panel;
    },

    onUserSlideOut() {
      this.slide_user_panel = false;
    }
  }
};
</script>

<style>
</style>
