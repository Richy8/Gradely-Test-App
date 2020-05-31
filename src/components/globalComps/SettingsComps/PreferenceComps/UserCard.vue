<template>
  <div>
    <div class="user-pref-card w-100 h-auto white">
      <!-- AVATAR -->
      <div class="user d-flex justify-content-start align-items-center nowrap">
        <div class="avatar avatar-square avatar_md">
          <div class="avatar-text white-text" :class="setAvatarBg">{{ getInitial }}</div>
        </div>

        <!-- USER INFO -->
        <div>
          <div class="name font-weight-bold color_text">{{ fullname }}</div>
          <div class="email color_grey_dark">{{ email }}</div>
        </div>
      </div>

      <!-- ROLE -->
      <div class="role color_text color_ash">{{ role }}</div>

      <!-- STATUS -->
      <div class="status font-weight-bold text-uppercase" :class="statusColor">{{ status }}</div>

      <!-- OPTIONS -->
      <div class="options position-relative" v-on-clickaway="dropOptions" @click="toggleOptions">
        <div class="avatar avatar-square color_white_bg pointer">
          <span class="icon-ellipsis-h flex-center font-20 color_grey_dark"></span>
        </div>

        <!-- DROP DOWN MENU -->
        <div class="dropdown-btn-menu placement-bottom" v-if="user_options">
          <ul class="list-unstyled">
            <li>
              <a href="javascript:void(0)">Deactivate User</a>
            </li>
            <li>
              <a href="javascript:void(0)">Resend Invitation</a>
            </li>
            <li>
              <router-link to @click.native="$emit('editRole')">Edit Role</router-link>
            </li>
            <li>
              <a href="javascript:void(0)">Remove from School</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import { colors, shuffle, random, setInitial } from "@/scripts/utilities";

export default {
  name: "UserCard",

  mixins: [clickaway],

  props: ["fullname", "email", "role", "status"],

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(11, 0)];
    },

    statusColor() {
      if (this.status === "active") {
        return "brand_green";
      } else {
        return "border_grey_dark";
      }
    }
  },

  data() {
    return {
      user_options: false
    };
  },

  methods: {
    toggleOptions() {
      this.user_options = !this.user_options;
    },

    dropOptions() {
      this.user_options = false;
    }
  }
};
</script>

<style lang="scss">
.user-pref-card {
  padding: 10px 15px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  @include flex_row_between_nowrap;
  margin-bottom: 2px;

  @include breakpoint_max(sm) {
    padding: 10px 5px;
  }

  .user {
    width: 40%;

    @include breakpoint_max(sm) {
      width: 45%;
    }

    @include breakpoint_max(xs) {
      width: 50%;
    }

    .avatar {
      margin-right: 15px;

      @include breakpoint_max(sm) {
        margin-right: 10px;
      }

      @include breakpoint_max(xs) {
        margin-right: 7px;
        @include equal_min_edge(33);

        .avatar-text {
          font-size: 11px;
        }
      }
    }
    .name {
      font-size: 15px;
      line-height: 22px;

      @include breakpoint_max(sm) {
        font-size: 13.5px;
      }
    }
    .email {
      font-size: 12px;
      line-height: 18px;

      @include breakpoint_max(sm) {
        font-size: 11px;
      }
    }
  }

  .role {
    width: 25%;
    font-size: 13.5px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 13px;
    }

    @include breakpoint_max(xs) {
      display: none;
    }
  }

  .status {
    width: 15%;
    font-size: 11.5px;
    line-height: 16px;

    @include breakpoint_max(sm) {
      font-size: 10.5px;
    }
  }

  .options {
    span {
      @include breakpoint_max(sm) {
        font-size: 17px !important;
      }
    }
  }

  .dropdown-btn-menu {
    width: 220px;

    @include breakpoint_max(sm) {
      width: 150px;
    }
  }
}
</style>
