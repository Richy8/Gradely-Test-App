<template>
  <div>
    <!-- VERIFY CARD -->
    <div
      class="verify-card w-100 h-auto d-flex justify-content-between align-items-center nowrap white"
    >
      <div class="verify-detail d-flex justify-content-start align-items-center nowrap">
        <!-- AVATAR   -->
        <div class="avatar avatar_md">
          <div class="avatar-text white-text" :class="setAvatarBg">{{ getInitial }}</div>
        </div>
        <!-- INFO -->
        <div class="verify-info">
          <div class="name font-weight-900 color_text text-capitalize">{{ fullname }}</div>
          <div class="meta color_grey_dark font-13">
            <span>Wants to Join &nbsp;</span>
            <span class="color_text font-weight-900">{{ class_year }} - {{ class_branch }}</span> as a
            <span class="color_text font-weight-900">{{ class_subject }}</span>
            <span>&nbsp; teacher</span>
          </div>
        </div>
      </div>

      <!-- VERIFY ACTION -->
      <div class="verify-action d-flex justify-content-between align-items-center flex-wrap">
        <!-- APPROVE ICON -->
        <div class="avatar approve-box pointer">
          <span class="flex-center icon-accept brand_primary font-20"></span>
        </div>
        <!-- DECLINE ICON -->
        <div class="avatar decline-box pointer">
          <span class="flex-center icon-decline brand_tonic font-20"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/scripts/utilities";

export default {
  name: "VerifyTeacherCard",

  props: {
    fullname: String,
    class_year: String,
    class_branch: String,
    class_subject: String
  },

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  }
};
</script>

<style lang="scss">
// VERIFICATION CARD
.verify-card {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  padding: 15px;
  padding-right: 10px;
  margin-bottom: 5px;

  @include breakpoint_max(md) {
    padding: 10px;
    padding-right: 10px;
    padding-left: 13px;
  }

  .verify-detail {
    padding-right: 15px;

    .avatar {
      margin-right: 15px;
    }

    .name {
      margin-bottom: 2px;

      @include breakpoint_max(md) {
        font-size: 14px;
      }

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
    }

    .meta {
      @include breakpoint_max(md) {
        font-size: 12px !important;
      }

      @include breakpoint_max(sm) {
        font-size: 11.5px !important;
      }
    }
  }

  .verify-action {
    @include breakpoint_max(lg) {
      @include flex_column_center;
    }

    .approve-box {
      background-color: #dbf5f8;
      margin-right: 15px;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: darken(#dbf5f8, 10%);
      }

      @include breakpoint_max(lg) {
        margin-right: 0px;
        margin-bottom: 5px;
      }
    }

    .decline-box {
      background-color: #ffdcde;
      margin-left: 15px;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: darken(#ffdcde, 5%);
      }

      @include breakpoint_max(lg) {
        margin-left: 0px;
        margin-top: 5px;
      }
    }

    .approve-box,
    .decline-box {
      @include breakpoint_max(sm) {
        span {
          font-size: 17px !important;
        }
      }
    }
  }
}
</style>
