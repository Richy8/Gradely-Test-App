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
          <!-- WHAT WAS LEARNT TODAY -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for="topic" class="control-label">What did you learn today?</label>
              <select class="form-control" v-model="form.topic_learnt" id="topic">
                <option value disabled selected>Select Topic</option>
              </select>
            </div>
          </div>

          <!-- UNDERSTAND TOPIC -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for class="control-label mb-2">How well do you understand the topic?</label>
              <div class="d-flex justify-content-between align-items-center nowrap">
                <div class="option">
                  <label
                    for="notAtAll"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input
                      type="radio"
                      v-model="form.topic_understanding"
                      id="notAtAll"
                      value="not at all"
                    >
                    <div class="label_title color_text font-13-5 mt-2 text-center">Not at all</div>
                  </label>
                </div>

                <div class="option">
                  <label
                    for="confused"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input
                      type="radio"
                      v-model="form.topic_understanding"
                      id="confused"
                      value="still confused"
                    >
                    <div class="label_title color_text font-13-5 mt-2 text-center">Still Confused</div>
                  </label>
                </div>

                <div class="option">
                  <label
                    for="nowUnderstand"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input
                      type="radio"
                      v-model="form.topic_understanding"
                      id="nowUnderstand"
                      value="understand"
                    >
                    <div class="label_title color_text font-13-5 mt-2 text-center">I now understand</div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- LIKE TUTOR -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for class="control-label mb-2">How well do you like this tutor?</label>
              <div class="d-flex justify-content-between align-items-center nowrap">
                <div class="option">
                  <label
                    for="dontLike"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input type="radio" v-model="form.tutor_like" id="dontLike" value="dislike">
                    <div
                      class="label_title color_text font-13-5 mt-2 text-center"
                    >I don’t like the tutor</div>
                  </label>
                </div>

                <div class="option">
                  <label
                    for="okay"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input type="radio" v-model="form.tutor_like" id="okay" value="okay">
                    <div class="label_title color_text font-13-5 mt-2 text-center">He's Okay</div>
                  </label>
                </div>

                <div class="option">
                  <label
                    for="satisfied"
                    class="radio d-flex flex-column justify-content-center align-items-center"
                  >
                    <input type="radio" v-model="form.tutor_like" id="satisfied" value="satisfied">
                    <div
                      class="label_title color_text font-13-5 mt-2 text-center"
                    >I am satisfied with the tutor</div>
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
  name: "StudentSessionSurveyModal",
  components: { Modal },
  data() {
    return {
      form: {
        topic_learnt: "",
        topic_understanding: "understand",
        tutor_like: "satisfied",
        comment: ""
      }
    };
  }
};
</script>

<style>
</style>
