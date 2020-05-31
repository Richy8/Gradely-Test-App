<template>
  <div>
    <vue-headful title="School Dashboard | Home" description="Description goes here"/>
    <div class="school-home-section">
      <!-- SCHOOL BANER COMPONENT -->
      <SchoolBanner
        school_name="ChristLand Intl College"
        school_state="Lagos"
        school_country="Nigeria"
        :banner_default="default_value"
      ></SchoolBanner>

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
            <div class="title-row d-flex justify-content-between align-items-center flex-wrap">
              <div class="header-title font-weight-bold color_text">My Classes</div>
              <div>
                <!-- PHONE CALL COMPONENT -->
                <PhoneCall @toggleSidebar="switchSidebar"></PhoneCall>
                <!-- PHONE CALL COMPONENT -->
              </div>
            </div>

            <!-- CLASS STRUCTURE COMPONENT -->
            <ClassStructure
              v-for="(structure, index) in class_structures"
              :key="index"
              :class_year="structure.class_year"
              :arms="structure.arms"
              :active_accordion="structure.active"
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
import SchoolBanner from "@/components/schoolComps/dashboard/home/SchoolBanner";
import DefaultInfo from "@/components/schoolComps/dashboard/home/DefaultInfo";
import ContentInfo from "@/components/schoolComps/dashboard/home/ContentInfo";
import ClassStructure from "@/components/schoolComps/dashboard/home/ClassStructure";

// MODAL
import WelcomeDialogue from "@/components/schoolComps/welcome/WelcomeDialog";

export default {
  name: "Home",

  components: {
    SchoolBanner,
    DefaultInfo,
    ContentInfo,
    ClassStructure,
    WelcomeDialogue,
    PhoneCall: () =>
      import(/* webpackChunkName: "phonecall" */ "@/components/schoolComps/dashboard/home/PhoneCall"),
    AddTeacherModal: () =>
      import(/* webpackChunkName: "addteachermodal" */ "@/components/schoolComps/modals/AddTeacherModal"),
    AddBranchModal: () =>
      import(/* webpackChunkName: "addbranchmodal" */ "@/components/schoolComps/modals/AddBranchModal"),
    ClassDetailsModal: () =>
      import(/* webpackChunkName: "classdetailsmodal" */ "@/components/schoolComps/modals/ClassDetailsModal")
  },

  data() {
    return {
      view: ContentInfo,
      in_view: false,
      default_value: true,
      welcome_dialogue: true,
      toggle_teacher_modal: false,
      toggle_branch_modal: false,
      toggle_class_modal: false,
      class_structures: [
        { class_year: "Year 7", arms: 1, active: true },
        { class_year: "Year 8", arms: 2, active: false },
        { class_year: "Year 9", arms: 2, active: false }
      ]
    };
  },

  watch: {
    view: "updateBanner"
  },

  mounted() {
    this.updateBanner();
  },

  methods: {
    updateBanner() {
      this.default_value = false;
      this.view === "DefaultInfo" ? (this.default_value = true) : "";
    },

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
      this.in_view === false
        ? (this.view = "ContentInfo")
        : (this.view = "DefaultInfo");
    }
  }
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}
</style>
