<template>
  <div>
    <vue-headful :title="meta_title" description="Description goes here"/>
    <div class="teacher-profile-section base-type-layout">
      <!-- BREADCRUMB -->
      <BreadCrumb
        item_one="Junior Secondary School 1a"
        item_three="Teacher"
        :current_page="1"
        :total_page="32"
        item_two="Members"
        item_two_link="ClassMembers"
      ></BreadCrumb>

      <!-- TEACHER PROFILE CONTAINER -->
      <div class="container teacher-container">
        <div class="row">
          <!-- PROFILE PHOTO -->
          <div class="col-12 col-md-3 d-none d-md-block side-photo mx-auto">
            <!-- AVATAR -->
            <div class="avatar avatar_big avatar-square brand_inverse_light_bg">
              <img v-lazy="dynamicImg('TeacherOneLg.png')" alt class="avatar-img">
            </div>

            <!-- SEND MESSAGE BUTTON -->
            <!-- <button class="btn btn-md btn-inverse" @click="toggleMessageModal">
              <span class="icon-chat mr-2 font-16"></span> Send a Message
            </button>-->
          </div>

          <!-- PROFILE DETAILS -->
          <div class="col-12 col-md-9">
            <!-- ABOUT ME COMPONENT -->
            <AboutMeSection
              teacher_img="TeacherOneLg.png"
              teacher_name="Aderonke Ojo"
              teacher_subjects="Mathematics, Further Mathematics, Physics"
              :class_count="14"
              :homework_count="12"
              about_me_text="I have a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. He has publications and patents in various fields such as microfluidics, materials science, and data science technologies. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming the ability to analyze data, as well as present the data in clear and beautiful visualizations."
              teacher_phone="+234 803 786 2234"
              teacher_email="johnhorace@christland.com"
              teacher_address="34 Louisiana Estate, Dakwo, Abuja, Nigeria"
              @toggleMessage="toggleMessageModal"
            ></AboutMeSection>
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
import BreadCrumb from "@/components/globalComps/BreadCrumb";
import AboutMeSection from "@/components/profileComps/teacherprofile/AboutMeSection";
import ClassAssigned from "@/components/profileComps/teacherprofile/ClassAssigned";
import Schedule from "@/components/profileComps/teacherprofile/Schedule";
import Homework from "@/components/profileComps/teacherprofile/Homework";

export default {
  name: "TeacherProfile",

  components: {
    BreadCrumb,
    AboutMeSection,
    ClassAssigned,
    Schedule,
    Homework,
    NewMessageModal: () =>
      import(/* webpackChunkName: "NewMessageModal" */ "@/components/modalComps/messageModals/NewMessageModal")
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
