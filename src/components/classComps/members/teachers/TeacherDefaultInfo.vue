<template>
  <div>
    <div class="teacher-default-section mt-4 position-relative">
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>

      <!-- ADD TEACHER SECTION -->
      <EmptyContent
        display_img="EmptyTeacher.png"
        display_text="You have not assigned any teacher to this class."
        button_type="emit"
        button_text="Add Teachers"
        button_function="toggleTeacher"
        @toggleTeacher="$emit('toggleTeacher')"
      ></EmptyContent>
    </div>
  </div>
</template>

<script>
import EmptyContent from "@/components/globalComps/EmptyContent";
import TeacherDefaultCard from "@/components/classComps/members/teachers/TeacherDefaultCard";

export default {
  name: "TeacherDefaultInfo",

  components: {
    TeacherDefaultCard,
    EmptyContent
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style>
</style>
