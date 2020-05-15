<template>
  <div>
    <!-- NAVIGATION TITLE -->
    <div class="navigation-title">My Account</div>

    <!-- NAVIGATION MENU -->
    <div class="navigation-menu">
      <!-- SCHOOL PROFILE -->
      <div class="side-item">
        <router-link
          to="/school/dashboard/settings"
          @mouseenter.native.self="sideMenuHover($event, 'school_inverse_icon')"
          @mouseleave.native.self="sideMenuHover($event, 'school_inverse_icon')"
          :class="{'active': profile_active}"
        >
          <div class="cust_icon school_icon" :class="{'school_inverse_icon': profile_active}"></div>
          <div class="link-title">School Profile</div>
        </router-link>
      </div>

      <!-- PERSONAL INFORMATION -->
      <div class="side-item">
        <router-link
          to="/school/dashboard/settings/user"
          @mouseenter.native.self="sideMenuHover($event, 'user_circle_inverse_icon')"
          @mouseleave.native.self="sideMenuHover($event, 'user_circle_inverse_icon')"
          :class="{'active': personal_active}"
        >
          <div
            class="cust_icon user_circle_icon"
            :class="{'user_circle_inverse_icon': personal_active}"
          ></div>
          <div class="link-title">Personal Information</div>
        </router-link>
      </div>

      <!-- SCHOOL PREFERENCES -->
      <div class="side-item">
        <router-link
          to="/school/dashboard/settings/preferences"
          @mouseenter.native.self="sideMenuHover($event, 'sliders_inverse_icon')"
          @mouseleave.native.self="sideMenuHover($event, 'sliders_inverse_icon')"
          :class="{'active': preference_active}"
        >
          <div class="cust_icon sliders_icon" :class="{'sliders_inverse_icon': preference_active}"></div>
          <div class="link-title">School Preferences</div>
        </router-link>
      </div>

      <!-- ACCOUNT SETTINGS -->
      <div class="side-item">
        <router-link
          to="/school/dashboard/settings/account_settings"
          @mouseenter.native.self="sideMenuHover($event, 'gear_inverse_icon')"
          @mouseleave.native.self="sideMenuHover($event, 'gear_inverse_icon')"
          :class="{'active': account_active}"
        >
          <div class="cust_icon gear_light_icon" :class="{'gear_inverse_icon': account_active}"></div>
          <div class="link-title">Account Settings</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",

  data() {
    return {
      profile_active: "",
      personal_active: "",
      preference_active: "",
      account_active: ""
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
      url === "SchoolSettings"
        ? (this.profile_active = true)
        : (this.profile_active = false);
      (url === "SchoolSettingsUser" || url === "SchoolSettingsPersonal")
        ? (this.personal_active = true)
        : (this.personal_active = false);
      url === "SchoolSettingsPreferences"
        ? (this.preference_active = true)
        : (this.preference_active = false);
      url === "SchoolSettingsAccount"
        ? (this.account_active = true)
        : (this.account_active = false);
    },

    sideMenuHover(event, icon) {
      event.target.firstElementChild.classList.contains(icon)
        ? event.target.firstElementChild.classList.remove(icon)
        : event.target.firstElementChild.classList.add(icon);
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
