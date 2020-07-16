<template>
  <div>
    <div class="navbar-section fixed-top w-100 index-9 white">
      <!-- MOBILE TOP NAVIGATION VIEW -->
      <div class="container h-auto d-md-none mobile-top mobile-top">
        <div class="row d-flex justify-content-between align-items-center nowrap">
          <!-- AVATAR -->
          <div
            class="icon rounded-circle brand_inverse_bg icon__user"
            v-on-clickaway="onUserSlideOut"
            @click="toggleUserSettings"
          >
            <div class="avatar-text white-text font-10-5">RH</div>
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
          <div class="brand-logo">
            <router-link :to="{name: 'StudentDashboard'}">
              <img :src="localImg('Gradely.png')" alt="Gradely.ng">
            </router-link>
          </div>

          <!-- MORE ICONS -->
          <div class="more-icons d-flex justify-content-end align-items-center">
            <!-- HELP ICON -->
            <div
              class="icon student-icons transparent_bg d-flex justify-content-start align-items-center no-wrap"
            >
              <div class="avatar avatar-square">
                <span class="icon-help-circle color_grey_dark font-21"></span>
              </div>
              <div class="color_grey_dark font-14 ml-1">Help</div>
            </div>

            <!-- NOTIFICATION ICON -->
            <div class="icon student-icons transparent_bg ml-4 position-relative">
              <span class="icon-notification-fill color_grey_dark font-22"></span>
              <div class="badge-circle-counter brand_accent_bg index-9">
                <div class="count color_text">2</div>
              </div>
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
      student_code="KUNLEAJ"
      :panel_type="nav_type"
      v-if="slide_panel"
      @onClose="slide_panel=false"
    ></SettingsPanel>

    <SettingsPanel
      user_name="Anthony Joshua"
      school_name="Christland Intl"
      email="rotimi_os@gmail.com"
      student_code="ANTHOJO "
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
  name: "StudentMobileTopNav",

  props: {
    nav_type: {
      type: String,
      default: "school"
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
