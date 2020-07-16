<template>
  <div>
    <div
      class="breakdown-card d-flex justify-content-start align-items-end nowrap fadeInUp"
      v-wow="{'animation-name': 'fadeInUp', 'animation-duration': '1s'}"
    >
      <!-- AVATAR -->
      <div class="avatar avatar-square">
        <img :src="dynamicImg(topic_img)" :alt="topic" class="avatar-img">
      </div>

      <!-- TOPIC -->
      <div class="topic-trend pb-1 w-100">
        <div class="topic-data d-flex justify-content-between align-items-center nowrap">
          <!-- TOPIC TITLE -->
          <div class="topic color_ash">{{ topic }}</div>

          <!-- TREND DATA -->
          <div class="data d-flex justify-content-end align-items-center nowrap">
            <!-- TREND PERCENTAGE -->
            <div class="percent color_grey_dark">{{trend_percent}}%</div>
            <!-- TREND CHART -->
            <div class="trend-chart" :class="trend_color">
              <span :class="trend_type"></span>
              <span>{{trend_count}}</span>
            </div>
          </div>
        </div>

        <!-- PROGRESS BAR -->
        <div class="progress">
          <div
            class="progress-bar"
            :class="trend_color_bg"
            :style="'width:'+ trend_percent +'%'"
            role="progressbar"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreakdownCard",

  props: {
    topic_img: String,
    topic: String,
    trend_percent: Number,
    trend_count: Number
  },

  data() {
    return {
      trend_color: "",
      trend_color_bg: "",
      trend_type: ""
    };
  },

  watch: {
    trend_percent: "updateTrend",
    trend_count: "updateTrend"
  },

  mounted() {
    this.updateTrend();
  },

  methods: {
    updateTrend() {
      if (this.trend_percent >= 75) {
        this.trend_color = "brand_green";
        this.trend_color_bg = "brand_green_bg";
        this.trend_type = "icon-trending-up";
      } else if (this.trend_percent >= 45 && this.trend_percent <= 74) {
        this.trend_color = "brand_accent";
        this.trend_color_bg = "brand_accent_bg";
        this.trend_type = "icon-trending-up";
      } else if (this.trend_percent <= 44) {
        this.trend_color = "brand_red";
        this.trend_color_bg = "brand_red_bg";
        this.trend_type = "icon-trending-down";
      }
    }
  }
};
</script>

<style lang="scss">
.breakdown-card {
  margin-bottom: 23px;

  .avatar {
    margin-right: 10px;
    @include equal_min_edge(36);
  }

  .topic-data {
    margin-bottom: 5px;

    .topic,
    .percent {
      font-size: 12px;
      line-height: 16px;
    }

    .trend-chart {
      margin-left: 11px;
      font-size: 10px;
      line-height: 14px;
    }
  }
}
</style>
