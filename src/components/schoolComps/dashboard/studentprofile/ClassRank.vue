<template>
  <div>
    <div class="class-rank">
      <div class="title color_grey_dark text-uppercase text-center">Class Rank</div>

      <!-- RANK INDICATOR -->
      <div class="rank-indicator">
        <span
          v-for="(data, index) in rank_list"
          :key="index"
          :class="[data === 'success' ? 'icon-user-fill font-25 brand_inverse' : 'icon-user-outline font-25 border_grey_dark']"
        ></span>
      </div>

      <!-- RANK DESCRIPTION -->
      <div class="rank-description text-center color_grey_dark">
        Top
        <span>{{ rank_percent }}</span>% of your class
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassRank",

  props: {
    rank_percent: String
  },

  data() {
    return {
      rank_data: "",
      rank_success: "",
      rank_error: "",
      success_list: [],
      error_list: [],
      rank_list: ""
    };
  },

  watch: {
    rank_percent: "evaluateRank"
  },

  mounted() {
    this.evaluateRank();
  },

  methods: {
    evaluateRank() {
      this.rank_data = parseInt(this.rank_percent.slice(0, -1));
      this.rank_success = this.rank_data;
      this.rank_error = 10 - this.rank_data;

      // EMPTY ARRAY
      this.success_list.length = 0;
      this.error_list.length = 0;

      // PUSH SUCCESS
      for (let i = 0; i < this.rank_success; i++) {
        this.success_list.push("success");
      }

      // PUSH FAILED
      for (let j = 0; j < this.rank_error; j++) {
        this.error_list.push("error");
      }

      this.rank_list = this.success_list.concat(this.error_list);
    }
  }
};
</script>

<style>
</style>
