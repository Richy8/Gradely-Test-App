<template>
  <div>
    <!-- BANNER -->
    <div class="banner">
      <div class="banner-overlay box-overlay brand_tonic_bg rounded-top-10">
        <img :src="localImg(banner)" class="img img-luminous">
      </div>
      <img :src="localImg(display_img)" class="display-img">
    </div>

    <!-- WELCOME BLOCK -->
    <div class="welcome-block w-100 d-flex flex-column justify-content-start align-items-center">
      <div class="welcome-title font-weight-bold brand_navy">Just In-time Video Lessons</div>
      <div
        class="welcome-text color_grey_dark text-center"
      >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "DialogThree",

  props: ["banner", "display_img"],

  mixins: [RenderImages],

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style>
</style>
