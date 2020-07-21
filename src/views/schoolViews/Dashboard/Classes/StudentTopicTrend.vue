<template>
  <div>
    <vue-headful :title="meta_title" description="Description goes here"/>
    <div class="topic-trend-section base-type-layout">
      <!-- BREADCRUMB -->
      <BreadCrumb
        item_one="Andrew Oshinaga"
        item_three="Topic Trend"
        :current_page="1"
        :total_page="1"
        item_two="Report"
        item_two_link="ParentReport"
        :show_nav="false"
        v-if="account_type==='parent' || account_type==='student'"
      ></BreadCrumb>

      <BreadCrumb
        item_one="Andrew Oshinaga"
        item_three="Topic Trend"
        :current_page="1"
        :total_page="1"
        item_two
        item_two_link
        :show_nav="false"
        v-else
      ></BreadCrumb>

      <!-- STUDENTS PROFILE CONTAINER -->
      <div class="container px-1">
        <!-- FIRST ROW SECTION -->
        <div class="row student-topic-row">
          <div class="col-12">
            <!-- TOPIC SELECT FORM -->
            <div class="topic-list">
              <select class="form-control rounded-select rounded-5">
                <option value="Indices" selected>Indices</option>
                <option value="Number Base">Number Base</option>
                <option value="Logarithm">Logarithm</option>
                <option value="Variation">Variation</option>
              </select>
            </div>
          </div>
        </div>

        <!-- SECOND ROW SECTION -->
        <div class="row mb-5 mb-sm-4">
          <!-- PERFORMANCE CHART -->
          <div class="col-12 col-md-4">
            <div class="topic-score-area white rounded-10">
              <!-- PERFORMANCE CHART COMPONENT -->
              <PerformanceChart :average_score="64" :switch_color="true"></PerformanceChart>
              <!-- PERFORMANCE CHART COMPONENT -->

              <!-- SUMMARY TEXT -->
              <div class="summary-text rounded-5 brand_white_bg w-100 mt-4 p-3">
                <div class="text-uppercase color_grey_dark font-11 mb-1">Summary</div>
                <div class="color_text font-12-5">Average performance</div>
              </div>
            </div>
          </div>

          <!-- PERFORMANCE LINE CHART -->
          <div class="col-12 col-md-8">
            <div class="graphical-area white rounded-10">
              <div
                class="text font-weight-bold text-uppercase color_text mb-4 font-14-5 pl-1"
              >Improvement Trend</div>
              <!-- TOPIC TREND CHART -->
              <TopicTrendChart :trends="[75, 25, 50, 20, 60, 40, 55, 45, 80, 30, 65, 40]"></TopicTrendChart>
            </div>
          </div>
        </div>

        <!-- THIRD ROW STYLING -->
        <div class="row activities-row">
          <div class="col-12">
            <div class="activities-title font-weight-bold color_text text-uppercase">Activities</div>
            <!-- ACTIVITY HEADER -->
            <div class="row activities-header">
              <div class="col-4 col-sm-4 col-md-2 title">Date</div>
              <div class="col-6 col-sm-6 col-md-4 title">Description</div>
              <div class="col-3 d-none d-md-block title">Type</div>
              <div class="col-2 col-md-3 title">Score</div>
            </div>

            <ActivityScoreCard
              date="17 March, 2020"
              description="Week 2 - Homework"
              type="Homework"
              :score="76"
            ></ActivityScoreCard>

            <ActivityScoreCard
              date="20 April, 2020"
              description="Week 2 - Homework"
              type="Homework"
              :score="65"
            ></ActivityScoreCard>

            <ActivityScoreCard
              date="20 March, 2020"
              description="Week 2 - Homework"
              type="Practice"
              :score="25"
            ></ActivityScoreCard>

            <!-- PAGINATION -->
            <Pagination></Pagination>
            <!-- PAGINATION -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import BreadCrumb from "@/components/globalComps/BreadCrumb";
import PerformanceChart from "@/components/profileComps/studentprofile/PerformanceChart";
import TopicTrendChart from "@/components/classComps/topicTrend/TopicTrendChart";

export default {
  name: "StudentTopicTrend",

  components: {
    BreadCrumb,
    PerformanceChart,
    TopicTrendChart,
    Pagination: () =>
      import(/* webpackChunkName: "Pagination" */ "@/components/globalComps/Pagination"),
    ActivityScoreCard: () =>
      import(/* webpackChunkName: "ActivityScoreCard" */ "@/components/classComps/topicTrend/ActivityScoreCard")
  },

  data() {
    return {
      account_type: "",
      route_link: "",
      student_name: "Andrew Oshinaga"
    };
  },

  computed: {
    meta_title() {
      return this.student_name + " | Student Topic Trend";
    }
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
      if (this.account_type === "school") {
        this.route_link = "ClassMembers";
      } else if (this.account_type === "teacher") {
        this.route_link = "TeacherMembers";
      }
    }
  }
};
</script>

<style lang="scss">
.topic-trend-section {
  .student-topic-row {
    margin-top: 50px;
    margin-bottom: 25px;

    .topic-list {
      width: 200px;
    }
  }

  .topic-score-area {
    @include flex_column_center;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 33px 20px 20px;
    height: 400px;

    @include breakpoint_max(md) {
      height: auto;
      margin-bottom: 30px;
    }
  }

  .graphical-area {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 30px 30px 32px;
    height: 400px;

    @include breakpoint_max(md) {
      height: auto;
      padding: 30px 15px 32px;
    }

    @include breakpoint_max(sm) {
      height: auto;
      padding: 20px 10px 15px;
    }
  }

  .activities-row {
    margin-top: 50px;
    margin-bottom: 60px;

    @include breakpoint_max(md) {
      margin-bottom: 90px;
    }
  }

  .activities-title {
    font-size: 21px;
    margin-bottom: 31px;

    @include breakpoint_max(md) {
      font-size: 18px;
    }

    @include breakpoint_max(sm) {
      font-size: 16px;
    }
  }

  .activities-header {
    padding-bottom: 6px;
    border-bottom: 1px solid $color_grey_light;
    margin-right: -2px !important;
    margin-left: -2px !important;

    .title {
      color: $color_ash;
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;

      @include breakpoint_max(md) {
        font-size: 11px;
      }
    }
  }
}
</style>
