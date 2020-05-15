<template>
  <div>
    <div class="child-list-card rounded-5">
      <!-- AVATAR -->
      <div class="avatar avatar-square avatar_sm_md">
        <img :src="require('@/assets/images/' + img + '')" :alt="child_name" class="avatar-img">
      </div>
      <!-- CHILD INFO -->
      <div class="child-info">
        <div class="name color_text">{{ child_name }}</div>
        <div class="class color_grey_dark">{{ setClass }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildListCard",

  props: ["img", "child_name", "class_year", "branch"],

  computed: {
    setClass() {
      return `${this.class_year} - ${this.branch}`;
    }
  }
};
</script>

<style>
</style>
