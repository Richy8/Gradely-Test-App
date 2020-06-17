<template>
  <div>
    <vue-headful title="Homework Review" description="Description goes here"/>
    <div class="homework-review-section base-type-layout">
      <!-- BREADCRUMB -->
      <BreadCrumb
        item_one="Junior Secondary School 1a"
        item_three="Week 2 - Homework"
        :current_page="1"
        :total_page="32"
        item_two="Homework"
        :item_two_link="route_link"
      ></BreadCrumb>

      <!-- HOMEWORK REVIEW CONTAINER -->
      <div class="container px-1 review-container">
        <div class="row">
          <div class="col-12">
            <div class="homework-review-title color_text font-weight-bold">Week 2 - Homework Report</div>
          </div>
        </div>

        <div class="row">
          <!-- HOMEWORK CHART CARD -->
          <div class="col-12 col-md-3">
            <ReviewChartCard></ReviewChartCard>
          </div>

          <!-- REVIEW DETAILS -->
          <div class="col-12 col-md-9">
            <!-- HELPBLOCK ONE -->
            <HelpBlockOne @toggleVideo="toggleVideoCard" @togglePractice="togglePracticeCard"></HelpBlockOne>
            <!-- HELPBLOCK ONE -->

            <!-- HELPBLOCK TWO -->
            <HelpBlockTwo></HelpBlockTwo>
            <!-- HELPBLOCK TWO -->

            <!-- QUESTIONS COMPONENTS -->
            <Questions></Questions>
            <!-- QUESTIONS COMPONENTS -->

            <!-- RECOMMENDATION COMPONENT -->
            <Recommendation
              note="You need to focus on Logarithm for this class before teaching them another topic. We recommend starting from the basics as about 60% of your class are still struggling with the easy questions."
            ></Recommendation>
            <!-- RECOMMENDATION COMPONENT -->
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL GOES HERE -->
    <VideoCardModal v-if="video_card" @closeTriggered="toggleVideoCard"></VideoCardModal>
    <PracticeCardModal v-if="practice_card" @closeTriggered="togglePracticeCard"></PracticeCardModal>
    <!-- MODAL GOES HERE -->
  </div>
</template>

<script>
import BreadCrumb from "@/components/globalComps/BreadCrumb";
import ReviewChartCard from "@/components/classComps/homework/homework_review/ReviewChartCard";
import HelpBlockOne from "@/components/classComps/homework/homework_review/HelpBlockOne";

export default {
  name: "HomeworkReview",

  components: {
    BreadCrumb,
    ReviewChartCard,
    HelpBlockOne,
    HelpBlockTwo: () =>
      import(/* webpackChunkName: "HomeworkReview" */ "@/components/classComps/homework/homework_review/HelpBlockTwo"),
    Questions: () =>
      import(/* webpackChunkName: "HomeworkReview" */ "@/components/classComps/homework/homework_review/Questions"),
    Recommendation: () =>
      import(/* webpackChunkName: "HomeworkReview" */ "@/components/classComps/homework/homework_review/Recommendation"),
    VideoCardModal: () =>
      import(/* webpackChunkName: "VideoCardModal" */ "@/components/modalComps/classModals/VideoCardModal"),
    PracticeCardModal: () =>
      import(/* webpackChunkName: "PracticeCardModal" */ "@/components/modalComps/classModals/PracticeCardModal")
  },

  mounted() {
    this.getAccountType();
  },

  data() {
    return {
      account_type: "",
      route_link: "",
      video_card: false,
      practice_card: false
    };
  },

  computed: {},

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
      if (this.account_type === "school") {
        this.route_link = "ClassHomework";
      } else if (this.account_type === "teacher") {
        this.route_link = "TeacherHomework";
      }
    },

    toggleVideoCard() {
      this.video_card = !this.video_card;
    },

    togglePracticeCard() {
      this.practice_card = !this.practice_card;
    }
  }
};
</script>

<style lang="scss">
// SHOW MORE LINK
.show-more {
  font-size: 14px;
  line-height: 19px;
  margin-top: 30px;
  margin-bottom: 10px;
}

.homework-review-section {
  position: relative;
  top: 65px;

  @include breakpoint_max(md) {
    top: 30px;
  }

  .review-container {
    margin-top: 50px;

    @include breakpoint_max(md) {
      margin-bottom: 70px;
    }
  }

  .homework-review-title {
    font-size: 30px;
    line-height: 44px;
    margin-bottom: 40px;

    @include breakpoint_max(lg) {
      font-size: 26px;
    }

    @include breakpoint_max(md) {
      font-size: 23px;
    }

    @include breakpoint_max(sm) {
      font-size: 22px;
    }
  }

  // HELP BLOCK ONE
  .help-block-one,
  .help-block-two,
  .questions,
  .recommendation {
    margin-bottom: 50px;

    .title {
      margin-bottom: 20px;
      font-size: 21px;
      line-height: 29px;

      @include breakpoint_max(md) {
        font-size: 18px;
      }

      @include breakpoint_max(sm) {
        font-size: 16px;
      }
    }
  }
}
</style>
