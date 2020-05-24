<template>
  <div>
    <!-- NEW MESSAGE SECTION -->
    <div class="new-message-section">
      <div class="container px-1">
        <div class="row">
          <div class="col-12">
            <!-- GO BACK TO MESAGE LIST -->
            <router-link
              to
              class="color_text font-weight-bold d-flex justify-content-start align-items-center font-15" @click.native="$emit('switchMessageList', 'MessageData')"
            >
              <div class="avatar">
                <span class="flex-center">
                  <i class="fas fa-chevron-left mr-2 font-17"></i>
                </span>
              </div>
              <div class="name">Back to Messages</div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- MESSAGE BLOCK -->
      <div class="container px-1">
        <div class="row">
          <div class="col-12">
            <div class="new-message-display-block white rounded-10">
              <!-- MESSAGE TOP -->
              <div class="message-top w-100 h-auto">
                <!-- RECIPIENT LEFT -->
                <div class="left d-flex justify-content-start align-items-center flex-wrap">
                  <div class="font-14 color_grey_dark mr-3 pb-1 flex-center">To:</div>
                  <!-- USERS -->
                  <div
                    class="user-message-name d-flex justify-content-between align-items-center rounded-40"
                  >
                    <div class="name color_text">Boye Oshinage</div>
                    <div class="avatar avatar_xs white">
                      <span class="flex-center pointer">
                        <i class="fas fa-minus brand_tonic font-9"></i>
                      </span>
                    </div>
                  </div>

                  <div
                    class="user-message-name d-flex justify-content-between align-items-center rounded-40"
                  >
                    <div class="name color_text">Adekiitan Adeyinka</div>
                    <div class="avatar avatar_xs white">
                      <span class="flex-center pointer">
                        <i class="fas fa-minus brand_tonic font-9"></i>
                      </span>
                    </div>
                  </div>
                  <!-- USERS -->
                </div>

                <!-- ADD RECIPIENT RIGHT -->
                <div class="right">
                  <div class="avatar avatar_32 border_grey_bg add-recipient pointer" @click="toggleRecipient">
                    <span class="flex-center icon-plus border_grey_dark font-19"></span>
                  </div>
                </div>
              </div>

              <!-- CONVERSATION AREA -->
              <div class="message-conversation-area h-auto">
                <!-- CONVERSATION CHAT -->
                <ConversationChat
                  message="is dummy text used in laying out print, graphic or web designs. The passage is attributed to"
                  :host="true"
                ></ConversationChat>

                <ConversationChat
                  message="is dummy text used in laying out print, graphic or web designs. The passage is attributed to"
                  :host="false"
                ></ConversationChat>

                <ConversationChat
                  message="is dummy text used in laying out print, graphic or web designs. The passage is attributed to is dummy text used in laying out print, graphic or web designs. The passage is attributed to is dummy text used in laying out print, graphic or web designs. The passage is attributed to"
                  :host="false"
                ></ConversationChat>

                <ConversationChat
                  message="is dummy text used in laying out print, graphic or web designs. The passage is attributed tois dummy text used in laying out print, graphic or web designs. The passage is attributed to"
                  :host="true"
                ></ConversationChat>
                <!-- CONVERSATION CHAT -->
              </div>

              <!-- MESSAGE INPUT BLOCK -->
              <div class="input-box">
                <!-- MESSAGE INPUT FORM -->
                <MessageInput :height="3"></MessageInput>
                <!-- MESSAGE INPUT FORM -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <!-- ADD RECIPIENT MODAL -->
        <AddRecipientModal v-if="toggle_recipient" @closeTriggered="toggleRecipient" @selctionCompleted="toggleRecipient"></AddRecipientModal>
        <!-- ADD RECIPIENT MODAL -->

  </div>
</template>

<script>
import ConversationChat from "@/components/schoolComps/dashboard/messages/ConversationChat";
import MessageInput from "@/components/schoolComps/dashboard/messages/MessageInput";
import AddRecipientModal from "@/components/schoolComps/dashboard/modals/AddRecipientModal";

export default {
  name: "NewMessage",

  components: {
    ConversationChat,
    MessageInput,
    AddRecipientModal
  },

  data(){
      return{
          toggle_recipient: false
      }
  },

  methods: {
      toggleRecipient() {
          this.toggle_recipient = !this.toggle_recipient;
      }
  }
};
</script>

<style>
</style>
