<template>
  <div>
    <div
      class="comment-view-display brand_inverse_light_bg"
      v-for="(comment, index) in comments"
      :key="index"
    >
      <!-- COMMENT PHOTO -->
      <div class="avatar avatar-square border_grey_bg">
        <img
          :src="dynamicImg(comment.comment_author_img)"
          alt
          class="avatar-img"
          v-if="comment.comment_author_img"
        >
        <div class="avatar-text white-text" :class="setAvatarBg" v-else>{{ getInitial }}</div>
      </div>

      <!-- COMMENT INFO -->
      <div class="comment-info">
        <!-- COMMENT NAME -->
        <div class="comment-name font-weight-bold brand_primary">{{ comment.comment_author_name }}</div>

        <!-- COMMENT  -->
        <div class="comment color_text">{{ comment.comment_body }}</div>

        <!-- COMMENT ACTIVITY -->
        <div class="comment-activity color_grey_dark">
          <span class="comment-stat">{{ comment.comment_like_count }} Likes •</span> &nbsp;
          <span class="comment-stat">{{comment.comment_reply_count}} Reply •</span> &nbsp;
          <span class="comment-stat">{{ comment.comment_time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, shuffle, random, setInitial } from "@/scripts/utilities";

export default {
  name: "CommentViewCard",

  props: {
    comments: Array
  },

  computed: {
    getInitial() {
      return setInitial(this.post.comment_author_name);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  }
};
</script>

<style lang="scss">
.comment-view-display {
  @include flex_row_start_nowrap;
  align-items: flex-start;
  padding: 10px 15px 6px;

  .avatar {
    margin-right: 10px;

    @include breakpoint_max(sm) {
      @include equal_min_edge(30);
    }
  }

  .comment-name {
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 5px;
  }

  .comment {
    font-size: 11.5px;
    line-height: 165%;
    margin-bottom: 8px;
  }

  .comment-activity {
    font-size: 10px;
    line-height: 165%;
  }
}
</style>
