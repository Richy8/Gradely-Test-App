<template>
  <div>
    <div class="row activity-score-card white rounded-5">
      <div class="col-4 col-sm-4 col-md-2 item">{{ date }}</div>
      <div class="col-6 col-sm-6 col-md-4 item">{{ description }}</div>
      <div class="col-3 item d-none d-md-block">{{ type }}</div>
      <div class="col-2 col-md-3 item d-flex justify-content-start align-items-center nowrap">
        <div class="progress mr-2">
          <div
            class="progress-bar"
            :class="scoreBg"
            :style="'width:'+score +'%'"
            role="progressbar"
          ></div>
        </div>
        <div class="score">{{ score }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivityScoreCard",

  props: {
    date: String,
    description: String,
    type: String,
    score: Number
  },

  data() {
    return {
      scoreBg: ""
    };
  },

  mounted() {
    this.setScoreBg();
  },

  watch: {
    score: "getScoreBg"
  },

  methods: {
    setScoreBg() {
      if (this.score > 75) {
        this.scoreBg = "brand_green_bg";
      } else if (this.score > 45 && this.score < 75) {
        this.scoreBg = "brand_accent_bg";
      } else if (this.score < 45) {
        this.scoreBg = "brand_red_bg";
      }
    }
  }
};
</script>

<style lang="scss">
.activity-score-card {
  padding: 17px 0px 16px;
  margin-bottom: 2px;
  margin-right: -2px !important;
  margin-left: -2px !important;

  @include breakpoint_max(sm) {
  }

  .item {
    font-size: 14px;
    line-height: 19px;
    color: $color_text;

    @include breakpoint_max(lg) {
      font-size: 13px;
    }

    @include breakpoint_max(md) {
      font-size: 12.5px;
    }

    @include breakpoint_max(sm) {
      font-size: 12px;
    }

    @include breakpoint_max(xs) {
      font-size: 11.5px;
    }
  }
  .progress {
    width: 138px;
    height: 6px;

    @include breakpoint_max(lg) {
      width: 130px;
    }

    @include breakpoint_max(md) {
      display: none;
    }
  }
}
</style>
