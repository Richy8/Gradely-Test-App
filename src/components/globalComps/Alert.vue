<template>
  <div>
    <!-- ALERT CARD -->
    <div class="alert-card rounded-5 position-relative white border-0 w-100 h-auto overflow-hidden">
      <!-- ALERT LABEL -->
      <div class="alert-label position-absolute h-100 brand_inverse_bg"></div>
      <!-- ALERT ROW -->
      <div class="alert-row color_text d-flex justify-content-between align-items-center nowrap">
        <!-- ALERT MESSAGE -->
        <div class="alert-message">
          <slot name="alert-message"></slot>
        </div>

        <!-- CLOSE BUTTON -->
        <div class="close-btn close-btn-sm" @click="$emit('closeAlertDialog')"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert"
};
</script>

<style lang="scss">
.alert-card {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: #ffffff;
  }

  .alert-label {
    top: 0;
    bottom: 0;
    left: 0;
    width: 6px;
  }

  .alert-row {
    padding: 11px 26px;
    font-size: 14px;
    line-height: 19px;
    color: $color_text;

    @include breakpoint_max(md) {
      font-size: 13px;
    }

    @include breakpoint_max(sm) {
      font-size: 12px;
    }

    .alert-message {
      font-size: 13.5px;
      line-height: 20px;
      @include breakpoint_max(sm) {
        font-size: 13px;
      }
    }
  }
}
</style>
