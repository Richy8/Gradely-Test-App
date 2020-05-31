<template>
  <div class="questions">
    <div class="title color_text font-weight-bold">Questions Attempted</div>
    <!-- QuestionItem component -->
    <QuestionItem
      :question="question"
      :number="index"
      v-for="(question, index) in question_list"
      :key="index"
    ></QuestionItem>
    <!-- QuestionItem component -->
  </div>
</template>

<script>
import QuestionItem from "@/components/schoolComps/dashboard/class/class_homework/homework_review/QuestionItem";

export default {
  name: "Questions",

  components: {
    QuestionItem
  },

  data() {
    return {
      question_list: [
        "What is 1,856 rounded to the nearest 10?",
        "What is 1,856 rounded to the nearest 10?",
        "What is 1,856 rounded to the nearest 10?",
        "What is 1,856 rounded to the nearest 10?",
        "What is 1,856 rounded to the nearest 10?",
        "What is 1,856 rounded to the nearest 10?"
      ]
    };
  }
};
</script>

<style lang="scss">
.questions {
  margin-bottom: 50px;

  .title {
    margin-bottom: 20px;
  }
}
</style>
