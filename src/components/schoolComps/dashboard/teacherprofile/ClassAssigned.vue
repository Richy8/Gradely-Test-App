<template>
  <div>
    <div class="class-assigned-section">
      <!-- TITLE -->
      <div class="page-title font-weight-bold color_text">Assigned Classes</div>

      <!-- CLASS BRANCH ROW -->
      <div class="d-flex justify-content-start align-items-start flex-wrap">
        <ClassBranch
          class_year="Year 7"
          class_branch="Gold"
          subjects="Mathematics, Further Mathematics"
        ></ClassBranch>

        <ClassBranch
          class_year="Year 8"
          class_branch="Silver"
          subjects="Mathematics"
        ></ClassBranch>

        <ClassBranch
          class_year="Year 9"
          class_branch="Bronze"
          subjects="Further Mathematics"
        ></ClassBranch>
      </div>

      <div class="show-more">
        <router-link to class="btn-link font-weight-bold">Assign to another Class</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ClassBranch from "@/components/schoolComps/dashboard/teacherprofile/ClassBranch";
export default {
  name: "ClassAssigned",

  components: {
    ClassBranch
  }
};
</script>

<style>
</style>
