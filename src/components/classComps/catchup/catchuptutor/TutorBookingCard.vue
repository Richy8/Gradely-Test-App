<template>
  <div>
    <div class="tutor-booking-card white rounded-10 overflow-hidden">
      <!-- TOP -->
      <div class="top position-relative w-100 pointer">
        <!-- OVERLAY -->
        <div class="position-absolute w-100 h-100 rgba-black-light index-1"></div>

        <!-- PLAY ICON -->
        <div class="play-icon index-1 pointer">
          <span class="icon-play-bg brand_accent flex-center"></span>
        </div>

        <img v-lazy="dynamicImg(video_poster)" alt>
      </div>

      <!-- MID -->
      <div class="mid brand_inverse_light_bg">
        <!-- BOOKED -->
        <div class="not-available" v-if="is_booked">
          <div class="meta color_ash">Next lesson starts in</div>
          <div class="days-left brand_navy font-weight-900">{{ days_left }} days</div>
        </div>

        <!-- NOT BOOKED -->
        <div class="available" v-else>
          <div class="left color_text">Book this tutor from</div>
          <div class="right text-right">
            <div class="price brand_navy font-weight-600 mb-1">&#8358;{{ formatWithComma }}</div>
            <div class="color_gray_dark font-12">per Session</div>
          </div>
        </div>
      </div>

      <!-- BOTTOM -->
      <div class="bottom">
        <!-- FEATURE ONE -->
        <div class="feature" v-if="!is_booked">
          <!-- ICON -->
          <div class="avatar">
            <span class="icon-shield-ok flex-center"></span>
          </div>

          <!-- INFO TEXT -->
          <div class="info-text">Tutor satisfaction guaranteed by Gradely</div>
        </div>

        <!-- FEATURE TWO -->
        <div class="feature" v-if="!is_booked">
          <!-- ICON -->
          <div class="avatar">
            <span class="icon-announcement-speaker flex-center"></span>
          </div>

          <!-- INFO TEXT -->
          <div class="info-text">Lessons delivered online via video conferencing</div>
        </div>

        <!-- FEATURE THREE -->
        <div class="feature" v-if="!is_booked">
          <!-- ICON -->
          <div class="avatar">
            <span class="icon-discount flex-center"></span>
          </div>

          <!-- INFO TEXT -->
          <div class="info-text">Get your first session free. Totally on the house</div>
        </div>

        <!-- FEATURE FOUR -->
        <div class="feature" v-if="is_booked">
          <!-- ICON -->
          <div class="avatar">
            <span class="icon-alert-circle flex-center"></span>
          </div>

          <!-- INFO -->
          <div class="info">
            <div class="info-title color_grey_dark font-weight-bold">Title</div>
            <div class="info-value">{{ tutor_session }}</div>
          </div>
        </div>

        <!-- FEATURE FIVE -->
        <div class="feature" v-if="is_booked">
          <!-- ICON -->
          <div class="avatar">
            <span class="icon-calendar flex-center"></span>
          </div>

          <!-- INFO -->
          <div class="info">
            <div class="info-title color_grey_dark font-weight-bold">Date & Time</div>
            <div class="info-value">{{ tutor_date }}</div>
          </div>
        </div>

        <!-- BUTTON -->
        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <router-link
            :to="'/'+account_type+'/catchup/book-session'"
            class="btn btn-md-btn-block btn-accent brand_navy font-weight-bold"
            v-if="!is_booked"
          >Book a session</router-link>
        </div>

        <div class="d-flex flex-column justify-content-center align-items-center flex-wrap">
          <button
            class="btn btn-md-btn-block btn-accent brand_navy font-weight-bold"
            v-if="is_booked"
          >Start Lesson</button>

          <button
            class="btn btn-md-btn-block transparent_bg z-depth-0 color_grey_dark mr-4"
            v-if="is_booked"
          >Cancel Lesson</button>

          <div class="d-flex justify-content-around align-items-center nowrap mt-3">
            <div
              class="font-12-5 color_grey_dark btn-link mr-3"
              @click="toggleStudentSurveyModal"
            >Student Survey</div>
            <div
              class="font-12-5 color_grey_dark btn-link ml-3"
              @click="toggleTutorSurveyModal"
            >Tutor Survey</div>
          </div>
        </div>
        <!-- BUTTON -->
      </div>
    </div>

    <!-- MODALS -->
    <StudentSessionSurveyModal
      v-if="student_survey_modal"
      @closeTriggered="toggleStudentSurveyModal"
    ></StudentSessionSurveyModal>

    <TutorSessionSurveyModal v-if="tutor_survey_modal" @closeTriggered="toggleTutorSurveyModal"></TutorSessionSurveyModal>
    <!-- MODALS -->
  </div>
</template>

<script>
export default {
  name: "TutorBookingCard",

  components: {
    StudentSessionSurveyModal: () =>
      import(/* webpackChunkName: "SurveyModal" */ "@/components/modalComps/parentModals/StudentSessionSurveyModal"),
    TutorSessionSurveyModal: () =>
      import(/* webpackChunkName: "SurveyModal" */ "@/components/modalComps/parentModals/TutorSessionSurveyModal")
  },

  props: {
    video_poster: String,
    days_left: Number,
    is_booked: {
      type: Boolean,
      default: false
    },
    tutor_charge: Number,
    tutor_session: String,
    tutor_date: String
  },

  computed: {
    formatWithComma() {
      return this.tutor_charge.toLocaleString();
    }
  },

  data() {
    return {
      account_type: "",
      student_survey_modal: false,
      tutor_survey_modal: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    toggleStudentSurveyModal() {
      this.student_survey_modal = !this.student_survey_modal;
    },

    toggleTutorSurveyModal() {
      this.tutor_survey_modal = !this.tutor_survey_modal;
    }
  }
};
</script>

<style lang="scss">
.tutor-booking-card {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

  .top {
    height: 180px;

    img {
      @include img_cover;
    }

    .play-icon {
      @include transform_center;

      span {
        font-size: 40px;
      }
    }
  }

  .mid {
    padding: 15px 20px;

    .available {
      @include flex_row_between_nowrap;
      .left {
        font-size: 14px;
        line-height: 165%;
        width: 40%;
      }
      .right {
        .price {
          font-size: 21px;
          line-height: 29px;
          letter-spacing: 0.05em;
          text-shadow: 0.2px 0px, 0px 0.2px, 0.2px 0.2px;
        }
      }
    }

    .not-available {
      .meta {
        margin-bottom: 2px;
        font-size: 13.5px;
        line-height: 19px;
      }
      .days-left {
        font-size: 20px;
        line-height: 29px;
      }
    }
  }

  .bottom {
    padding: 20px 20px 20px 13px;

    .feature {
      @include flex_row_start_nowrap;
      margin-bottom: 20px;

      .avatar {
        margin-right: 10px;
        span {
          font-size: 22px;
          color: $border_grey_dark;
        }
      }

      .info-text {
        font-size: 13.5px;
        line-height: 19px;
        color: $color_ash;
      }

      .info-title {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 4px;
      }

      .info-value {
        font-size: 13.5px;
        line-height: 19px;
        color: $color_ash;
      }
    }
  }
}
</style>
