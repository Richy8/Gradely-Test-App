<template>
  <div class="getting-started-top">
    <div class="top-row d-flex justify-content-between align-items-center nowrap">
      <!-- LEFT LAYOUT -->
      <div class="left-layout">
        <div class="avatar avatar-square">
          <div class="avatar-text brand_inverse_bg brand_navy">G</div>
        </div>

        <!-- TITLE -->
        <div>
          <div class="title font-weight-bold color_text">Gradely</div>
          <div class="meta color_grey_dark">Getting started with Gradely</div>
        </div>
      </div>

      <!-- RIGHT LAYOUT -->
      <div class="avatar pointer">
        <span class="flex-center icon-ellipsis-h color_grey_dark font-18 pr-2"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GettingStartedTop"
};
</script>

<style lang="scss">
.getting-started-top {
  .top-row {
    margin-bottom: 10px;
  }

  .left-layout {
    @include flex_row_start_nowrap;

    .avatar {
      margin-right: 10px;
      .avatar-text {
        font-size: 14px;
        line-height: 16px;
      }
    }

    .title {
      font-size: 14px;
      margin-bottom: 4px;
    }

    .meta {
      font-size: 11.5px;
      line-height: 14px;
    }
  }
}
</style>
