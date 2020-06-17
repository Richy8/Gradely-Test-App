<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">Class Details</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <!-- CLASS LEVEL -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for="classLevel" class="control-label label-compact">Class Level</label>
              <select class="form-control" v-model="form.class_level">
                <option value="Jss 1" selected>Junior Secondary School 1</option>
                <option value="Jss 2" selected>Junior Secondary School 2</option>
                <option value="Jss 3" selected>Junior Secondary School 3</option>
              </select>
            </div>
          </div>

          <!-- BRANCH NAME -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for="branchName" class="control-label label-compact">Branch Name</label>
              <input
                type="text"
                v-model="form.branch_name"
                class="form-control"
                id="branchName"
                placeholder="Give the class a name"
              >
            </div>
          </div>

          <!-- SAVE CLASS -->
          <div class="modal-body-row row mb-0">
            <div class="col-12 d-flex flex-center">
              <button type="submit" class="btn btn-md btn-accent">Save Class</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "ClassDetailsModal",
  components: { Modal },
  data() {
    return {
      form: {
        class_level: "Jss 1",
        branch_name: ""
      }
    };
  }
};
</script>

<style>
</style>
