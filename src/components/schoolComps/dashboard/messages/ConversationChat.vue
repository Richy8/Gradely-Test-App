<template>
  <div>
    <div class="chat-row">
      <!-- CHAT CARD -->
      <div class="chat-card color_text rounded-10" :class="[host ? 'host' : 'guest']">{{ message }}</div>
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

<style>
</style>
