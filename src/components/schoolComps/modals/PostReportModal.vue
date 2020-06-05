<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">REPORT POST</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div class="container px-1 report-post-modal">
            <!-- RADIO BUTTONS -->
            <div class="form_group">
              <div class="item">
                <label for="none" class="radio">
                  <input type="radio" id="none" value="None" v-model="report_type.selected">
                  <span class="label_title">None</span>
                </label>
              </div>

              <div class="item">
                <label for="spam" class="radio">
                  <input type="radio" id="spam" value="Spam" v-model="report_type.selected">
                  <span class="label_title">Spam Post</span>
                </label>
              </div>

              <div class="item">
                <label for="fraud" class="radio">
                  <input type="radio" id="fraud" value="Fraudulent" v-model="report_type.selected">
                  <span class="label_title">Fraudulent</span>
                </label>
              </div>

              <div class="item">
                <label for="others" class="radio">
                  <input type="radio" id="others" value="Others" v-model="report_type.selected">
                  <span class="label_title">Others (Please Specify)</span>
                </label>
              </div>
            </div>
          </div>

          <!-- ADDITIONAL COMMENT FORM -->
          <div class="form-group">
            <label
              for="comment"
              class="font-weight-bold color_grey_dark font-13 mt-3"
            >ADDITIONAL COMMENTS</label>
            <textarea
              v-model="report_type.comment"
              id="comment"
              rows="6"
              class="form-control"
              placeholder="Add more things you’d like us to know."
            ></textarea>
          </div>
          <!-- ADDITIONAL COMMENT FORM -->

          <!-- CANCEL OR SUBMIT FORM -->
          <div
            class="modal-body-row row d-flex justify-content-center align-items-center nowrap mb-2"
          >
            <button
              @click="$emit('closeTriggered')"
              class="btn btn-md black-ic z-depth-0 mr-5"
            >Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-5">Submit</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "PostReportModal",
  components: { Modal },
  data() {
    return {
      report_type: {
        selected: "Others",
        comment: ""
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.report-post-modal {
  .item {
    margin-bottom: 3px;
    span {
      font-size: 14px;
      margin-left: 5px;
    }
  }
}
</style>
