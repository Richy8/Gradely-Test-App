<template>
  <div>
    <div class="comment-input-section">
      <!-- COMMENT PHOTO -->
      <div class="avatar avatar-square">
        <div class="avatar-text brand_inverse_light_bg brand_primary">FS</div>
      </div>

      <!-- COMMENT TEXT -->
      <div class="comment-text py-3 color_grey_dark" @click="$emit('toggleComment')">Write a comment</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentInputCard"
};
</script>

<style lang="scss">
.comment-input-section {
  @include flex_row_start_nowrap;
  padding: 10px 15px;

  .avatar {
    margin-right: 10px;
  }

  .comment-text {
    font-size: 12px;
    line-height: 16px;
    flex: 1;
    cursor: text;
  }
}
</style>
