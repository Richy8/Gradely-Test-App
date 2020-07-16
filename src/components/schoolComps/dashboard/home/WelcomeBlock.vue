<template>
  <div>
    <!-- EMPTY LOGO -->
    <div class="empty-logo">
      <img
        v-lazy="localImg('HugoListEmpty.png')"
        alt="HugoListEmpty"
        class="hugo-empty-img position-relative"
      >
    </div>

    <!-- WELCOME SECTION -->
    <div
      class="welcome-block-section w-100 d-flex flex-column justify-content-start align-items-center"
    >
      <div class="title font-weight-bold brand_inverse_light text-center">Welcome to Gradely</div>
      <div
        class="info border_grey_light text-center"
      >You have no activity happening in your school at the moment. Here are a few things you can do about it.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeBlock"
};
</script>

<style lang="scss">
// DEFAULT INFO
.hugo-empty-img {
  width: 208px;
  height: 156px;
  margin: 48px 81px 0;

  @include breakpoint_max(xl) {
    margin: 48px auto 0;
    left: 50%;
    transform: translateX(-50%);
  }
}

.welcome-block-section {
  margin-bottom: 30.67px;
  padding-left: 38px;
  padding-right: 38px;

  @include breakpoint_max(xl) {
    padding-left: 25px;
    padding-right: 25px;
  }

  @include breakpoint_max(lg) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @include breakpoint_max(md) {
    padding-left: 50px;
    padding-right: 50px;
  }

  .title {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 10px;

    @include breakpoint_max(lg) {
      font-size: 14.5px;
    }

    @include breakpoint_max(lg) {
      font-size: 16px;
    }
  }

  .info {
    font-weight: 100;
    font-size: 14px;
    line-height: 20px;

    @include breakpoint_max(xl) {
      font-size: 12.5px;
    }

    @include breakpoint_max(lg) {
      font-size: 12px;
    }

    @include breakpoint_max(md) {
      font-size: 12.5px;
    }
  }
}
</style>
