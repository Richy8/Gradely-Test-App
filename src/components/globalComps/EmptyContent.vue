<template>
  <div class="empty-list-content d-flex flex-column flex-center index-1">
    <!-- EMPTY IMAGE -->
    <div class="avatar avatar_xxl" :class="display_color">
      <img :src="localImg(display_img)" alt class="avatar-img">
    </div>

    <!-- INFO TEXT -->
    <div
      class="info-text text-center"
      :class="display_light_text ? 'brand_inverse_light' : 'color_tetxt'"
    >{{display_text}}</div>

    <!-- CTA BUTTON -->
    <div class="btn-contain" v-if="show_button">
      <router-link
        :to="{name: button_route_name}"
        class="btn btn-md btn-accent text-uppercase"
        v-if="button_type==='route'"
      >{{ button_text }}</router-link>

      <router-link
        to
        class="btn btn-md btn-accent text-uppercase"
        @click.native="$emit(button_function)"
        v-if="button_type==='emit'"
      >{{ button_text }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyContent",

  props: {
    display_img: String,
    display_color: String,
    display_text: String,
    display_light_text: {
      type: Boolean,
      default: false
    },
    button_type: {
      type: String,
      default: "emit"
    },
    button_text: String,
    button_function: String,
    button_route_name: String,
    show_button: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.empty-list-content {
  @include transform_center;

  .avatar {
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
  }

  .info-text {
    margin-bottom: 14px;
    font-size: 13.5px;
    line-height: 135%;

    @include breakpoint_max(md) {
      width: 150%;
      font-size: 13.5px;
      line-height: 18px;
    }

    @include breakpoint_max(xs) {
      font-size: 13px;
    }
  }

  .btn {
    @include breakpoint_max(md) {
      font-size: 11px;
      padding: 11px 24px;
    }

    @include breakpoint_max(xs) {
      font-size: 10px;
      padding: 10px 20px;
    }
  }
}
</style>
