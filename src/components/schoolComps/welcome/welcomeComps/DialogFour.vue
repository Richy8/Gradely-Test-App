<template>
  <div>
    <!-- BANNER -->
    <div class="banner">
      <div class="banner-overlay box-overlay brand_accent_bg rounded-top-10">
        <img :src="localImg(banner)" class="img img-luminous">
      </div>
      <img :src="localImg(display_img)" class="display-img">
    </div>

    <!-- WELCOME BLOCK -->
    <div class="welcome-block w-100 d-flex flex-column justify-content-start align-items-center">
      <div class="welcome-title font-weight-bold brand_navy">Digitized Homework and Assessments</div>
      <div
        class="welcome-text color_grey_dark text-center"
      >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogFour",
  props: ["banner", "display_img"],
};
</script>

<style>
</style>
