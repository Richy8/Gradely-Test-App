<template>
  <div class="mt-3">
    <div class="row empty-child-row position-relative">
      <!-- EMPTY CARD -->
      <div class="col-6 col-md-4 col-lg-3">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3 d-none d-lg-block">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3 d-none d-lg-block">
        <StudentDefaultCard></StudentDefaultCard>
      </div>

      <div class="col-6 col-md-4 col-lg-3 d-none d-lg-block">
        <StudentDefaultCard></StudentDefaultCard>
      </div>
      <!-- EMPTY CARD -->

      <!-- ADD STUDENTS SECTION -->
      <EmptyContent
        display_img="EmptyStudent.png"
        display_text="There are currently no students in this class"
        button_type="route"
        button_text="Add Students"
        button_route_name="AddStudents"
      ></EmptyContent>
      <!-- ADD STUDENTS SECTION -->
    </div>
  </div>
</template>

<script>
import EmptyContent from "@/components/globalComps/EmptyContent";
import StudentDefaultCard from "@/components/classComps/members/students/StudentDefaultCard";

export default {
  name: "StudentDefaultInfo",

  components: { StudentDefaultCard, EmptyContent }
};
</script>

<style>
</style>
