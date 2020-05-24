<template>
  <div>
    <div class="years-view-section">
      <div class="years-view">
        <div
          class="years"
          v-for="(year, index) in years"
          :key="index"
          @click="$emit('updateYear', year)"
          :class="[year === current_year ? 'active' : '']"
        >{{ year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YearsList",

  props: {
    current_year: Number,
    year_min: Number,
    year_max: Number
  },

  data() {
    return {
      years: [],
      date_obj: new Date()
    };
  },

  watch: {
    year_min: "yearData"
  },

  mounted() {
    this.yearData();
  },

  methods: {
    yearData() {
      this.years.length = 0;
      for (let i = this.year_min; i <= this.year_max; i++) {
        this.years.push(i);
      }
    }
  }
};
</script>

<style>
</style>
