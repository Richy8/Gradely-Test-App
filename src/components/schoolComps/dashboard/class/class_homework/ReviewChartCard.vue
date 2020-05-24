<template>
  <div>
    <div class="review-chart-card white rounded-15">
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
import ReviewChart from "@/components/schoolComps/dashboard/class/class_homework/ReviewChart";

export default {
  name: "ReviewChartCard",

  components: {
    ReviewChart
  }
};
</script>

<style>
</style>
