<template>
  <div>
    <div class="post-image-section pointer">
      <div class="img-container border">
        <img :src="dynamicImg(post.img)" alt>
      </div>
      <!-- IMAGE TEXT -->
      <div class="img-text text-left color_ash" v-html="post.text">{{ post.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostImageBlock",

  props: {
    post: Object
  }
};
</script>

<style lang="scss">
.post-image-section {
  padding: 8px 1px 10px;

  .img-container {
    width: 100%;
    margin-bottom: 10px;
    height: 280px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .img-text {
    font-size: 13px;
    line-height: 19px;
  }
}
</style>
