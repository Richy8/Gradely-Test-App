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
// BACKGROUND COLOR EXTERNAL FUNCTION
import { bgColorSetter } from "@/assets/jsComps/extFunc";
import MessageData from "@/components/schoolComps/dashboard/messages/MessageData";
import NewMessage from "@/components/schoolComps/dashboard/messages/NewMessage";

export default {
  name: "Message",

  components: {
    MessageData,
    NewMessage
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
    bgColorSetter("#f4f4f4");
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

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}
</style>
