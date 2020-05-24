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
      <div class="add-member-default d-flex flex-column flex-center">
        <!-- EMPTY IMAGE -->
        <div class="avatar avatar_xxl">
          <img src="@/assets/images/EmptyTeacher.png" alt class="avatar-img">
        </div>

        <!-- INFO TEXT -->
        <div
          class="info-text color_text font-14 text-center"
        >You have not assigned any teacher to this class.</div>

        <!-- CTA BUTTON -->
        <router-link to class="btn btn-md btn-accent" @click.native="toggleTeacherModal">ADD TEACHERS</router-link>
      </div>
      <!-- ADD TEACHER SECTION -->

      <!-- ADD TEACHER MODAL -->
      <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
      <!-- ADD TEACHER MODAL -->
    </div>
  </div>
</template>

<script>
import TeacherDefaultCard from "@/components/schoolComps/dashboard/class/class_members/TeacherDefaultCard";
import AddTeacherModal from "@/components/schoolComps/dashboard/modals/AddTeacherModal";

export default {
  name: "TeacherDefaultInfo",

  components: {
    TeacherDefaultCard,
    AddTeacherModal
  },

  data() {
    return {
      teacher_modal: false
    };
  },

  methods: {
    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    }
  }
};
</script>

<style>
</style>
