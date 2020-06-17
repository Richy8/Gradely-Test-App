<template>
  <div>
    <div class="teacher-list-row d-flex justify-content-start align-items-center flex-wrap mb-3">
      <MembersTeacherList
        teacher_img="TeacherOne.png"
        teacher_name="Abimbola Mike"
        teacher_subject="Mathematics"
      ></MembersTeacherList>

      <MembersTeacherList
        teacher_img="TeacherTwo.png"
        teacher_name="Abimbola Mike"
        teacher_subject="Mathematics"
      ></MembersTeacherList>

      <MembersTeacherList teacher_img teacher_name="Richy Jones" teacher_subject="Mathematics"></MembersTeacherList>

      <div
        class="avatar avatar-square add-member-teacher position-relative pointer"
        style="top:-5px;"
        @click="$emit('toggleTeacher')"
      >
        <div class="avatar-text transparent_bg">
          <span class="icon-plus border_grey_dark font-17 font-weight-400"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembersTeacherRow",

  components: {
    MembersTeacherList: () =>
      import(/* webpackChunkName: "MembersTeacherList" */ "@/components/classComps/studentSideBar/MembersTeacherList")
  }
};
</script>

<style lang="scss">
.add-member-teacher {
  border: 1px dashed $border_grey;

  &:hover {
    span {
      color: $brand_accent !important;
    }
  }
}
</style>
