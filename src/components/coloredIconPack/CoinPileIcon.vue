<template>
  <div>
    <div class>
      <div class="icon-coin-pile flex-center" :class="size">
        <div :class="'path'+num" v-for="(num, index) in paths" :key="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoinPileIcon",

  props: {
    size: String
  },

  data() {
    return {
      paths: [],
      path_num: 6
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
