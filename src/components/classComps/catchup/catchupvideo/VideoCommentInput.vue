<template>
  <div>
    <div class="video-comment-input">
      <!-- AVATAR -->
      <div class="avatar avatar-square avatar_md brand_navy_bg">
        <img v-lazy="dynamicImg(card_img)" alt class="avatar-img" v-if="card_img">
        <div class="avatar-text white-text brand_navy_bg font-weight-bold" v-else>{{ getInitial }}</div>
      </div>

      <!-- COMMENT BOX -->
      <div class="comment-box">
        <div class="name brand_navy font-weight-bold">{{ card_name }}</div>

        <form @submit.prevent>
          <textarea
            v-model="form.comment"
            class="form-control comment-input"
            placeholder="Your comment here"
            rows="6"
          ></textarea>

          <!-- BUTTONS -->
          <div class="d-flex justify-content-end align-items-center nowrap">
            <button class="btn btn-md transparent_bg z-depth-0 font-weight-bold color_text">Cancel</button>

            <button class="btn btn-md btn-accent font-weight-bold color_text ml-4 mr-0">Post</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";

export default {
  name: "VideoCommentInput",

  props: {
    card_img: String,
    card_name: String
  },

  computed: {
    getInitial() {
      return setInitial(this.card_name);
    }
  },

  data() {
    return {
      form: {
        comment: ""
      }
    };
  }
};
</script>

<style lang="scss">
.video-comment-input {
  @include flex_row_start_nowrap;
  align-items: flex-start;
  padding-bottom: 15px;
  border-bottom: 1px solid #e5e5e5;

  .avatar {
    margin-right: 20px;

    @include breakpoint_max(sm) {
      margin-right: 10px;
    }
  }

  .comment-box {
    flex: 1;

    .name {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 10px;
    }

    .comment-input {
      margin-bottom: 20px;
      resize: none;
    }
  }
}
</style>
