<template>
  <div>
    <div class="avatar avatar_lg">
      <div class="icon-invitation flex-center font-48">
        <div :class="'path'+num" v-for="(num, index) in paths" :key="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvitationMailIcon",

  data() {
    return {
      paths: [],
      path_num: 10
    };
  },

  mounted() {
    this.updateIconPaths();
  },

  methods: {
    updateIconPaths() {
      for (let i = 1; i <= this.path_num; i++) {
        this.paths.push(i);
      }
    }
  }
};
</script>

<style>
</style>
