<template>
  <div>
    <div class="progress-chart position-relative w-100 mx-auto">
      <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from "@/assets/jsComps/BarChart";

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
                    return value + '%';
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

<style lang="scss" scoped>
</style>
