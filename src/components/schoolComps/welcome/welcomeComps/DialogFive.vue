<template>
  <div>
    <!-- BANNER -->
    <div class="banner">
      <div class="banner-overlay box-overlay brand_inverse_bg rounded-top-10">
        <img :src="localImg(banner)" class="img img-luminous">
      </div>
      <img :src="localImg(display_img)" class="display-img">
    </div>

    <!-- WELCOME BLOCK -->
    <div class="welcome-block w-100 d-flex flex-column justify-content-start align-items-center">
      <div class="welcome-title font-weight-bold brand_navy">Tutor Interventions</div>
      <div
        class="welcome-text color_grey_dark text-center"
      >Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DialogFive",

  props: ["banner", "display_img"],

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
