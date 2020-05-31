<template>
  <div>
    <div class="student-profile-card white w-100 rounded-5">
      <!-- CARD OPTION -->
      <div class="card-option">
        <div class="icon">
          <span class="icon-ellipsis-h color_grey_dark font-25"></span>
        </div>
      </div>

      <!-- AVATAR -->
      <div class="avatar avatar_xxl">
        <img :src="require('@/assets/images/'+ child_img +'')" :alt="child_name" class="avatar-img">
      </div>

      <!-- FULLNAME -->
      <div class="child-name font-weight-bold color_text text-center">{{ child_name }}</div>

      <!-- CLASS CODE -->
      <div class="class-code color_grey_dark text-center">{{ class_code }}</div>

      <!-- PARENT INFO -->
      <div class="parent-info d-flex justify-content-between align-items-center w-100">
        <div class="left d-flex justify-content-start align-items-center nowrap">
          <!-- AVATAR -->
          <div class="avatar avatar-square avatar_sm_md">
            <img
              :src="require('@/assets/images/'+ parent_img +'')"
              :alt="parent_name"
              class="avatar-img"
              v-if="parent_img"
            >
            <div
              class="avatar-text brand_accent_bg brand_black font-weight-bold"
              v-else
            >{{ parentInitial }}</div>
          </div>

          <!-- PARENT DESCRIPTION -->
          <div class="parent-description">
            <div class="parent-name font-weight-bold color_text">{{ parent_name }}</div>
            <div class="parent-role color_grey_dark">{{ parent_role }}</div>
          </div>
        </div>
        <div class="right" @click="$emit('toggleMessage')">
          <span class="icon-chat font-20 border_grey_dark pointer" title="Send Message"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";

export default {
  name: "StudentProfileCard",

  props: {
    child_img: String,
    parent_img: String,
    child_name: String,
    class_code: String,
    parent_name: String,
    parent_role: String
  },

  computed: {
    parentInitial() {
      return setInitial(this.parent_name);
    }
  }
};
</script>

<style lang="scss">
.student-profile-card {
  position: relative;
  padding: 30px 15px 22px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  @include flex_column_center;

  @include breakpoint_max(md) {
    margin-bottom: 15px;
  }

  .card-option {
    @include flex_row_end_nowrap;
    position: absolute;
    left: 0;
    width: 95%;
    top: 20px;
    margin-left: auto !important;
    margin-right: auto !important;

    @include breakpoint_max(md) {
      top: 14%;
      width: 92.5%;
    }
  }

  .avatar_xxl {
    margin-bottom: 15px;

    @include breakpoint_max(lg) {
      @include equal_min_edge(92);
    }

    @include breakpoint_max(md) {
      @include equal_min_edge(128);
    }
  }

  .child-name {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;

    @include breakpoint_max(lg) {
      font-size: 14px;
    }

    @include breakpoint_max(md) {
      font-size: 16px;
    }
  }

  .class-code {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 20px;

    @include breakpoint_max(lg) {
      font-size: 12px;
    }

    @include breakpoint_max(md) {
      font-size: 14px;
    }
  }

  .parent-info {
    border-top: 1px solid $border_grey;
    padding-top: 20px;

    @include breakpoint_max(lg) {
      display: none !important;
    }

    .avatar {
      margin-right: 15px;
    }

    .parent-name {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 1px;
    }

    .parent-role {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
