<template>
  <div>
    <div class="post-text-section color_ash" v-html="post.text">{{ post.text }}</div>
  </div>
</template>

<script>
export default {
  name: "PostTextBlock",

  props: {
    post: Object
  }
};
</script>

<style lang="scss">
.post-text-section {
  box-sizing: border-box;
  padding: 0px 2px;

  p {
    font-size: 13px;
    line-height: 19px;
  }
}
</style>
