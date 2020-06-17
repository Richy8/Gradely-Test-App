<template>
  <div>
    <vue-headful :title="meta_title" description="Description goes here"/>
    <div class="student-profile-section base-type-layout">
      <!-- BREADCRUMB -->
      <BreadCrumb
        item_one="Junior Secondary School 1a"
        item_three="Student"
        :current_page="1"
        :total_page="32"
        item_two="Members"
        :item_two_link="route_link"
      ></BreadCrumb>

      <!-- STUDENTS PROFILE CONTAINER -->
      <div class="container px-1 student-container">
        <div class="row">
          <!-- PROFILE CARD -->
          <div class="col-12 col-md-3">
            <StudentProfileCard
              child_img="ManLg.png"
              parent_img
              child_name="Andrew Oshinaga"
              class_code="FDR/2019/1128"
              parent_name="Boye Oshinaga"
              parent_role="Father"
              @toggleMessage="toggleMessageModal"
            ></StudentProfileCard>
          </div>

          <!-- PROFILE DETAILS -->
          <div class="col-12 col-md-9">
            <!-- PROFILE INTRO DETAILS -->
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

            <!-- POST SECTION COMPONENT -->
            <PostSection></PostSection>
            <!-- POST SECTION COMPONENT -->

            <!-- HOMEWORK SECTION COMPONENT -->
            <HomeworkSection></HomeworkSection>
            <!-- HOMEWORK SECTION COMPONENT -->

            <!-- REMARK SECTION COMPONENT -->
            <RemarkSection></RemarkSection>
            <!-- REMARK SECTION COMPONENT -->
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import BreadCrumb from "@/components/globalComps/BreadCrumb";
import StudentProfileCard from "@/components/profileComps/studentprofile/StudentProfileCard";
import PerformanceSummary from "@/components/profileComps/studentprofile/PerformanceSummary";

export default {
  name: "StudentProfile",

  components: {
    BreadCrumb,
    StudentProfileCard,
    PerformanceSummary,
    TopicBreakdown: () =>
      import(/* webpackChunkName: "TopicBreakdown" */ "@/components/profileComps/studentprofile/TopicBreakdown"),
    PostSection: () =>
      import(/* webpackChunkName: "PostSection" */ "@/components/profileComps/studentprofile/PostSection"),
    HomeworkSection: () =>
      import(/* webpackChunkName: "HomeworkSection" */ "@/components/profileComps/studentprofile/HomeworkSection"),
    RemarkSection: () =>
      import(/* webpackChunkName: "RemarkSection" */ "@/components/profileComps/studentprofile/RemarkSection"),
    NewMessageModal: () =>
      import(/* webpackChunkName: "NewMessageModal" */ "@/components/modalComps/messageModals/NewMessageModal")
  },

  data() {
    return {
      account_type: "",
      route_link: "",
      student_name: "Andrew Oshinaga",
      message_modal: false
    };
  },

  computed: {
    meta_title() {
      return this.student_name + " | Student Profile";
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
    },

    toggleMessageModal() {
      this.message_modal = !this.message_modal;
    }
  }
};
</script>

<style>
</style>
