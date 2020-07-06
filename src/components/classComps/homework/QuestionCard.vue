<template>
  <div>
    <div class="question-card rounded-5" :class="set_theme">
      <!-- TOP ROW -->
      <div class="top-row">
        <div class="d-flex justify-content-start align-items-center nowrap">
          <div class="position-relative">
            <span class="icon-chat-card font-45" :class="set_status_text"></span>
            <span
              class="question-number position-absolute font-weight-bold brand_white"
            >{{ question_id }}</span>
          </div>
          <!-- QUESTION TEXT -->
          <div class="question-text" :class="set_text_color">{{ question_text }}</div>
        </div>

        <div class="question-choice" :class="set_text_color">
          Your answer:
          <span class="font-weight-bold">{{ question_choice }}</span>
        </div>
      </div>

      <!-- MIDDLE ROW -->
      <div class="middle-row w-100" :class="set_status_bg">
        <div class="text brand_white text-capitalize">{{ question_status }}</div>
      </div>

      <div class="bottom-row">
        <div class="text" :class="set_text_color">
          The correct answer is:
          <span class="font-weight-bold">{{ question_answer }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",

  props: {
    question_theme: {
      type: String,
      default: "lignt"
    },
    question_id: Number,
    question_text: String,
    question_choice: String,
    question_answer: String,
    question_status: String
  },

  watch: {
    question_status: "[setTheme, setStatus]"
  },

  data() {
    return {
      set_theme: "",
      set_text_color: "",
      set_status_text: "",
      set_status_bg: ""
    };
  },

  mounted() {
    this.setTheme();
    this.setStatus();
  },

  methods: {
    setTheme() {
      if (this.question_theme === "light") {
        this.set_theme = "white";
        this.set_text_color = "color_text";
      } else if (this.question_theme === "dark") {
        this.set_theme = "black";
        this.set_text_color = "brand_white";
      }
    },

    setStatus() {
      if (this.question_status === "correct") {
        this.set_status_text = "brand_green";
        this.set_status_bg = "brand_green_bg";
      } else if (this.question_status === "incorrect") {
        this.set_status_text = "brand_red";
        this.set_status_bg = "brand_red_bg";
      } else if (this.question_status === "skipped") {
        this.set_status_text = "border_grey_dark";
        this.set_status_bg = "border_grey_dark_bg";
      }
    }
  }
};
</script>

<style lang="scss">
.question-card {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 20px;

  .top-row {
    margin-left: -10px;
  }

  .middle-row {
    padding: 10px 30px 13px;
    margin: 25px auto 20px;
    .text {
      font-size: 15px;
      line-height: 22px;

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }
  }

  .bottom-row {
    padding-left: 30px;
    padding-right: 25px;
    .text {
      font-size: 15px;
      line-height: 22px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }

      @include breakpoint_max(md) {
        font-size: 14px;
      }

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }
  }

  .question-number {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    font-size: 11px;
    display: block;
  }

  .question-text {
    font-size: 17px;
    line-height: 22px;
    margin-bottom: 15px;
    padding-right: 5px;
    margin-left: 15px;

    @include breakpoint_max(lg) {
      font-size: 15px;
    }

    @include breakpoint_max(sm) {
      margin-bottom: 10px;
      margin-left: 12px;
    }
  }

  .question-choice {
    font-size: 15px;
    line-height: 22px;
    margin-left: 62px;

    @include breakpoint_max(lg) {
      font-size: 13px;
    }
    @include breakpoint_max(md) {
      font-size: 14px;
    }
    @include breakpoint_max(sm) {
      margin-left: 57px;
    }
  }
}
</style>
