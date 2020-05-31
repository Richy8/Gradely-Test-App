<template>
  <div>
    <div class="empty-card w-100 rounded-10">
      <div class="avatar avatar_lg brand_white_bg"></div>
      <div class="title brand_white_bg"></div>
      <div class="meta brand_white_bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentDefaultCard"
};
</script>

<style lang="scss">
.empty-card {
  height: 190px;
  background: rgba(#ffffff, 0.6);
  border: 1px solid $brand_white;
  box-sizing: border-box;
  @include flex_column_center;
  margin-bottom: 30px;

  @include breakpoint_max(lg) {
    height: 175px;
  }

  .avatar {
    margin-bottom: 20px;
  }

  .title {
    width: 85%;
    height: 19px;
    margin-bottom: 7px;
  }

  .meta {
    width: 75%;
    height: 9px;
  }
}
</style>
