<template>
  <div>
    <div class="post-input-options rounded-bottom-5 color_white_bg">
      <!-- OPTIONS -->
      <div class="options">
        <!-- PAPERCLIP -->
        <div class="avatar">
          <span class="flex-center icon-paper-clip"></span>
        </div>

        <!-- LINK -->
        <div class="avatar">
          <span class="flex-center icon-url-link"></span>
        </div>

        <!-- IMAGE -->
        <div class="avatar">
          <span class="flex-center icon-image"></span>
        </div>

        <!-- POLLS -->
        <div class="avatar" @click="$emit('pollClicked')" v-show="!comment_type">
          <span class="flex-center icon-poll"></span>
        </div>
      </div>

      <!-- POST BUTTON -->
      <div class="post-button">
        <span
          class="color_text rounded-20 text-capitalize"
          :class="setButtonType"
          v-if="comment_type"
        >Reply</span>
        <span class="color_text rounded-20 text-uppercase" :class="setButtonType" v-else>Post</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostInputOptions",

  props: {
    comment_type: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    setButtonType() {
      return this.disabled ? "border_grey_bg" : "brand_accent_bg btn-accent";
    }
  }
};
</script>

<style lang="scss">
.post-input-options {
  padding: 6px 17px;
  @include flex_row_between_nowrap;

  .options {
    @include flex_row_start_nowrap;

    .avatar {
      margin-right: 13px;
      cursor: pointer;

      span {
        color: $color_grey_dark;
        font-size: 19px;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        span {
          color: $brand_accent !important;
        }
      }
    }
  }

  .post-button {
    cursor: pointer;
    span {
      font-size: 12px;
      font-weight: 500;
      padding: 6px 16px;
      text-shadow: 0.25px 0px, 0px 0.25px, 0.25px 0.25px;
    }
  }
}
</style>
