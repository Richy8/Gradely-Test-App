<template>
  <div>
    <div
      class="tutor-plan-card white w-100 h-auto pointer"
      :class="plan_active ? 'tutor-plan-active' : ''"
    >
      <!-- LEFT -->
      <div class="left position-relative">
        <div class="title color_text text-uppercase">{{ plan_title }}</div>
        <div class="price text-uppercase font-weight-900 brand_navy">&#8358;{{ formatWithComma }}</div>
        <div class="meta color_grey_dark">{{ plan_meta }}</div>

        <!-- SELECTED ICON -->
        <div class="card-selected position-absolute" v-if="plan_active">
          <div class="avatar brand_accent_bg">
            <span class="icon-accept flex-center font-20 brand_white"></span>
          </div>
        </div>
        <!-- SELECTED ICON -->
      </div>

      <!-- RIGHT -->
      <div class="right color_text">{{ plan_info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorPlanCard",

  props: {
    plan_title: String,
    plan_price: Number,
    plan_meta: String,
    plan_info: String,
    plan_active: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    formatWithComma() {
      return this.plan_price.toLocaleString();
    }
  }
};
</script>

<style lang="scss">
.tutor-plan-card {
  border: 1px solid $border_grey;
  box-sizing: border-box;
  margin-bottom: 15px;
  @include flex_row_start_nowrap;
  transition: all 0.4s ease-in-out;

  .left {
    @include flex_column_center;
    padding: 15px;
    min-width: 163px;
    width: 163px;
    min-height: 100%;
    background: $color_white;
    border-top: 1px solid $border_grey;
    border-left: 1px solid $border_grey;
    border-bottom: 1px solid $border_grey;
    transition: all 0.4s ease-in-out;

    @include breakpoint_max(xs) {
      min-width: 120px;
      width: 120px;
    }

    .card-selected {
      transition: all 0.5s ease-in-out;
      top: 50%;
      left: -15px;
      transform: translateY(-50%);

      .avatar {
        @include equal_min_edge(32);

        @include breakpoint_max(xs) {
          @include equal_min_edge(28);
        }
      }
    }

    .title {
      font-size: 15.5px;
      line-height: 22px;
      letter-spacing: 0.05em;
      margin-bottom: 12px;

      @include breakpoint_max(xl) {
        margin-bottom: 8px;
        font-size: 14px;
      }

      @include breakpoint_max(xs) {
        margin-bottom: 5px;
        font-size: 10px;
      }
    }

    .price {
      font-size: 19px;
      line-height: 29px;
      letter-spacing: 0.05em;
      margin-bottom: 2px;

      @include breakpoint_max(xl) {
        font-size: 17px;
      }

      @include breakpoint_max(xs) {
        font-size: 15.5px;
      }
    }

    .meta {
      font-size: 11.5px;
      line-height: 16px;

      @include breakpoint_max(xl) {
        font-size: 11px;
      }

      @include breakpoint_max(xs) {
        font-size: 10px;
      }
    }
  }

  .right {
    padding: 30px;
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(xl) {
      font-size: 13.5px;
    }

    @include breakpoint_max(lg) {
      padding: 15px;
      font-size: 13px;
    }

    @include breakpoint_max(xs) {
      padding: 12px;
      font-size: 12px;
    }
  }

  &:hover {
    transform: scale(0.98);
    border: 1px solid $brand_accent;

    .left {
      border-top: 1px solid $brand_accent;
      border-left: 1px solid $brand_accent;
      border-bottom: 1px solid $brand_accent;
    }
  }
}

.tutor-plan-active {
  border: 1px solid $brand_accent;

  .left {
    border-top: 1px solid $brand_accent;
    border-left: 1px solid $brand_accent;
    border-bottom: 1px solid $brand_accent;
  }
}
</style>
