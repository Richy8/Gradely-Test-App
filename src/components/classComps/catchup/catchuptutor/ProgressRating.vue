<template>
  <div>
    <div class="progress-rating-section">
      <!-- RATING INDEX -->
      <div class="rating-index color_text">{{ rating_id }}</div>

      <!-- RATING PROGRESS -->
      <div class="progress border_grey_bg">
        <div
          class="progress-bar brand_accent_bg"
          role="progressbar"
          :style="'width:'+ rating_progress +'%'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressRating",

  props: {
    rating_id: Number,
    rating_progress: Number
  }
};
</script>

<style lang="scss">
.progress-rating-section {
  @include flex_row_start_nowrap;
  width: 180px;
  margin-bottom: 5px;

  .rating-index {
    font-size: 13px;
    line-height: 16px;
    margin-right: 5px;
    opacity: 0.5;
  }

  .progress {
    flex: 1;
    height: 3px;
  }
}
</style>
