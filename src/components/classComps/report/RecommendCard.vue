<template>
  <div>
    <div class="recommend-card white mx-auto w-100">
      <!-- CHILD INFO -->
      <div class="child-info">
        <div class="avatar avatar-square">
          <img :src="dynamicImg(child_img)" :alt="child_name" class="avatar-img">
        </div>
        <div class="name color_text">
          {{ child_name }}
          <span class="percent" :class="state_color">({{ percent_progress }}%)</span>
        </div>
      </div>

      <!-- OPTION -->
      <div class="options">
        <!-- DESKTOP -->
        <div class="desktop-view">
          <!-- REMEDIAL OPTION -->
          <div class="option" @click="toggleRemedialCard">
            <!-- AVATAR -->
            <div class="avatar">
              <span class="flex-center icon-video-on brand_inverse font-22"></span>
            </div>
            <!-- TEXT -->
            <div class="text">Remedial Class</div>
          </div>

          <!-- VIDEO OPTION -->
          <div class="option ml-4" @click="toggleVideoCard">
            <!-- AVATAR -->
            <div class="avatar">
              <span class="flex-center icon-video-card brand_tonic font-22"></span>
            </div>
            <!-- TEXT -->
            <div class="text">Video</div>
          </div>

          <!-- PRACTICE OPTION -->
          <div class="option ml-4" @click="togglePracticeCard">
            <!-- AVATAR -->
            <div class="avatar">
              <span class="flex-center icon-practice-card brand_navy font-22"></span>
            </div>
            <!-- TEXT -->
            <div class="text">Practice</div>
          </div>
        </div>

        <!-- MOBILE -->
        <div class="mobile-view d-lg-none">
          <!-- REMEDIAL CARD -->
          <div class="mobile-option mr-2" @click="toggleRemedialCard">
            <div class="avatar">
              <span class="flex-center icon-video-on brand_inverse font-20"></span>
            </div>
          </div>
          <!-- REMEDIAL CARD -->

          <!-- VIDEO CARD -->
          <div class="mobile-option mr-2" @click="toggleVideoCard">
            <div class="avatar">
              <span class="flex-center icon-video-card brand_tonic font-20"></span>
            </div>
          </div>
          <!-- VIDEO CARD -->

          <!-- PRACTICE CARD -->
          <div class="mobile-option ml-2" @click="togglePracticeCard">
            <div class="avatar">
              <span class="flex-center icon-practice-card brand_navy font-20"></span>
            </div>
          </div>
          <!-- PRACTICE CARD -->
        </div>
      </div>
    </div>

    <!-- MODAL GOES HERE -->
    <SingleRemedialModal v-if="remedial_card" @closeTriggered="toggleRemedialCard"></SingleRemedialModal>
    <VideoCardModal v-if="video_card" @closeTriggered="toggleVideoCard"></VideoCardModal>
    <PracticeCardModal v-if="practice_card" @closeTriggered="togglePracticeCard"></PracticeCardModal>
    <!-- MODAL GOES HERE -->
  </div>
</template>

<script>
export default {
  name: "RecommendCard",

  props: {
    child_img: String,
    child_name: String,
    percent_progress: Number
  },

  components: {
    SingleRemedialModal: () =>
      import(/* webpackChunkName: "SingleRemedialModal" */ "@/components/modalComps/classModals/SingleRemedialModal"),
    VideoCardModal: () =>
      import(/* webpackChunkName: "VideoCardModal" */ "@/components/modalComps/classModals/VideoCardModal"),
    PracticeCardModal: () =>
      import(/* webpackChunkName: "PracticeCardModal" */ "@/components/modalComps/classModals/PracticeCardModal")
  },

  watch: {
    child_img: "updateCard",
    child_name: "updateCard",
    percent_progress: "updateCard"
  },

  data() {
    return {
      remedial_card: false,
      video_card: false,
      practice_card: false,
      state_color: ""
    };
  },

  mounted() {
    this.updateCard();
  },

  methods: {
    updateCard() {
      if (this.percent_progress >= 75) {
        this.state_color = "green-text";
      } else if (this.percent_progress >= 45 && this.percent_progress <= 74) {
        this.state_color = "brand_accent";
      } else if (this.percent_progress <= 44) {
        this.state_color = "brand_tonic";
      }
    },

    toggleRemedialCard() {
      this.remedial_card = !this.remedial_card;
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
.recommend-card {
  padding-top: 12px;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid $border_grey;
  @include flex_row_between_nowrap;

  .child-info {
    @include flex_row_start_nowrap;

    .avatar {
      margin-right: 15px;
    }

    .name {
      font-size: 14px;
      line-height: 19px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }

      @include breakpoint_max(md) {
        font-size: 14px;
      }

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
    }
  }

  .desktop-view,
  .mobile-view {
    @include flex_row_end_nowrap;
  }

  .desktop-view {
    @include breakpoint_max(lg) {
      display: none;
    }

    .option {
      @include flex_row_between_nowrap;
      padding: 2px 10px;
      cursor: pointer;
      background: #f5f5f5;
      border-radius: 30px;

      &:hover {
        background: #e9e9e9;
      }

      .avatar {
        margin-right: 13.5px;
      }

      .text {
        font-size: 13.5px;
        line-height: 19px;
        color: $color_ash;
      }
    }
  }
}
</style>
