<template>
  <div>
    <vue-headful :title="meta_title" description="Description goes here"/>
    <div class="student-profile-section">
      <!-- BREADCRUMB -->
      <BreadCrumb
        class_name="Junior Secondary School 1a"
        profile_type="Student"
        :current_page="1"
        :total_page="32"
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
                  <select class="form-control">
                    <option value="Mathematics" selected>Mathematics</option>
                    <option value="English Language">English Language</option>
                    <option value="Social studies">Social studies</option>
                    <option value="Basic Technology">Basic Technology</option>
                    <option value="Computer">Computer Sci.</option>
                  </select>
                </div>
                <!-- TERM SELECT -->
                <div class="term">
                  <select class="form-control">
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
import NewMessageModal from "@/components/schoolComps/dashboard/modals/NewMessageModal";
import BreadCrumb from "@/components/basicComps/BreadCrumb";
import StudentProfileCard from "@/components/schoolComps/dashboard/studentprofile/StudentProfileCard";
import PerformanceSummary from "@/components/schoolComps/dashboard/studentprofile/PerformanceSummary";
import TopicBreakdown from "@/components/schoolComps/dashboard/studentprofile/TopicBreakdown";
import PostSection from "@/components/schoolComps/dashboard/studentprofile/PostSection";
import HomeworkSection from "@/components/schoolComps/dashboard/studentprofile/HomeworkSection";
import RemarkSection from "@/components/schoolComps/dashboard/studentprofile/RemarkSection";

export default {
  name: "StudentProfile",

  components: {
    NewMessageModal,
    BreadCrumb,
    StudentProfileCard,
    PerformanceSummary,
    TopicBreakdown,
    PostSection,
    HomeworkSection,
    RemarkSection
  },

  mounted() {
   
  },

  data() {
    return {
      student_name: "Andrew Oshinaga",
      message_modal: false
    };
  },

  computed: {
    meta_title() {
      return this.student_name + " | Student Profile";
    }
  },

  methods: {
    toggleMessageModal() {
      this.message_modal = !this.message_modal;
    }
  }
};
</script>

<style>
</style>
