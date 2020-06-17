<template>
  <div>
    <div class="progress-chart position-relative w-100 mx-auto">
      <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from "@/scripts/components/BarChart";

export default {
  name: "TopicProgressChart",

  components: {
    BarChart
  },

  props: {
    above_avg: Number,
    average: Number,
    below_avg: Number
  },

  watch: {
    above_avg: "fillData",
    average: "fillData",
    below_avg: "fillData"
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
        labels: ["Above Avg.", "Average", "Below Avg."],
        datasets: [
          {
            label: "Topic Progress",
            data: [this.above_avg, this.average, this.below_avg],
            backgroundColor: ["#60D2B0", "#FAA017", "#F6515B"],
            hoverBackgroundColor: ["#37a584", "#bb7408", "#c4333c"],
            borderWidth: 0,
            barPercentage: 0.5
          }
        ]
      };

      this.options = {
        scales: {
          yAxes: [
            {
              gridLines: {
                // display: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 20,
                min: 0,
                max: 100,
                callback: function(value) {
                  return value + "%";
                }
              }
            }
          ],

          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        maintainAspectRatio: false,
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
.progress-chart {
  canvas {
    width: 400px !important;
    height: 280px !important;

    @include breakpoint_max(xl) {
      width: 380px !important;
      height: 270px !important;
    }

    @include breakpoint_max(lg) {
      margin-left: -20px;
      width: 280px !important;
      height: 200px !important;
    }

    @include breakpoint_max(md) {
      width: 100% !important;
      height: 280px !important;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
