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
      <div class="add-member-default d-flex flex-column flex-center">
        <!-- EMPTY IMAGE -->
        <div class="avatar avatar_xxl">
          <img src="@/assets/images/EmptyHomework.png" alt class="avatar-img">
        </div>

        <!-- INFO TEXT -->
        <div
          class="info-text color_text font-14 text-center"
        >This class has not been assigned homework</div>

        <!-- CTA BUTTON -->
        <router-link
          to
          class="btn btn-md btn-accent"
        >CREATE HOMEWORK</router-link>
      </div>
      <!-- ADD HOMEWORK SECTION -->
    </div>
  </div>
</template>

<script>
import TeacherDefaultCard from "@/components/schoolComps/dashboard/class/class_members/TeacherDefaultCard";

export default {
  name: "DefaultInfo",

  components: {
    TeacherDefaultCard
  }
};
</script>

<style>
</style>
