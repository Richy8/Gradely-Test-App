<template>
  <div>
    <div class="profile-about-section">
      <!-- ABOUT TITLE -->
      <div class="page-sub-title">About Us</div>

      <!-- ABOUT TEXT -->
      <div class="about-text color_ash">
        <p>{{ chunk_one }}</p>
        <p>{{ chunk_two }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSchool",
  props: {
    chunk_one: String,
    chunk_two: String
  }
};
</script>

<style lang="scss">
.profile-about-section {
  margin-bottom: 50px;

  .about-text {
    font-size: 15.5px;
    line-height: 180%;
    letter-spacing: 0.02em;

    p {
      margin-bottom: 20px;
    }

    @include breakpoint_max(xl) {
      font-size: 15px;
    }

    @include breakpoint_max(xs) {
      font-size: 14.5px;
    }
  }
}
</style>
