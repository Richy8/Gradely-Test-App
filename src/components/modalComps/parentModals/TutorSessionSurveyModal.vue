<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-800">Session Completed</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <!-- WHAT WAS TAUGHT TODAY -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for="topic" class="control-label">What did you Teach today?</label>
              <select class="form-control" v-model="form.topic_taught" id="topic">
                <option value disabled selected>Select Topic</option>
              </select>
            </div>
          </div>

          <!--LESSON TO PRACTICE -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label
                for="practiceTopic"
                class="control-label"
              >What topic do you think the child should practice?</label>
              <select class="form-control" v-model="form.topic_suggestion" id="practiceTopic">
                <option value disabled selected>Select Topic</option>
              </select>
            </div>
          </div>

          <!-- STUDENT RATING -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for class="control-label mb-2">How will you rate this student?</label>
              <div class="d-flex justify-content-between align-items-center nowrap">
                <div class="option">
                  <label
                    for="poor"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input type="radio" v-model="form.student_rating" id="poor" value="poor">
                    <div class="label_title color_text font-13-5 mt-2 text-center">Poor Student</div>
                  </label>
                </div>

                <div class="option">
                  <label
                    for="average"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input type="radio" v-model="form.student_rating" id="average" value="average">
                    <div class="label_title color_text font-13-5 mt-2 text-center">Average Student</div>
                  </label>
                </div>

                <div class="option">
                  <label
                    for="top"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input type="radio" v-model="form.student_rating" id="top" value="top">
                    <div class="label_title color_text font-13-5 mt-2 text-center">Top Student</div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- ADDITIONAL COMMENTS -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for="additionalComment" class="control-label">Additional comments</label>
              <textarea
                v-model="form.comment"
                id="additionalComment"
                rows="8"
                class="form-control"
                placeholder="Tell us any other thing that happened in today’s session."
              ></textarea>
            </div>
          </div>

          <!-- BUTTONS-->
          <div class="modal-body-row row mb-1">
            <div class="col-12 d-flex justify-content-between align-items-center nowrap">
              <button
                class="btn btn-md transparent_bg z-depth-0 brand_navy"
                @click="$emit('closeTriggered')"
              >Cancel</button>
              <button type="submit" class="btn btn-md btn-accent brand_navy">Submit</button>
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
  name: "TutorSessionSurveyModal",
  components: { Modal },
  data() {
    return {
      form: {
        topic_taught: "",
        topic_suggestion: "",
        student_rating: "top",
        comment: ""
      }
    };
  }
};
</script>

<style>
</style>
