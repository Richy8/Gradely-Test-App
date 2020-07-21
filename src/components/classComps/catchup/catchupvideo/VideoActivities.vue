<template>
  <div class="video-card-activities">
    <!-- LEFT -->
    <div class="left">
      <div class="avatar brand_inverse_bg">
        <div class="avatar-text font-weight-bold brand_navy">{{ getInitial }}</div>
      </div>

      <div class="name font-weight-bold brand_navy text-capitalize">{{ card_name }}</div>
    </div>

    <!-- RIGHT -->
    <div class="right">
      <!-- LIKE ACTIVITY -->
      <div class="item pointer">
        <div class="avatar">
          <span class="icon-thumbs-up flex-center color_grey_dark"></span>
        </div>

        <!-- COUNT -->
        <div class="count color_grey_dark">{{ card_like_count }}</div>
      </div>

      <!-- DISLIKE ACTIVITY -->
      <div class="item pointer">
        <div class="avatar">
          <span class="icon-thumbs-down flex-center color_grey_dark"></span>
        </div>

        <!-- COUNT -->
        <div class="count color_grey_dark">{{ card_dislike_count }}</div>
      </div>

      <!-- SHARE ACTIVITY -->
      <div class="item pointer">
        <div class="avatar">
          <span class="icon-share flex-center color_grey_dark"></span>
        </div>

        <!-- COUNT -->
        <div class="count color_grey_dark">Share</div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";

export default {
  name: "VideoActivities",

  props: {
    card_name: String,
    card_like_count: String,
    card_dislike_count: String
  },

  computed: {
    getInitial() {
      return setInitial(this.card_name);
    }
  }
};
</script>

<style lang="scss">
.video-card-activities {
  padding: 10px 0px;
  margin-bottom: 30px;
  border-bottom: 1px solid $border_grey;
  @include flex_row_between_wrap;

  .left {
    @include flex_row_start_nowrap;

    .avatar {
      @include equal_min_edge(32);
      margin-right: 10px;

      @include breakpoint_max(xs) {
        margin-right: 7px;
      }
    }

    .name {
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(sm) {
        font-size: 14px;
      }

      @include breakpoint_max(xs) {
        font-size: 13px;
      }
    }
  }

  .right {
    @include flex_row_end_nowrap;

    .item {
      @include flex_row_start_nowrap;
      margin-left: 20px;

      @include breakpoint_max(sm) {
        margin-left: 10px;
      }

      span {
        font-size: 18px;

        @include breakpoint_max(xs) {
          font-size: 16px;
        }
      }

      .count {
        font-size: 14px;
        line-height: 140%;

        @include breakpoint_max(sm) {
          font-size: 12.5px;
        }

        @include breakpoint_max(xs) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
