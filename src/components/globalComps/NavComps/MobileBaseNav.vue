<template>
  <div>
    <!-- MOBILE NAVIGATIONS BASE -->
    <div class="mobile-nav-base index-99 w-100 h-auto white d-md-none">
      <!-- NAVIGATION-->
      <div class="mobile-nav w-25 h-auto" v-for="(text, index) in nav_text" :key="index">
        <router-link :to="{name: nav_name[index]}" :class="{'active': nav_active[index]}">
          <span class="font-22 border_grey_dark" :class="nav_icon[index]"></span>
          <div class="nav-text font-13">{{text}}</div>
        </router-link>
      </div>
      <!-- NAVIGATION -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileBaseNav",

  props: {
    nav_text: Array,
    nav_icon: Array,
    nav_name: Array
  },

  data() {
    return {
      nav_active: Array(4).fill(false)
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
      url === "StudentProfile" ? (this.nav_active[1] = true) : "";
      url === "TeacherProfile" ? (this.nav_active[1] = true) : "";
      url === "HomeworkReview" ? (this.nav_active[2] = true) : "";
    },

    onRouteClick() {
      this.active_route = this.$router.currentRoute.name;
      this.activeRoute(this.active_route);
    }
  }
};
</script>

<style lang="scss">
.mobile-nav-base {
  @include flex_row_between_nowrap;
  position: fixed;
  bottom: 0;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

  .mobile-nav {
    padding-top: 12px;
    padding-bottom: 8px;

    a {
      @include flex_column_center;
      color: $color_text;
      transition: all 0.3s ease-in-out;

      .nav-icon {
        @include equal_min_edge(22);
        margin-bottom: 7px;

        @include breakpoint_max(sm) {
          @include equal_min_edge(20);
        }
      }

      span {
        transition: all 0.3s ease-in-out;

        @include breakpoint_max(sm) {
          font-size: 20px !important;
        }
      }

      .nav-text {
        @include breakpoint_max(sm) {
          font-size: 12px !important;
        }
      }

      &:hover {
        color: #08384d !important;
        font-weight: bold;
        transition: all 0.3s ease-in-out;

        span {
          color: $brand_inverse !important;
        }
      }
    }

    .active {
      color: #08384d !important;
      font-weight: bold;
      transition: all 0.3s ease-in-out;

      span {
        color: $brand_inverse !important;
      }
    }
  }
}
</style>
