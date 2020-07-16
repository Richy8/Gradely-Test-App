<template>
  <div>
    <div
      class="teacher-list-wrapper position-relative"
      @mouseenter="toggleTooltip"
      @mouseleave="toggleTooltip"
    >
      <div class="avatar avatar-square brand_inverse_bg display--img">
        <img
          v-lazy="dynamicImg(teacher_img)"
          alt
          class="avatar-img brand_navy_bg"
          v-if="teacher_img"
        >
        <div
          class="avatar-text white-text font-weight-500 font-10"
          :class="setAvatarBg"
          v-else
        >{{ getInitial }}</div>

        <div class="marker" v-if="show_tooltip"></div>
      </div>
      <!-- TEACHER DETAILS -->
      <div class="tooltip--wrapper" v-if="show_tooltip">
        <div class="tooltip--content d-flex justify-content-start align-items-start nowrap">
          <!-- AVATAR -->
          <div class="avatar avatar_sm_md avatar-square border_grey_dark_bg tooltip--img">
            <img v-lazy="dynamicImg(teacher_img)" alt class="avatar-img" v-if="teacher_img">
            <div
              class="avatar-text white-text font-weight-500 font-12-5"
              :class="setAvatarBg"
              v-else
            >{{ getInitial }}</div>
          </div>

          <!-- NAME AND SUBJECT -->
          <div>
            <div class="tooltip--name font-weight-bold color_text">{{ teacher_name }}</div>
            <div class="tooltip--subject color_grey_dark">{{ teacher_subject }}</div>
            <router-link
              :to="{name: 'TeacherProfile'}"
              class="tooltip--link btn-link font-weight-bold"
            >View Profile</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/scripts/utilities";

export default {
  name: "MembersTeacherList",

  props: {
    teacher_img: String,
    teacher_name: String,
    teacher_subject: String
  },

  data() {
    return {
      show_tooltip: false
    };
  },

  computed: {
    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    },

    getInitial() {
      return setInitial(this.teacher_name);
    }
  },

  methods: {
    toggleTooltip() {
      this.show_tooltip
        ? (this.show_tooltip = !this.show_tooltip)
        : (this.show_tooltip = !this.show_tooltip);
    }
  }
};
</script>

<style lang="scss">
.display--img {
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: unset;

  .marker {
    position: absolute;
    z-index: 9;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 12px solid #dadada;
    transition: all 0.4s ease-in-out;
  }
}

// TOOLTIP STYLING
.tooltip--wrapper {
  position: absolute;
  z-index: 9;
  top: 110%;
  left: 0;
  width: 200px;
  transition: all 0.5s ease-in-out;

  @include breakpoint_max(xl) {
    width: 190px;
  }

  @include breakpoint_max(lg) {
    width: 170px;
  }

  .tooltip--content {
    width: 100%;
    height: auto;
    padding: 8px 7px 10px;
    background: #dadada;
    border-radius: 5px;

    .tooltip--img {
      margin-right: 12px;
    }

    .tooltip--name {
      margin-bottom: 1px;
      font-size: 13px;
      line-height: 16px;
    }

    .tooltip--subject {
      margin-bottom: 10px;
      font-size: 11px;
      line-height: 16px;
    }

    .tooltip--link {
      font-size: 11px;
      line-height: 16px;
    }
  }
}
</style>
