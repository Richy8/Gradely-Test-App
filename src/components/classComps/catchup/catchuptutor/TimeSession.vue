<template>
  <div>
    <div
      class="time-session-section rounded-40 text-center w-100 h-auto pointer"
      :class="is_booked ? 'booked' : 'not-booked'"
    >{{ time_range }}</div>
  </div>
</template>

<script>
export default {
  name: "TimeSession",

  props: {
    time_range: String,
    is_booked: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.time-session-section {
  border: 1px solid $border_grey;
  padding: 10px 32px;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 19px;
  color: $color_text;
  transition: all 0.3s ease-in-out;

  @include breakpoint_max(lg) {
    font-size: 13px;
  }
}

.not-booked {
  &:hover {
    background: $brand_inverse_light;
    border: 1px solid $brand_inverse;
    color: $brand_navy;
  }
}

.booked {
  background: $border_grey;
  border: 1px solid $border_grey;
  color: $border_grey_dark;
}
</style>
