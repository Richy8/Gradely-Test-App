<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">ADD SUBJECT</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div class="container">
            <!-- SUBJECT NAME -->
            <div class="modal-body-row row">
              <label for="subjectName" class="text-uppercase control-label color_grey_dark">NAME</label>
              <input
                type="text"
                id="subjectName"
                v-model="form.subject_name"
                class="form-control"
                placeholder="E.g. Introductory Technology"
              >
            </div>

            <!-- DESCRIPTION -->
            <div class="modal-body-row row">
              <label
                for="subjectDescription"
                class="text-uppercase control-label color_grey_dark"
              >DESCRIPTION</label>
              <textarea
                id="subjectDescription"
                cols="5"
                rows="5"
                v-model="form.subject_description"
                class="form-control"
                placeholder="A short description of the subject"
              ></textarea>
            </div>

            <!-- ASSIGN TO CLASS -->
            <div class="modal-body-row row">
              <label
                for="subjectDescription"
                class="text-uppercase control-label color_grey_dark"
              >ASSIGN TO CLASS</label>
              <!-- CLASS CONTAINER -->
              <div class="class-container rounded-5 w-100 h-auto">
                <ClassHolder
                  :class_year="item.year"
                  :class_branch="item.branch"
                  @remove="removeClass(index)"
                  v-for="(item, index) in classes"
                  :key="index"
                ></ClassHolder>
              </div>
            </div>
          </div>

          <!-- CANCEL OR SUBMIT FORM -->
          <div class="row d-flex justify-content-center align-items-center nowrap">
            <button
              @click="$emit('closeTriggered')"
              class="btn btn-md black-ic z-depth-0 mr-4"
            >Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-4">Add Subject</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import ClassHolder from "@/components/globalComps/SettingsComps/PreferenceComps/ClassHolder";

export default {
  name: "AddSubjectModal",

  components: {
    Modal,
    ClassHolder
  },

  data() {
    return {
      form: {
        subject_name: "",
        subject_description: ""
      },

      classes: [
        { year: "year 7", branch: "Gold" },
        { year: "year 7", branch: "Silver" },
        { year: "year 8", branch: "Gold" },
        { year: "year 8", branch: "Silver" },
        { year: "year 9", branch: "Gold" },
        { year: "year 9", branch: "Silver" }
      ]
    };
  },

  methods: {
    removeClass(index) {
      this.classes = this.classes.filter((val, i) => {
        return i !== index;
      });
    }
  }
};
</script>

<style lang="scss">
.class-container {
  border: 1px solid $border_grey;
  box-sizing: border-box;
  padding: 8px 10px 20px;
  @include flex_row_start_wrap;
  align-items: flex-start;
}
</style>
