<template>
  <div>
    <div class="post-activity-section" v-if="show_activity">
      <!-- LIKE -->
      <div class="post-activity d-flex">
        <span class="icon flex-center icon-thumbs-up position-relative" style="top: -1.5px;"></span>
        <span class="text">Like</span>
      </div>

      <!-- COMMENT -->
      <div class="post-activity" @click="$emit('toggleComment')">
        <span class="icon flex-center icon-chat"></span>
        <span class="text">Comment</span>
      </div>

      <!-- SHARE -->
      <div class="post-activity" @click="$emit('toggleShare')">
        <span class="icon flex-center icon-share"></span>
        <span class="text">Share</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostActivityCard",

  props: {
    show_activity: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.post-activity-section {
  @include flex_row_around_nowrap;
  margin: 11px 15px;
  padding: 11px 0px;
  border-top: 1px solid #eeeeee;

  .post-activity {
    @include flex_row_center_nowrap;
    cursor: pointer;

    .icon {
      font-size: 16px;
      color: $border_grey_dark;
      display: block;
      transition: all 0.4s ease-in-out;
    }
    .text {
      display: block;
      font-size: 12px;
      line-height: 140%;
      margin-left: 6px;
      color: $border_grey_dark;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      .icon,
      .text {
        color: $brand_inverse;
      }
    }
  }
}
</style>
