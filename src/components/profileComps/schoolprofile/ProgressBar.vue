<template>
  <div class="progress-bar-section">
    <div class="label-range color_text font-14">{{ range }}</div>
    <div class="d-flex justify-content-start align-items-center">
      <div class="progress mr-2">
        <div
          class="progress-bar brand_primary_bg"
          :style="'width:'+ percent +'%'"
          role="progressbar"
        ></div>
      </div>

      <div class="percentage brand_primary font-14">{{ percent }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",

  props: {
    range: String,
    percent: Number
  }
};
</script>

<style lang="scss">
.progress-bar-section {
  margin-bottom: 18px;

  .label-range {
    letter-spacing: 0.05em;
  }

  .progress {
    width: 100px;
    height: 6px;

    @include breakpoint_max(xs) {
      width: 77px;
    }

    @include breakpoint_min_max(330, 380) {
      width: 70px;
    }
  }
}
</style>
