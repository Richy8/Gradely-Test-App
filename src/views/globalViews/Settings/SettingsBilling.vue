<template>
  <div>
    <vue-headful title="Parent Profile Settings | Gradely.ng" description="Description goes here"/>

    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">Billing & Subscription</div>

      <!-- PAYMENT METHOD COMPONENT -->
      <PaymentMethod></PaymentMethod>
      <!-- PAYMENT METHOD COMPONENT -->

      <!-- FORM DIVIDER -->
      <div class="form-divider"></div>
      <!-- FORM DIVIDER -->

      <!-- PLAN DETAIL CONTAINER -->
      <PlanDetailContainer></PlanDetailContainer>
      <!-- PLAN DETAIL CONTAINER -->
    </div>
  </div>
</template>

<script>
import PaymentMethod from "@/components/globalComps/SettingsComps/BillingComps/PaymentMethod";
import PlanDetailContainer from "@/components/globalComps/SettingsComps/BillingComps/PlanDetailContainer";

export default {
  name: "SettingsBilling",

  components: {
    PaymentMethod,
    PlanDetailContainer
  }
};
</script>

<style lang="scss">
</style>
