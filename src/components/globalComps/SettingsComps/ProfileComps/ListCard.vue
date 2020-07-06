<template>
  <div>
    <div class="list-card rounded-10">
      <!-- LEFT -->
      <div class="left">
        <!-- AVATAR -->
        <div class="avatar avatar-square">
          <img v-lazy="dynamicImg(card_image)" alt class="avatar-img" v-if="card_image">
          <div
            class="avatar-text brand_white font-weight-bold brand_navy_bg"
            v-else
          >{{ getInitial }}</div>
        </div>

        <!-- CARD INFO -->
        <div class="card-info">
          <div class="card-item-top brand_primary font-weight-bold">{{ card_text_top }}</div>
          <div class="card-item-bottom color_grey_dark">{{ card_text_bottom }}</div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="right">
        <div class="avatar color_white_bg pointer">
          <span class="icon-thrash flex-center color_grey_dark font-17"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "ListCard",

  props: {
    card_image: String,
    card_text_top: String,
    card_text_bottom: String
  },

  mixins: [RenderImages],

  computed: {
    getInitial() {
      return setInitial(this.card_text_top);
    }
  }
};
</script>

<style lang="scss">
.list-card {
  border: 1px solid $border_grey;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 10px;
  width: 70%;
  @include flex_row_between_nowrap;
  transition: all 0.4s ease-in-out;

  @include breakpoint_max(lg) {
    width: 100% !important;
  }

  &:hover {
    transform: scale(0.97);
  }

  .left {
    @include flex_row_start_nowrap;

    .avatar {
      @include equal_min_edge(52);
      margin-right: 15px;

      @include breakpoint_max(sm) {
        @include equal_min_edge(42);
        margin-right: 10px;
      }
    }

    .card-item-top {
      margin-bottom: 4px;
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }

    .card-item-bottom {
      font-size: 14px;
      line-height: 19px;

      @include breakpoint_max(sm) {
        font-size: 12px;
      }
    }
  }

  .right {
    .avatar {
      @include equal_min_edge(32);
      transition: all 0.4s ease-in-out;

      &:hover {
        span {
          color: $brand_tonic !important;
        }
      }
    }
  }
}
</style>
