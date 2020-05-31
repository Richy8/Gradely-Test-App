<template>
  <div>
    <vue-headful title="Homework Review" description="Description goes here"/>
    <div class="homework-review-section">
      <!-- BREADCRUMB -->
      <BreadCrumb
        class_name="Junior Secondary School 1a"
        profile_type="Week 2 - Homework"
        :current_page="1"
        :total_page="32"
        back_link_text="Homework"
        back_link_route="ClassHomework"
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
import ReviewChartCard from "@/components/schoolComps/dashboard/class/class_homework/homework_review/ReviewChartCard";
import HelpBlockOne from "@/components/schoolComps/dashboard/class/class_homework/homework_review/HelpBlockOne";

export default {
  name: "HomeworkReview",

  components: {
    BreadCrumb,
    ReviewChartCard,
    HelpBlockOne,
    HelpBlockTwo: () =>
      import(/* webpackChunkName: "HomeworkReview" */ "@/components/schoolComps/dashboard/class/class_homework/homework_review/HelpBlockTwo"),
    Questions: () =>
      import(/* webpackChunkName: "HomeworkReview" */ "@/components/schoolComps/dashboard/class/class_homework/homework_review/Questions"),
    Recommendation: () =>
      import(/* webpackChunkName: "HomeworkReview" */ "@/components/schoolComps/dashboard/class/class_homework/homework_review/Recommendation"),
    VideoCardModal: () =>
      import(/* webpackChunkName: "VideoCardModal" */ "@/components/schoolComps/modals/VideoCardModal"),
    PracticeCardModal: () =>
      import(/* webpackChunkName: "PracticeCardModal" */ "@/components/schoolComps/modals/PracticeCardModal")
  },

  mounted() {},

  data() {
    return {
      video_card: false,
      practice_card: false
    };
  },

  computed: {},

  methods: {
    toggleVideoCard() {
      this.video_card = !this.video_card;
    },

    togglePracticeCard() {
      this.practice_card = !this.practice_card;
    }
  }
};
</script>

<style>
</style>
