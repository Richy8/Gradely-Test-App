<template>
  <div>
    <div class="teacher-class-card d-flex justify-content-start align-items-center nowrap">
      <!-- AVATAR -->
      <div class="avatar avatar-square avatar_md brand_inverse_light_bg">
        <span class="icon-classboard flex-center font-22"></span>
      </div>

      <!-- CLASS INFO -->
      <div class="class-info">
        <div class="school-name font-weight-bold color_grey_dark">{{ school_name }}</div>
        <div class="class-name brand_navy">{{ class_name }}</div>
      </div>

      <!-- REMOVE -->
      <div class="remove mt-4">
        <router-link to class="btn-link link-no-underline font-weight-bold">REMOVE</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherClassCard",

  props: {
    school_name: String,
    class_year: String,
    class_branch: String
  },

  computed: {
    class_name() {
      return `${this.class_year} - ${this.class_branch}`;
    }
  }
};
</script>

<style lang="scss">
.teacher-class-card {
  margin-bottom: 22px;

  .avatar {
    margin-right: 15px;
  }

  .class-info {
    margin-right: 18px;

    .school-name {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 5px;

      @include breakpoint_max(sm) {
        margin-bottom: 1px;
        font-size: 12.5px;
      }
    }

    .class-name {
      font-size: 18px;
      line-height: 25px;

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }
  }

  .remove {
    font-size: 13.5px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 12.5px;
    }
  }
}
</style>
