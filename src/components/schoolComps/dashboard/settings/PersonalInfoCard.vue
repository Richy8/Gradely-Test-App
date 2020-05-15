<template>
  <div>
    <!-- PAGE TITLE -->
    <div class="page-title">Personal Information</div>

    <!-- SCHOOL LOGO SECTION -->
    <div class="personal-info-section d-flex justify-content-start align-items-center nowrap">
      <!-- DISPLAY LOGO -->
      <div class="avatar avatar-square avatar_xl avatar-personal rounded-10">
        <div class="avatar-text brand_primary">FS</div>
      </div>

      <div class="right-section d-flex">
        <!-- LOGO INSTRUCTION -->
        <div class="logo-guide">
          <div class="title font-weight-bold color_text">Upload Photo</div>
          <div class="options">Accepts .png, .jpg or .jpeg</div>
        </div>

        <!-- LOGO CHANGE BUTTON -->
        <div class="logo-change-button">
          <label for="changeLogo" class="btn btn-default-outline btn-md">
            <input type="file" class="inputFile" id="changeLogo" hidden>
            <div class="d-flex flex-center">
              <div>CHANGE Photo</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfoCard"
};
</script>

<style>
</style>
