<template>
  <div>
    <div class="chat-row w-100 h-auto">
      <!-- CHAT CARD -->
      <div
        class="chat-card color_text rounded-10 font-12"
        :class="[host ? 'host' : 'guest']"
      >{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConversationChat",

  props: {
    message: String,
    host: Boolean
  }
};
</script>

<style lang="scss">
.chat-row {
  margin-bottom: 25px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  .chat-card {
    width: 380px;
    padding: 10px;
    box-sizing: border-box;

    @include breakpoint_max(lg) {
      width: 320px;
    }

    @include breakpoint_max(md) {
      width: 350px;
    }

    @include breakpoint_max(sm) {
      width: 340px;
    }

    @include breakpoint_max(xs) {
      width: 270px;
    }
  }
}

.host {
  justify-content: flex-end;
  background: #e1f6f8;
  margin-left: auto;
}

.guest {
  justify-content: flex-end;
  background: #ffffff;
  border: 1px solid $border_grey;
}
</style>
