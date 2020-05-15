<template>
  <div>
    <div class="modal-overlay modal-cover-overlay">
      <div class="modal-cover modal-sm-md" :class="modal_size">
        <div class="modal-cover-body">
          <!-- CLOSE DIALOG -->
          <div class="pageClose dialogDismiss">
            <button type="button" class="close_dialog white cls_md" @click="$emit('closeModal')"></button>
          </div>
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
    modal_size: String
  }
};
</script>

<style lang='scss' scoped>
</style>
