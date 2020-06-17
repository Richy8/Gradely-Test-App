<template>
  <div>
    <vue-headful title="Teacher Onboarding   | Gradelyng" description="Description goes here"/>
    <div class="onboarding-section">
      <b-container fluid>
        <b-row class="position-relative w-100 border">
          <b-col class="setup-container">
            <!-- SETUP BOX -->
            <div class="setup-box w-100 white rounded-20">
              <!-- SETUP TOP -->
              <div class="setup-top w-100 h-auto">
                <!-- TITLE -->
                <div class="teacher-setup-title font-weight-bold brand_primary">Join a Class</div>
                <!-- INFO TEXT -->
                <div
                  class="teacher-info-text color_grey_dark"
                >Join a class using the class code collected from your school admin. You can add more classes after you complete your onboarding.</div>

                <!-- SETUP FORM COMPONENT -->
                <SetupForm @toggleInviteForm="toggleInvitation" @findClass="toggleFindClassModal"/>
                <!-- SETUP FORM COMPONENT -->
              </div>
              <!-- SETUP BOTTOM -->
              <div class="setup-bottom w-100 justify-content-end rounded-bottom-20">
                <button class="btn transparent_bg z-depth-0 brand_navy font-13">Skip</button>
                <button class="btn btn-secondary">Continue</button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <!-- MODAL -->
    <InviteSchoolModal v-if="invite_school_modal" @closeTriggered="toggleInvitation"></InviteSchoolModal>
    <FindClassModal v-if="find_class" @closeTriggered="toggleFindClassModal"></FindClassModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import SetupForm from "@/components/teachersComps/onboarding/SetupForm.vue";

export default {
  name: "Onboarding",
  components: {
    SetupForm,
    InviteSchoolModal: () =>
      import(/* webpackChunkName: "inviteschoolmodal" */ "@/components/modalComps/teacherModals/InviteSchoolModal"),
    FindClassModal: () =>
      import(/* webpackChunkName: "FindClassmodal" */ "@/components/modalComps/teacherModals/FindClassModal")
  },

  data() {
    return {
      invite_school_modal: false,
      find_class: false
    };
  },

  methods: {
    toggleInvitation() {
      this.invite_school_modal = !this.invite_school_modal;
    },

    toggleFindClassModal() {
      this.find_class = !this.find_class;
    }
  }
};
</script>

<style lang="scss">
.teacher-setup-title {
  font-size: 28px;
  line-height: 44px;
  margin-bottom: 20px;

  @include breakpoint_max(sm) {
    font-size: 24px;
  }
}

.teacher-info-text {
  font-size: 14.5px;
  line-height: 165%;
  margin-bottom: 40px;

  @include breakpoint_max(sm) {
    font-size: 13.5px;
  }
}
</style>
