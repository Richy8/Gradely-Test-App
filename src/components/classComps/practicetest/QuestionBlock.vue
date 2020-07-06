<template>
  <div>
    <div class="question-block-section">
      <!-- QUESTION IMAGE ROW -->
      <div class="question-img position-relative" v-if="is_question_image">
        <img v-lazy="dynamicImg(question_image)" alt>

        <!-- ZOOM IN ICON -->
        <div class="avatar position-relative brand_inverse_light_bg pointer">
          <span class="icon-zoom-in color_ash font-15"></span>
        </div>
      </div>

      <!-- QUESTION TEXT ROW -->
      <div class="question-text text-center brand_white">{{ question }}</div>

      <!-- QUESTION OPTIONS ROW -->
      <div class="question-options">
        <div
          class="option"
          :class="is_valid[index]"
          v-for="(option, index) in question_option"
          :key="index"
          @click="checkAnswer(option, index)"
        >
          <!-- OPTION IMAGE -->
          <img v-lazy="dynamicImg(option)" alt v-if="is_option_image">
          <!-- OPTION TEXT -->
          <div class="text brand_inverse_light font-weight-bold" v-else>{{ option }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "QuestionBlock",

  props: {
    question_id: Number,
    is_question_image: {
      type: Boolean,
      default: false
    },
    is_option_image: {
      type: Boolean,
      default: false
    },
    question: String,
    question_image: String,
    question_answer: String,
    question_option: Array
  },

  mixins: [RenderImages],

  data() {
    return {
      is_valid: Array(4).fill("none")
    };
  },

  watch: {
    question_id: "resetIsValid"
  },

  methods: {
    resetIsValid() {
      this.is_valid = Array(4).fill("none");
    },

    checkAnswer(choice, index) {
      if (choice === this.question_answer) {
        this.is_valid = Array(4).fill("none");
        this.is_valid[index] = "correct";
        this.$emit("questionSelected");
      } else {
        let correct_index = this.question_option.findIndex(
          i => i === this.question_answer
        );
        this.is_valid = Array(4).fill("none");
        this.is_valid[index] = "wrong";
        this.is_valid[correct_index] = "correct";
        this.$emit("questionSelected");
      }
    }
  }
};
</script>

<style lang="scss">
.question-block-section {
  @include flex_column_center;

  .question-img {
    margin-bottom: 20px;
    // border: 1px solid white;
    @include custom_min_edge(390, 250);

    img {
      @include img_contain;
    }

    @include breakpoint_max(xs) {
      @include custom_min_edge(300, 210);
    }

    .avatar {
      @include equal_min_edge(30);
      left: 0;
      top: 90%;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(0.95);
      }

      span {
        @include transform_center;
      }
    }
  }

  .question-text {
    width: 65%;
    font-size: 19px;
    line-height: 140%;
    margin-bottom: 30px;

    @include breakpoint_max(lg) {
      width: 90%;
      font-size: 16px;
      line-height: 150%;
    }

    @include breakpoint_max(md) {
      width: 100%;
    }

    @include breakpoint_max(sm) {
      font-size: 14.5px;
    }

    @include breakpoint_max(xs) {
      font-size: 14px;
    }
  }

  .question-options {
    width: 65%;
    @include flex_row_between_wrap;

    @include breakpoint_max(lg) {
      width: 90%;
    }

    @include breakpoint_max(md) {
      width: 100%;
    }

    .option {
      position: relative;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.4);
      border: 4px solid #004680;
      box-sizing: border-box;
      border-radius: 10px;
      width: 49.2%;
      height: 150px;
      padding-top: 27px;
      padding-bottom: 27px;
      margin-bottom: 10px;
      @include flex_row_center_nowrap;
      transition: all 0.3s ease-in-out;

      @include breakpoint_max(xs) {
        height: 130px;
      }

      &:hover {
        transform: scale(0.97);
      }

      .text {
        font-size: 16px;
        line-height: 22px;

        @include breakpoint_max(lg) {
          font-size: 14px;
        }

        @include breakpoint_max(xs) {
          font-size: 13px;
        }
      }

      img {
        @include img_contain;
        width: 70%;
        height: 70%;
      }
    }

    .correct,
    .wrong {
      background: #00e29f;

      &::after {
        position: absolute;
        font-family: "icomoon";
        font-weight: 500;
        font-size: 80px;
        opacity: 0.5;
        right: 5px;

        @include breakpoint_max(lg) {
          font-size: 70px;
        }

        @include breakpoint_max(xs) {
          font-size: 60px;
        }
      }
      .text {
        color: $brand_navy !important;
      }
    }

    .correct {
      &::after {
        content: "\e98f";
        color: #ffffff;
        bottom: -25px;

        @include breakpoint_max(xs) {
          bottom: -15px;
        }
      }
    }

    .wrong {
      background: #f6515b;
      &::after {
        content: "\e9ae";
        color: #ffdcde;
        bottom: -20px;

        @include breakpoint_max(xs) {
          bottom: -10px;
        }
      }
    }
  }
}
</style>
