<template>
  <div>
    <div
      class="teacher-class-card position-relative overflow-hidden rounded-5 pointer"
      :class="[active ? 'active-class-card' : 'not-active-class-card']"
    >
      <!-- CLASS LABEL -->
      <div class="class-label position-absolute brand_accent_bg" v-if="active"></div>

      <!-- CLASS INFO  -->
      <div class="d-flex justify-content-between align-items-center nowrap">
        <div class="child-img">
            <img src="@/assets/images/ManSquare-md.png" alt="" >
        </div>
        <div class="class-info">
          <div class="class-name font-weight-bold brand_navy">{{ child_name }}</div>
          <div class="class-code color_grey_dark">{{ child_code }}</div>
        </div>

        <!-- OPTION -->
        <div class="avatar">
          <span class="icon-caret-right flex-center border_grey_dark"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherClassCard",

  props: {
    child_name: String,
    child_code: String,
    active: Boolean
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
  padding: 12px 8px 12px 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: $brand_inverse_light;
  }

  .class-label {
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
  }

  .class-name {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 1px;
  }

  .class-code {
    font-size: 12.5px;
    line-height: 18px;
  }
}

.active-class-card {
  background: $brand_inverse_light;
  @include breakpoint_max(md) {
    background: unset;
  }
}

.not-active-class-card {
  @include breakpoint_max(md) {
    display: none;
  }
}
.child-img{
  width:20%;

  img{
    width:100%
  }
}
</style>
