<template>
  <div>
    <div class="years-view-section">
      <div class="years-view w-100 h-auto overflow-auto font-14">
        <div
          class="years w-25 text-center border-0 select-none pointer"
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

<style lang="scss">
.years-view-section {
  .years-view {
    @include flex_row_evenly_wrap;
    justify-content: flex-start;

    .years {
      padding-top: 10px;
      padding-bottom: 10px;
      margin-bottom: 5px;
      transition: background-color 0.25s ease-in-out;

      &:hover {
        background-color: rgba($brand_accent, 0.3);
      }
    }

    .active {
      background: rgba($brand_inverse, 0.2);
    }
  }
}
</style>
