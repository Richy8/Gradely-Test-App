<template>
  <div class="doughnut-chart">
    <doughnut-chart :chart-data="datacollection" :options="options"></doughnut-chart>
  </div>
</template>

<script>
import DoughnutChart from "@/scripts/components/DoughnutChart";

export default {
  name: "GenderChart",

  components: { DoughnutChart },

  props: {
    female_data: Number,
    male_data: Number
  },

  watch: {
    female_data: "fillData",
    male_data: "fillData"
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
        labels: ["Female Students", "Male Students"],
        datasets: [
          {
            label: "School gender summary",
            data: [this.female_data, this.male_data],
            backgroundColor: ["#11bdcf", "#2a4f77"],
            hoverBackgroundColor: "#08384D",
            borderWidth: 0
          }
        ]
      };

      this.options = {
        cutoutPercentage: 70,
        aspectRatio: 1,
        legend: {
          display: false
        }
      };
    }
  }
};
</script>

<style>
</style>
