<template>
  <div>
    <div class="remark-block">
      <div class="top d-flex justify-content-start align-items-start nowrap">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_md">
          <div
            class="avatar-text white-text font-weight-600 font-14"
            :class="setAvatarBg"
          >{{ getInitial }}</div>
        </div>

        <div class="teacher-info">
          <!-- TEACHER NAME -->
          <div class="name font-weight-bold color_text">
            {{ teacher_name }}
            <span class="color_grey_dark font-12 ml-2">-- {{remark_date}}</span>
          </div>

          <!-- TEACHER SUBJECT -->
          <div class="subject color_grey_dark">{{teacher_subject}} Teacher</div>

          <!-- TEACHER COMMENT -->
          <div class="comment color_ash">{{teacher_remark}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/scripts/utilities";
export default {
  name: "RemarkBlock",

  props: {
    teacher_name: String,
    remark_date: String,
    teacher_subject: String,
    teacher_remark: String
  },

  computed: {
    getInitial() {
      return setInitial(this.teacher_name);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  }
};
</script>

<style lang="scss">
.remark-block {
  margin-bottom: 5px;
  padding-bottom: 20px;
  padding-top: 10px;
  border-bottom: 1px solid $border_grey_light;

  .avatar {
    margin-right: 20px;

    @include breakpoint_max(sm) {
      margin-right: 15px;
    }

    .avatar-text {
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(sm) {
        font-size: 13px !important;
      }
    }
  }

  .name {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 2px;

    @include breakpoint_max(sm) {
      font-size: 14px;
    }
  }

  .subject {
    margin-bottom: 11px;
    font-size: 12px;
    line-height: 16px;
  }

  .comment {
    font-size: 14px;
    line-height: 170%;

    @include breakpoint_max(sm) {
      font-size: 13.5px;
    }
  }
}
</style>
