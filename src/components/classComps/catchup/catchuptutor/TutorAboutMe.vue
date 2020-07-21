<template>
  <div>
    <div class="tutor-about-section">
      <div class="tutor-page-title color_text text-capitalize">About Me</div>
      <!-- ABOUT ME TEXT -->
      <div class="about-text color_ash">{{ about_text }}</div>
      <!-- ABOUT ME TEXT -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorAboutMe",

  props: {
    about_text: String
  }
};
</script>

<style lang="scss">
.tutor-about-section {
  margin-bottom: 50px;

  .about-text {
    font-size: 14px;
    line-height: 170%;
  }
}
</style>
