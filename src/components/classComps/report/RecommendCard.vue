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
          <!-- VIDEO OPTION -->
          <div class="option" @click="$emit('openVideo')">
            <!-- AVATAR -->
            <div class="avatar">
              <span class="flex-center icon-video-card brand_tonic font-22"></span>
            </div>
            <!-- TEXT -->
            <div class="text">Explainer</div>
          </div>

          <!-- PRACTICE OPTION -->
          <div class="option ml-4" @click="$emit('openPractice')">
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
          <!-- VIDEO CARD -->
          <div class="mobile-option mr-2" @click="$emit('openVideo')">
            <div class="avatar">
              <span class="flex-center icon-video-card brand_tonic font-20"></span>
            </div>
          </div>
          <!-- VIDEO CARD -->

          <!-- PRACTICE CARD -->
          <div class="mobile-option ml-2" @click="$emit('openPractice')">
            <div class="avatar">
              <span class="flex-center icon-practice-card brand_navy font-20"></span>
            </div>
          </div>
          <!-- PRACTICE CARD -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "RecommendCard",

  props: {
    child_img: String,
    child_name: String,
    percent_progress: Number
  },

  mixins: [RenderImages],

  watch: {
    child_img: "updateCard",
    child_name: "updateCard",
    percent_progress: "updateCard"
  },

  data() {
    return {
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
