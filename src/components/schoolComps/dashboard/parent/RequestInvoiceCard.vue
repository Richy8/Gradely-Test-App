<template>
  <div class="request-invoice-card position-relative w-100">
    <div class="banner-overlay box-overlay brand_inverse_bg rounded-5 overflow-hidden">
      <img v-lazy="localImg('SquareBanner.png')" alt="Display Banner" class="img img-luminous">
    </div>

    <div class="card-content">
      <!-- TEXT -->
      <div
        class="text color_text font-weight-500 text-center"
      >Give parents access to CatchUp! with daily practice and videos for their children</div>
      <!-- BUTTON -->
      <button
        class="btn btn-md btn-accent color_text font-weight-bold font-14 rounded-25"
        @click="$emit('triggerRequestForm')"
      >REQUEST INVOICE</button>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "RequestInvoiceCard",
  mixins: [RenderImages]
};
</script>

<style lang="scss">
.request-invoice-card {
  height: 300px;

  @include breakpoint_max(md) {
    display: none;
  }

  .banner-overlay {
    .img {
      @include img_cover;

      &-luminous {
        mix-blend-mode: luminosity;
      }
    }
  }

  .card-content {
    @include flex_column_center;
    position: absolute;
    padding: 55px 35px;

    @include breakpoint_max(lg) {
      padding: 60px 15px;
    }

    .text {
      font-size: 21px;
      line-height: 165%;
      margin-bottom: 35px;

      @include breakpoint_max(lg) {
        font-size: 16px;
      }
    }

    .btn {
      padding: 12px 34px;

      @include breakpoint_max(lg) {
        font-size: 11px !important;
      }
    }
  }
}
</style>
