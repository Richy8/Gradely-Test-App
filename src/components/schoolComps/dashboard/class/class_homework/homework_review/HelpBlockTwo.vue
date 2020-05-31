<template>
  <div>
    <div class="help-block-two">
      <div class="title color_text font-weight-bold">Help your students here</div>
      <div class="meta color_ash">Click on a topic to reveal the questions</div>
      <!-- STRUGGLING STUDENT COMPONENT -->
      <StrugglingStudent
        question="What is the logarithmic characteristic of 1.345?"
        :struggling_student="17"
        :total_student="20"
        :student_list="[{img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}, {img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}, {img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}]"
      ></StrugglingStudent>

      <StrugglingStudent
        question="What is the logarithmic characteristic of 1.345?"
        :struggling_student="17"
        :total_student="20"
        :student_list="[{img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}, {img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}, {img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}]"
      ></StrugglingStudent>

      <StrugglingStudent
        question="What is the logarithmic characteristic of 1.345?"
        :struggling_student="17"
        :total_student="20"
        :student_list="[{img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}, {img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}, {img: 'GirlTwo.png', name: 'Rilwan Abdul-jabar'}]"
      ></StrugglingStudent>
      <!-- STRUGGLING STUDENT COMPONENT -->
    </div>
  </div>
</template>

<script>
import StrugglingStudent from "@/components/schoolComps/dashboard/class/class_homework/homework_review/StrugglingStudent";

export default {
  name: "HelpBlockTwo",

  components: {
    StrugglingStudent
  }
};
</script>

<style lang="scss">
.help-block-two {
  .title {
    margin-bottom: unset;
  }

  .meta {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 20px;

    @include breakpoint_max(md) {
      font-size: 13px;
    }

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }
}
</style>
