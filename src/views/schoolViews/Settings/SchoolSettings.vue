<template>
  <div>
    <vue-headful
      title="Profile Settings | Gradely.ng - School"
      description="Description goes here"
    />

    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">School Details</div>

      <!-- SCHOOL BANNER -->
      <div class="school-banner w-100">
        <div class="banner-overlay box-overlay rounded-10">
          <img src="@/assets/images/ChristLandBanner.png" alt="SchoolBanner" class="img">
        </div>

        <!-- CHANGE PHOTO BUTTON -->
        <div class="form-group banner-input">
          <label for="changeBanner" class="pointer">
            <input type="file" class="inputFile" id="changeBanner" hidden>
            <div class="d-flex justify-content-around align-items-center">
              <div class="cust_icon icon_sm_mid camera_inverse_icon mr-2"></div>
              <div>CHANGE IMAGE</div>
            </div>
          </label>
        </div>
      </div>

      <!-- SCHOOL LOGO SECTION -->
      <div class="school-logo-section">
        <!-- DISPLAY LOGO -->
        <div class="avatar avatar-square avatar_xxl rounded-10">
          <div class="avatar-text brand_inverse_bg brand_primary">C</div>
        </div>

        <div class="right-section">
          <!-- LOGO INSTRUCTION -->
          <div class="logo-guide">
            <div class="title font-weight-bold color_text">School Logo</div>
            <div class="options">Accepts .png, .jpg or .jpeg</div>
          </div>

          <!-- LOGO CHANGE BUTTON -->
          <div class="logo-change-button">
            <label for="changeLogo" class="btn btn-default-outline btn-md">
              <input type="file" class="inputFile" id="changeLogo" hidden>
              <div class="d-flex flex-center">
                <div>CHANGE LOGO</div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- PROFILE FORM COMPONENT -->
      <ProfileForm></ProfileForm>
      <!-- PROFILE FORM COMPONENT -->
    </div>
  </div>
</template>

<script>
import ProfileForm from "@/components/schoolComps/dashboard/settings/ProfileForm"

export default {
  name: "SchoolSettings",

  components: {ProfileForm},

  data() {
    return {
      form: {
        banner: ""
      }
    };
  }
};
</script>

<style>
</style>
