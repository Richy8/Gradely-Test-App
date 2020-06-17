<template>
  <div>
    <div class="trend-chart position-relative w-100 h-auto mx-auto">
      <line-chart :chart-data="datacollection" :options="options"></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from "@/scripts/components/LineChart";

export default {
  name: "TopicTrendChart",

  components: {
    LineChart
  },

  props: {
    trends: Array
  },

  data() {
    return {
      datacollection: {},
      options: {},
      labelData: []
    };
  },

  watch: {
    trends: "fillData"
  },

  mounted() {
    this.fillData();
  },

  methods: {
    fillData() {
      this.getXValues();
      this.datacollection = {
        labels: this.labelData,
        datasets: [
          {
            label: "Academic Weeks",
            data: this.trends,
            borderWidth: 1,
            borderColor: "#3873b3",
            lineTension: 0,
            fill: false,
            pointBackgroundColor: "#11BDCF"
          }
        ]
      };

      this.options = {
        title: {
          display: true,
          text: "Academic Weeks",
          position: "bottom",
          fontWeight: "100",
          fontSize: 13,
          fontColor: "#757575"
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                // display: false
              },
              ticks: {
                beginAtZero: true,
                stepSize: 25,
                min: 0,
                max: 100
                // callback: function(value) {
                //   return value + "%";
                // }
              }
            }
          ],

          xAxes: [
            {
              gridLines: {
                // display: false
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
    },

    getXValues() {
      this.labelData.length = 0;
      for (let i in this.trends) {
        this.labelData.push(i);
      }
    }
  }
};
</script>

<style lang="scss">
.trend-chart {
  canvas {
    height: 300px !important;

    @include breakpoint_max(md) {
      height: 280px !important;
    }

    @include breakpoint_max(sm) {
      height: 250px !important;
    }

    @include breakpoint_max(xs) {
      height: 220px !important;
    }
  }
}
</style>
