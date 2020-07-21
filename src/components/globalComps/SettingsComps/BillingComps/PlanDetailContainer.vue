<template>
  <div>
    <div class="plan-detail-container">
      <div class="title text-uppercase font-weight-bold color_grey_dark">Plan Details</div>

      <!-- PLAN DETAIL CARD -->
      <PlanDetailCard
        child_img="avatar14.png"
        child_name="Omolade Giwa"
        child_class_year="Year 7"
        catchup_plan="Basic (#1,500 / Month)"
        tutoring_plan="IGCSE Monthly (#25,000 / Month)"
      ></PlanDetailCard>

      <PlanDetailCard
        child_img="avatar4.png"
        child_name="Abdul-Jabal Giwa"
        child_class_year="Year 1"
        catchup_plan="Premium (#3,000 / Month)"
        tutoring_plan="IGCSE Weekly (#9,000 / Month)"
      ></PlanDetailCard>
    </div>
  </div>
</template>

<script>
import PlanDetailCard from "@/components/globalComps/SettingsComps/BillingComps/PlanDetailCard";

export default {
  name: "PlanDetailContainer",

  components: {
    PlanDetailCard
  }
};
</script>

<style lang="scss">
.plan-detail-container {
  .title {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;

    @include breakpoint_max(sm) {
      font-size: 15px;
    }
  }
}
</style>
