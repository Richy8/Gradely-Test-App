<template>
  <div>
    <div class="question-item white rounded-5 position-relative">
      <div class="question">{{question}}</div>

      <div class="chat-bullet">
        <div class="icon position-relative">
          <span class="icon-chat-card brand_primary"></span>
          <span class="number white-text font-weight-bold">{{ number+1 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionItem",

  props: {
    question: String,
    number: Number
  }
};
</script>

<style lang="scss">
.question-item {
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  color: $color_text;
  font-size: 16px;
  line-height: 25px;
  padding: 20px 20px 20px 50px;
  margin-bottom: 5px;

  @include breakpoint_max(md) {
    font-size: 15px;
  }

  @include breakpoint_max(sm) {
    font-size: 14px;
  }

  .chat-bullet {
    position: absolute;
    top: 10px;
    left: -12px;

    @include breakpoint_max(md) {
      top: 12px;
    }

    span {
      font-size: 45px;

      @include breakpoint_max(md) {
        font-size: 43px;
      }
    }

    .number {
      position: absolute;
      @include transform_center;
      top: 40%;
      font-size: 14px;
      z-index: 99;
    }
  }
}
</style>
