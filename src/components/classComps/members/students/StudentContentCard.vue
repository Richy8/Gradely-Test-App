<template>
  <div class="position-relative">
    <div
      class="student-member-card content-fill white position-relative"
      @click.self="goToProfile()"
    >
      <!-- CARD OPTIONS -->
      <div class="card-options">
        <div class="icon avatar" v-on-clickaway="onDrop" @click="toggleMenu">
          <span class="icon-ellipsis-h flex-center color_grey_dark font-20"></span>
        </div>
      </div>

      <!-- AVATAR -->
      <div class="avatar avatar_lg brand_inverse_bg">
        <img v-lazy="dynamicImg(child_img)" :alt="child_name" class="avatar-img">
      </div>

      <!-- STUDENT INFO -->
      <div class="student-info">
        <!-- STUDENT FULLNAME -->
        <div class="student-name font-weight-bold color_text">{{ child_name }}</div>

        <!-- STUDENT CLASS CODE -->
        <div class="class-code color_grey_dark">{{ child_code }}</div>
      </div>

      <!-- DRODOWN MENU -->
      <div class="dropdown-btn-menu placement-bottom" v-if="child_option">
        <ul class="list-unstyled">
          <li class="mb-1">
            <router-link :to="'/'+account_type+'/dashboard/student/profile'">View Profile</router-link>
          </li>
          <li class="mb-1">
            <router-link to>Change Class</router-link>
          </li>
          <!-- <li class="mb-1">
            <router-link to @click.native="$emit('toggleMessage')">Message Parent</router-link>
          </li>-->
          <li class="mb-1">
            <router-link to>Remove from School</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "StudentContentCard",

  mixins: [clickaway],

  props: {
    child_img: String,
    child_name: String,
    child_code: String
  },

  data() {
    return {
      account_type: "",
      child_option: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    goToProfile() {
      this.$router.push(`/${this.account_type}/dashboard/student/profile`);
      console.log("clicked");
    },

    toggleMenu() {
      this.child_option = !this.child_option;
    },

    onDrop() {
      this.child_option = false;
    }
  }
};
</script>

<style lang="scss">
.content-fill {
  border: 1px solid #e5e5e5;
  @include flex_column_center;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.15);
  }

  @include breakpoint_max(md) {
    @include flex_row_start_nowrap;
    padding: 17px;
  }

  .dropdown-btn-menu {
    top: 42px;

    @include breakpoint_min_max(767, 991) {
      padding: 3px;

      li {
        a {
          padding: 4px;
          font-size: 11px;
        }
      }
    }

    @include breakpoint_max(md) {
      width: 180px;
      top: 36px;

      li {
        a {
          padding: 7px;
          font-size: 12.5px;
        }
      }
    }

    @include breakpoint_max(sm) {
      width: 160px;

      li {
        margin-bottom: 5px !important;

        a {
          padding: 5px;
          font-size: 12px;
        }
      }
    }
  }

  .card-options {
    @include flex_row_end_nowrap;
    position: absolute;
    width: 86%;
    top: 10%;
    margin-left: auto !important;
    margin-right: auto !important;

    .icon {
      transition: border 0.1s ease-in-out;
      &:hover {
        border: 0.6px solid $border_grey;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
      }
    }

    @include breakpoint_max(md) {
      top: 14%;
      width: 92.5%;
    }
  }

  .avatar_lg {
    margin-bottom: 20px;
    @include equal_min_edge(68);
    transition: all 0.3s ease-in-out;

    @include breakpoint_max(lg) {
      @include equal_min_edge(58);
    }

    @include breakpoint_max(md) {
      @include equal_min_edge(52);
      margin-bottom: 0px;
      margin-right: 17px;
    }

    @include breakpoint_max(sm) {
      @include equal_min_edge(48);
    }
  }

  .student-name {
    margin-bottom: 7px;
    font-size: 15px;
    line-height: 19px;

    @include breakpoint_max(lg) {
      font-size: 14px;
    }
  }

  .class-code {
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    @include breakpoint_max(lg) {
      font-size: 11.5px;
    }

    @include breakpoint_max(md) {
      text-align: left;
    }
  }

  &:hover {
    background: rgb(250, 250, 250);
    transform: scale(0.95);
  }
}
</style>
