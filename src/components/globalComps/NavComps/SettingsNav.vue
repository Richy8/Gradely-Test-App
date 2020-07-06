<template>
  <div>
    <!-- NAVIGATION TITLE -->
    <div class="navigation-title">My Account</div>

    <!-- NAVIGATION MENU -->
    <div class="navigation-menu">
      <!-- SCHOOL PROFILE -->
      <div class="side-item" v-if="settings_type==='school'">
        <router-link to="/school/dashboard/settings" :class="{'active': profile_active}">
          <span class="icon icon-school"></span>
          <div class="link-title">School Profile</div>
        </router-link>
      </div>

      <!-- PERSONAL INFORMATION -->
      <div class="side-item" v-if="settings_type==='school'">
        <router-link to="/school/dashboard/settings/user" :class="{'active': personal_active}">
          <span class="icon icon-user-circle"></span>
          <div class="link-title">Personal Information</div>
        </router-link>
      </div>

      <!-- SCHOOL PREFERENCES -->
      <div class="side-item" v-if="settings_type==='school'">
        <router-link
          to="/school/dashboard/settings/preferences"
          :class="{'active': preference_active}"
        >
          <span class="icon icon-sliders"></span>
          <div class="link-title">School Preferences</div>
        </router-link>
      </div>

      <!-- PARENT - TEACHER - STUDENT PREFERENCES -->
      <div
        class="side-item"
        v-if="settings_type==='parent' || settings_type==='teacher' || settings_type==='student'"
      >
        <router-link
          :to="'/'+settings_type+'/dashboard/settings/preferences'"
          :class="{'active': preference_active}"
        >
          <span class="icon icon-sliders"></span>
          <div class="link-title">Preferences</div>
        </router-link>
      </div>

      <!-- PARENT - TEACHER - STUDENT PROFILE -->
      <div
        class="side-item"
        v-if="settings_type==='parent' || settings_type==='teacher' || settings_type==='student'"
      >
        <router-link
          :to="'/'+settings_type+'/dashboard/settings'"
          :class="{'active': profile_active}"
        >
          <span class="icon icon-user-circle"></span>
          <div class="link-title">My Profile</div>
        </router-link>
      </div>

      <!-- BILLING -->
      <div class="side-item" v-if="settings_type==='parent' || settings_type==='student'">
        <router-link
          :to="'/'+settings_type+'/dashboard/settings/billing'"
          :class="{'active': billing_active}"
        >
          <span class="icon icon-credit-card"></span>
          <div class="link-title">Billing</div>
        </router-link>
      </div>

      <!-- ACCOUNT SETTINGS -->
      <div class="side-item">
        <router-link
          :to="'/'+settings_type+'/dashboard/settings/account_settings'"
          :class="{'active': account_active}"
        >
          <span class="icon icon-gear"></span>
          <div class="link-title">Account Settings</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsNav",

  props: {
    settings_type: {
      type: String,
      default: "school"
    }
  },

  data() {
    return {
      profile_active: "",
      personal_active: "",
      preference_active: "",
      account_active: "",
      billing_active: ""
    };
  },

  watch: {
    $route: "onSideClick"
  },

  mounted() {
    let url = this.$router.currentRoute.name;
    this.activeSideRoute(url);
  },

  methods: {
    activeSideRoute(url) {
      url === "SchoolSettingsProfile" ||
      url === "TeacherSettingsProfile" ||
      url === "ParentSettingsProfile" ||
      url === "StudentSettingsProfile"
        ? (this.profile_active = true)
        : (this.profile_active = false);
      url === "SchoolSettingsUser" ||
      url === "SchoolSettingsUserEdit" ||
      url === "SchoolSettingsNotification"
        ? (this.personal_active = true)
        : (this.personal_active = false);
      url === "SchoolSettingsPreferences" ||
      url === "TeacherSettingsPreferences" ||
      url === "ParentSettingsPreferences" ||
      url === "StudentSettingsPreferences" ||
      url === "TeacherSettingsNotification" ||
      url === "ParentSettingsNotification" ||
      url === "StudentSettingsNotification"
        ? (this.preference_active = true)
        : (this.preference_active = false);
      url === "SchoolSettingsAccount" ||
      url === "TeacherSettingsAccount" ||
      url === "ParentSettingsAccount" ||
      url === "StudentSettingsAccount"
        ? (this.account_active = true)
        : (this.account_active = false);

      url === "ParentSettingsBilling" || url === "StudentSettingsBilling"
        ? (this.billing_active = true)
        : (this.billing_active = false);
    },

    onSideClick() {
      this.active_route = this.$router.currentRoute.name;
      this.activeSideRoute(this.active_route);
    }
  }
};
</script>

<style>
</style>
