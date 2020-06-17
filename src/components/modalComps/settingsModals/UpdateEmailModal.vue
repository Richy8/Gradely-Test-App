<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">UPDATE EMAIL</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div
            class="font-13-5 color_grey_dark mb-4"
          >Please verify that your email address is correct.</div>

          <div class="container">
            <!-- EMAIL -->
            <div class="modal-body-row row">
              <label for class="text-uppercase control-label color_grey_dark">New Email Address</label>
              <input
                type="email"
                v-model="form.email"
                class="form-control"
                placeholder="Enter email sddress"
              >
            </div>

            <!-- PASSWORD -->
            <div class="modal-body-row row">
              <label for class="text-uppercase control-label color_grey_dark">Password</label>
              <input
                type="password"
                v-model="form.password"
                class="form-control"
                placeholder="For security, Please confirm your password"
              >
            </div>
          </div>

          <!-- CANCEL OR SUBMIT FORM -->
          <div
            class="modal-body-row row d-flex justify-content-center align-items-center nowrap mb-2"
          >
            <button @click="dropModal" class="btn btn-md black-ic z-depth-0 mr-4">Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-4">Update</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "UpdateEmailModal",
  components: { Modal },
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    dropModal() {
      this.$emit("closeTriggered");
    }
  }
};
</script>

<style>
</style>
