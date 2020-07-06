<template>
  <div>
    <div class="post-tutor-section rounded-5">
      <!-- LEFT LAYOUT -->
      <div class="left-layout">
        <div class="avatar avatar-square avatar_lg brand_inverse_light_bg">
          <img v-lazy="dynamicImg(post.tutor_data.tutor_img)" alt class="avatar-img">
        </div>

        <!-- TUTOR INFO -->
        <div class="tutor-info">
          <div class="tutor-name brand_primary">{{ post.tutor_data.tutor_name }}</div>
          <div class="tutor-subject color_ash">{{ post.tutor_data.tutor_subject }} Tutor</div>

          <!-- MORE DETAILS -->
          <div class="more-details d-flex justify-content-start align-items-center nowrap">
            <!-- SUBJECT -->
            <div class="left">
              <div class="value font-weight-bold color_text">{{ post.tutor_data.tutor_subject }}</div>
              <div class="title color_grey_dark">Subject</div>
            </div>

            <!-- SESSIONS -->
            <div class="right">
              <div class="value font-weight-bold color_text">{{ post.tutor_data.tutor_sessions }}</div>
              <div class="title color_grey_dark">Sessions</div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT LAYOUT -->
      <div class="right-layout">
        <div class="avatar pointer">
          <span class="icon-external-link flex-center brand_red_light font-22"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "PostTutorBlock",

  props: {
    post: Object
  },

  mixins: [RenderImages]
};
</script>

<style lang="scss">
.post-tutor-section {
  box-sizing: border-box;
  border: 1px solid $border_grey;
  padding: 12px 10px 20px;
  @include flex_row_between_nowrap;
  align-items: flex-start;

  .left-layout {
    @include flex_row_start_nowrap;
    align-items: flex-start;

    .avatar {
      margin-right: 15px;
    }

    .tutor-name {
      font-size: 14.5px;
      line-height: 19px;
      margin-bottom: 4px;
    }

    .tutor-subject {
      font-size: 12px;
      line-height: 16px;
    }

    .more-details {
      margin-top: 15px;

      .left {
        margin-right: 15px;
      }

      .value {
        font-size: 12.5px;
        line-height: 16px;
        margin-bottom: 2px;
      }

      .title {
        font-size: 10px;
        line-height: 8px;
      }
    }
  }

  .right-layout {
    .avatar {
      transition: all 0.2s ease-in-out;
      &:hover {
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
      }
    }
  }
}
</style>
