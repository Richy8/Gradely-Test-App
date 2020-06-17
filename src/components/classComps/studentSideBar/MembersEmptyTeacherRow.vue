<template>
  <div class="empty-teacher-list-row">
    <div class="first-row d-flex justify-content-start align-items-start nowrap">
      <!-- TEACHER AVATAR -->
      <div class="avatar border_grey_light_bg">
        <span class="flex-center icon-teacher font-19 border_grey_dark"></span>
      </div>

      <!-- INFO TEXT -->
      <div class="info-text color_ash font-12">No teacher has been assigned to this class yet.</div>
    </div>
    <div class="second-row">
      <div class="add-new-item pointer">
        <div class="undone"></div>
        <div
          class="label-text font-weight-bold brand_accent"
          @click="$emit('toggleTeacher')"
        >Invite Teachers</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MembersEmptyTeacherList"
};
</script>

<style lang="scss">
.empty-teacher-list-row {
  .first-row {
    margin-bottom: 10px;
    .avatar {
      margin-right: 10px;
    }
  }

  .second-row {
    position: relative;
    top: -10px;
    .add-new-item {
      width: 100%;
    }
  }
}
</style>


