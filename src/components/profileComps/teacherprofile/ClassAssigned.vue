<template>
  <div>
    <div class="class-assigned-section">
      <!-- TITLE -->
      <div class="page-title font-weight-bold color_text">Assigned Classes</div>

      <!-- CLASS BRANCH ROW -->
      <div class="class-branch-row d-flex justify-content-start align-items-start flex-wrap">
        <ClassBranch
          class_year="Year 7"
          class_branch="Gold"
          class_subject="Mathematics, Further Mathematics"
          branch_type="subject"
          :show_option="false"
        ></ClassBranch>

        <ClassBranch
          class_year="Year 8"
          class_branch="Silver"
          class_subject="Mathematics, Chemistry, Physics"
          branch_type="subject"
          :show_option="false"
        ></ClassBranch>

        <ClassBranch
          class_year="Year 9"
          class_branch="Bronze"
          class_subject="Further Mathematics, Physics"
          branch_type="subject"
          :show_option="false"
        ></ClassBranch>
      </div>

      <div class="show-more position-relative" style="top: -50px; margin-bottom: -30px;">
        <router-link to class="btn-link font-weight-bold">Assign to another Class</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassAssigned",

  components: {
    ClassBranch: () =>
      import(/* webpackChunkName: "classbranch" */ "@/components/schoolComps/dashboard/home/ClassBranch")
  }
};
</script>

<style lang="scss">
.class-assigned-section {
  margin-bottom: 30px;

  .class-branch-row {
    width: 100%;
    @include breakpoint_min_max(320, 399) {
      overflow: auto;
      flex-flow: row nowrap !important;
    }
  }
}
</style>
