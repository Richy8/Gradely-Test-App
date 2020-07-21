<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="delete-modal d-flex flex-column justify-content-start align-items-center">
          <!-- DELETE CAN IMAGE -->
          <img :src="localImg('DeleteCan.png')" alt>

          <!-- TITLE -->
          <div
            class="title color_text font-weight-bold text-center text-uppercase"
          >DELETE {{ account_type }} ACCOUNT</div>

          <!-- DESCRIPTION -->
          <div class="description color_ash text-center">
            To confirm Delete, Type the following
            <span
              class="confirmation-text color_text font-weight-bold"
            >“Chrisland School”</span> in the field below.
          </div>

          <!-- CONFIRM INPUT -->
          <div class="form-input">
            <input type="text" class="form-control text-center rounded-5" placeholder="Enter Text">
          </div>

          <!-- ACTION BUTTONS -->
          <div class="d-flex justify-content-center align-items-center nowrap">
            <button class="btn btn-md btn-accent mr-3">CANCEL</button>
            <button class="btn btn-md btn-tonic-outline ml-3 d-none d-sm-block">CONFIRM DELETE</button>
            <button class="btn btn-md btn-tonic-outline ml-3 d-sm-none">DELETE</button>
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "DeleteSchoolAccount",

  props: {
    account_type: String
  },

  components: {
    ModalCover
  },

  data() {
    return {
      message_modal: false
    };
  },

  methods: {}
};
</script>

<style lang="scss">
.delete-modal {
  margin: 50px 70px;

  .title {
    margin-bottom: 20px;
    margin-top: 24px;
    font-size: 21px;
    line-height: 29px;

    @include breakpoint_max(sm) {
      font-size: 16px;
    }

    @include breakpoint_max(xs) {
      font-size: 15px;
    }
  }

  .description {
    font-size: 14px;
    line-height: 165%;
    margin-bottom: 30px;

    @include breakpoint_max(sm) {
      font-size: 12px;
      width: 105%;
    }

    @include breakpoint_max(xs) {
      width: 120%;
    }
  }

  .form-input {
    width: 80%;

    @include breakpoint_max(sm) {
      width: 105%;
    }

    @include breakpoint_max(xs) {
      width: 125%;
    }

    margin-bottom: 50px;
    input {
      background: $color_white;
      border: 1px solid $border_grey;
      box-sizing: border-box;

      &:focus {
        border: 1px solid $brand_accent;
      }
    }
  }

  .btn {
    @include breakpoint_max(sm) {
      font-size: 11px;
      padding: 10px 22px;
    }
  }
}
</style>
