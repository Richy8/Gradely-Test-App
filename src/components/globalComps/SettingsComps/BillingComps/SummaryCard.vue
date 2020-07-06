<template>
  <div class="summary-card white rounded-15">
    <!-- SUMMARY TOP -->
    <div class="summary-top">
      <div class="summary-title text-uppercase color_text">Summary</div>
    </div>

    <!-- SUMMARY MIDDLE -->
    <div class="summary-middle brand_inverse_light_bg">
      <div class="text font-weight-bold brand_navy">3 month of CatchUp!</div>
      <div class="meta color_text">3 times per week</div>
    </div>

    <!-- SUMMARY BOTTOM -->
    <div class="summary-bottom">
      <!-- SELECTED ITEM ROW -->
      <div class="selected-item-row">
        <!-- PRICE -->
        <div class="d-flex justify-content-between nowrap mb-3">
          <div class="item font-weight-bold color_text">Price</div>
          <div class="value color_text">&#8358;4,500</div>
        </div>

        <!-- CHILDREN -->
        <div class="d-flex justify-content-between nowrap" v-if="account_type==='parent'">
          <div class="item font-weight-bold color_text">Children</div>
          <div class="value color_text">1 Child</div>
        </div>
      </div>

      <!-- TOTAL ROW -->
      <div class="total-row">
        <div class="d-flex justify-content-between nowrap">
          <div class="item font-weight-bold color_text">Total</div>
          <div class="value color_text">&#8358;9,000</div>
        </div>
      </div>

      <!-- COUPON CODE SECTION -->
      <div class="coupon-input">
        <label
          for="couponCode"
          class="text-uppercase control-label color_grey_dark"
        >I have a Coupon COde</label>
        <div class="input-group">
          <input type="text" class="form-control" id="couponCode" placeholder="Enter coupon code">
          <span class="input-group-addon">
            <i class="pointer icon-arrow-right color_grey_dark font-weight-bold"></i>
          </span>
        </div>

        <button
          class="btn btn-block btn-accent brand_navy font-weight-bold mt-4 py-3"
          @click="goToSuccessPage"
        >Confirm Payment</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryCard",

  props: {
    page_redirect: String
  },

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    goToSuccessPage() {
      if (
        this.page_redirect === "plan_upgrade" &&
        this.account_type === "parent"
      ) {
        this.$router.push("/parent/settings/subscription_success");
      } else if (
        this.page_redirect === "plan_upgrade" &&
        this.account_type === "student"
      ) {
        this.$router.push("/student/settings/subscription_success");
      } else if (
        this.page_redirect === "tutor_booking" &&
        this.account_type === "parent"
      ) {
        this.$router.push("/parent/catchup/booking_success");
      } else if (
        this.page_redirect === "tutor_booking" &&
        this.account_type === "student"
      ) {
        this.$router.push("/student/catchup/booking_success");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.summary-card {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);

  @include breakpoint_max(md) {
    margin-bottom: 70px;
  }

  .summary-top {
    padding: 30px;
    .summary-title {
      font-size: 19px;
      line-height: 29px;
      font-weight: 900;

      @include breakpoint_max(md) {
        font-size: 17px;
      }
    }
  }

  .summary-middle {
    padding: 30px;

    .text {
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(md) {
        font-size: 15px;
      }

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }

    .meta {
      margin-top: 4px;
      font-size: 14px;
      line-height: 19px;
    }
  }

  .summary-bottom {
    .selected-item-row {
      padding: 22px 30px;
      border-bottom: 1px solid $border_grey;
    }

    .item {
      font-size: 14px;
      line-height: 19px;
    }

    .value {
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(md) {
        font-size: 15px;
      }

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }

    .total-row {
      padding: 22px 30px 30px;
    }

    .coupon-input {
      padding: 0px 30px 20px;
    }
  }
}
</style>
