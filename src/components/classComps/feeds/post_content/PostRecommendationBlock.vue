<template>
  <div>
    <div class="post-recommendation-section">
      <!-- RECOMMENDATION TEXT -->
      <div class="recommendaion-text color_ash">{{ post.text }}</div>

      <!-- RECOMMENDATION HEADER -->
      <div class="recommendation-header d-flex justify-content-between align-items-center nowrap">
        <div class="header">Student</div>
        <div class="header">Recommendation</div>
      </div>

      <!-- RECOMMENDATION BODY -->
      <div
        class="recommendation-body d-flex justify-content-between align-items-center nowrap"
        v-for="(data, index) in post.recommendation_data"
        :key="index"
      >
        <div class="left d-flex justify-content-start align-items-center nowrap">
          <!-- AVATAR -->
          <div class="avatar avatar-square">
            <img :src="dynamicImg(data.child_img)" alt class="avatar-img">
          </div>
          <!-- INFO -->
          <div class="student-data">
            <div class="student-name font-weight-bold color_text">{{ data.child_name }}</div>
            <!-- PROGRESS BAR -->
            <div class="d-flex justify-content-start align-items-center nowrap">
              <div class="progress">
                <div
                  class="progress-bar"
                  :class="setProgressColor(data.percent)"
                  :style="'width:'+ data.percent +'%'"
                ></div>
              </div>
              <!-- PERCENT -->
              <div class="percent color_ash font-10 ml-2">{{data.percent}}%</div>
            </div>
          </div>
        </div>

        <div class="right d-flex justify-content-end align-items-center nowrap">
          <!-- Video card -->
          <div class="avatar video-icon mr-2 pointer">
            <span class="icon-video-card font-22 brand_tonic" @click="toggleVideoCard"></span>
          </div>

          <!-- Practice Card -->
          <div class="avatar practice-icon ml-2 pointer">
            <span class="icon-practice-card font-22 brand_navy" @click="togglePracticeCard"></span>
          </div>
        </div>
      </div>

      <!-- REPORT LINK -->
      <div class="d-flex flex-center mt-4 pb-5">
        <router-link to class="btn-link font-12 font-weight-bold">See full class report</router-link>
      </div>
    </div>
    <!-- MODAL GOES HERE -->
    <VideoCardModal v-if="video_card" @closeTriggered="toggleVideoCard"></VideoCardModal>
    <PracticeCardModal v-if="practice_card" @closeTriggered="togglePracticeCard"></PracticeCardModal>
    <!-- MODAL GOES HERE -->
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "PostRecommendationBlock",

  components: {
    VideoCardModal: () =>
      import(/* webpackChunkName: "VideoCardModal" */ "@/components/modalComps/classModals/VideoCardModal"),
    PracticeCardModal: () =>
      import(/* webpackChunkName: "PracticeCardModal" */ "@/components/modalComps/classModals/PracticeCardModal")
  },

  props: {
    post: Object
  },

  mixins: [RenderImages],

  data() {
    return {
      video_card: false,
      practice_card: false
    };
  },

  methods: {
    setProgressColor(percent) {
      if (percent > 35) {
        return "brand_accent_bg";
      } else if (percent <= 35) {
        return "brand_tonic_bg";
      }
    },

    toggleVideoCard() {
      this.video_card = !this.video_card;
    },

    togglePracticeCard() {
      this.practice_card = !this.practice_card;
    }
  }
};
</script>

<style lang="scss">
.post-recommendation-section {
  .recommendaion-text {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 15px;
  }

  .recommendation-header {
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    color: $color_ash;
    padding-bottom: 5px;
    border-bottom: 1px solid #c5c5c5;
  }

  .recommendation-body {
    padding: 16px 2px 13px;
    border-bottom: 1px solid #c5c5c5;

    .left {
      .avatar {
        margin-right: 10px;

        @include breakpoint_max(sm) {
          @include equal_min_edge(30);
        }
      }

      .student-name {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 10px;
      }

      .progress {
        width: 110px;
        height: 5px;
      }
    }

    .right {
    }
  }
}
</style>
