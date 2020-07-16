<template>
  <div>
    <div
      class="recommendation-card-section rounded-10 w-100 pointer"
      :class="[mid_height ? 'black medium-card-height' : theme_bg]"
      @click="pageRedirect"
    >
      <!-- TOP -->
      <div class="top rounded-10 w-100 position-relative overflow-hidden">
        <img v-lazy="dynamicImg(card_img)" alt>

        <!-- VIDO CARD IMAGE OVELAY -->
        <div
          class="box-overlay position-absolute w-100 h-100 rgba-black-light"
          v-if="card_type==='video' || card_type==='tutor'"
        >
          <span class="flex-center icon-play-bg brand_accent font-35" v-if="card_type==='video'"></span>
        </div>
      </div>

      <!-- BOTTOM -->
      <div class="bottom">
        <!-- CARD TITLE -->
        <div class="d-flex justify-content-between align-items-start nowrap">
          <!-- TITLE -->
          <div
            class="card-type-title text-uppercase"
            v-if="card_title"
            :class="theme_title"
          >{{ card_title }}</div>

          <!-- LOCK ICON -->
          <div class="card-icon" v-if="show_lock">
            <span class="icon-lock font-15 brand_red_light"></span>
          </div>
        </div>

        <!-- CARD TOPIC -->
        <div class="card-topic font-weight-600 mt-1" :class="theme_topic">{{ card_topic }}</div>

        <!-- CARD PROGRESS -->
        <div class="card-progress mt-3 d-flex align-items-center nowrap w-100" v-if="card_progress">
          <div class="progress brand_inverse_light_bg mr-1" style="width: 80%">
            <div
              class="progress-bar"
              role="progressbar"
              :class="progress_color"
              :style="'width:'+ card_progress +'%'"
            ></div>
          </div>
          <!-- PERCENT VALUE -->
          <div class="percent font-11-5 border_grey_dark">{{ card_progress }}%</div>
        </div>

        <!-- CARD META -->
        <div
          class="card-meta font-10 brand_inverse mt-2"
          v-if="card_meta && card_type==='video'"
        >{{ card_meta }} minutes remaining</div>
        <div
          class="card-meta font-10 brand_inverse mt-2"
          v-if="card_meta && card_type==='tutor'"
        >{{ card_meta }} Sessions</div>

        <!-- CARD BUTTON -->
        <div class="card-btn d-flex justify-content-center align-items-center" v-if="show_button">
          <!-- STUDENT TYPE PRACTICE CARD -->
          <button
            class="btn btn-md brand_inverse_light_bg z-depth-0 font-weight-bold brand_navy font-10 mt-2 py-2"
            v-if="show_button && account_type==='student' && card_type==='practice'"
          >Start</button>

          <!-- PARENT TYPE PRACTICE CARD -->
          <router-link
            to
            class="btn-link link-no-underline font-12 font-weight-bold text-uppercase mt-3"
            v-if="show_button && account_type==='parent' && card_type==='practice'"
          >Attempt</router-link>

          <!-- VIDEO LESSON PRACTICE CARD -->
          <router-link
            to
            class="btn-link link-no-underline font-12 font-weight-bold text-uppercase mt-3"
            v-if="show_button && card_type==='video'"
          >Watch Video</router-link>

          <!-- TUTORING CARD TYPE -->
          <router-link
            to
            class="btn-link link-no-underline font-12 font-weight-bold text-uppercase mt-3"
            v-if="show_button && card_type==='tutor'"
          >Book Now</router-link>
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <StartPracticeModal v-if="practice_modal" @closeTriggered="togglePracticeModal"></StartPracticeModal>
    <!-- MODALS -->
  </div>
</template>

<script>
export default {
  name: "RecommendCard",

  components: {
    StartPracticeModal: () =>
      import(/* webpackChunkName: "StartPracticeModal" */ "@/components/modalComps/parentModals/StartPracticeModal")
  },

  props: {
    theme: String,
    card_type: String,
    card_img: String,
    card_title: String,
    card_topic: String,
    card_progress: Number,
    card_meta: String,
    mid_height: {
      type: Boolean,
      default: false
    },
    show_lock: {
      type: Boolean,
      default: false
    },
    show_button: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      account_type: "",
      practice_modal: false,
      theme_bg: "",
      theme_title: "",
      theme_topic: "",
      progress_color: ""
    };
  },

  mounted() {
    this.getAccountType();
    this.updateCardTheme();
    this.updateProgressColor();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    updateCardTheme() {
      if (this.theme === "dark") {
        this.theme_bg = "black";
        this.theme_title = "border_grey_dark";
        this.theme_topic = "brand_inverse_light";
      } else if (this.theme === "light") {
        this.theme_bg = "white";
        this.theme_title = "color_grey_dark";
        this.theme_topic = "brand_navy";
      }
    },

    updateProgressColor() {
      if (this.card_progress) {
        if (this.card_progress > 75) {
          this.progress_color = "brand_green_bg";
        } else if (this.card_progress >= 45 && this.card_progress <= 74) {
          this.progress_olor = "brand_accent_bg";
        } else {
          this.progress_color = "brand_tonic_bg";
        }
      }
    },

    togglePracticeModal() {
      this.practice_modal = !this.practice_modal;
    },

    pageRedirect() {
      if (this.card_type === "video" && this.show_lock === false) {
        this.$router.push(
          `/${this.account_type}/dashboard/catchup/video_lesson`
        );
      } else if (this.card_type === "tutor" && this.show_lock === false) {
        this.$router.push(
          `/${this.account_type}/dashboard/catchup/tutor_profile`
        );
      } else if (this.card_type === "practice" && this.show_lock === false) {
        this.togglePracticeModal();
      } else {
        this.$router.push(`/${this.account_type}/settings/upgrade_plan`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.recommendation-card-section {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  height: 270px;
  padding: 5px;
  transition: all 0.4s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    transform: scale(0.97);
  }

  .top {
    height: 160px;
    margin-bottom: 10px;

    img {
      @include img_cover;
    }
  }

  .bottom {
    padding-left: 3px;
    padding-right: 3px;

    .card-type-title {
      font-size: 10px;
      line-height: 14px;
    }

    .card-icon {
      margin-top: -4.5px;
    }

    .card-topic {
      font-size: 14px;
      line-height: 19px;
      margin-top: -2px;
      margin-bottom: 5px;
    }
  }
}

.medium-card-height {
  height: 255px;
}
</style>
