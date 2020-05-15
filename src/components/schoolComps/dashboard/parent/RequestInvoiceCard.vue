<template>
  <div class="request-invoice-card">
    <div class="banner-overlay box-overlay brand_inverse_bg rounded-5">
      <img src="@/assets/images/SquareBanner.png" alt="Display Banner" class="img img-luminous">
    </div>

    <div class="card-content">
      <!-- TEXT -->
      <div
        class="text color_text"
      >Give parents access to CatchUp! with daily practice and videos for their children</div>
      <!-- BUTTON -->
      <button class="btn btn-md btn-accent color_text font-weight-bold font-14 rounded-25" @click="$emit('triggerRequestForm')">REQUEST INVOICE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestInvoiceCard"
};
</script>

<style>
</style>
