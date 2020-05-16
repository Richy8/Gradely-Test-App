<template>
  <div>
    <vue-headful title="School Dashboard | Home" description="Description goes here"/>
    <div class="school-home-section">
      <!-- CLASS BANNER -->
      <div class="class-banner w-100">
        <div class="banner-overlay box-overlay color_mid_blue_bg">
          <img src="@/assets/images/ClassDoodle.png" alt="ClassDoodle" class="img img-overlay">
        </div>

        <!-- SCHOOL INFO DETAIL -->
        <div class="school-detail-info white-text">
          <!-- SCHOOL AVATAR -->
          <div class="avatar avatar_xl rounded-10">
            <div class="avatar-text white font-weight-bold">C</div>
          </div>
          <!-- SCHOOL INFO -->
          <div class="school-info d-flex flex-column justify-content-end align-items-start">
            <div class="school-name font-weight-bold color_white">Chrisland Intl. College</div>
            <div class="school-location brand_inverse_light">Lagos, Nigeria</div>
            <div class="profile-update-cta">
              <router-link to="/school/dashboard/settings" class>Update school profile</router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- SCHOOL HOME CONTENT -->
      <div class="container">
        <div class="row mb-5 mb-sm-4">
          <!-- LEFT CONTENT -->
          <div class="left-content color_mid_blue_bg rounded-5">
            <transition name="fade" mode="out-in">
              <component :is="view" @toggleTeacherModal="toggleTeacherModal"></component>
            </transition>
          </div>

          <!-- RIGHT CONTENT -->
          <div class="right-content">
            <div class="title-row d-flex justify-content-between align-items-center nowrap">
              <div class="header-title font-weight-bold color_text">My Classes</div>
              <div>
                <!-- PHONE CALL COMPONENT -->
                <PhoneCall @toggleSidebar="switchSidebar"></PhoneCall>
                <!-- PHONE CALL COMPONENT -->
              </div>
            </div>

            <!-- CLASS STRUCTURE COMPONENT -->
            <ClassStructure
              class_year="Year 7"
              arms="1 Arm"
              @teacherModal="toggleTeacherModal"
              @branchModal="toggleBranchModal"
              @classModal="toggleClassModal"
            />
            <ClassStructure
              class_year="Year 8"
              arms="3 Arm"
              @teacherModal="toggleTeacherModal"
              @branchModal="toggleBranchModal"
              @classModal="toggleClassModal"
            />
            <ClassStructure
              class_year="Year 9"
              arms="4 Arm"
              @teacherModal="toggleTeacherModal"
              @branchModal="toggleBranchModal"
              @classModal="toggleClassModal"
            />
            <!-- CLASS STRUCTURE COMPONENT -->
          </div>
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <WelcomeDialogue v-if="welcome_dialogue" @closeDialog="dialogueCompleted"></WelcomeDialogue>
    <AddTeacherModal v-if="toggle_teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <AddBranchModal v-if="toggle_branch_modal" @closeTriggered="toggleBranchModal"></AddBranchModal>
    <ClassDetailsModal v-if="toggle_class_modal" @closeTriggered="toggleClassModal"></ClassDetailsModal>
    <!-- MODALS -->
  </div>
</template>


<script>
// BACKGROUND COLOR EXTERNAL FUNCTION
import { bgColorSetter } from "@/assets/jsComps/extFunc";

import DefaultInfo from "@/components/schoolComps/dashboard/home/DefaultInfo";
import ContentInfo from "@/components/schoolComps/dashboard/home/ContentInfo";
import PhoneCall from "@/components/schoolComps/dashboard/home/PhoneCall";
import ClassStructure from "@/components/schoolComps/dashboard/home/ClassStructure";

// MODAL
import WelcomeDialogue from "@/components/schoolComps/welcome/WelcomeDialog";
import AddTeacherModal from "@/components/schoolComps/dashboard/modals/AddTeacherModal";
import AddBranchModal from "@/components/schoolComps/dashboard/modals/AddBranchModal";
import ClassDetailsModal from "@/components/schoolComps/dashboard/modals/ClassDetailsModal";

export default {
  name: "Home",

  components: {
    DefaultInfo,
    ContentInfo,
    PhoneCall,
    ClassStructure,
    WelcomeDialogue,
    AddTeacherModal,
    AddBranchModal,
    ClassDetailsModal
  },

  data() {
    return {
      view: ContentInfo,
      in_view: false,
      welcome_dialogue: true,
      toggle_teacher_modal: false,
      toggle_branch_modal: false,
      toggle_class_modal: false
    };
  },

  mounted() {
    bgColorSetter("#f0f0f0");
  },

  methods: {
    toggleTeacherModal() {
      this.toggle_teacher_modal = !this.toggle_teacher_modal;
    },

    toggleBranchModal() {
      this.toggle_branch_modal = !this.toggle_branch_modal;
    },

    toggleClassModal() {
      this.toggle_class_modal = !this.toggle_class_modal;
    },

    dialogueCompleted() {
      this.welcome_dialogue = !this.welcome_dialogue;
    },

    switchSidebar() {
      this.in_view = !this.in_view;
      (this.in_view === false) ? this.view = 'ContentInfo' : this.view = 'DefaultInfo';
    }
  }
};
</script>

<style lang="scss" scoped>
   .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .2s ease-in;
    }
    .fade-leave-active{
        transition: opacity .2s ease-out;
        opacity: 0;
    }
</style>
