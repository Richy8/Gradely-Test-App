<template>
  <div>
    <vue-headful title="Upgrade Plan | Gradelyng" description="Description goes here"/>
    <div class="plan-upgrade-section container">
      <!-- CLOSE TRIGGER -->
      <div class="pageClose dialogDismiss">
        <button type="button" class="close_dialog cls_lg transparent_bg" @click="backToBilling"></button>
      </div>
      <!-- CLOSE TRIGGER -->

      <div class="row">
        <div class="col-12">
          <div class="title brand_navy">Upgrade Plan</div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-8">
          <div class="left-layout">
            <div class="title text-uppercase color_grey_dark font-weight-bold">Choose a plan</div>

            <!-- PLAN ROW -->
            <div class="row plan-row">
              <div
                class="col-4"
                v-for="(plan, index) in plans"
                :key="index"
                @click="togglePlan(index)"
              >
                <PlanCard
                  :selected="plan.selected"
                  :plan_duration="plan.duration"
                  :plan_charge="plan.charge"
                ></PlanCard>
              </div>
            </div>

            <!-- CHILDREN CONTAINER -->
            <div class="children-container white rounded-5" v-if="account_type==='parent'">
              <div class="title text-uppercase color_grey_dark font-weight-bold">Add your Child(ren)</div>
              <ChildrenListCard
                child_img="avatar14.png"
                child_name="Omolade Giwa"
                child_class_year="Year 7"
                :full_width="true"
                :border_bottom="true"
              ></ChildrenListCard>

              <!-- OPTION -->
              <div class="container-option">
                <div class="add-new-item mt-3 mb-1 pointer">
                  <div class="undone"></div>
                  <div
                    class="label-text font-weight-bold brand_accent"
                    @click="redirectToAddChild"
                  >Add another Child</div>
                </div>
              </div>
            </div>

            <!-- SUBSCRIPTION RENEWAL ROW -->
            <div class="renewal-row">
              <div
                class="left color_ash"
              >Automatically renew my subscription at the end of the current subscription cycle</div>

              <!-- OPTION TOGGLER -->
              <div class="right">
                <div class="renewal-toggler border white pointer" @click="toggleRenewal">
                  <div class="text-on color_text" v-if="renewal">On</div>
                  <div
                    class="indicator rounded-circle"
                    :class="renewal ? 'brand_green_bg' : 'brand_red_bg'"
                  ></div>
                  <div class="text-off color_text" v-if="!renewal">Off</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SUMMARY SECTION -->
        <div class="col-12 col-md-4">
          <SummaryCard page_redirect="plan_upgrade"></SummaryCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import PlanCard from "@/components/globalComps/SettingsComps/BillingComps/PlanCard";

export default {
  name: "PlanUpgrade",

  components: {
    PlanCard,
    ChildrenListCard: () =>
      import(/* webpackChunkName: "ChildrenListCard" */ "@/components/globalComps/SettingsComps/ProfileComps/ChildrenListCard"),
    SummaryCard: () =>
      import(/* webpackChunkName: "SummaryCard" */ "@/components/globalComps/SettingsComps/BillingComps/SummaryCard")
  },

  data() {
    return {
      renewal: true,
      account_type: "",

      plans: [
        { duration: "3 Months", charge: 4500, selected: true },
        { duration: "6 Months", charge: 8100, selected: false },
        { duration: "1 Year", charge: 14500, selected: false }
      ]
    };
  },

  mounted() {
    bgColorSetter("#f0f0f0");
    this.getAccountType();
  },

  methods: {
    backToBilling() {
      this.$router.push(`/${this.account_type}/dashboard/settings/billing`);
    },

    redirectToAddChild() {
      this.$router.push("/parent/onboarding/new_child");
    },

    togglePlan(index) {
      this.plans.map(plan => (plan.selected = false));
      this.plans[index].selected = true;
    },

    toggleRenewal() {
      this.renewal = !this.renewal;
    },

    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.plan-upgrade-section {
  margin-top: 90px;

  .title {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 40px;
    font-weight: 900;

    @include breakpoint_max(md) {
      font-size: 28px;
    }

    @include breakpoint_max(md) {
      font-size: 26px;
    }
  }

  .left-layout {
    width: 93%;

    @include breakpoint_max(md) {
      width: 100%;
    }

    .title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 21px;

      @include breakpoint_max(md) {
        font-size: 13px;
      }
    }

    .plan-row {
      margin-bottom: 55px;
      .col-4 {
        @include breakpoint_max(xs) {
          padding-left: 10px;
          padding-right: 10px;
        }
      }
    }

    .children-container {
      padding: 20px;
      margin-bottom: 20px;

      .title {
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 15px;
      }
    }

    .renewal-row {
      @include flex_row_between_nowrap;

      @include breakpoint_max(md) {
        margin-bottom: 40px;
      }

      .left {
        font-size: 14px;
        line-height: 21px;
        padding-right: 20px;
      }

      .right {
        .renewal-toggler {
          @include flex_row_between_nowrap;
          padding: 8px;
          border-radius: 20px;
          transition: all 0.3s ease-in-out;

          &:hover {
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
          }

          .text-on,
          .text-off {
            font-size: 12px;
            line-height: 16px;
          }

          .text-on {
            margin-right: 10px;
          }

          .text-off {
            margin-left: 10px;
          }

          .indicator {
            @include equal_min_edge(20);
          }
        }
      }
    }
  }
}
</style>
