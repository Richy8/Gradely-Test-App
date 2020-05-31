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
              class="color_text font-weight-bold d-flex justify-content-start align-items-center font-15 go-back-link"
              @click.native="$emit('switchMessageList', 'MessageData')"
            >
              <div class="avatar">
                <span class="flex-center">
                  <span class="icon-caret-left mr-2 font-weight-bold"></span>
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
            <div class="new-message-display-block white rounded-10 h-auto">
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
                      <span class="position-relative pointer">
                        <span class="icon-minus brand_tonic font-16 flex-center"></span>
                      </span>
                    </div>
                  </div>

                  <div
                    class="user-message-name d-flex justify-content-between align-items-center rounded-40"
                  >
                    <div class="name color_text">Adekiitan Adeyinka</div>
                    <div class="avatar avatar_xs white">
                      <span class="position-relative pointer">
                        <span class="icon-minus brand_tonic font-16 flex-center"></span>
                      </span>
                    </div>
                  </div>
                  <!-- USERS -->
                </div>

                <!-- ADD RECIPIENT RIGHT -->
                <div class="right">
                  <div
                    class="avatar avatar_32 border_grey_bg add-recipient pointer"
                    @click="toggleRecipient"
                  >
                    <span class="flex-center icon-plus border_grey_dark font-19"></span>
                  </div>
                </div>
              </div>

              <!-- CONVERSATION AREA -->
              <div class="message-conversation-area">
                <!-- CONVERSATION CHAT -->
                <ConversationChat
                  message="is dummy text used in laying out print, graphic or web designs. The passage is attributed to"
                  :host="true"
                ></ConversationChat>

                <ConversationChat
                  message="is dummy text used in laying out print, graphic or web designs. The passage is attributed to"
                  :host="false"
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
    <AddRecipientModal
      v-if="toggle_recipient"
      @closeTriggered="toggleRecipient"
      @selctionCompleted="toggleRecipient"
    ></AddRecipientModal>
    <!-- ADD RECIPIENT MODAL -->
  </div>
</template>

<script>
import MessageInput from "@/components/schoolComps/dashboard/messages/MessageInput";

export default {
  name: "NewMessage",

  components: {
    MessageInput,
    ConversationChat: () =>
      import(/* webpackChunkName: "conversationchat" */ "@/components/schoolComps/dashboard/messages/ConversationChat"),
    AddRecipientModal: () =>
      import(/* webpackChunkName: "addrecipientmodal" */ "@/components/schoolComps/modals/AddRecipientModal")
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

<style lang="scss">
.new-message-section {
  position: relative;
  top: 50px;

  .go-back-link {
    width: 25%;
    @include breakpoint_max(lg) {
      width: 25%;
    }
    @include breakpoint_max(md) {
      width: 32%;
    }
    @include breakpoint_max(sm) {
      width: 40%;
    }
    @include breakpoint_max(xs) {
      width: 52%;
    }
  }

  .new-message-display-block {
    box-sizing: border-box;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
    margin-top: 23px;
    padding-bottom: 21px;
    margin-bottom: 60px;

    @include breakpoint_max(md) {
      margin-bottom: 90px;
    }
  }

  .message-top {
    @include flex_row_between_nowrap;
    align-items: flex-start;
    padding: 13px 22px;
    border-bottom: 1px solid $border_grey_light;
  }

  .user-message-name {
    padding: 6px 13.5px;
    background: $border_grey_light;
    margin-right: 10px;
    margin-bottom: 5px;

    .name {
      font-size: 12px;
      margin-right: 15px;
    }
  }

  .add-recipient {
    transition: all 0.3s ease-in-out;

    span {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      background: rgba(15, 216, 238, 0.25) !important;

      span {
        color: $color_text !important;
      }
    }
  }

  .message-conversation-area {
    height: 370px;
    padding: 25px 20px 10px;
    overflow: auto;
    margin-bottom: 10px;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: $border_grey_light;
    }
  }

  // MESSAGE INPUT FORM
  .input-box {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
