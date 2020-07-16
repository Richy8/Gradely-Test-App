<template>
  <div class="tutor-intro-block">
    <div class="container px-1">
      <div class="row">
        <div class="col-12 d-flex justify-content-start allign-items-start nowrap">
          <!-- TUTOR AVATAR -->
          <div class="avatar avatar-square avatar_xxl">
            <img v-lazy="dynamicImg(tutor_img)" alt class="avatar-img">
          </div>

          <!-- TUTOR DETAILS -->
          <div class="block-details">
            <!-- NAME -->
            <div class="top brand_white">
              {{ tutor_name }}
              <span class="icon-verified-user brand_accent ml-1"></span>
            </div>

            <!-- SUBJECTS -->
            <div class="mid">
              <span class="icon-graduation-cap border_grey_dark icon"></span>
              <span class="border_grey mr-1">Teaches:</span>
              <span class="brand_inverse_light">{{ tutor_subject_types }}</span>
            </div>

            <!-- RATING -->
            <div class="bottom d-flex justify-content-start.align-items-center nowrap">
              <!-- STAR RATINGS -->
              <StarRating :tutor_rating="tutor_rating"></StarRating>

              <!-- NUMBER RATING -->
              <div class="number-rating border_grey">({{ tutor_rating }} ratings)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorIntroBlock",

  props: {
    tutor_img: String,
    tutor_name: String,
    tutor_subject_types: String,
    tutor_rating: Number
  },

  components: {
    StarRating: () =>
      import(/* webpackChunkName: "TutorCatchup" */ "@/components/classComps/catchup/catchuptutor/StarRating")
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss">
.tutor-intro-block {
  padding-top: 70px;
  padding-bottom: 42px;

  @include breakpoint_max(md) {
    padding-top: 50px;
    padding-bottom: 35px;
  }

  @include breakpoint_max(xs) {
    padding-top: 35px;
    padding-bottom: 25px;
  }

  .avatar {
    margin-right: 20px;

    @include breakpoint_max(md) {
      margin-right: 15px;
    }

    @include breakpoint_max(xs) {
      margin-right: 10px;
    }
  }

  .top {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 5px;

    @include breakpoint_max(lg) {
      font-size: 28px;
    }

    @include breakpoint_max(md) {
      font-size: 26px;
    }

    @include breakpoint_max(xs) {
      font-size: 22px;
    }

    span {
      font-size: 28px;

      @include breakpoint_max(lg) {
        font-size: 21px;
      }

      @include breakpoint_max(md) {
        font-size: 19px;
      }

      @include breakpoint_max(xs) {
        font-size: 16px;
      }
    }
  }

  .mid {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 22px;

    @include breakpoint_max(lg) {
      font-size: 13px;
    }

    @include breakpoint_max(md) {
      font-size: 12px;
    }

    @include breakpoint_max(xs) {
      font-size: 11.5px;
    }

    .icon {
      position: relative;
      top: 3.5px;
      margin-right: 5px;
      font-size: 20px;

      @include breakpoint_max(lg) {
        font-size: 18px;
      }

      @include breakpoint_max(md) {
        font-size: 17px;
      }
    }
  }

  .bottom {
    .number-rating {
      margin-left: 5px;
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(lg) {
        font-size: 14.5px;
      }

      @include breakpoint_max(md) {
        font-size: 14px;
      }

      @include breakpoint_max(xs) {
        font-size: 13.5px;
      }
    }
  }
}
</style>
