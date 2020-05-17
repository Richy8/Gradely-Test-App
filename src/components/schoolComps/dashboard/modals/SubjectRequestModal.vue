<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">SUBJECT REQUEST</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div
            class="font-14 color_grey_dark mb-4"
          >Please provide some information about the subject.</div>

          <div class="container">
            <!-- CURRICULUM NAME -->
            <div class="modal-body-row row">
              <label
                for="subjectName"
                class="text-uppercase control-label font-14 color_grey_dark"
              >NAME OF Subject</label>
              <input
                type="text"
                id="subjectName"
                v-model="form.subject_name"
                class="form-control"
                placeholder="E.g. Basic Science"
              >
            </div>

            <!-- COMMENT -->
            <div class="modal-body-row row ">
              <label
                for="subjectComment"
                class="text-uppercase control-label font-14 color_grey_dark"
              >COMMENT</label>
              <textarea
                id="subjectComment"
                cols="5"
                rows="5"
                v-model="form.subject_comment"
                class="form-control"
                placeholder="Any other information about the subject"
              ></textarea>
            </div>
          </div>

          <!-- CANCEL OR SUBMIT FORM -->
          <div
            class="row d-flex justify-content-center align-items-center nowrap"
          >
            <button @click="$emit('closeTriggered')" class="btn btn-md black-ic z-depth-0 mr-5">Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-5">Submit</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/basicComps/Modal";

export default {
  name: "CurriculumRequestModal",

  components: { Modal },

  data(){
      return{
          form: {
              subject_name: "",
              subject_comment: "",
          }
      }
  }
};
</script>

<style>
</style>
