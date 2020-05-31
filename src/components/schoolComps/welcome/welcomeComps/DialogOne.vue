<template>
  <div>
    <!-- BANNER -->
    <div class="banner">
      <div class="banner-overlay box-overlay rounded-top-10">
        <img :src="localImg(banner)" class="img">

        <!-- PREFETCH OTHER IMAGES -->
        <img :src="localImg('DisplayBanner.png')" class="d-none" width="0" height="0">
        <img :src="localImg('DialogOne.png')" class="d-none" width="0" height="0">
        <img :src="localImg('DialogTwo.png')" class="d-none" width="0" height="0">
        <img :src="localImg('DialogThree.png')" class="d-none" width="0" height="0">
        <img :src="localImg('DialogFour.png')" class="d-none" width="0" height="0">
        <!-- PREFETCH OTHER IMAGES -->
      </div>
      <!-- BRAND ICON -->
      <img :src="localImg(display_img)" class="brand-icon">
    </div>

    <!-- WELCOME BLOCK -->
    <div class="welcome-block w-100 d-flex flex-column justify-content-start align-items-center">
      <div class="welcome-title font-weight-bold brand_navy">Welcome to Gradely</div>
      <div
        class="welcome-text color_grey_dark text-center"
      >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
export default {
  name: "DialogOne",
  props: ["banner", "display_img"],
  mixins: [RenderImages]
};
</script>

<style>
</style>
