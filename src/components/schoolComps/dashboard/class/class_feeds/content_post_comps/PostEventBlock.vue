<template>
  <div>
    <div class="post-event-section rounded-5">
      <div class="top-block">
        <!-- EVENT AVATAR -->
        <div class="avatar avatar-square brand_red_light_bg">
          <div class="span flex-center icon-videocam brand_accent font-17"></div>
        </div>

        <!-- EVENT INFO -->
        <div class="homework-info">
          <div class="title color_text font-weight-bold">{{ post.event_data.title }}</div>
          <div class="timing color_grey_dark">
            <span>{{ post.event_data.date }}</span> &nbsp;•&nbsp;
            <span>{{ post.event_data.time }}</span>
          </div>

          <!-- EVENT TIMING INFO -->
          <div class="join-class-btn">
            <a href class="color_white_bg color_grey_dark rounded-50">JOIN CLASS</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostEventBlock",

  props: {
    post: Object
  }
};
</script>

<style lang="scss">
.post-event-section {
  border: 1px solid #dbf5f8;
  box-sizing: border-box;
  padding: 10px 10px 14px;

  .top-block {
    @include flex_row_start_nowrap;
    align-items: flex-start;

    .avatar {
      margin-right: 13px;
    }

    .title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 5px;
    }

    .timing {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 20px;
    }

    .join-class-btn {
      margin-top: 22px;
      margin-bottom: 5px;
      a {
        padding: 8px 26px;
        font-size: 10px;
        line-height: 140%;
        transition: all 0.3s ease-in-out;

        &:hover {
          background: $brand_inverse_light !important;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
}
</style>
