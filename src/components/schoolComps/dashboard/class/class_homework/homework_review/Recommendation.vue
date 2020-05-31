<template>
  <div>
    <div class="recommendation">
      <div class="title color_text font-weight-bold">General Recommendation</div>

      <!-- RECOMMENDATION NOTE -->
      <div class="recommendation-note rounded-5 brand_inverse_light_bg w-100">
        <!-- ICON -->
        <div class="avatar d-none d-md-block">
          <span class="flex-center icon-comment-chat font-30 border_grey_dark"></span>
        </div>

        <!-- RECOMMENDATION TEXT -->
        <div class="text-info color_text">{{ note }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendation",

  props: {
    note: String
  }
};
</script>

<style lang="scss">
.recommendation {
  .title {
    margin-bottom: 20px;
  }

  .recommendation-note {
    @include flex_row_start_nowrap;
    padding: 26px 20px;

    .avatar {
      margin-right: 15px;
    }

    .text-info {
      font-size: 13px;
      line-height: 160%;
    }
  }
}
</style>
