<template>
  <div>
    <div class="settings-panel">
      <!-- SLIDE MENU PANEL -->
      <div class="slide-out-menu">
        <!-- PANEL ROW -->
        <div class="panel-row d-flex justify-content-start align-items-start nowrap">
          <!-- AVATAR -->
          <div class="avatar avatar-square avatar_md">
            <div class="avatar-text brand_inverse_light_bg">FS</div>
          </div>

          <!-- AVATAR INFO -->
          <div class="d-flex flex-column justify-content-start align-items-start">
            <div class="name color-text font-weight-bold">Francis Sanni</div>
            <div class="school color_grey_dark">Chrisland Intl. School</div>
            <router-link to="/school/dashboard/settings" class="update-cta btn-link font-weight-bold">Update Profile</router-link>
          </div>
        </div>

        <!-- LIST ITEMS -->
        <ul class="list-unstyled">
          <!-- SCHOOL PROFILE -->
          <li>
            <router-link to="/school/dashboard/profile" class="d-flex justify-content-start align-items-center nowrap">
              <span class="icon icon-school border_grey_dark"></span>
              <div class="link-text">School Profile</div>
            </router-link>
          </li>

          <!-- SCHOOL PREFERENCES -->
          <li>
            <router-link to="/school/dashboard/settings/preferences" class="d-flex justify-content-start align-items-center nowrap">
              <span class="icon icon-sliders border_grey_dark"></span>
              <div class="link-text">School Preferences</div>
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
            <router-link to="/school/dashboard/settings/user" class="d-flex justify-content-start align-items-center nowrap">
              <span class="icon icon-gear border_grey_dark"></span>
              <div class="link-text">My Account</div>
            </router-link>
          </li>

          <!-- LOG OUT -->
          <li>
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
export default {
  name: "SettingsPanel",
};
</script>

<style>
</style>
