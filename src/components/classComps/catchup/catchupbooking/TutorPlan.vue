<template>
  <div>
    <div class="tutor-plan-section">
      <!-- PLAN TITLE -->
      <div
        class="plan-title text-uppercase font-weight-bold color_grey_dark text-center"
      >Choose a Plan</div>

      <!-- PLAN TYPES -->
      <div
        class="plan-types d-flex justify-content-center align-items-center nowrap mx-auto rounded-30"
      >
        <!-- NIGERAIAN CURRICULLUM -->
        <div
          class="curriculum curriculum-one rounded-30 pointer border_grey_dark"
          :class="active_plan === 'nigerian' ? 'active' : ''"
          @click="togglePlanType('nigerian')"
        >Nigerian Curriculum</div>

        <!-- BRITISH CURRICULUM -->
        <div
          class="curriculum curriculum-two rounded-30 pointer border_grey_dark"
          :class="active_plan === 'british' ? 'active' : ''"
          @click="togglePlanType('british')"
        >British Curriculum</div>
      </div>

      <!-- TUTOR PLAN CARD COMPONENT -->
      <div v-for="(plan, index) in plan_types" :key="index" @click="toggleTutorPlan(index)">
        <TutorPlanCard
          :plan_title="plan.title"
          :plan_price="3000"
          :plan_meta="plan.meta"
          :plan_info="plan.info"
          :plan_active="plan.active"
        ></TutorPlanCard>
      </div>
      <!-- TUTOR PLAN CARD COMPONENT -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorPlan",

  props: {},

  components: {
    TutorPlanCard: () =>
      import(/* webpackChunkName: "TutorPlanCard" */ "@/components/classComps/catchup/catchupbooking/TutorPlanCard")
  },

  data() {
    return {
      active_plan: "nigerian",

      plan_types: [
        {
          title: "Daily",
          price: 3000,
          meta: "Per session/child",
          info: "Get one(1) session with our certified subject tutors.",
          active: true
        },
        {
          title: "Weekly",
          price: 7000,
          meta: "Per Week",
          info:
            "Get three(3) session a week with our certified subject tutors.",
          active: false
        },
        {
          title: "Monthly",
          price: 25000,
          meta: "Per Month",
          info: "Get three(3) session every week of the month.",
          active: false
        }
      ]
    };
  },

  methods: {
    togglePlanType(curriculum) {
      this.active_plan = curriculum;
    },

    toggleTutorPlan(index) {
      this.plan_types.map(plan => (plan.active = false));
      this.plan_types[index].active = true;
    }
  }
};
</script>

<style lang="scss">
.tutor-plan-section {
  padding-bottom: 30px;
  margin-bottom: 40px;
  border-bottom: 1px solid $border_grey;

  .plan-title {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 20px;
  }

  .plan-types {
    width: 60%;
    background: $brand_inverse_light;
    border: 1px solid $brand_inverse;
    margin-bottom: 30px;

    @include breakpoint_max(xl) {
      width: 70%;
    }

    @include breakpoint_max(lg) {
      width: 95%;
    }

    .curriculum {
      width: 50%;
      box-sizing: border-box;
      text-align: center;
      font-size: 12px;
      line-height: 16px;
      padding: 13px 25px;
      font-weight: bold;
      text-transform: uppercase;

      @include breakpoint_max(xl) {
        font-size: 11.5px;
      }

      @include breakpoint_max(lg) {
        font-size: 10.5px;
      }
    }
  }

  .active {
    background: rgba(#11bdcf, 0.9);
    color: #fff !important;
  }
}
</style>
