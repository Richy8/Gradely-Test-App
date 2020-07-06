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
              class="avatar icon-box brand_inverse_light_bg d-flex justify-content-center align-items-center"
            >
              <img v-lazy="localImg('CancelSubscription.png')" alt class="avatar-img">
            </div>
          </div>

          <!-- TITLE TEXT -->
          <div class="title font-weight-bold brand_tonic text-center mx-auto">Cancel Subscription</div>

          <!-- MESSAGE -->
          <div class="message text-center color_ash mx-auto">
            <p>Are you sure you want to cancel this child's subscription to Gradely CatchUp!?</p>
            <p>Your child will no longer be able to access all features attached to the plan, including all the data gathered over the period of use.</p>
          </div>

          <!-- BUTTONS -->
          <div class="d-flex justify-content-center align-items-center">
            <button
              class="btn btn-md transparent-bg z-depth-0 color_ash font-weight-bold mr-3"
              @click="$emit('closeTriggered')"
            >Cancel</button>

            <button
              class="btn btn-md brand_tonic_bg brand_white font-weight-bold ml-3"
              @click="$emit('closeTriggered')"
            >Yes! Cancel</button>
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
  name: "CancelSubscriptionModal",

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
  margin-top: -20px;
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
