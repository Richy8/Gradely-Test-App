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
        @toggleMessage="toggleMessageModal"
      ></TeacherContentCard>

      <TeacherContentCard
        teacher_img
        teacher_name="Andrey Jackson"
        subjects="English Language"
        @toggleMessage="toggleMessageModal"
      ></TeacherContentCard>

      <TeacherContentCard
        teacher_img
        teacher_name="Lakunle Shoriyan"
        subjects="Social Studies"
        @toggleMessage="toggleMessageModal"
      ></TeacherContentCard>

      <TeacherContentCard
        teacher_img="TeacherTwo.png"
        teacher_name="Minever McGonagal"
        subjects="History"
        @toggleMessage="toggleMessageModal"
      ></TeacherContentCard>
      <!-- TEACHER CARD COLUMNS -->

      <!-- ADD TEACHER CTA -->
      <div class="add-new-item pointer" @click="toggleTeacherModal">
        <div class="undone"></div>
        <div class="label-text font-weight-bold brand_accent">Add a teacher</div>
      </div>
    </div>

    <!-- MODAL -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import TeacherContentCard from "@/components/schoolComps/dashboard/class/class_members/TeacherContentCard";
import AddTeacherModal from "@/components/schoolComps/dashboard/modals/AddTeacherModal";
import NewMessageModal from "@/components/schoolComps/dashboard/modals/NewMessageModal";

export default {
  name: "TeacherContentInfo",

  components: {
    TeacherContentCard,
    AddTeacherModal,
    NewMessageModal
  },

  data() {
    return {
      teacher_modal: false,
      message_modal: false
    };
  },

  methods: {
    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    },

    toggleMessageModal() {
      this.message_modal = !this.message_modal;
    }
  }
};
</script>

<style>
</style>
