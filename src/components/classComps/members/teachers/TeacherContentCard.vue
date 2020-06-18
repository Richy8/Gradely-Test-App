<template>
  <div>
    <div class="teacher-content-card w-100 h-auto white">
      <!-- LEFT CONTENT -->
      <div class="left d-flex justify-content-start align-items-center">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_md">
          <!-- AVATAR IMG -->
          <img
            v-lazy="dynamicImg(teacher_img )"
            :alt="teacher_name"
            class="avatar-img"
            v-if="teacher_img"
          >
          <!-- AVATAR TEXT -->
          <div
            class="avatar-text white-text font-weight-bold"
            :class="setAvatarBg"
            v-else
          >{{ teacherInitial }}</div>
        </div>

        <!-- TEACHER INFO -->
        <div class="teacher-info">
          <div class="name color_text font-weight-bold">{{ teacher_name }}</div>
          <div class="subject color_grey_dark">{{ subjects }}</div>
        </div>
      </div>

      <!-- RIGHT CONTENT -->
      <div class="right d-flex justify-content-end align-items-center position-relative">
        <div class="view">
          <router-link :to="{name: 'TeacherProfile'}" class="btn-link font-weight-bold">View</router-link>
        </div>
        <div class="avatar more pointer" v-on-clickaway="onDrop" @click="toggleTeacherOption">
          <span class="icon-ellipsis-h flex-center color_grey_dark"></span>
        </div>

        <!-- DRODOWN MENU -->
        <div class="dropdown-btn-menu placement-bottom" v-if="teacher_option">
          <ul class="list-unstyled">
            <li class="mb-1">
              <router-link :to="{name: 'TeacherProfile'}">View Profile</router-link>
            </li>
            <li class="mb-1">
              <router-link to>Remove from School</router-link>
            </li>
            <!-- <li class="mb-1">
              <router-link to @click.native="$emit('toggleMessage')">Send a Message</router-link>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/scripts/utilities";
import { mixin as clickaway } from "vue-clickaway";
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "TeacherContentCard",

  mixins: [clickaway, RenderImages],

  props: {
    teacher_img: String,
    teacher_name: String,
    subjects: String
  },

  data() {
    return {
      teacher_option: false
    };
  },

  computed: {
    teacherInitial() {
      return setInitial(this.teacher_name);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  },

  methods: {
    toggleTeacherOption() {
      this.teacher_option = !this.teacher_option;
    },

    onDrop() {
      this.teacher_option = false;
    }
  }
};
</script>

<style lang="scss">
.teacher-content-card {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 15px;
  margin-bottom: 5px;
  @include flex_row_between_nowrap;

  .avatar {
    margin-right: 15px;

    .avatar-text {
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.02em;
    }
  }

  .name {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 4px;

    @include breakpoint_max(lg) {
      font-size: 15px;
    }

    @include breakpoint_max(sm) {
      font-size: 14px;
    }
  }

  .subject {
    font-size: 13px;
    line-height: 18px;

    @include breakpoint_max(lg) {
      font-size: 12.5px;
    }

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }

  .view {
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(md) {
      display: none;
    }
  }

  .more {
    margin-left: 26px;
    font-size: 22px;
    transition: border 0.1s ease-in-out;

    &:hover {
      border: 0.6px solid $border_grey;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    }
  }

  .dropdown-btn-menu {
    width: 220px;
  }
}
</style>
