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
          <TopicList></TopicList>
        </div>
        <!-- TOIPC LIST COMPONENT -->

        <div class="col-12 col-md-7">
          <!-- TOPIC PROGRESS AREA -->
          <div class="topic-progress-area">
            <div class="topic-title brand_primary d-none d-md-block">Number Bases</div>
            <!-- TOIPC PROGRESS CHART COMPONENT -->
            <TopicProgressChart :above_avg="38" :average="22" :below_avg="75"></TopicProgressChart>
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
import TopicProgressChart from "@/components/schoolComps/dashboard/class/class_report/TopicProgressChart";

export default {
  name: "TopicProgress",

  components: {
    TopicList,
    TopicProgressChart
  }
};
</script>

<style>
</style>
