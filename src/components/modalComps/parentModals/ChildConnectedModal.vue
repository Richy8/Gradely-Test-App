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
              class="avatar avatar_xl icon-box brand_inverse_light_bg d-flex justify-content-center align-items-center"
            >
              <img
                v-lazy="dynamicImg('GirlAvatar48.png')"
                alt
                class="avatar-img rounded-circle overflow-hidden p-2"
              >
            </div>
          </div>

          <!-- TITLE TEXT -->
          <div class="title font-weight-bold color_text text-center mx-auto">Child Linked</div>

          <!-- MESSAGE -->
          <div class="message text-center color_ash mx-auto">
            You’ve been successfully connected to your child -
            <span
              class="font-weight-bold"
            >Omolade Giwa</span>. . You can now follow their progress on Gradely.
          </div>

          <!-- DOWNLOAD BUTTON -->
          <div class="d-flex flex-column justify-content-center align-items-center">
            <button
              class="btn btn-md btn-accent brand_navy font-weight-bold"
              @click="$emit('closeTriggered')"
            >Add another Child</button>

            <button
              class="btn btn-md transparent-bg z-depth-0 color_ash font-weight-bold mt-3 mr-4"
              @click="redirectToParentFeed"
            >Continue</button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "ChildAddedModal",

  components: { Modal },

  mixins: [RenderImages],

  data() {
    return {};
  },

  methods: {
    redirectToParentFeed() {
      this.$router.push("/parent/dashboard");
    }
  }
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
