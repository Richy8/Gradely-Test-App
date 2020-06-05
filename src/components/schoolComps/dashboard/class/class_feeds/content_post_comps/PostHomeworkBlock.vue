<template>
  <div>
    <div class="post-homework-section rounded-5">
      <div class="top-block">
        <!-- HOMEWORK AVATAR -->
        <div class="avatar brand_inverse_light_bg">
          <div class="span flex-center icon-library brand_navy font-17"></div>
        </div>

        <!-- HOMEWORK INFO -->
        <div class="homework-info">
          <div class="title color_text font-weight-bold">Homework title goes here.</div>
          <div class="subject color_grey_dark">Mathematics</div>

          <!-- HOMEWORK TIMING INFO -->
          <div class="time-row">
            <div class="brand_green left-block">Open</div>
            <div class="color_text">
              <span class="date">12th Apr, 2010</span> &nbsp;
              <span class="time">3:00 PM</span>
            </div>
          </div>

          <!-- HOMEWORK STATUS INFO -->
          <div class="status-row color_grey_dark">
            <div class="left-block">STATUS</div>
            <div class>DUE DATE</div>
          </div>

          <!-- REPORT LINK -->
          <router-link to class="font-10-5 color_grey_dark">See Homework Report</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostHomeworkBlock",

  props: {
    post: Object
  }
};
</script>

<style lang="scss">
.post-homework-section {
  border: 1px solid #dbf5f8;
  box-sizing: border-box;
  padding: 10px 10px 14px;

  .top-block {
    @include flex_row_start_nowrap;
    align-items: flex-start;

    .avatar {
      margin-right: 10px;
    }

    .title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 2px;
    }

    .subject {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 14px;
    }

    .time-row {
      @include flex_row_start_nowrap;
      font-weight: bold;
      font-size: 12px;
      line-height: 140%;
      margin-bottom: 4px;
    }

    .status-row {
      @include flex_row_start_nowrap;
      font-size: 10px;
      line-height: 177.06%;
      margin-bottom: 12px;
    }

    .left-block {
      width: 80px;
    }

    a {
      margin-left: 80px;
    }
  }
}
</style>
