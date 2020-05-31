<template>
  <div>
    <vue-headful :title="meta_title" description="Description goes here"/>
    <!-- SCHOOL MESSAGE SECTION -->
    <div class="school-message-section">
      <!-- MESSAGE COMPONENT VIEW -->
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component
            :is="in_view"
            @switchNewMessage="changeView($event)"
            @switchMessageList="changeView($event)"
          ></component>
        </keep-alive>
      </transition>
      <!-- MESSAGE COMPONENT VIEW -->
    </div>
  </div>
</template>

<script>
import MessageData from "@/components/schoolComps/dashboard/messages/MessageData";

export default {
  name: "Message",

  components: {
    MessageData,
    NewMessage: () =>
      import(/* webpackChunkName:  "newmessage" */ "@/components/schoolComps/dashboard/messages/NewMessage")
  },

  data() {
    return {
      in_view: "MessageData",
      meta_title: ""
    };
  },

  watch: {
    in_view: "updateMetaTitle"
  },

  mounted() {
    this.updateMetaTitle();
  },

  methods: {
    updateMetaTitle() {
      if (this.in_view === "MessageData") {
        this.meta_title = "Messages | School Dashboard";
      } else if (this.in_view === "NewMessage") {
        this.meta_title = "Compose Message | School Dashboard";
      }
    },

    changeView(view) {
      this.in_view = view;
    }
  }
};
</script>

<style lang="scss">
</style>
