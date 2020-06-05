<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">SHARE POST</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div class="container px-1 share-post-modal">
            <div class="form-group">
              <label
                for="comment"
                class="font-weight-bold color_grey_dark font-14 mt-3"
              >Copy the URL below to share this post</label>
              <div
                class="link-container white rounded-5 color_text"
              >https://app.grdly.com/AlexRidder</div>
            </div>
          </div>

          <!-- CANCEL OR SUBMIT FORM -->
          <div class="modal-body-row row mb-2 d-flex flex-center">
            <button type="submit" class="btn btn-md btn-default-outline">Copy Link</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "SharePostModal",
  components: { Modal },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.share-post-modal {
  margin-top: -20px;
  .link-container {
    margin-top: 8px;
    padding: 13px 15px;
    border: 1px solid $border_grey_dark;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 19px;
  }
}
</style>
