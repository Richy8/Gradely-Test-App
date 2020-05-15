<template>
  <div>
    <!-- ALERT CARD -->
    <div class="alert-card">
      <!-- ALERT LABEL -->
      <div class="alert-label brand_inverse_bg"></div>
      <!-- ALERT ROW -->
      <div class="alert-row">
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

<style>
</style>
