<template>
  <div>
    <div class="topic-progress-section white rounded-5">
      <!-- TITLE ROW -->
      <div class="title-row d-flex justify-content-between align-items-center nowrap">
        <div class="left">
          <div class="title color_text text-uppercase font-weight-bold">Topic Progress</div>
        </div>

        <div class="right month-select">
          <select class="form-control color_ash transparent_bg border-0">
            <option value>This Month</option>
            <option value>Next Month</option>
          </select>
        </div>
      </div>

      <div class="row">
        <!-- TOIPC LIST COMPONENT -->
        <div class="col-12 col-md-5">
          <TopicList @switchTopicProgress="updateProgressArea($event)"></TopicList>
        </div>
        <!-- TOIPC LIST COMPONENT -->

        <div class="col-12 col-md-7">
          <!-- TOPIC PROGRESS AREA -->
          <div class="topic-progress-area">
            <div class="topic-title brand_primary d-none d-md-block">Number Bases</div>
            <!-- TOIPC PROGRESS CHART COMPONENT -->
            <TopicProgressChart
              :above_avg="data_above"
              :average="data_average"
              :below_avg="data_below"
            ></TopicProgressChart>
            <!-- TOIPC PROGRESS CHART COMPONENT -->

            <!-- PERFORMANCE BREAKDOWN LOG -->
            <div class="performance-breakdown color_grey_dark text-center">
              ** Performance breakdown of
              <span clas="count">48</span> Students
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopicList from "@/components/schoolComps/dashboard/class/class_report/TopicList";

export default {
  name: "TopicProgress",

  components: {
    TopicList,
    TopicProgressChart: () =>
      import(/* webpackChunkName: "ClassReport" */ "@/components/schoolComps/dashboard/class/class_report/TopicProgressChart")
  },

  data() {
    return {
      data_above: 0,
      data_average: 0,
      data_below: 0
    };
  },

  methods: {
    updateProgressArea(event) {
      this.data_above = event.above;
      this.data_average = event.average;
      this.data_below = event.below;
    }
  }
};
</script>

<style lang="scss">
.topic-progress-section {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 20px 23px 27px 20px;
  margin-bottom: 50px;

  .title-row {
    margin-bottom: 31px;
    padding-right: 0;
    padding-left: 0;
    margin-right: -20px;
    margin-left: -3px;

    .title {
      font-size: 15.5px;
      line-height: 22px;

      @include breakpoint_max(sm) {
        font-size: 15px;
      }

      @include breakpoint_max(xs) {
        font-size: 14.7px;
      }
    }

    .month-select {
      width: 120px;
    }

    .form-control {
      font-size: 13px;
      color: $color_ash;
    }
  }

  .topic-progress-area {
    .topic-title {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 20px;

      @include breakpoint_max(xl) {
        font-size: 15px;
      }
    }

    .performance-breakdown {
      font-size: 11px;
      line-height: 14px;
      margin-top: 13.5px;
      margin-bottom: 5px;

      @include breakpoint_max(lg) {
        margin-top: 20px;
      }
    }
  }
}
</style>
