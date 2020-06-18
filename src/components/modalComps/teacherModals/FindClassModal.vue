<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">Find Class</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <div
          class="info-text color_text"
        >We are sorry for the mixup. Use the form below to find your school and class.</div>

        <!-- ERROR ALERT -->
        <AuthAlertCard
          v-if="show_alert"
          :alert_type="alert_type"
          :alert_icon="alert_icon"
          :alert_msg="alert_msg"
        ></AuthAlertCard>

        <form action @submit.prevent class="mt-4">
          <!-- SCHOOL NAME -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label
                for="schoolName"
                class="control-label text-uppercase color_grey_dark"
              >Find your School</label>
              <input
                type="text"
                v-model="form.school_name"
                class="form-control"
                id="schoolName"
                placeholder="Enter the name of your school"
              >
            </div>
          </div>

          <!-- TEACHER EMAIL ADDRESS -->

          <div class="modal-body-row row">
            <div class="col-12">
              <label
                for="selectClass"
                class="control-label text-uppercase color_grey_dark"
              >Select Class</label>
              <select id="selectClass" v-model="form.class_name" class="form-control">
                <option value="Jss1 - Gold">JSS1 - Gold</option>
                <option value="Jss2 - Silver">JSS2 - Silver</option>
                <option value="Jss3 - Gold">JSS3 - Gold</option>
              </select>
            </div>
          </div>

          <!-- SEND INVITATION-->
          <div
            class="modal-body-row row d-flex justify-content-center align-items-center nowrap mb-2"
          >
            <button class="btn btn-md black-ic z-depth-0 mr-3">Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-3">Join Class</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "FindClassModal",

  components: {
    Modal,
    AuthAlertCard: () =>
      import(/* webpackChunkName: "AuthAlertCard" */ "@/components/globalComps/AuthComps/AuthAlertCard")
  },

  data() {
    return {
      form: {
        school_name: "",
        class_name: "Jss1 - Gold"
      },

      show_alert: true,
      alert_type: "error",
      alert_icon: "school-icon.svg",
      alert_msg: "School not found"
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
