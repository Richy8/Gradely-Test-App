<template>
  <div>
    <div class="tutor-faq-section w-100">
      <!-- TOP -->
      <div class="top pointer" @click="showResponse">
        <!-- LEFT -->
        <div class="left color_text">{{ question }}</div>

        <!-- RIGHT -->
        <div class="right">
          <div class="avatar">
            <span
              class="flex-center border_grey_dark font-20"
              :class="show_response ? 'icon-minus' : 'icon-plus'"
            ></span>
          </div>
        </div>
      </div>

      <!-- BOTTOM -->
      <div class="bottom color_ash" v-if="show_response">{{ response }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorFAQ",

  props: {
    question: String,
    response: String
  },

  data() {
    return {
      show_response: false
    };
  },

  methods: {
    showResponse() {
      this.show_response = !this.show_response;
    }
  }
};
</script>

<style lang="scss">
.tutor-faq-section {
  margin-bottom: 1px;

  .top {
    border: 1px solid $border_grey;
    box-sizing: border-box;
    padding: 15px;
    @include flex_row_between_nowrap;

    .left {
      font-size: 17px;
      line-height: 29px;

      @include breakpoint_max(md) {
        font-size: 16px;
      }

      @include breakpoint_max(sm) {
        font-size: 15px;
      }
    }

    span {
      transition: all 0.3s ease-in-out;
    }
  }

  .bottom {
    border: 1px solid $border_grey;
    box-sizing: border-box;
    padding: 15px;
    font-size: 15.5px;
    line-height: 28px;
    transition: all 0.4s ease-in-out;
    animation: panel-slide-down 0.4s ease-in-out forwards;
  }
}
</style>
