<template>
  <div>
    <div class="diagnostic-text-card white rounded-5 pointer" @click="togglePracticeModal">
      <!-- TOP -->
      <div class="top position-relative">
        <img v-lazy="dynamicImg(test_img)" alt>
      </div>

      <!-- BOTTOM -->
      <div class="bottom">
        <div class="bottom-title font-weight-bold color_grey_dark text-uppercase">practice</div>
        <div class="bottom-meta color_text font-weight-bold">{{ test_topic }}</div>
      </div>
    </div>

    <!-- MODAL -->
    <StartPracticeModal v-if="practice_modal" @closeTriggered="togglePracticeModal"></StartPracticeModal>
    <!-- MODAL -->
  </div>
</template>

<script>

export default {
  name: "DiagnosticTestCard",

  props: {
    test_img: String,
    test_topic: String
  },

  components: {
    StartPracticeModal: () =>
      import(/* webpackChunkName: "StartPracticeModal" */ "@/components/modalComps/parentModals/StartPracticeModal")
  },


  data() {
    return {
      practice_modal: false
    };
  },

  methods: {
    togglePracticeModal() {
      this.practice_modal = !this.practice_modal;
    }
  }
};
</script>

<style lang="scss" scoped>
.diagnostic-text-card {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  margin-right: 8px;
  margin-bottom: 2px;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(0.97);
  }

  .top {
    @include equal_min_edge(140);

    @include breakpoint_max(sm) {
      @include equal_min_edge(130);
    }
    img {
      @include img_cover;
    }
  }
  .bottom {
    padding: 9px;

    .bottom-title {
      font-size: 8px;
      line-height: 11px;
      margin-bottom: 2px;
    }

    .bottom-meta {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
