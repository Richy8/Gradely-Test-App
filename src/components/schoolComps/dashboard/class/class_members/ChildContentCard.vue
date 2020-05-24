<template>
  <div class="position-relative">
    <div class="student-card content-fill">
      <!-- CARD OPTIONS -->
      <div class="card-options">
        <div class="icon" v-on-clickaway="onDrop" @click="toggleMenu">
          <span class="icon-ellipsis-h color_grey_dark font-20"></span>
        </div>
      </div>

      <!-- AVATAR -->
      <div class="avatar avatar_lg brand_inverse_bg">
        <img :src="require('@/assets/images/'+ child_img +'')" :alt="child_name" class="avatar-img">
      </div>

        <!-- STUDENT INFO -->
        <div class="student-info">
            <!-- STUDENT FULLNAME -->
            <div class="student-name font-weight-bold color_text">{{ child_name }}</div>

            <!-- STUDENT CLASS CODE -->
            <div class="class-code color_grey_dark">{{ child_code }}</div>
        </div>

      <!-- DRODOWN MENU -->
      <div class="dropdown-btn-menu placement-bottom" v-if="child_option">
        <ul class="list-unstyled">
          <li class="mb-1">
            <router-link to="/school/dashboard/student_profile">View Profile</router-link>
          </li>
          <li class="mb-1">
            <router-link to>Change Class</router-link>
          </li>
          <li class="mb-1">
            <router-link to @click.native="$emit('toggleMessage')">Message Parent</router-link>
          </li>
          <li class="mb-1">
            <router-link to>Remove from School</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ChildContent",

  props: {
      child_img: String,
      child_name: String,
      child_code: String
  },

  mixins: [clickaway],

  data() {
    return {
      child_option: false
    };
  },

  methods: {
    toggleMenu() {
      this.child_option = !this.child_option;
    },

    onDrop() {
      this.child_option = false;
    }
  }
};
</script>

<style>
</style>
