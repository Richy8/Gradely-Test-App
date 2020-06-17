<template>
  <div>
    <div
      class="empty-teacher-card rounded-5 d-flex justify-content-between align-items-center nowrap"
    >
      <div class="left d-flex justify-content-start align-items-center nowrap">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_sm_md brand_white_bg"></div>

        <!-- TEACHER INFO -->
        <div class="teacher-info">
          <div class="name brand_white_bg"></div>
          <div class="meta brand_white_bg"></div>
        </div>
      </div>

      <!-- OPTION -->
      <div class="option brand_white_bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherDefaultCard"
};
</script>

<style lang="scss">
.empty-teacher-card {
  background: rgba(#ffffff, 0.6);
  border: 1px solid $brand_white;
  padding: 14px 15px;
  margin-bottom: 2px;
  @include flex_row_between_nowrap;

  .avatar {
    margin-right: 15px;
  }

  .name {
    width: 188px;
    height: 18px;
    margin-bottom: 7px;

    @include breakpoint_max(xs) {
      width: 160px;
    }
  }

  .meta {
    width: 145px;
    height: 10px;

    @include breakpoint_max(xs) {
      width: 120px;
    }
  }

  .option {
    width: 82px;
    height: 25px;

    @include breakpoint_max(xs) {
      width: 50px;
    }
  }
}
</style>
