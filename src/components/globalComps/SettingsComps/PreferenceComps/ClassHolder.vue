<template>
  <div>
    <div class="class-holder">
      <div class="class-title">{{ setClassName }}</div>
      <div class="remove pointer" @click="$emit('remove')">
        <div class="avatar avatar_sm white">
          <span class="icon-minus brand_tonic flex-center font-16"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassHolder",

  props: ["class_year", "class_branch"],

  computed: {
    setClassName() {
      return `${this.class_year} - ${this.class_branch}`;
    }
  }
};
</script>

<style lang="scss">
.class-holder {
  @include flex_row_between_nowrap;
  background: #dbf5f8;
  border-radius: 40px;
  padding: 7px 14px;
  margin-right: 5px;
  margin-bottom: 5px;

  .class-title {
    font-size: 12px;
    line-height: 16px;
    color: $color_text;
    margin-right: 13px;
  }
}
</style>
