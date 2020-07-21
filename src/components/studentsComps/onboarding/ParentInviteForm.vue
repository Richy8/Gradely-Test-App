<template>
  <div class="parent-invitation-section">
    <!-- AVATAR -->
    <div class="w-100 d-flex justify-content-center">
      <ParentIcon></ParentIcon>
    </div>
    <!-- AVATAR -->

    <!-- ONBOARDING TITLE -->
    <div class="onboarding-title font-weight-bold brand_navy text-center">Invite Parent</div>

    <!-- FORM AREA -->
    <form action @submit.prevent>
      <!-- PARENT NAME -->
      <div class="form-group">
        <label for="parentName" class="control-label color_grey_dark">Parent's Name</label>
        <input
          type="text"
          v-model="form.parent_name"
          class="form-control"
          id="parentName"
          placeholder="The name of your parent"
        >
      </div>

      <!-- RELATIONSHIP -->
      <div class="form-group">
        <label for="relationship" class="control-label color_grey_dark">Relationship</label>
        <select class="form-control" id="relationship" v-model="form.relationship">
          <option value selected disabled>- How are you related to the child? -</option>
        </select>
      </div>

      <!-- PARENT EMAIL -->
      <div class="form-group">
        <label for="parentEmail" class="control-label color_grey_dark">Parent's Email</label>
        <input
          type="email"
          v-model="form.parent_email"
          class="form-control"
          id="parentEmail"
          placeholder="Enter your parent’s email address"
        >
      </div>

      <!-- PARENT NUMBER -->
      <div class="form-group">
        <label for="parentNumber" class="control-label color_grey_dark">Parent’s phone number</label>
        <input
          type="number"
          v-model="form.parent_number"
          class="form-control"
          id="parentNumber"
          placeholder="Enter phone"
        >
      </div>

      <!-- SUBMIT BUTTON -->
      <div class="w-100 d-flex justify-content-center align-items-center my-5">
        <button
          type="submit"
          class="btn btn-accent font-weight-bold"
          @click="toggleInvitationModal"
        >Send Invitation</button>
      </div>
    </form>

    <!-- MODALS -->
    <InvitationSuccessModal v-if="invitation_modal" @closeTriggered="toggleInvitationModal"></InvitationSuccessModal>
    <!-- MODALS -->
  </div>
</template>

<script>
import ParentIcon from "@/components/coloredIconPack/ParentIcon";

export default {
  name: "ParentInviteForm",

  components: {
    ParentIcon,
    InvitationSuccessModal: () =>
      import("@/components/modalComps/studentModals/InvitationSuccessModal")
  },

  data() {
    return {
      invitation_modal: false,
      form: {
        parent_name: "",
        relationship: "",
        parent_email: "",
        parent_number: ""
      }
    };
  },

  methods: {
    toggleInvitationModal() {
      this.invitation_modal = !this.invitation_modal;
    }
  }
};
</script>

<style lang="scss">
</style>
