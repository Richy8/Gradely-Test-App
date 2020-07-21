<template>
  <div>
    <div class="post-input-options rounded-bottom-5">
      <!-- OPTIONS -->
      <div class="options">
        <!-- PAPERCLIP -->
        <div class="avatar">
          <span class="flex-center icon-paper-clip"></span>
        </div>

        <!-- LINK -->
        <div class="avatar">
          <span class="flex-center icon-url-link"></span>
        </div>

        <!-- IMAGE -->
        <div class="avatar" v-if="view ==='NewDiscussionInput'">
          <span class="flex-center icon-image"></span>
        </div>

        <!-- POLLS -->
        <!-- <div class="avatar" @click="$emit('pollClicked')">
          <span class="flex-center icon-poll"></span>
        </div>-->
      </div>

      <!-- POST BUTTON -->
      <div class="post-button d-flex justify-content-end align-items-center nowrap">
        <!-- THRASH -->
        <div class="icon-pack position-relative">
          <span class="icon-thrash border_grey_dark pointer" @click="$emit('closeTypeSelected')"></span>
        </div>

        <!-- BUTTON -->
        <span
          class="btn btn-sm color_text rounded-20 text-uppercase brand_accent_bg btn-accent"
        >Publish</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostInputOptions",

  props: {
    view: String,
    disabled: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    setButtonType() {
      return this.disabled ? "border_grey_bg" : "brand_accent_bg btn-accent";
    }
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
.post-input-options {
  background: #f5f5f5;
  padding: 6px 17px;
  border-radius: 0px 0px 5px 5px;
  @include flex_row_between_nowrap;
  transition: all 0.5s ease-in-out;

  @include breakpoint_max(sm) {
    padding: 8px 15px;
  }

  .options {
    @include flex_row_start_nowrap;

    .avatar {
      margin-right: 13px;
      cursor: pointer;

      span {
        color: $color_grey_dark;
        font-size: 22px;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        span {
          color: $brand_accent !important;
        }
      }
    }
  }

  .post-button {
    .icon-pack {
      @include equal_min_edge(34);
      border-right: 1px solid $border_grey;

      span {
        @include transform_center;
        left: -3.5px;
        font-size: 26px;
        font-weight: 100;
        transition: all 0.4s ease-in-out;

        &:hover {
          color: $brand_tonic !important;
        }
      }
    }

    span {
      margin-left: 12px;
      font-size: 12px;
      font-weight: 900;
      padding: 9px 16px;
      // text-shadow: 0.25px 0px, 0px 0.25px, 0.25px 0.25px;
    }
  }
}
</style>
