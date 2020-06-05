<template>
  <div>
    <router-link
      to
      class="activity"
      @click.native="$emit(activity_function)"
      v-if="activity_type==='emit'"
    >
      <div :class="activity_progress"></div>
      <div class="label-text" :class="label_text">{{ activity_text }}</div>
    </router-link>

    <router-link :to="{name: activity_route}" class="activity" v-if="activity_type==='route'">
      <div :class="activity_progress"></div>
      <div class="label-text" :class="label_text">{{ activity_text }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ActivityList",

  props: {
    activity_progress: String,
    activity_text: String,
    activity_type: String,
    activity_route: String,
    activity_function: String,
    label_text: String
  }
};
</script>

<style lang="scss">
.activity {
  @include flex_row_start_nowrap;
  padding-left: 2px;
  padding-top: 14.67px;
  padding-bottom: 14.67px;
  color: $brand_inverse;
  border-bottom: 1px solid rgba($brand_black, 0.1);

  .done,
  .undone {
    margin-right: 10px;
  }

  .label-text {
    font-weight: 100;
    font-size: 11px;
    line-height: 14px;
    word-spacing: -0.01em;
    letter-spacing: 0.01em;
  }
}
</style>
