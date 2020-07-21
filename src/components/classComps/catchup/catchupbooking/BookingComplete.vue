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
        <div class="title font-weight-bold brand_navy text-center mx-auto">Tutor Session Booked</div>

        <!-- MESSAGE -->
        <div class="message text-center color_ash mx-auto">
          You have successfully scheduled a tutor session for your child
          <span
            class="font-weight-bold"
          >Andrew Oshinaga</span>
          . Find the tutor information Below
        </div>

        <!-- TEACHER PROFILE -->
        <div class="teacher-profile-detail rounded-10 white">
          <!-- LEFT -->
          <div class="left">
            <div class="avatar avatar-square avatar_xxl">
              <img v-lazy="dynamicImg('TutorOneLg.png')" alt class="avatar-img">
            </div>

            <!-- CARD INFO -->
            <div class="card-info">
              <div class="name brand_primary">Oluwatosin Oloko-Obi</div>
              <div class="subject color_ash">Mathematics Tutor</div>

              <!-- Info row -->
              <div class="info-row">
                <div class="item-block d-flex justify-content-start align-items-start nowrap mr-3">
                  <!-- ICON -->
                  <div class="avatar mr-2">
                    <span class="icon-graduation-cap border_grey_dark flex-center"></span>
                  </div>

                  <div>
                    <div class="text-value font-weight-bold">Mathematics</div>
                    <div class="text-title color_grey_dark">Subject</div>
                  </div>
                </div>

                <div class="item-block d-flex justify-content-start align-items-start nowrap">
                  <!-- ICON -->
                  <div class="avatar mr-2">
                    <span class="icon-watch border_grey_dark flex-center"></span>
                  </div>

                  <div>
                    <div class="text-value font-weight-bold">1 Month</div>
                    <div class="text-title color_grey_dark">Duration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT -->
          <div class="right">
            <div class="avatar pointer">
              <span class="flex-center icon-external-link brand_red_light"></span>
            </div>
          </div>
        </div>
        <!-- TEACHER PROFILE -->

        <!-- PARENT ACCOUNT DETAILS -->
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
            @click="redirectToCatchup"
          >GO TO DASHBOARD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingComplete",

  components: {},

  data() {
    return {};
  },

  methods: {
    redirectToCatchup() {
      this.$router.push("/parent/dashboard/catchup");
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

  .teacher-profile-detail {
    padding: 20px;
    border: 1px solid $border_grey;
    @include flex_row_between_nowrap;
    align-items: flex-start;
    margin-bottom: 30px;

    .left {
      @include flex_row_start_wrap;
      align-items: flex-start;

      .avatar {
        margin-right: 20px;
        margin-bottom: 20px;

        @include breakpoint_max(sm) {
          margin-right: 10px;
        }
      }

      .name {
        font-size: 18px;
        line-height: 25px;

        @include breakpoint_max(sm) {
          font-size: 16px;
        }
      }

      .subject {
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 31px;

        @include breakpoint_max(sm) {
          font-size: 12.5px;
        }
      }

      .info-row {
        @include flex_row_start_wrap;
        align-items: flex-start;

        .avatar {
          position: relative;
          top: -4px;

          span {
            font-size: 22px;

            @include breakpoint_max(sm) {
              font-size: 19px;
            }
          }
        }

        .text-value {
          font-size: 16px;
          line-height: 22px;
          margin-bottom: 4px;

          @include breakpoint_max(sm) {
            font-size: 14px;
          }
        }

        .text-title {
          font-size: 12px;
          line-height: 16px;

          @include breakpoint_max(sm) {
            font-size: 10px;
          }
        }
      }
    }

    .right {
      .avatar {
        transition: all 0.3s ease-in-out;
        span {
          font-size: 24px;

          @include breakpoint_max(sm) {
            font-size: 19px;
          }
        }
        &:hover {
          border: 1px solid $border_grey;
        }
      }
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
