<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">ADD SCHOOL USER</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div class="container">
            <!-- NAME -->
            <div class="modal-body-row row">
              <label
                for="fullName"
                class="text-uppercase control-label font-14 color_grey_dark"
              >NAME</label>
              <input
                type="text"
                id="fullName"
                v-model="form.fullname"
                class="form-control"
                placeholder="John Doe"
              >
            </div>

            <!-- EMAIL ADDRESS -->
            <div class="modal-body-row row">
              <label
                for="email"
                class="text-uppercase control-label font-14 color_grey_dark"
              >EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-control"
                placeholder="johndoe@gmail.com"
              >
            </div>

            <!-- PHONE -->
            <div class="modal-body-row row">
              <label
                for="email"
                class="text-uppercase control-label font-14 color_grey_dark w-100"
              >PHONE NUMBER</label>

              <div class="inputaffixed inputPrefixed">
                <div class="inputfixture">
                  <span class="font-14 color_text">+234</span>
                </div>
                <input
                  type="number"
                  v-model.number="form.phone"
                  class="form-control inputControl"
                  placeholder="Enter phone number"
                >
              </div>
            </div>

            <!-- ROLE IN SCHOOL -->
            <div class="modal-body-row row">
              <label
                for="schoolrole"
                class="text-uppercase control-label font-14 color_grey_dark"
              >ROLE IN SCHOOL</label>
              <select name id="schoolrole" class="form-control">
                <option value="Owner">School Owner</option>
                <option value="Principal">Principal</option>
                <option value="IT Director">IT Director</option>
              </select>
            </div>
          </div>

          <!-- CANCEL OR SUBMIT FORM -->
          <div class="row d-flex justify-content-center align-items-center nowrap">
            <button
              @click="$emit('closeTriggered')"
              class="btn btn-md black-ic z-depth-0 mr-5"
            >Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-5">Add User</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "AddUserModal",

  components: {
    Modal
  },

  data() {
    return {
      form: {
        fullname: "",
        email: "",
        phone: "",
        role: "Owner"
      }
    };
  },

  methods: {}
};
</script>

<style lang="scss">
</style>
