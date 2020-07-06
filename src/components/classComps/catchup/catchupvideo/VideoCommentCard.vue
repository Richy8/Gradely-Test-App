<template>
  <div class="video-comment-card">
    <!-- AVATAR -->
    <div class="avatar avatar-square avatar_md">
      <img v-lazy="dynamicImg(card_img)" alt class="avatar-img" v-if="card_img">
      <div class="avatar-text white-text brand_navy_bg font-weight-bold" v-else>{{ getInitial }}</div>
    </div>

    <!-- CARD-INFO -->
    <div class="card-info">
      <div class="top">
        <span class="name font-weight-bold brand">{{ card_name }}</span> -
        <span class="date color_grey_dark">{{ card_date }}</span>
      </div>
      <div class="mid color_ash">{{ card_comment }}</div>
      <div class="bottom font-weight-bold border_grey_dark pointer">Reply</div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import { setInitial } from "@/scripts/utilities";

export default {
  name: "VideoCommentCard",

  props: {
    card_img: String,
    card_name: String,
    card_date: String,
    card_comment: String
  },

  mixins: [RenderImages],

  computed: {
    getInitial() {
      return setInitial(this.card_name);
    }
  }
};
</script>

<style lang="scss">
.video-comment-card {
  padding: 15px 0px;
  border-bottom: 1px solid #e5e5e5;
  @include flex_row_start_nowrap;
  align-items: flex-start;

  .avatar {
    margin-right: 20px;

    @include breakpoint_max(xs) {
      margin-right: 10px;
    }
  }

  .card-info {
    .top {
      margin-bottom: 5px;
      .name {
        font-size: 14px;
        line-height: 19px;

        @include breakpoint_max(xs) {
          font-size: 13.5px;
        }
      }

      .date {
        font-size: 12px;
        line-height: 16px;

        @include breakpoint_max(xs) {
          font-size: 11.5px;
        }
      }
    }

    .mid {
      font-size: 14px;
      line-height: 165%;
      margin-bottom: 10px;

      @include breakpoint_max(xs) {
        font-size: 13.5px;
      }
    }

    .bottom {
      font-size: 12px;
      line-height: 165%;
    }
  }
}
</style>
