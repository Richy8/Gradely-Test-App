<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">CURRICULUM REQUEST</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div
            class="font-14 color_grey_dark mb-4"
          >Please provide some information about the curriculum.</div>

          <div class="container">
            <!-- CURRICULUM NAME -->
            <div class="modal-body-row row">
              <label
                for="curriculumName"
                class="text-uppercase control-label font-14 color_grey_dark"
              >NAME OF CURRICULUM</label>
              <input
                type="text"
                id="curriculumName"
                v-model="form.curriculum_name"
                class="form-control"
                placeholder="E.g. SAT"
              >
            </div>

            <!-- COUNTRY-->
            <div class="modal-body-row row">
              <label
                for="curriculumCountry"
                class="text-uppercase control-label font-14 color_grey_dark"
              >COUNTRY</label>
              <select id="curriculumCountry" class="form-control" v-model="form.curriculum_country">
                <option value selected disabled>Select the curriculum’s country of origin</option>
                <option value="Nigeria">Nigeria</option>
                <option value="England">England</option>
                <option value="USA">United State of America</option>
              </select>
            </div>

            <!-- COMMENT -->
            <div class="modal-body-row row ">
              <label
                for="curriculumComment"
                class="text-uppercase control-label font-14 color_grey_dark"
              >COMMENT</label>
              <textarea
                id="curriculumComment"
                cols="5"
                rows="5"
                v-model="form.curriculum_comment"
                class="form-control"
                placeholder="Any other information about the curriculum. E.g. Name of accrediting body, website URL, or pointer to resources on the curriculum"
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
              curriculum_name: "",
              curriculum_country: "",
              curriculum_comment: "",
          }
      }
  }
};
</script>

<style>
</style>
