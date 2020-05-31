<template>
  <div>
    <div class="homework-default-info position-relative">
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>

      <!-- ADD HOMEWORK SECTION -->
      <EmptyContent
        display_img="EmptyHomework.png"
        display_text="This class has not been assigned homework"
        button_type="emit"
        button_text="Create Homework"
        button_function
      ></EmptyContent>
      <!-- ADD HOMEWORK SECTION -->
    </div>
  </div>
</template>

<script>
import EmptyContent from "@/components/globalComps/EmptyContent";
import TeacherDefaultCard from "@/components/schoolComps/dashboard/class/class_members/teachers/TeacherDefaultCard";

export default {
  name: "DefaultInfo",

  components: {
    TeacherDefaultCard,
    EmptyContent
  }
};
</script>

<style lang="scss">
.homework-default-info {
  margin-top: 30px;
  margin-bottom: 60px;

  @include breakpoint_max(md) {
    margin-bottom: 100px;
  }
}
</style>
