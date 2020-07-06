<template>
  <div>
    <div class="settings-panel">
      <!-- SLIDE MENU PANEL -->
      <div class="slide-out-menu">
        <!-- PANEL ROW -->
        <div class="panel-row d-flex justify-content-start align-items-start nowrap">
          <!-- AVATAR -->
          <div class="avatar avatar-square avatar_md" v-if="panel_type==='school'">
            <div class="avatar-text color_text brand_inverse_light_bg">{{ getInitial }}</div>
          </div>
          <div
            class="avatar avatar-square avatar_md"
            v-if="panel_type==='teacher' || panel_type==='parent'"
          >
            <div
              class="avatar-text white-text"
              :class="[panel_type==='parent' ? 'brand_navy_bg' : 'brand_tonic_bg']"
            >{{ getInitial }}</div>
          </div>

          <!-- AVATAR INFO -->
          <div class="d-flex flex-column justify-content-start align-items-start">
            <div class="name color-text font-weight-bold text-capitalize">{{ user_name }}</div>
            <div class="school color_grey_dark" v-if="panel_type==='school'">{{ school_name }}</div>
            <div class="email color_grey_dark" v-else>{{ email }}</div>
            <router-link
              :to="'/'+panel_type+'/dashboard/settings'"
              class="update-cta btn-link font-weight-bold"
            >Update Profile</router-link>
          </div>
        </div>

        <!-- LIST ITEMS -->
        <ul class="list-unstyled">
          <!-- SCHOOL PROFILE -->
          <li v-if="panel_type==='school'">
            <router-link
              :to="{name: 'SchoolProfile'}"
              class="d-flex justify-content-start align-items-center nowrap"
            >
              <span class="icon icon-school border_grey_dark"></span>
              <div class="link-text">School Profile</div>
            </router-link>
          </li>

          <!-- SCHOOL PREFERENCES -->
          <li v-if="panel_type==='school'">
            <router-link
              :to="'/'+panel_type+'/dashboard/settings/preferences'"
              class="d-flex justify-content-start align-items-center nowrap"
            >
              <span class="icon icon-sliders border_grey_dark"></span>
              <div class="link-text">School Preferences</div>
            </router-link>
          </li>

          <!-- MY CALENDAR -->
          <li v-if="panel_type==='parent' || panel_type==='teacher'">
            <router-link
              :to="'/'+panel_type+'/calendar'"
              class="d-flex justify-content-start align-items-center nowrap"
            >
              <span class="icon icon-calendar border_grey_dark"></span>
              <div class="link-text">My Calendar</div>
            </router-link>
          </li>

          <!-- HELP AND SUPPORT -->
          <li>
            <router-link to class="d-flex justify-content-start align-items-center nowrap">
              <span class="icon icon-help-circle border_grey_dark"></span>
              <div class="link-text">Help & Support</div>
            </router-link>
          </li>

          <!-- MY ACCOUNT -->
          <li>
            <router-link
              :to="'/'+panel_type+'/dashboard/settings/user'"
              class="d-flex justify-content-start align-items-center nowrap"
            >
              <span class="icon icon-gear border_grey_dark"></span>
              <div class="link-text">My Account</div>
            </router-link>
          </li>

          <!-- LOG OUT -->
          <li @click.prevent="logoutAction">
            <router-link to class="d-flex justify-content-start align-items-center nowrap">
              <span class="icon icon-log-out border_grey_dark"></span>
              <div class="link-text">Log Out</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
import { colors, random, shuffle, setInitial } from "@/scripts/utilities";

export default {
  name: "SettingsPanel",

  props: {
    user_name: String,
    school_name: String,
    email: String,
    panel_type: String
  },
  methods: {
    ...mapActions(["logout"]),
    logoutAction() {
      this.logout()
      .then(()=>{
        this.$router.replace({
          path: "/login"
        })
      })
    }
  },
  computed: {
    getInitial() {
      return setInitial(this.user_name);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  }
};
</script>

<style lang="scss">
.settings-panel {
  position: fixed;
  top: 50px;
  right: 6px;
  width: 320px;
  z-index: 2000;
  transition: all 0.4s ease-in-out;
  animation: panel-slide-right 0.45s ease-in-out forwards;

  @include breakpoint_max(lg) {
    width: 300px;
  }

  @include breakpoint_max(md) {
    right: 100%;
    left: 6px;
    animation: panel-slide-left 0.3s ease-in-out forwards;
  }

  @include breakpoint_max(sm) {
    width: 280px;
  }

  .avatar {
    margin-right: 15px;

    .avatar-text {
      font-size: 16px;

      @include breakpoint_max(lg) {
        font-size: 14px;
      }
    }
  }

  .name {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;
    letter-spacing: 0.02em;

    @include breakpoint_max(lg) {
      font-size: 14px;
    }
  }

  .school,
  .email {
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 10px;

    @include breakpoint_max(lg) {
      font-size: 12px;
    }
  }

  .update-cta {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;

    @include breakpoint_max(lg) {
      font-size: 12px;
    }
  }

  li {
    .icon {
      display: block;
      margin-right: 15.78px;
      font-size: 24px;

      @include breakpoint_max(sm) {
        font-size: 22px;
      }
    }

    .link-text {
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: $color_ash;

      @include breakpoint_max(lg) {
        font-size: 12px;
      }
    }
  }
}
</style>
