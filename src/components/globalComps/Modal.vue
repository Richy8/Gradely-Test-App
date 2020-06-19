<template>
  <div>
    <div class="modal-overlay">
      <div class="modal-box modal-sm-md" :class="modal_size">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center">
              <div class="modal-title">
                <slot name="modal-title"></slot>
              </div>
              <div class="close-btn" @click="$emit('closeModal')"></div>
            </div>

            <div class="col-12 modal-body">
              <slot name="modal-body"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: {
    modal_size: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang='scss' scoped>
</style>
