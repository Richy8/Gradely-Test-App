<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">Invite School</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <div
          class="info-text color_text"
        >Invite your school to access to your school classes. You will be assigned to a class as soon as your school joins.</div>

        <form action @submit.prevent>
          <!-- SCHOOL NAME -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label
                for="schoolName"
                class="control-label text-uppercase color_grey_dark"
              >School Name</label>
              <input
                type="text"
                v-model="form.school_name"
                class="form-control"
                id="schoolName"
                placeholder="Enter the name of your school"
              >
            </div>
          </div>

          <!-- CONTACT EMAIL ADDRESS -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label
                for="contactEmail"
                class="control-label text-uppercase color_grey_dark"
              >Contact Email Address</label>
              <input
                type="email"
                v-model="form.contact_email"
                class="form-control"
                id="contactEmail"
                placeholder="Enter the name of your school"
              >
            </div>
          </div>

          <!-- CONTACT PHONE NUMBER -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label
                for="contactPhone"
                class="control-label text-uppercase color_grey_dark"
              >Contact Phone Number</label>
              <input
                type="number"
                v-model="form.contact_phone"
                class="form-control"
                id="contactPhone"
                placeholder="Enter the phone number of your school"
              >
            </div>
          </div>

          <!-- SEND INVITATION-->
          <div
            class="modal-body-row row d-flex justify-content-center align-items-center nowrap mb-2"
          >
            <button @click="dropModal" class="btn btn-md black-ic z-depth-0 mr-5">Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-5">Invite School</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "InviteSchoolModal",
  components: { Modal },
  data() {
    return {
      form: {
        school_name: "",
        contact_email: "",
        contact_phone: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.info-text {
  font-size: 14.5px;
  line-height: 165%;
  margin-bottom: 30px;
}
</style>
