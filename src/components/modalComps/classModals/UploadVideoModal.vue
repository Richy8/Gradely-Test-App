<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">Upload Video</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <!-- VIDEO TITLE -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for="videoTitle" class="control-label">Video Title</label>
              <input
                type="text"
                v-model="form.video_title"
                class="form-control"
                id="videoTitle"
                placeholder="E.g. Class note 1"
              >
            </div>
          </div>

          <!-- VIDEO TAG -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label for="tagAs" class="control-label">Tag As</label>
              <select class="form-control" v-model="form.video_tag">
                <option value disabled selected>Select a tag for this video</option>
                <option value="Lesson">Lesson</option>
                <option value="Exam">Exam</option>
                <option value="Homework">Homework</option>
              </select>
            </div>
          </div>

          <!-- VIDEO FILE -->
          <div class="modal-body-row row">
            <div class="col-12">
              <label class="control-label">Attach File</label>
              <!-- ATTACH BOX -->
              <div
                class="attach-box brand_accent_light_bg d-flex justify-content-center align-items-center nowrap brand_navy rounded-5 pointer"
              >Click here to upload File</div>

              <div class="attach-meta color_grey_dark">We accept PDF, JPG, and PNG files.</div>
            </div>
          </div>

          <!-- SEND INVITATION-->
          <div class="modal-body-row row mb-1">
            <div class="col-12 d-flex justify-content-center align-items-center">
              <button class="btn btn-md z-depth-0 transparent_bg brand_navy mr-3">Cancel</button>
              <button type="submit" class="btn btn-md btn-accent ml-3">Share</button>
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
  name: "UploadVideoModal",
  components: { Modal },
  data() {
    return {
      form: {
        video_title: "",
        video_tag: ""
      }
    };
  }
};
</script>

<style lang="scss">
.modal-body {
  .attach-box {
    padding: 13px;
    font-size: 14px;
    line-height: 19px;
    border: 1px solid $brand_accent;
    margin-bottom: 6px;
  }

  .attach-meta {
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
