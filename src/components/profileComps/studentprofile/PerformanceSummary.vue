<template>
  <div>
    <div class="performance-summary-block profile-block rounded-5">
      <div class="title color_text text-uppercase">Performance Summary</div>

      <!-- SUMMARY DETAILS -->
      <div class="summary-details">
        <div class="row">
          <div class="col-12 col-md-4">
            <!-- PERFORMANCE CHART -->
            <div class="performance-chart">
              <!-- PERFORMANCE CHART COMPONENT -->
              <PerformanceChart :average_score="81"></PerformanceChart>
              <!-- PERFORMANCE CHART COMPONENT -->
            </div>

            <!-- CLASS RANK COMPONENT -->
            <ClassRank rank_percent="40"></ClassRank>
            <!-- CLASS RANK COMPONENT -->
          </div>

          <!-- PERFORMANCE TOPICS -->
          <div class="col-12 col-md-8 mt-4 mt-sm-4 mt-md-0 topics__block d-none d-md-block">
            <div class="performance-topics">
              <!-- TOPIC BLOCK -->
              <div class="topic-block">
                <div class="title color_grey_dark text-uppercase">Excelling In</div>
                <!-- TOPIC BLOCK COMPONENT -->
                <TopicBlock
                  :subjects="['Number Base System', 'Modular Arithmetic', 'Indices', 'Logarithm and Indices']"
                  status="excel"
                ></TopicBlock>
                <!-- TOPIC BLOCK COMPONENT -->
              </div>

              <!-- TOPIC BLOCK -->
              <div class="topic-block">
                <div class="title color_grey_dark text-uppercase">Average in</div>
                <!-- TOPIC BLOCK COMPONENT -->
                <TopicBlock
                  :subjects="['Quadratic Equations', 'Logical Reasoning']"
                  status="average"
                ></TopicBlock>
              </div>
              <!-- TOPIC BLOCK COMPONENT -->

              <!-- TOPIC BLOCK -->
              <div class="topic-block">
                <div class="title color_grey_dark text-uppercase">Struggling With</div>
                <!-- TOPIC BLOCK COMPONENT -->
                <TopicBlock :subjects="['Trigonometric Ratios']" status="struggle"></TopicBlock>
                <!-- TOPIC BLOCK COMPONENT -->
              </div>
            </div>
          </div>

          <!-- SHOW MORE BUTTON -->
          <div class="col-12 d-md-none">
            <div class="performance-dropdown text-center">
              <span
                class="text-uppercase color_grey_dark pointer see-more"
                @click="togglePerformanceTopics"
              >See More</span>
              <span
                class="text-uppercase color_grey_dark pointer see-less d-none"
                @click="togglePerformanceTopics"
              >See Less</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PerformanceChart from "@/components/profileComps/studentprofile/PerformanceChart";

export default {
  name: "PerformanceSummary",

  components: {
    PerformanceChart,
    TopicBlock: () =>
      import(/* webpackChunkName: "PerformanceSummary" */ "@/components/profileComps/studentprofile/TopicBlock"),
    ClassRank: () =>
      import(/* webpackChunkName: "PerformanceSummary" */ "@/components/profileComps/studentprofile/ClassRank")
  },

  methods: {
    togglePerformanceTopics() {
      let topic_block = document.querySelector(".topics__block");
      let see_more = document.querySelector(".see-more");
      let see_less = document.querySelector(".see-less");

      topic_block.classList.toggle("d-none");
      see_more.classList.toggle("d-none");
      see_less.classList.toggle("d-none");
    }
  }
};
</script>

<style lang="scss">
.performance-summary-block {
  // PERFORMANCE TOPICS
  .performance-topics {
    padding-left: 30px;
    transition: all 0.3s ease-in-out;
    animation: panel-slide-down 0.5s ease-in-out forwards;

    @include breakpoint_max(lg) {
      padding-left: 20px;
    }

    @include breakpoint_max(md) {
      padding-left: 0px;
    }

    .topic-block {
      margin-bottom: 25px;
    }

    .title {
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.02em;
      margin-bottom: 12px;
    }
  }
}
</style>
