<template>
  <div>
    <div
      class="homework-data-column white d-flex justify-content-between align-items-center nowrap"
    >
      <!-- HOMEWORK INFO -->
      <div class="left d-flex justify-content-start align-items-center nowrap">
        <!-- HOME WORK STATUS -->
        <div v-if="account_type==='parent' || account_type==='student'"></div>
        <div class="avatar avatar_avg homework-status" :class="status_color_bg" v-else>
          <span class="flex-center" :class="status_state"></span>
        </div>

        <!-- DATE AVATAR -->
        <div class="avatar avatar_sm_md avatar-square date-avatar">
          <div class="avatar-with-meta brand_inverse_light_bg">
            <div class="avatar-title font-12">{{ day }}</div>
            <div class="avatar-meta font-10">{{ setMonth }}</div>
          </div>
        </div>

        <!-- HOMEWORK TITLE -->
        <div class="homework-info">
          <div class="homework-title brand_navy font-weight-bold text-truncate">{{ title }}</div>
          <div class="homework-subject color_grey_dark">
            <span class="subject">{{ subject }}</span> •
            <span
              class="font-weight-bold text-uppercase"
              :class="status_color"
              v-if="account_type==='parent' || account_type==='student'"
            >{{ status }}</span>
            <span class="percent" v-else>{{ status_percent }}%</span>
          </div>
        </div>
      </div>

      <!-- PROGRESS -->
      <div
        class="d-flex flex-column justify-content-center align-items-center progress-container"
        v-if="account_type==='parent' || account_type==='student'"
      >
        <!-- SCORE PERCENT -->
        <div
          class="score-percent w-100 d-flex justify-content-between align-item-center nowrap mb-1"
        >
          <div class="text color_text">Score</div>
          <div class="percent color_grey_dark">
            {{ progress_value }}
            <span v-if="progress_value!=='NIL'">%</span>
          </div>
        </div>

        <!-- PROGRESS -->
        <div class="progress">
          <div
            class="progress-bar"
            :class="progress_color"
            style="width: 0%"
            role="progressbar"
            v-if="progress_value==='NIL'"
          ></div>

          <div
            class="progress-bar"
            :class="progress_color"
            :style="'width:'+ progress_value +'%'"
            role="progressbar"
            v-else
          ></div>
        </div>
      </div>

      <!-- VIEW -->
      <div class="right">
        <router-link
          :to="'/'+account_type+'/dashboard/homework/homework-review'"
          v-if="account_type==='parent' || account_type==='student'"
        >
          <span
            class="font-weight-bold font-14 link-no-underline btn-link d-none d-sm-block"
          >View Report</span>
          <span
            class="icon-caret-right border_grey_dark font-14 link-no-underline d-block d-sm-none"
          ></span>
        </router-link>

        <router-link to v-else>
          <span class="font-weight-bold font-14 link-no-underline btn-link d-none d-sm-block">View</span>
          <span
            class="icon-caret-right border_grey_dark font-14 link-no-underline d-block d-sm-none"
          ></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeworkBlock",

  props: {
    day: Number,
    month: String,
    title: String,
    subject: String,
    percent: String,
    status: String
  },

  computed: {
    setMonth() {
      return this.month.slice(0, 3);
    }
  },

  data() {
    return {
      account_type: "",
      status_percent: "",
      status_color_bg: "",
      status_state: "",
      status_color: "",
      progress_value: "",
      progress_color: ""
    };
  },

  watch: {
    percent: ["updateHomework", "updateProgress"],
    status: "updateStatus"
  },

  mounted() {
    this.getAccountType();
    this.updateHomework();
    this.updateStatus();
    this.updateProgress();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    updateHomework() {
      if (this.percent > 10) {
        this.status_percent = this.percent;
        this.status_color_bg = "rgba_brand_green";
        this.status_state = "icon-accept brand_green";
      } else if (this.percent <= 10) {
        this.status_percent = this.percent;
        this.status_color_bg = "rgba_brand_tonic";
        this.status_state = "icon-decline brand_tonic";
      } else if (this.percent === "none") {
        this.status_percent = "--";
        this.status_color_bg = "rgba_brand_grey";
        this.status_state = "icon-minus color_grey_dark";
      }
    },

    updateStatus() {
      if (this.status === "New") {
        this.status_color = "color_text";
      } else if (this.status === "Completed") {
        this.status_color = "brand_green";
      } else if (this.status === "Missed") {
        this.status_color = "brand_tonic";
      }
    },

    updateProgress() {
      if (this.status === "New") {
        this.progress_value = "NIL";
      } else if (this.status !== "New" && parseInt(this.percent) >= 75) {
        this.progress_value = this.percent;
        this.progress_color = "brand_green_bg";
      } else if (
        this.status !== "New" &&
        (parseInt(this.percent) >= 45 && parseInt(this.percent) <= 74)
      ) {
        this.progress_value = this.percent;
        this.progress_color = "brand_accent_bg";
      } else if (this.status !== "New" && parseInt(this.percent) <= 45) {
        this.progress_value = this.percent;
        this.progress_color = "brand_tonic_bg";
      }
    }
  }
};
</script>

<style lang="scss">
.homework-data-column {
  padding: 10px 60px 10px 10px;
  border-bottom: 1px solid $border_grey_light;
  margin-bottom: 1px;

  @include breakpoint_max(sm) {
    padding-right: 10px;
  }

  @include breakpoint_max(xs) {
    padding-right: 0px;
    padding-left: 0px;
  }

  .rgba_brand_tonic {
    background: #ffdcde;
  }

  .rgba_brand_green {
    background: rgba(96, 210, 176, 0.25);
  }

  .rgba_brand_grey {
    background: #e5e5e5;
  }

  .homework-status {
    margin-right: 20px;

    @include breakpoint_max(xs) {
      @include equal_min_edge(22);
      margin-right: 10px;
    }

    span {
      font-size: 17px;

      @include breakpoint_max(xs) {
        font-size: 15px;
      }
    }
  }

  .date-avatar {
    margin-right: 15px;

    @include breakpoint_max(xs) {
      margin-right: 12px;
    }
  }

  .homework-info {
    width: 220px;

    @include breakpoint_max(lg) {
      width: 200px;
    }

    @include breakpoint_max(md) {
      width: 190px;
    }

    @include breakpoint_max(xs) {
      width: 175px;
    }
  }

  .homework-title {
    margin-bottom: 3px;
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(xs) {
      font-size: 13px;
    }
  }

  .homework-subject {
    font-size: 13px;
    line-height: 18px;

    @include breakpoint_max(xs) {
      font-size: 12px;
    }
  }

  .progress-container {
    position: relative;
    left: -5px;

    .progress {
      width: 150px;
    }

    .text {
      font-size: 12.5px;
      line-height: 19px;
    }

    .percent {
      font-size: 12.5px;
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
}
</style>
