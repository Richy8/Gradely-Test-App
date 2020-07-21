<template>
  <div>
    <div class="library-video-card white rounded-10 overflow-hidden w-100 h-auto">
      <!-- TOP -->
      <div class="top position-relative w-100">
        <img v-lazy="dynamicImg(video_poster)" alt>

        <!-- OVERLAY -->
        <div class="position-absolute w-100 h-100 rgba-black-light"></div>

        <!-- PLAY BUTTON -->
        <div class="avatar play-btn pointer">
          <span class="icon-play-bg brand_accent flex-center"></span>
        </div>
      </div>

      <!-- BOTTOM -->
      <div class="bottom">
        <!-- VIDEO TITLE -->
        <div class="video-title font-weight-bold brand_navy">{{ video_title }}</div>

        <!-- VIDEO META -->
        <div class="video-meta color_grey_dark">
          <span class="date">{{ video_date }}</span>&nbsp;
          <span class="time">{{ video_time }}</span>
        </div>

        <!-- VIDEO TAG -->
        <div class="video-tag brand_primary">#{{video_tag}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",

  props: {
    video_poster: String,
    video_file: String,
    video_title: String,
    video_date: String,
    video_time: String,
    video_tag: String
  }
};
</script>

<style lang='scss'>
.library-video-card {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(0.98);
  }

  .top {
    height: 180px;

    @include breakpoint_max(lg) {
      height: 150px;
    }

    @include breakpoint_max(md) {
      height: 170px;
    }

    @include breakpoint_max(xs) {
      height: 140px;
    }

    img {
      @include img_cover;
    }

    .play-btn {
      @include transform_center;
      @include equal_min_edge(40);

      @include breakpoint_max(lg) {
        @include equal_min_edge(30);
      }

      @include breakpoint_max(md) {
        @include equal_min_edge(38);
      }

      @include breakpoint_max(xs) {
        @include equal_min_edge(30);
      }

      span {
        font-size: 38px;

        @include breakpoint_max(md) {
          font-size: 40px;
        }
        @include breakpoint_max(xs) {
          font-size: 30px;
        }
      }
    }
  }

  .bottom {
    padding: 15px 15px 20px;

    @include breakpoint_max(lg) {
      padding: 10px 15px;
    }

    @include breakpoint_max(xs) {
      padding: 8px 10px 12px;
    }

    .video-title {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 3px;

      @include breakpoint_max(lg) {
        font-size: 14.5px;
      }

      @include breakpoint_max(xs) {
        font-size: 13.5px;
      }
    }

    .video-meta {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 15px;

      @include breakpoint_max(lg) {
        font-size: 11px;
      }
    }

    .video-tag {
      font-size: 12px;
      line-height: 16px;

      @include breakpoint_max(lg) {
        font-size: 11px;
      }
    }
  }
}
</style>
