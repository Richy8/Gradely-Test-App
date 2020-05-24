<template>
  <div>
    <div class="homework-data-column d-flex justify-content-between align-items-center nowrap">
      <!-- HOMEWORK INFO -->
      <div class="left d-flex justify-content-start align-items-center nowrap">
        <!-- HOME WORK STATUS -->
        <div class="avatar avatar_avg homework-status" :class="status_color_bg">
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
          <div class="homework-title color_text text-truncate">{{ title }}</div>
          <div class="homework-subject color_grey_dark">
            <span class="subject">{{ subject }}</span> •
            <span class="percent">{{ status_percent }}%</span>
          </div>
        </div>
      </div>

      <!-- VIEW -->
      <div class="right">
        <router-link to class="btn-link font-14 link-no-underline d-none d-sm-block">View</router-link>
        <router-link to class="btn-link border_grey_dark link-no-underline font-14 d-sm-none">
          <span class="icon-caret-right"></span>
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
    percent: String
  },

  computed: {
    setMonth() {
      return this.month.slice(0, 3);
    }
  },

  data() {
    return {
      status_percent: "",
      status_color_bg: "",
      status_state: ""
    };
  },

  watch: {
    percent: "updateHomework"
  },

  mounted() {
    this.updateHomework();
  },

  methods: {
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
    }
  }
};
</script>

<style>
</style>
