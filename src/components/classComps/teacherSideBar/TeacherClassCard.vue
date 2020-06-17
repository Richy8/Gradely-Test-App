<template>
  <div>
    <div class="teacher-class-container white rounded-5 w-100 h-auto">
      <!-- CLASS CARD COMPONENT -->
      <ClassCard
        :class_year="data.class_year"
        :class_branch="data.class_branch"
        :class_code="data.class_code"
        :active="data.active"
        v-for="(data, index) in classes"
        :key="index"
      ></ClassCard>
      <!-- CLASS CARD COMPONENT -->

      <!-- ADD CLASS OPTION -->
      <div class="add-more-class">
        <div class="add-new-item pointer w-100 my-1" @click="toggleClassModal">
          <div class="undone"></div>
          <div class="label-text color_text">Add another Class</div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <AddClassModal v-if="class_modal" @closeTriggered="toggleClassModal"></AddClassModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import ClassCard from "@/components/classComps/teacherSideBar/ClassCard";

export default {
  name: "TeacherClassCard",

  components: {
    ClassCard,
    AddClassModal: () =>
      import(/* webpackChunkName: "AddClassModal" */ "@/components/modalComps/teacherModals/AddClassModal")
  },

  data() {
    return {
      classes: [
        {
          class_year: "Year 7",
          class_branch: "Gold",
          class_code: "IMD/Y7GLD",
          active: true
        },
        {
          class_year: "Year 8",
          class_branch: "Silver",
          class_code: "IMD/Y8SLV",
          active: false
        }
      ],
      class_modal: false
    };
  },

  methods: {
    toggleClassModal() {
      this.class_modal = !this.class_modal;
    }
  }
};
</script>

<style lang="scss">
.teacher-class-container {
  @include breakpoint_max(lg) {
    width: 115% !important;
  }

  @include breakpoint_max(md) {
    width: 100% !important;
    margin-bottom: 20px;
  }
  .add-more-class {
    border-top: 1px solid $border_grey;
    padding: 15px 16px;
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(md) {
      display: none;
    }
  }
}
</style>
