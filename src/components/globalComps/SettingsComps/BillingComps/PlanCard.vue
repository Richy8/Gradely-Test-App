<template>
  <div>
    <div class="plan-card-section position-relative w-100 white pointer">
      <!-- CARD TOP -->
      <div
        class="plan-card-top brand_navy text-center w-100"
        :class="selected ? 'active-plan' : 'inactive-plan'"
      >{{ plan_duration }}</div>

      <!-- CARD BOTTOM -->
      <div class="plan-card-bottom">
        <div class="amount font-weight-bold brand_navy">&#8358; {{ formatWithComma }}</div>
        <div class="meta color_grey_dark">Per Child</div>
      </div>

      <div class="card-selected position-absolute" v-if="selected">
        <div class="avatar brand_accent_bg">
          <span class="icon-accept flex-center font-20 brand_white"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanCard",

  props: {
    selected: {
      type: Boolean,
      default: false
    },
    plan_duration: String,
    plan_charge: Number
  },

  computed: {
    formatWithComma() {
      return this.plan_charge.toLocaleString();
    }
  }
};
</script>

<style lang="scss">
.plan-card-section {
  @include flex_column_center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(0.97);
  }

  .active-plan {
    background: $brand_accent_light;
    border: 1px solid $brand_accent_light;
  }
  .inactive-plan {
    background: $brand_inverse_light;
    border: 1px solid $brand_inverse_light;
  }

  .plan-card-top {
    padding: 15px;
    font-size: 15px;
    line-height: 22px;

    @include breakpoint_max(lg) {
      padding: 10px;
      font-size: 13.5px;
    }

    @include breakpoint_max(xs) {
      font-size: 12.5px;
    }
  }

  .plan-card-bottom {
    @include flex_column_center;
    padding: 35px 30px;

    @include breakpoint_max(lg) {
      padding: 30px 15px;
    }

    @include breakpoint_max(xs) {
      padding: 25px 10px;
    }

    .amount {
      font-size: 21px;
      line-height: 29px;
      letter-spacing: 0.05em;

      @include breakpoint_max(lg) {
        font-size: 17px;
      }

      @include breakpoint_max(xs) {
        font-size: 15px;
      }
    }

    .meta {
      font-size: 12px;
      line-height: 16px;

      @include breakpoint_max(lg) {
        font-size: 11px;
      }
    }
  }

  .card-selected {
    transition: all 0.5s ease-in-out;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);

    .avatar {
      @include equal_min_edge(32);

      @include breakpoint_max(xs) {
        @include equal_min_edge(28);
      }
    }
  }
}
</style>
