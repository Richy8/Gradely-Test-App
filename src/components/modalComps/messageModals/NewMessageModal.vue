<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">New Message</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body" class="font-14">
        <div class="modal-body-top">
          <!-- MESSAGE TOP -->
          <div class="message-top d-flex justify-content-between align-items-start">
            <!-- LEFT COLUMN -->
            <div class="left-column d-flex justify-content-start align-items-center flex-wrap">
              <div class="font-14 color_grey_dark mr-3">To:</div>
              <!-- USERS -->
              <div class="user-message-name d-flex justify-content-between align-items-center">
                <div class="name color_text">Boye Oshinage</div>
                <div class="avatar avatar_xs white">
                  <span class="position-relative pointer">
                    <span class="flex-center icon-minus brand_tonic font-16"></span>
                  </span>
                </div>
              </div>

              <div class="user-message-name d-flex justify-content-between align-items-center">
                <div class="name color_text">Adekiitan Adeyinka</div>
                <div class="avatar avatar_xs white">
                  <span class="position-relative pointer">
                    <span class="icon-minus brand_tonic font-16 flex-center"></span>
                  </span>
                </div>
              </div>
              <!-- USERS -->
            </div>

            <!-- RIGHT COLUMN -->
            <div class="right-column">
              <div
                class="avatar avatar_32 border_grey_bg add-recipient pointer"
                @click="toggleRecipient"
              >
                <span class="flex-center icon-plus border_grey_dark font-19"></span>
              </div>
            </div>
          </div>

          <!-- MESSAGE DISPLAY BLOCK -->
          <div class="message-display-block h-auto"></div>

          <!-- MESSAGE INPUT FORM -->
          <div class="message-input-block">
            <!-- MESSAGE INPUT COMPONENT -->
            <MessageInput></MessageInput>
            <!-- MESSAGE INPUT COMPONENT -->
          </div>
        </div>
      </div>
    </Modal>

    <!-- ADD RECIPIENT MODAL -->
    <AddRecipientModal
      v-if="toggle_recipient"
      @closeTriggered="toggleRecipient"
      @selctionCompleted="toggleRecipient"
    ></AddRecipientModal>
    <!-- ADD RECIPIENT MODAL -->
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import MessageInput from "@/components/globalComps/MessageComps/MessageInput";

export default {
  name: "NewMessageModal",

  components: {
    Modal,
    MessageInput,
    AddRecipientModal: () =>
      import(/* webpackChunkName: "addrecipientname" */ "@/components/modalComps/messageModals/AddRecipientModal")
  },

  data() {
    return {
      toggle_recipient: false
    };
  },

  methods: {
    toggleRecipient() {
      this.toggle_recipient = !this.toggle_recipient;
    }
  }
};
</script>

<style lang="scss" scoped>
.add-recipient {
  transition: all 0.3s ease-in-out;
  span {
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background: rgba(15, 216, 238, 0.25) !important;
    span {
      color: #353535 !important;
    }
  }
}

.message-top {
  padding-bottom: 4px;
  border-bottom: 1px solid #d5d5d5;
}

.user-message-name {
  padding: 6px 13.5px;
  background: #e5e5e5;
  border-radius: 40px;
  margin-right: 10px;
  margin-bottom: 5px;

  .name {
    font-size: 12px;
    margin-right: 15px;
  }
}

.message-display-block {
  margin-top: 30px;
  min-height: 100px;
}

.message-input-block {
  margin-top: 60px;
}
</style>
