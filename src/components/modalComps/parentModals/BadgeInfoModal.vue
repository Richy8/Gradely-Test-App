<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="badge-info-modal color_deep_blue_bg h-auto index--1">
          <!-- AVATAR -->
          <div class="d-flex justify-content-center align-items-center mx-auto">
            <div class="avatar avatar_xl icon-box d-flex justify-content-center align-items-center">
              <img
                v-lazy="localImg(badge_img)"
                alt
                class="avatar-img rounded-circle overflow-hidden p-2"
              >
            </div>
          </div>

          <!-- TITLE TEXT -->
          <div
            class="title font-weight-bold brand_white text-center mx-auto text-capitalize"
          >{{ badge_name }} Badge</div>

          <!-- MESSAGE -->
          <div
            class="message text-center brand_white mx-auto"
          >Use a clue to to reveal helpful tips to answer difficult questions. This is a description of the badge and what it can be used for during practice.</div>

          <!-- DONE BUTTON -->
          <div class="d-flex justify-content-center align-items-center pb-5">
            <button
              class="btn btn-md btn-whitish brand_navy font-weight-bold"
              @click="$emit('closeTriggered')"
            >Done</button>
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import ModalCover from "@/components/globalComps/ModalCover";
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "ChildAddedModal",

  props: {
    badge_img: String,
    badge_name: String
  },

  components: { ModalCover },

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
.badge-info-modal {
  .icon-box {
    @include equal_min_edge(100);
    margin-top: 50px;
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
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 40px;
    width: 80%;

    @include breakpoint_max(md) {
      width: 100%;
    }
  }
}
</style>
