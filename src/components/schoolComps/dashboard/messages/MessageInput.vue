<template>
  <div>
    <form action @submit.prevent>
      <div class="message-input-form">
        <textarea
          class="form-control textarea-input"
          v-model="form.message"
          cols="10"
          :rows="height"
          ref="textarea"
          placeholder="Type your message..."
          @focus="addAccent"
          @blur="addAccent"
        ></textarea>
        <div class="options">
          <div class="message-features">
            <!-- PAPER CLIP -->
            <div class="avatar avatar-xs icon" title="Attach File">
              <span class="icon-paper-clip flex-center"></span>
            </div>

            <!-- EXTERNAL LINK -->
            <div class="avatar avatar-xs icon" title="Add Link">
              <span class="icon-url-link flex-center"></span>
            </div>

            <!-- IMAGES -->
            <div class="avatar avatar-xs icon" title="Add Image">
              <span class="icon-image flex-center"></span>
            </div>
          </div>
          <div class="send-button">
            <button type="submit" class="btn btn-sm btn-accent">Send</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MessageInput",

  props: {
      height: {
          type: Number,
          default: 5
      }
  },

  data() {
    return {
      form: {
        message: ""
      }
    };
  },

  mounted() {
    this.$refs["textarea"].focus();
  },

  methods: {
    addAccent() {
      let message_input = document.querySelector(".textarea-input");
      message_input.parentElement.classList.contains("border-warning")
        ? message_input.parentElement.classList.remove("border-warning")
        : message_input.parentElement.classList.add("border-warning");
    }
  }
};
</script>

<style>
</style>
