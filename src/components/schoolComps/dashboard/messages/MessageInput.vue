<template>
  <div>
    <form action @submit.prevent>
      <div class="message-input-form w-100 white rounded-5 overflow-hidden">
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
        <div class="options color_white_bg rounded-bottom-5">
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
            <button type="submit" class="btn btn-sm btn-accent color_text font-10">Send</button>
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

<style lang="scss">
.message-input-form {
  border: 1px solid $border_grey;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  textarea {
    border: 0px !important;
    outline: 0px !important;

    &:focus {
      border: 0px !important;
    }
  }

  .options {
    padding: 2px 14px;
    @include flex_row_between_nowrap;
  }

  .message-features {
    @include flex_row_start_nowrap;

    .icon {
      color: $color_grey_dark;
      margin-right: 16px;
      font-size: 18px;

      @include breakpoint_max(lg) {
        font-size: 16px;
        margin-right: 13.5px;
      }

      &:hover {
        span {
          color: darken($brand_accent, 12%);
        }
      }
    }
  }

  .btn {
    padding: 8px 11px !important;
    line-height: 16px;

    @include breakpoint_max(md) {
      padding: 8.5px 14px !important;
      line-height: 14px;
    }
  }
}
</style>
