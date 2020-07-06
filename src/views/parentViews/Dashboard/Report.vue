<template>
  <div>
    <vue-headful :title="getPageTitle" description="Description goes here"/>
    <div class="student-profile-section mt-5 base-type-layout">
      <div class="container px-1">
        <div class="row">
          <!-- CHILD INFO COLUMN -->
          <div class="col-12 col-md-3">
            <!-- PARENT CHILD COMPONENT -->
            <div v-if="account_type==='parent'">
              <ParentChildCard></ParentChildCard>
            </div>
            <!-- PARENT CHILD COMPONENT -->

            <!-- STUDENT PROFILE CARD COMPONENT -->
            <div v-else-if="account_type==='student'">
              <StudentProfileCard
                child_img="ManLg.png"
                parent_img
                child_name="Andrew Oshinaga"
                class_code="FDR/2019/1128"
                parent_name="Boye Oshinaga"
                parent_role="Father"
                card_type="student"
              ></StudentProfileCard>
            </div>
            <!-- STUDENT PROFILE CARD COMPONENT -->
          </div>
          <!-- CHILD INFO COLUMN -->

          <!-- CLASS REPORT -->
          <div class="col-12 col-md-9">
            <div
              class="student-profile-intro-details d-flex justify-content-between align-items-end flex-wrap"
            >
              <!-- LEFT COLUMN -->
              <div class="left-column">
                <div class="text color_grey_dark">Student's Progress in:</div>
                <div class="term-subject color_text font-weight-bold">
                  <span class="term">First Terms</span> -
                  <span class="subject">Mathematics</span>
                </div>
              </div>

              <!-- RIGHT COLUMN -->
              <div class="right-column d-flex flex-end">
                <!-- SUBJECT SELECT -->
                <div class="subject">
                  <select class="form-control rounded-select">
                    <option value="Mathematics" selected>Mathematics</option>
                    <option value="English Language">English Language</option>
                    <option value="Social studies">Social studies</option>
                    <option value="Basic Technology">Basic Technology</option>
                    <option value="Computer">Computer Sci.</option>
                  </select>
                </div>
                <!-- TERM SELECT -->
                <div class="term">
                  <select class="form-control rounded-select">
                    <option value="First" selected>First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- PERFORMANCE SUMMARY COMPONENT -->
            <PerformanceSummary></PerformanceSummary>
            <!-- PERFORMANCE SUMMARY COMPONENT -->

            <!-- TOPIC BREAKDOWN COMPONENT -->
            <TopicBreakdown></TopicBreakdown>
            <!-- TOPIC BREAKDOWN COMPONENT -->

            <!-- BADGES SECTION -->
            <BadgesSection></BadgesSection>
            <!-- BADGES SECTION -->

            <!-- HOMEWORK HISTORY COMPONENT -->
            <HomeworkSection></HomeworkSection>
            <!-- HOMEWORK HISTORY COMPONENT -->

            <!-- REMARK SECTION COMPONENT -->
            <RemarkSection></RemarkSection>
            <!-- REMARK SECTION COMPONENT -->
          </div>
          <!-- CLASS REPORT -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";
import StudentProfileCard from "@/components/profileComps/studentprofile/StudentProfileCard";
import ParentChildCard from "@/components/classComps/parentSideBar/ParentChildCard";
import PerformanceSummary from "@/components/profileComps/studentprofile/PerformanceSummary";

export default {
  name: "Feeds",

  components: {
    StudentProfileCard,
    ParentChildCard,
    PerformanceSummary,
    TopicBreakdown: () =>
      import(/* webpackChunkName: "TopicBreakdown" */ "@/components/profileComps/studentprofile/TopicBreakdown"),
    BadgesSection: () =>
      import(/* webpackChunkName: "BadgesSection" */ "@/components/classComps/report/BadgesSection"),
    HomeworkSection: () =>
      import(/* webpackChunkName: "HomeworkSection" */ "@/components/profileComps/studentprofile/HomeworkSection"),
    RemarkSection: () =>
      import(/* webpackChunkName: "RemarkSection" */ "@/components/profileComps/studentprofile/RemarkSection")
  },

  computed: {
    getPageTitle() {
      return `Dashboard Report | ${capitalizeFirstLetter(this.account_type)}`;
    }
  },

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.student-profile-section {
}
</style>
