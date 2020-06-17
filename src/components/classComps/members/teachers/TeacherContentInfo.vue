<template>
  <div>
    <div class="teacher-content-section mt-4">
      <!-- TEACHER COUNT -->
      <div class="teacher-count font-weight-bold color_grey_dark">4 Teachers</div>

      <!-- TEACHER CARD COLUMNS -->
      <TeacherContentCard
        teacher_img="TeacherOne.png"
        teacher_name="Abimbola Ojo"
        subjects="Mathematics, Physics"
        @toggleMessage="$emit('toggleMessage')"
      ></TeacherContentCard>

      <TeacherContentCard
        teacher_img
        teacher_name="Andrey Jackson"
        subjects="English Language"
        @toggleMessage="$emit('toggleMessage')"
      ></TeacherContentCard>

      <TeacherContentCard
        teacher_img
        teacher_name="Lakunle Shoriyan"
        subjects="Social Studies"
        @toggleMessage="$emit('toggleMessage')"
      ></TeacherContentCard>

      <TeacherContentCard
        teacher_img="TeacherTwo.png"
        teacher_name="Minever McGonagal"
        subjects="History"
        @toggleMessage="$emit('toggleMessage')"
      ></TeacherContentCard>
      <!-- TEACHER CARD COLUMNS -->

      <!-- ADD TEACHER CTA -->
      <div class="add-new-item pointer" @click="$emit('toggleTeacher')">
        <div class="undone"></div>
        <div class="label-text font-weight-bold brand_accent">Add a teacher</div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherContentCard from "@/components/classComps/members/teachers/TeacherContentCard";

export default {
  name: "TeacherContentInfo",

  components: {
    TeacherContentCard
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss">
.teacher-count {
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 14px;
}
</style>
