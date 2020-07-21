<template>
  <div>
    <vue-headful title="School Dashboard | Home" description="Description goes here"/>
    <div class="school-home-section position-relative">
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
            <div
              class="title-row d-flex justify-content-between align-items-center flex-wrap h-auto"
            >
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
import { mapGetters, mapActions } from "vuex";
import SchoolBanner from "@/components/schoolComps/dashboard/home/SchoolBanner";
import DefaultInfo from "@/components/schoolComps/dashboard/home/DefaultInfo";
import ContentInfo from "@/components/schoolComps/dashboard/home/ContentInfo";
import ClassStructure from "@/components/schoolComps/dashboard/home/ClassStructure";

export default {
  name: "Home",

  components: {
    SchoolBanner,
    DefaultInfo,
    ContentInfo,
    ClassStructure,
    WelcomeDialogue: () =>
      import(/* webpackChunkName: "phonecall" */ "@/components/schoolComps/welcome/WelcomeDialog"),
    PhoneCall: () =>
      import(/* webpackChunkName: "phonecall" */ "@/components/schoolComps/dashboard/home/PhoneCall"),
    AddTeacherModal: () =>
      import(/* webpackChunkName: "teachermodal" */ "@/components/modalComps/schoolModals/AddTeacherModal"),
    AddBranchModal: () =>
      import(/* webpackChunkName: "addbranchmodal" */ "@/components/modalComps/schoolModals/AddBranchModal"),
    ClassDetailsModal: () =>
      import(/* webpackChunkName: "classdetailsmodal" */ "@/components/modalComps/schoolModals/ClassDetailsModal")
  },

  computed: {
    ...mapGetters(["getAuthUser", "classList"])
  },

  data() {
    return {
      view: ContentInfo,
      in_view: false,
      default_value: true,
      welcome_dialogue: null,
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

  created() {
    this.getClasses()
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  },

  mounted() {
    if (this.getAuthUser.is_boarded) {
      this.welcome_dialogue = false;
    } else {
      this.welcome_dialogue = true;
    }
  },

  methods: {
    ...mapActions(["updateBoardingStatus", "getClasses"]),

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
      this.welcome_dialogue = false;
      // this.updateBoardingStatus()
      //   .then(response => {
      //     if (response.code === 200) {
      //       this.welcome_dialogue = false;
      //     }
      //   })
      //   .catch(err => console.log(err));
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
.school-home-section {
  top: 60px;

  // SCHOOL HOME LEFT CONTENT
  .left-content {
    @include custom_min_edge(370, 630);

    @include breakpoint_max(xl) {
      @include custom_min_edge(316, 630);
    }

    @include breakpoint_max(lg) {
      @include custom_min_edge(280, 630);
    }

    @include breakpoint_max(md) {
      min-width: 95%;
      min-height: auto;
      width: 95%;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 30px;
      margin-bottom: 35px;
    }

    @include breakpoint_max(sm) {
      min-width: 95%;
      width: 88%;
    }
  }

  // SCHOOL HOME RIGHT CONTENT
  .right-content {
    width: 770px;
    padding-left: 25px;
    margin-bottom: 60px;

    @include breakpoint_max(xl) {
      width: 643.2px;
    }

    @include breakpoint_max(lg) {
      width: 440px;
    }

    @include breakpoint_max(md) {
      width: 100%;
      padding-left: 0;
    }

    @include breakpoint_max(md) {
      width: 95%;
      margin-left: auto;
      margin-right: auto;
    }

    .title-row {
      margin: auto 0;
      margin-bottom: 20px;

      @include breakpoint_max(xs) {
        flex-flow: column wrap;
        justify-content: start;
        align-items: flex-start !important;
      }

      .header-title {
        font-size: 21px;
        line-height: 165%;
        width: 40%;

        @include breakpoint_max(lg) {
          font-size: 18px;
        }

        @include breakpoint_max(sm) {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
