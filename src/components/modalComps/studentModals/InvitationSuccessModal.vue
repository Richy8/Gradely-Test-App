<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title"></div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <div class="parent-invitaion-modal index--1">
          <!-- AVATAR -->
          <div class="d-flex justify-content-center align-items-center mx-auto">
            <div
              class="avatar icon-box brand_accent_light_bg d-flex justify-content-center align-items-center"
            >
              <InvitationMailIcon></InvitationMailIcon>
            </div>
          </div>

          <!-- TITLE TEXT -->
          <div class="title font-weight-bold color_text text-center mx-auto">Parent Invited</div>

          <!-- MESSAGE -->
          <div class="message text-center color_ash mx-auto">
            An invitation to connect has been sent to your Dad,
            <span
              class="font-weight-bold"
            >Boye Oshinaga</span>. They will be able to see and monitor your progress as soon as they join.
          </div>

          <!-- DOWNLOAD BUTTON -->
          <div class="d-flex justify-content-center align-items-center">
            <router-link
              :to="{name: 'StudentFeeds'}"
              class="btn btn-md btn-accent brand_navy font-weight-bold"
            >CONTINUE</router-link>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import InvitationMailIcon from "@/components/coloredIconPack/InvitationMailIcon";

export default {
  name: "InvitationSuccessModal",

  components: { Modal, InvitationMailIcon },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss">
.parent-invitaion-modal {
  margin-top: -40px;
  .icon-box {
    @include equal_min_edge(100);
    margin-top: -25px;
  }

  .title {
    font-size: 24px;
    line-height: 29px;
    margin: 20px auto;

    @include breakpoint_max(md) {
      font-size: 22px;
    }
  }

  .message {
    font-size: 15px;
    line-height: 180%;
    margin-bottom: 40px;
    width: 80%;

    @include breakpoint_max(md) {
      width: 100%;
    }
  }
}
</style>
