<template>
  <div>
    <div class="child-list-card white rounded-5">
      <!-- AVATAR -->
      <div class="avatar avatar-square avatar_sm_md">
        <img :src="dynamicImg(img)" :alt="child_name" class="avatar-img">
      </div>
      <!-- CHILD INFO -->
      <div class="child-info">
        <div class="name color_text font-weight-bold">{{ child_name }}</div>
        <div class="class color_grey_dark">{{ setClass }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "ChildListCard",

  mixins: [RenderImages],

  props: ["img", "child_name", "class_year", "branch"],

  computed: {
    setClass() {
      return `${this.class_year} - ${this.branch}`;
    }
  }
};
</script>

<style lang="scss">
.child-list-card {
  @include flex_row_start_nowrap;
  border: 1px solid $border_grey;
  box-sizing: border-box;
  padding: 10px;
  width: 210px;
  margin-bottom: 5px;

  @include breakpoint_min_max(1200, 1280) {
    width: 195px;
  }

  @include breakpoint_min_max(992, 1090) {
    width: 188px;
  }

  @include breakpoint_min_max(880, 972) {
    width: 190px;
  }

  @include breakpoint_min_max(812, 879) {
    width: 170px;
  }

  @include breakpoint_min_max(768, 812) {
    width: 155px;
  }

  @include breakpoint_max(md) {
    width: 240px;
  }

  @include breakpoint_min_max(577, 648) {
    width: 210px;
  }

  @include breakpoint_max(sm) {
    width: 180px;
  }

  @include breakpoint_max(xs) {
    width: 160px;
  }

  @include breakpoint_min_max(370, 400) {
    width: 155px;
  }

  @include breakpoint_min_max(330, 369) {
    width: 140px;
  }

  .avatar {
    margin-right: 15px;
    border: 0.4px solid $brand_accent;
  }

  .child-info {
    .name {
      font-size: 13.5px;
      line-height: 19px;
      margin-bottom: 1px;

      @include breakpoint_max(xl) {
        font-size: 13px;
      }

      @include breakpoint_max(lg) {
        font-size: 12px;
      }

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
    }

    .class {
      font-size: 12px;
      line-height: 16px;

      @include breakpoint_max(xl) {
        font-size: 11px;
      }

      @include breakpoint_max(lg) {
        font-size: 10px;
      }

      @include breakpoint_max(sm) {
        font-size: 11px;
      }
    }
  }
}
</style>
