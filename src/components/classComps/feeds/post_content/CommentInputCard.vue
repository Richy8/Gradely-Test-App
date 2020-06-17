<template>
  <div>
    <div class="comment-input-section">
      <!-- COMMENT PHOTO -->
      <div class="avatar avatar-square brand_inverse_bg">
        <div class="avatar-text" :class="color_scheme">{{ getInitial }}</div>
      </div>

      <!-- COMMENT INPUT -->

      <form
        action
        @submit.prevent
        class="w-100 position-relative d-flex align-items-center border rounded-50"
      >
        <textarea
          v-model="comment_input"
          class="form-control comment-input-form w-100"
          placeholder="Write a comment"
          @input="toggleSendBtn"
        ></textarea>

        <button type="submit" class="paper-plane transparent_bg" v-if="send_btn">
          <div class="avatar">
            <span class="flex-center icon-paper-plane brand_inverse font-23"></span>
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";

export default {
  name: "CommentInputCard",

  props: ["fullname"],

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    }
  },

  data() {
    return {
      account_type: "",
      color_scheme: "",
      send_btn: false,
      comment_input: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
      if (this.account_type === "school") {
        this.color_scheme = "brand_inverse_light_bg brand_primary";
      } else if (this.account_type === "teacher") {
        this.color_scheme = "brand_tonic_bg brand_white";
      }
    },

    toggleSendBtn() {
      this.comment_input ? (this.send_btn = true) : (this.send_btn = false);
    }
  }
};
</script>

<style lang="scss">
.comment-input-section {
  border-top: 1px solid #f3f3f3;
  @include flex_row_start_nowrap;
  padding: 10px 0px;
  margin: auto 15px;

  .avatar {
    margin-right: 5px;

    @include breakpoint_max(sm) {
      @include equal_min_edge(32);
    }
  }

  .comment-input-form {
    margin-top: 2px;
    font-size: 12px;
    border: 0;
    border-radius: 100px;
    padding: 15px 20px 0px;
    resize: none;

    .paper-plane {
      position: absolute;
      top: 50%;
      margin-right: 20px;
      transform: translateY(-50%);
      transition: all 0.5s ease-in-out;
    }
  }
}
</style>
