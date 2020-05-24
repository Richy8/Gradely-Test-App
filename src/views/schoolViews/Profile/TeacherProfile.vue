<template>
  <div>
    <vue-headful :title="meta_title" description="Description goes here"/>
    <div class="teacher-profile-section">
      <!-- BREADCRUMB -->
      <BreadCrumb
        class_name="Junior Secondary School 1a"
        profile_type="Teacher"
        :current_page="1"
        :total_page="32"
      ></BreadCrumb>

      <!-- TEACHER PROFILE CONTAINER -->
      <div class="container teacher-container">
        <div class="row">
          <!-- PROFILE PHOTO -->
          <div class="col-12 col-md-3 d-none d-md-block side-photo mx-auto">
            <!-- AVATAR -->
            <div class="avatar avatar_big avatar-square">
              <img src="@/assets/images/TeacherOneLg.png" alt class="avatar-img">
            </div>

            <!-- SEND MESSAGE BUTTON -->
            <button class="btn btn-md btn-inverse" @click="toggleMessageModal">
              <span class="icon-chat mr-2 font-16"></span> Send a Message
            </button>
          </div>

          <!-- PROFILE DETAILS -->
          <div class="col-12 col-md-9">
            <!-- ABOUT ME COMPONENT -->
            <AboutMeSection @toggleMessage="toggleMessageModal"></AboutMeSection>
            <!-- ABOUT ME COMPONENT -->

            <!-- CLASS ASSIGNED COMPONENT -->
            <ClassAssigned></ClassAssigned>
            <!-- CLASS ASSIGNED COMPONENT -->

            <!-- SCHEDULE COMPONENT -->
            <Schedule></Schedule>
            <!-- SCHEDULE COMPONENT -->

            <!-- HOMEWORK COMPONENT -->
            <Homework></Homework>
            <!-- HOMEWORK COMPONENT -->
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
import BreadCrumb from "@/components/basicComps/BreadCrumb";
import NewMessageModal from "@/components/schoolComps/dashboard/modals/NewMessageModal";
import AboutMeSection from "@/components/schoolComps/dashboard/teacherprofile/AboutMeSection";
import ClassAssigned from "@/components/schoolComps/dashboard/teacherprofile/ClassAssigned";
import Schedule from "@/components/schoolComps/dashboard/teacherprofile/Schedule";
import Homework from "@/components/schoolComps/dashboard/teacherprofile/Homework";

export default {
  name: "TeacherProfile",

  components: {
    BreadCrumb,
    NewMessageModal,
    AboutMeSection,
    ClassAssigned,
    Schedule,
    Homework
  },

  data() {
    return {
      teacher_name: "Aderonke Oko",
      message_modal: false
    };
  },

  mounted() {},

  computed: {
    meta_title() {
      return this.teacher_name + " | Teacher Profile";
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
