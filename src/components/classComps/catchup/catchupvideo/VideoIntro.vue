<template>
  <div>
    <div class="video-intro-card">
      <div class="card-topic brand_navy text-capitalize">{{ card_topic }}</div>
      <div class="card-meta color_grey_dark">
        <span class="text-capitalize">{{ card_subject }}</span>
        • {{ card_views }} Views
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoIntro",

  props: {
    card_topic: String,
    card_subject: String,
    card_views: Number
  }
};
</script>

<style lang="scss">
.video-intro-card {
  margin-top: 30px;
  margin-bottom: 20px;

  .card-topic {
    font-size: 21px;
    line-height: 29px;
    margin-bottom: 5px;

    @include breakpoint_max(sm) {
      font-size: 19px;
    }
    @include breakpoint_max(xs) {
      font-size: 17px;
    }
  }
  .card-meta {
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 13px;
    }

    @include breakpoint_max(xs) {
      font-size: 12.5px;
    }
  }
}
</style>
