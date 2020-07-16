<template>
  <div>
    <div>
      <div class="subscription-success index--1">
        <!-- AVATAR -->
        <div class="d-flex justify-content-center align-items-center mx-auto">
          <div
            class="avatar icon-box brand_inverse_light_bg d-flex justify-content-center align-items-center"
          >
            <img v-lazy="localImg('success-modal.png')" alt class="avatar-img">
          </div>
        </div>

        <!-- TITLE TEXT -->
        <div class="title font-weight-bold brand_navy text-center mx-auto">Subscription Successful</div>

        <!-- MESSAGE -->
        <div class="message text-center color_ash mx-auto">
          Your payment was successful, and your child
          <span class="font-weight-bold">Rubius Hagrid</span> has now been subscribed for
          <span class="font-weight-bold">3 month of Gradely Premium</span>
        </div>

        <!-- STUDENT ACCOUNT DETAILS -->
        <div class="payment-details">
          <!-- INFO ONE -->
          <div class="d-flex justify-content-between align-items-center nowrap mb-5">
            <div class="left">
              <div class="value font-weight-bold color_text">&#8358;9,000</div>
              <div class="title color_grey_dark">Amount Paid</div>
            </div>

            <div class="right">
              <div class="value font-weight-bold color_text">14/04/2020 12:04 AM</div>
              <div class="title color_grey_dark">Transaction Time</div>
            </div>
          </div>

          <!-- INFO TWO -->
          <div class="d-flex justify-content-between align-items-center nowrap">
            <div class="left">
              <div class="value font-weight-bold color_text">•••• •••• •••• 4234 (VISA)</div>
              <div class="title color_grey_dark">Payment Method</div>
            </div>
            <div class="right">
              <div class="value font-weight-bold color_text">#857947779779</div>
              <div class="title color_grey_dark">Transaction ID</div>
            </div>
          </div>
        </div>

        <!-- DOWNLOAD BUTTON -->
        <div class="d-flex justify-content-center align-items-center">
          <button
            class="btn btn-md btn-accent brand_navy font-weight-bold py-3 px-5"
            @click="redirectToParentFeed"
          >GO TO DASHBOARD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscriptionComplete",

  components: {},

  data() {
    return {};
  },

  methods: {
    redirectToParentFeed() {
      this.$router.push("/parent/dashboard");
    }
  }
};
</script>

<style lang="scss">
.subscription-success {
  padding-top: 0;
  padding-bottom: 40px;

  .icon-box {
    @include equal_min_edge(130);
    margin-top: 25px;

    @include breakpoint_max(sm) {
      @include equal_min_edge(110);
    }
  }

  .title {
    font-size: 24px;
    line-height: 29px;
    margin: 20px auto;

    @include breakpoint_max(md) {
      font-size: 22px;
    }

    @include breakpoint_max(sm) {
      font-size: 20px;
    }
  }

  .payment-details {
    border-top: 1px solid $border_grey;
    margin-top: 10px;
    padding: 40px 80px 40px;

    @include breakpoint_max(sm) {
      padding: 40px 20px 40px;
    }

    @include breakpoint_max(xs) {
      padding: 40px 0px 30px;
    }

    .value {
      font-size: 15px;
      line-height: 14px;

      @include breakpoint_max(sm) {
        font-size: 14.5px;
      }

      @include breakpoint_max(xs) {
        font-size: 13.5px;
      }
    }

    .title {
      margin-top: 5px;
      font-size: 13px;
      line-height: 16px;

      @include breakpoint_max(sm) {
        font-size: 12.5px;
      }

      @include breakpoint_max(xs) {
        font-size: 11.5px;
      }
    }
  }

  .message {
    font-size: 15px;
    line-height: 180%;
    margin-bottom: 40px;
    width: 80%;

    @include breakpoint_max(md) {
      width: 100%;
    }

    @include breakpoint_max(sm) {
      font-size: 14px;
    }
  }

  .btn {
    @include breakpoint_max(xs) {
      font-size: 10px;
    }
  }
}
</style>
