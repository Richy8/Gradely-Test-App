<template>
  <div class="video-item-card rounded-10 white w-100 h-auto pointer">
    <div class="video-box position-relative rounded-10 overflow-hidden">
      <!-- VIDEO OVERLAY -->
      <div class="position-absolute w-100 h-100 rgba-black-light index-1"></div>
      <!-- VIDEO PLAY BUTTON -->

      <!-- VIDEO POSTER-->
      <img v-lazy="dynamicImg(card_video_poster)" alt>

      <div class="avatar index-1">
        <span class="icon-play-bg flex-center font-27 brand_accent"></span>
      </div>
    </div>

    <!-- CARD INFO -->
    <div class="card-info">
      <div
        class="card-subject text-uppercase font-weight-bold border_grey_dark font-9"
      >{{ card_subject }}</div>
      <div class="card-topic text-capitalize font-weight-bold brand_navy">{{ card_topic }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "VideoItemCard",

  props: {
    card_video_poster: String,
    card_subject: String,
    card_topic: String
  },

};
</script>

<style lang="scss">
.video-item-card {
  padding: 5px;
  @include flex_row_start_nowrap;
  margin-bottom: 15px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(0.97);
  }

  .video-box {
    @include equal_min_edge(100);
    margin-right: 10px;

    img {
      @include img_cover;
    }

    .avatar {
      @include transform_center;
    }
  }

  .card-info {
    .card-subject {
      margin-bottom: 10px;
    }
    .card-topic {
      font-size: 14px;
      line-height: 165%;
    }
  }
}
</style>
