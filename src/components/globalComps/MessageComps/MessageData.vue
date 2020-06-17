<template>
  <div>
    <div class="school-message-section base-type-layout">
      <!-- PAGE TITLE -->
      <div class="container px-1">
        <div class="row">
          <div class="col-12 dashboard-header-row">
            <!-- PAGE TITLE -->
            <div class="page-title">Messages</div>

            <!-- COMPOSE NEW MESSAGE -->
            <div
              class="avatar avatar_sm_md btn-accent right-avatar pointer"
              @click="$emit('switchNewMessage', 'NewMessage')"
            >
              <span class="icon icon-one icon-plus font-22"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- CONVERSATIONS BLOCK -->
      <div class="container px-1">
        <div class="row">
          <div class="col-12">
            <div
              class="conversation-container d-flex justify-content-start align-items-center nowrap overflow-hidden rounded-10 white"
            >
              <!-- CONVERSATION BLOCK SECTION -->
              <div class="conversation-block position-relative h-100">
                <!-- TITLE ROW -->
                <div class="title-row">
                  <div class="header-title black-text">Conversations</div>
                </div>

                <div class="block-container">
                  <!-- CONVERSATION CARD COMPONENT -->
                  <ConversationCard
                    :contact_day="12"
                    contact_month="September"
                    :contact_year="2019"
                    contact_name="Obafemi Tuberu"
                    contact_msg="Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur"
                    @changeView="showMessageChat"
                  ></ConversationCard>

                  <ConversationCard
                    :contact_day="28"
                    contact_month="December"
                    :contact_year="2019"
                    contact_name="Lukman Bala"
                    contact_msg="Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur"
                    @changeView="showMessageChat"
                  ></ConversationCard>
                  <!-- CONVERSATION CARD COMPONENT -->
                </div>
              </div>

              <!-- CONVERSATION AREA SECTION -->
              <div class="conversation-area d-none d-md-block position-relative h-100">
                <!-- TITLE ROW -->
                <div class="title-row w-100">
                  <!-- CONTACT NAME -->
                  <div
                    class="header-title font-weight-bold color_text d-none d-md-block"
                  >Obafemi Toberu</div>
                  <!-- MOBILE DISPLAY -->
                  <div class="header-title font-weight-bold color_text d-md-none">
                    <router-link
                      to
                      class="color_text d-flex justify-content-start align-items-center"
                      @click.native="showMessageList"
                    >
                      <div class="avatar">
                        <span class="flex-center icon-arrow-left mr-2 font-19"></span>
                      </div>
                      <div class="name">Obafemi Toberu</div>
                    </router-link>
                  </div>

                  <!-- OPTION -->
                  <div class="option pointer">
                    <span class="flex-center d-block icon-ellipsis-h color_grey_text font-24"></span>
                  </div>
                </div>

                <!-- CHAT AREA CONTAINER -->
                <div class="area-container w-100 overflow-auto">
                  <!-- CONVERSATION CHAT SECTION -->
                  <ConversationChat
                    message="is dummy text used in laying out print, graphic or web designs. The passage is attributed to"
                    :host="true"
                  ></ConversationChat>

                  <ConversationChat
                    message="is dummy text used in laying out print, graphic or web designs. The passage is attributed to"
                    :host="false"
                  ></ConversationChat>
                  <!-- CONVERSATION CHAT SECTION -->
                </div>
                <!-- CHAT AREA CONTAINER -->

                <div class="input-box">
                  <!-- MESSAGE INPUT FORM -->
                  <MessageInput :height="2"></MessageInput>
                  <!-- MESSAGE INPUT FORM -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConversationCard from "@/components/globalComps/MessageComps/ConversationCard";

export default {
  name: "MessageData",

  components: {
    ConversationCard,
    ConversationChat: () =>
      import(/* webpackChunkName: "conversationchat" */ "@/components/globalComps/MessageComps/ConversationChat"),
    MessageInput: () =>
      import(/* webpackChunkName: "messageinput" */ "@/components/globalComps/MessageComps/MessageInput")
  },

  mounted() {
    this.scrollMsgArea();
  },

  methods: {
    scrollMsgArea() {
      let message_area = document.querySelector(".area-container");
      message_area.scrollTop = message_area.scrollHeight;
    },

    showMessageChat() {
      let window_width = window.innerWidth;
      if (window_width < 767) {
        let message_list = document.querySelector(".conversation-block");
        let message_area = document.querySelector(".conversation-area");

        message_list.classList.add("d-none");
        message_area.classList.remove("d-none");
      }
    },

    showMessageList() {
      let message_list = document.querySelector(".conversation-block");
      let message_area = document.querySelector(".conversation-area");

      message_list.classList.remove("d-none");
      message_area.classList.add("d-none");
    }
  }
};
</script>

<style lang="scss">
</style>
