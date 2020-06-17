<template>
  <div>
    <div class="review-chart-card white rounded-10">
      <ReviewChart :green="30" :red="35" :yellow="35"></ReviewChart>

      <div class="chart-info">
        <!-- LEFT -->
        <div class="left">
          <div class="percent color_text font-weight-bold text-center">63%</div>
          <div class="description color_grey_dark">Avg. Class Score</div>
        </div>

        <!-- RIGHT -->
        <div class="right">
          <div class="percent color_text font-weight-bold text-center">75%</div>
          <div class="description color_grey_dark">Completion Rate</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewChart from "@/components/classComps/homework/homework_review/ReviewChart";

export default {
  name: "ReviewChartCard",

  components: {
    ReviewChart
  }
};
</script>

<style lang="scss">
.review-chart-card {
  border: 1px solid $border_grey_light;
  box-sizing: border-box;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 38px 20px 30px;

  @include breakpoint_max(xl) {
    padding: 38px 10px 30px;
  }

  @include breakpoint_max(md) {
    padding: 38px 40px 30px;
    margin-bottom: 30px;
  }

  .chart-info {
    @include flex_row_between_nowrap;
    margin-top: 30px;

    .percent {
      font-size: 18px;
      line-height: 140%;

      @include breakpoint_max(xl) {
        font-size: 15px;
      }

      @include breakpoint_max(md) {
        font-size: 16px;
      }
    }

    .description {
      font-size: 11px;
      line-height: 177.06%;
      text-transform: uppercase;
      text-align: center;

      @include breakpoint_max(xl) {
        font-size: 10px;
      }

      @include breakpoint_max(lg) {
        font-size: 11px;
      }
    }
  }
}
</style>
