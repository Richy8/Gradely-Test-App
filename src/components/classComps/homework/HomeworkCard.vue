<template>
  <div>
    <div class="homework-card white rounded-5">
      <div class="d-flex justify-content-between align-items-center nowrap">
        <!-- HOMEWORK INFO -->
        <div class="d-flex justify-content-start align-items-center nowrap homework-info">
          <!-- AVATAR -->
          <div class="avatar avatar-square avatar_sm_md">
            <div class="avatar-with-meta brand_inverse_light_bg">
              <div class="avatar-title brand_navy">{{ day }}</div>
              <div class="avatar-meta color_text">{{ setMonth }}</div>
            </div>
          </div>

          <!-- HOMEWORK DETAIL -->
          <div class="details">
            <div class="title color_text">{{ title }}</div>
            <div class="meta color_grey_dark">
              {{ subject }}
              <span v-if="class_year">• {{ class_year }} - {{ class_branch }}</span>
            </div>
          </div>
        </div>

        <!-- PROGRESS -->
        <!-- SEY EMPTY DIV -->
        <div v-if="account_type==='parent' || account_type==='student'"></div>
        <!-- OTHERS -->
        <div class="d-flex justify-content-start align-items-center progress-container" v-else>
          <div class="progress">
            <div
              class="progress-bar"
              :class="progress_color"
              :style="'width:'+ progress +'%'"
              role="progressbar"
            ></div>
          </div>
          <div class="percent color_grey_dark">{{ progress }}%</div>
        </div>

        <!-- OPTION -->
        <div class="option">
          <router-link
            to
            @click.native="toggleHomeworkModal"
            v-if="account_type==='parent' || account_type==='student'"
          >
            <span
              v-if="account_type==='parent'"
              class="font-weight-bold font-14 link-no-underline btn-link d-none d-sm-block"
            >Attempt</span>
            <span
              v-if="account_type==='student'"
              class="font-weight-bold font-14 link-no-underline btn-link d-none d-sm-block"
            >Start</span>
            <span
              class="icon-caret-right border_grey_dark font-14 link-no-underline d-block d-sm-none"
            ></span>
          </router-link>

          <router-link :to="{name: route_name}" v-else>
            <span class="font-weight-bold font-14 link-no-underline btn-link d-none d-sm-block">View</span>
            <span
              class="icon-caret-right border_grey_dark font-14 link-no-underline d-block d-sm-none"
            ></span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <StartHomeworkModal v-if="homework_modal" @closeTriggered="toggleHomeworkModal"></StartHomeworkModal>
    <!-- MODAL -->
  </div>
</template>

<script>
export default {
  name: "HomeworkCard",

  props: {
    day: Number,
    month: String,
    title: String,
    subject: String,
    class_year: String,
    class_branch: String,
    progress: Number
  },

  components: {
    StartHomeworkModal: () =>
      import(/* webpackChunkName: "StartHomeworkModal" */ "@/components/modalComps/parentModals/StartHomeworkModal")
  },

  computed: {
    setMonth() {
      return this.month.slice(0, 3);
    }
  },

  watch: {
    progress: "updateProgress",
    day: "updateProgress",
    class_year: "updateProgress"
  },

  mounted() {
    this.updateProgress();
    this.getAccountType();
  },

  data() {
    return {
      account_type: "",
      route_name: "",
      progress_color: "",
      homework_modal: false
    };
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
      if (this.account_type === "school") {
        this.route_name = "HomeworkReview";
      } else if (this.account_type === "teacher") {
        this.route_name = "HomeworkReview_TP";
      } else if (this.account_type === "parent") {
        this.route_name = "ParentHomeworkTest";
      } else if (this.account_type === "student") {
        this.route_name = "StudentHomeworkTest";
      }
    },

    updateProgress() {
      if (this.progress >= 75) {
        this.progress_color = "brand_green_bg";
      } else if (this.progress >= 45 && this.progress <= 74) {
        this.progress_color = "brand_accent_bg";
      } else if (this.progress <= 44) {
        this.progress_color = "brand_tonic_bg";
      }
    },

    toggleHomeworkModal() {
      this.homework_modal = !this.homework_modal;
    }
  }
};
</script>

<style lang="scss" scoped>
.homework-card {
  padding: 16px 20px 16px 15px;
  margin-bottom: 2.5px;

  @include breakpoint_max(xs) {
    padding-right: 5px;
  }

  .homework-info {
    width: 40%;

    @include breakpoint_max(lg) {
      width: 50%;
    }

    @include breakpoint_max(md) {
      width: 70%;
    }
  }

  .avatar {
    margin-right: 15px;

    .avatar-title {
      font-size: 13px;
    }
    .avatar-meta {
      font-size: 10px;
    }
  }

  .title {
    font-size: 15px;
    line-height: 177.06%;

    @include breakpoint_max(md) {
      font-size: 14.6px;
    }

    @include breakpoint_max(sm) {
      font-size: 13.7px;
    }
  }

  .meta {
    font-size: 13px;
    line-height: 18px;

    @include breakpoint_max(md) {
      font-size: 12px;
    }
  }

  .progress-container {
    position: relative;
    left: -5px;

    .progress {
      width: 150px;
    }

    .percent {
      margin-left: 6px;
      font-size: 13px;
      line-height: 19px;
    }

    @include breakpoint_max(lg) {
      .progress {
        width: 120px;
      }
    }

    @include breakpoint_max(md) {
      display: none !important;
    }
  }

  .option {
    margin-right: 20px;
  }
}
</style>
