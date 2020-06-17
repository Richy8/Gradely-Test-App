<template>
  <div class="recommendation-note rounded-5" :class="state_color">
    <!-- ICON -->
    <div class="avatar d-none d-md-block">
      <span class="flex-center icon-comment-chat font-30 border_grey_dark"></span>
    </div>

    <!-- RECOMMENDATION TEXT -->
    <div class="text-info">
      <div class="title brand_navy text-uppercase">Recommendation</div>
      <div class="info color_text">{{ recommendation_text }}.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationNote",

  props: {
    progress_state: String,
    recommendation_text: String
  },

  watch: {
    progress_state: "updateRecommendation",
    recommendation_text: "updateRecommendation"
  },

  data() {
    return {
      state_color: ""
    };
  },

  mounted() {
    this.updateRecommendation();
  },

  methods: {
    updateRecommendation() {
      if (this.progress_state.toLowerCase() === "struggling") {
        this.state_color = "struggling-bg";
      } else if (this.progress_state.toLowerCase() === "average") {
        this.state_color = "average-bg";
      } else if (this.progress_state.toLowerCase() === "top") {
        this.state_color = "brand_inverse_light_bg";
      }
    }
  }
};
</script>

<style lang="scss">
.struggling-bg {
  background: #ffdcde;
}
.average-bg {
  background: #ffebce;
}
.top-bg {
  background: #c5ffee;
}

// RECOMMENDATION NOTE
.recommendation-note {
  width: 96%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  padding: 16px 20px;
  @include flex_row_start_nowrap;

  .avatar {
    margin-right: 19.6px;
  }

  .title {
    margin-bottom: 8px;
    font-size: 12px;
    line-height: 16px;
  }

  .info {
    font-size: 12px;
    line-height: 165%;
  }
}
</style>
