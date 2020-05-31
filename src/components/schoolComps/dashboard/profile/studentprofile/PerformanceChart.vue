<template>
  <div class="performance-pie-chart position-relative">
    <doughnut-chart :chart-data="datacollection" :options="options"></doughnut-chart>

    <!-- AVERAGE SCORE DISPLAY -->
    <div class="average-score-display">
      <div class="score font-weight-bold color_text text-center">{{ average_score }}%</div>
      <div class="score-meta text-uppercase color_grey_dark text-center">AVG. SCORE</div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from "@/scripts/components/DoughnutChart";

export default {
  name: "PerformanceChart",

  components: { DoughnutChart },

  props: {
    average_score: Number
  },

  watch: {
    average_score: "fillData"
  },

  data() {
    return {
      score_left: "",
      datacollection: {},
      options: {}
    };
  },

  mounted() {
    this.fillData();
  },

  methods: {
    getScoreLeft() {
      this.score_left = 100 - this.average_score;
    },

    fillData() {
      this.getScoreLeft();

      this.datacollection = {
        labels: ["Average Score", "Score Lost"],
        datasets: [
          {
            label: "Average Score",
            data: [this.average_score, this.score_left],
            backgroundColor: ["#00E29F", "#DDF1FA"],
            hoverBackgroundColor: "#01a775",
            borderWidth: 0
          }
        ]
      };

      this.options = {
        cutoutPercentage: 75,
        aspectRatio: 1,
        legend: {
          display: false
        }
      };
    }
  }
};
</script>

<style lang="scss">
.performance-pie-chart {
  @include equal_min_edge(250);

  @include breakpoint_max(xl) {
    @include equal_min_edge(220);
  }

  @include breakpoint_max(lg) {
    @include equal_min_edge(170);
  }

  @include breakpoint_max(md) {
    @include equal_min_edge(200);
    margin-left: auto;
    margin-right: auto;
  }

  .average-score-display {
    @include transform_center;
  }

  .score {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 4px;

    @include breakpoint_max(lg) {
      font-size: 22px;
    }
  }

  .score-meta {
    font-size: 12px;
    line-height: 16px;

    @include breakpoint_max(lg) {
      font-size: 10px;
    }
  }
}
</style>
