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
      ></BreadCrumb>

      <!-- HOMEWORK REVIEW CONTAINER -->
      <div class="container px-1 review-container">
        <div class="row">
          <!-- HOMEWORK CHART CARD -->
          <div class="col-12 col-md-3">
            <ReviewChartCard></ReviewChartCard>
          </div>

          <!-- REVIEW DETAILS -->
          <div class="col-12 col-md-9">
            <!-- HELPBLOCK ONE -->
            <HelpBlockOne></HelpBlockOne>
            <!-- HELPBLOCK ONE -->

            <!-- HELPBLOCK TWO -->
            <HelpBlockTwo></HelpBlockTwo>
            <!-- HELPBLOCK TWO -->

            <!-- QUESTIONS COMPONENTS -->
            <Questions></Questions>
            <!-- QUESTIONS COMPONENTS -->

            <!-- RECOMMENDATION COMPONENT -->
            <Recommendation></Recommendation>
            <!-- RECOMMENDATION COMPONENT -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/basicComps/BreadCrumb";
import ReviewChartCard from "@/components/schoolComps/dashboard/class/class_homework/ReviewChartCard";
import HelpBlockOne from "@/components/schoolComps/dashboard/class/class_homework/HelpBlockOne";
import HelpBlockTwo from "@/components/schoolComps/dashboard/class/class_homework/HelpBlockTwo";
import Questions from "@/components/schoolComps/dashboard/class/class_homework/Questions";
import Recommendation from "@/components/schoolComps/dashboard/class/class_homework/Recommendation";

export default {
  name: "HomeworkReview",

  components: {
    BreadCrumb,
    ReviewChartCard,
    HelpBlockOne,
    HelpBlockTwo,
    Questions,
    Recommendation
  },

  mounted() {},

  data() {
    return {};
  },

  computed: {},

  methods: {}
};
</script>

<style>
</style>
