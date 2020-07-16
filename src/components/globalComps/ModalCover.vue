<template>
  <div>
    <div class="modal-overlay modal-cover-overlay">
      <div class="modal-cover modal-sm-md rounded-10" :class="modal_style">
        <div class="modal-cover-body">
          <!-- CLOSE DIALOG -->
          <div class="pageClose dialogDismiss" v-if="show_close">
            <button type="button" class="close_dialog white cls_md" @click="$emit('closeModal')"></button>
          </div>

          <!-- MODAL COVER BODY -->
          <slot name="modal-cover-body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalCover",

  props: {
    modal_style: String,
    show_close: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
