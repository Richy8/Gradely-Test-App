<template>
  <div class="review-chart position-relative mx-auto">
    <doughnut-chart :chart-data="datacollection" :options="options"></doughnut-chart>
  </div>
</template>

<script>
import DoughnutChart from "@/scripts/components/DoughnutChart";

export default {
  name: "ReviewChart",

  components: { DoughnutChart },

  props: {
    green: Number,
    red: Number,
    yellow: Number
  },

  watch: {
    green: "fillData",
    red: "fillData",
    yellow: "fillData"
  },

  data() {
    return {
      datacollection: {},
      options: {}
    };
  },

  mounted() {
    this.fillData();
  },

  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Green", "Red", "Yellow"],
        datasets: [
          {
            label: "Review Chart",
            data: [this.green, this.red, this.yellow],
            backgroundColor: ["#60D2B0", "#FE747D", "#F2AB3E"],
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
.review-chart {
  @include equal_min_edge(210);

  @include breakpoint_max(xl) {
    @include equal_min_edge(180);
  }

  @include breakpoint_max(lg) {
    @include equal_min_edge(130);
  }

  @include breakpoint_max(md) {
    @include equal_min_edge(180);
  }
}
</style>
