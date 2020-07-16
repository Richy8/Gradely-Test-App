<template>
  <div class="child-dropdown position-relative rounded-5 overflow-hidden">
    <!-- SECTION OVERLAY -->
    <div class="box-overlay position-absolute w-100 h-100"></div>

    <!-- LEFT -->
    <div class="left">
      <!-- AVATAR -->
      <div class="avatar avatar-square avatar_md brand_inverse_light_bg index-1">
        <img v-lazy="dynamicImg('MaleChild.png')" alt class="avatar-img">
      </div>

      <!-- CHILD INFO -->
      <div class="child-info pointer index-1">
        <div class="name brand_inverse_light font-weight-bold text-capitalize">Andrew Oshinaga</div>
        <div class="help-text border_grey_dark">Switch Account</div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="right">
      <div class="avatar pointer">
        <span class="icon-caret-down flex-center border_grey_dark font-17"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildDropdown"
};
</script>

<style lang="scss">
.child-dropdown {
  width: 290px;
  height: 68px;

  @include breakpoint_max(md) {
    width: 100%;
    height: 64px;
  }

  padding: 10px;
  @include flex_row_between_nowrap;

  .box-overlay {
    background: #000000;
    opacity: 0.6;
  }

  .left {
    @include flex_row_start_nowrap;

    .avatar {
      margin-right: 10px;
    }

    .name {
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(md) {
        font-size: 15px;
      }

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }

    .help-text {
      font-size: 13px;
      line-height: 19px;

      @include breakpoint_max(md) {
        font-size: 12px;
      }

      @include breakpoint_max(sm) {
        font-size: 11.5px;
      }
    }
  }
}
</style>
