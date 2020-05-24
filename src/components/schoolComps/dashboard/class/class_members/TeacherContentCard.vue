<template>
  <div>
    <div class="teacher-content-card w-100 h-auto">
      <!-- LEFT CONTENT -->
      <div class="left d-flex justify-content-start align-items-center">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_md">
          <!-- AVATAR IMG -->
          <img
            :src="require('@/assets/images/'+ teacher_img +'')"
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
          <router-link to="/school/dashboard/teacher_profile" class="btn-link font-weight-bold">View</router-link>
        </div>
        <div class="more pointer" v-on-clickaway="onDrop" @click="toggleTeacherOption">
          <span class="icon-ellipsis-h color_grey_dark"></span>
        </div>

        <!-- DRODOWN MENU -->
        <div class="dropdown-btn-menu placement-bottom" v-if="teacher_option">
          <ul class="list-unstyled">
            <li class="mb-1">
              <router-link to="/school/dashboard/teacher_profile">View Profile</router-link>
            </li>
            <li class="mb-1">
              <router-link to>Remove from School</router-link>
            </li>
            <li class="mb-1">
              <router-link to @click.native="$emit('toggleMessage')">Send a Message</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/assets/jsComps/extFunc";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "TeacherContentCard",

  mixins: [clickaway],

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

<style>
</style>
