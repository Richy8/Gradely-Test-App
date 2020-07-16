<template>
  <div>
    <div class="plan-detail-card w-100">
      <!-- CHILD ROW -->
      <div class="child-row">
        <div class="avatar avatar-square avatar_md brand_inverse_light_bg">
          <img v-lazy="localImg(child_img)" alt class="avatar-img">
        </div>

        <!-- CHILD INFO -->
        <div class="child-info">
          <div class="name font-weight-bold color_text">{{ child_name }}</div>
          <div class="class-year color_grey_dark">{{ child_class_year }}</div>
        </div>
      </div>

      <!-- CATCHUP ROW -->
      <div class="plan-row catchup">
        <!-- ICON -->
        <div class="avatar avatar_sm brand_red_light_bg">
          <span class="icon-book flex-center font-13 brand_red"></span>
        </div>

        <div class="plan-detail w-100">
          <div class="d-flex justify-content-between align-items-center nowrap mb-2">
            <div class="plan-title font-weight-bold text-uppercase color_grey_dark">CatchUp!</div>
            <router-link
              :to="'/'+account_type+'/settings/upgrade_plan'"
              class="plan-link btn-link"
            >Change Plan</router-link>
          </div>

          <div class="d-flex justify-content-between align-items-center nowrap">
            <div class="color_text plan-type">CatchUp! {{ catchup_plan }}</div>
            <router-link
              to
              class="plan-link btn-link"
              @click.native="toggleSubscriptionModal"
            >Cancel Subscription</router-link>
          </div>
        </div>
      </div>

      <!-- TUTORING ROW -->
      <div class="plan-row tutoring">
        <!-- ICON -->
        <div class="avatar avatar_sm brand_inverse_light_bg">
          <span class="icon-videocam flex-center font-15 brand_navy"></span>
        </div>

        <div class="plan-detail w-100">
          <div class="d-flex justify-content-between align-items-center nowrap mb-2">
            <div class="plan-title font-weight-bold text-uppercase color_grey_dark">Tutoring</div>
            <router-link :to="{name: 'ParentUpgradePlan'}" class="plan-link btn-link">Change Plan</router-link>
          </div>

          <div class="d-flex justify-content-between align-items-center nowrap">
            <div class="color_text plan-type">{{ tutoring_plan }}</div>
            <router-link
              to
              class="plan-link btn-link"
              @click.native="toggleSubscriptionModal"
            >Cancel Subscription</router-link>
          </div>
        </div>
      </div>

      <!-- DOUBLE LINE DIVIDER -->
      <div class="double-line-divider w-100"></div>
    </div>

    <!-- MODAL -->
    <CancelSubscriptionModal
      v-if="cancel_subscription_modal"
      @closeTriggered="toggleSubscriptionModal"
    ></CancelSubscriptionModal>
    <!-- MODAL -->
  </div>
</template>

<script>

export default {
  name: "PlanDetailCard",

  components: {
    CancelSubscriptionModal: () =>
      import(/* webpackChunkName: "CancelSubscriptionModal" */ "@/components/modalComps/settingsModals/CancelSubscriptionModal")
  },

  props: {
    child_img: String,
    child_name: String,
    child_class_year: String,
    catchup_plan: String,
    tutoring_plan: String
  },

  data() {
    return {
      account_type: "",
      cancel_subscription_modal: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    toggleSubscriptionModal() {
      this.cancel_subscription_modal = !this.cancel_subscription_modal;
    },

    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.plan-detail-card {
  .child-row {
    @include flex_row_start_nowrap;
    margin-bottom: 22px;

    .avatar {
      margin-right: 15px;
    }

    .child-info {
      .name {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 4px;

        @include breakpoint_max(md) {
          font-size: 15px;
        }
        @include breakpoint_max(sm) {
          font-size: 14px;
        }
      }
      .class-year {
        font-size: 14px;
        line-height: 19px;

        @include breakpoint_max(md) {
          font-size: 13px;
        }
        @include breakpoint_max(sm) {
          font-size: 12px;
        }
      }
    }
  }

  .plan-row {
    margin-bottom: 32px;
    @include flex-row_start_nowrap;
    align-items: flex-start;

    .avatar {
      margin-right: 10px;
    }

    .plan-title {
      font-size: 14px;
      line-height: 19px;
    }

    .plan-type {
      font-size: 16px;
      line-height: 22px;
    }

    .plan-link {
      font-size: 14px;
      line-height: 19px;
    }
  }

  .double-line-divider {
    border-top: 1px solid $brand_inverse_light;
    border-bottom: 1px solid $brand_inverse_light;
    height: 6px;
    margin: 34px auto;
  }
}
</style>
