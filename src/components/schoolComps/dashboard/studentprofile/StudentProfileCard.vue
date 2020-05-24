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
import { setInitial } from "@/assets/jsComps/extFunc";

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

<style>
</style>
