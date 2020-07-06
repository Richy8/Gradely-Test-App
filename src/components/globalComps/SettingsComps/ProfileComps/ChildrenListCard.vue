<template>
  <div>
    <div
      class="children-list-card rounded-5 d-flex justify-content-between align-items-start nowrap"
      :class="full_width && border_bottom ? 'w-100 border-bottom px-0' : 'border w-75'"
    >
      <div class="left d-flex justify-content-start align-items-center nowrap">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_md child-avatar brand_inverse_light_bg">
          <img v-lazy="localImg(child_img)" alt class="avatar-img">
        </div>

        <!-- CHILD INFO -->
        <div class="child-info">
          <div class="child-name brand_primary font-weight-bold">{{ child_name }}</div>
          <div class="child-meta color_grey_dark" v-if="child_code">Color Code:{{ child_code }}</div>
          <div class="child-meta color_grey_dark" v-if="child_class_year">{{ child_class_year }}</div>
        </div>
      </div>

      <!-- OPTIONS -->
      <div class="right">
        <div class="avatar option">
          <span class="icon-decline flex-center border_grey_dark font-18"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "ChildrenListCard",

  props: {
    child_img: String,
    child_name: String,
    child_code: String,
    child_class_year: String,
    full_width: {
      type: Boolean,
      default: false
    },
    border_bottom: {
      type: Boolean,
      default: false
    }
  },

  mixins: [RenderImages]
};
</script>

<style lang="scss">
.children-list-card {
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 10px;
  transition: all 0.4s ease-in-out;

  @include breakpoint_max(lg) {
    width: 100% !important;
  }

  &:hover {
    transform: scale(0.97);
  }

  .child-avatar {
    margin-right: 15px;
  }

  .child-info {
    .child-name {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 4px;

      @include breakpoint_max(md) {
        font-size: 15px;
      }

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }

    .child-meta {
      font-size: 14px;
      line-height: 19px;

      @include breakpoint_max(md) {
        font-size: 13px;
      }

      @include breakpoint_max(sm) {
        font-size: 12px;
      }
    }
  }

  .option {
    transition: all 0.4s ease-in-out;
    &:hover {
      background: $brand_inverse_light;
    }
  }
}
</style>
