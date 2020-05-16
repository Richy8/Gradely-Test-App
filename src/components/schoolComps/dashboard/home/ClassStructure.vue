<template>
  <div class="class-structure-section">
    <!-- ACCORDION TOP -->
    <div class="accordion-top pointer" @click.self="toggleAccordion">
      <div class="left d-flex">
        <div class="icon" @click.self="toggleAccordion" :class="{'active': toggle_accordion}"></div>
        <div class="title color_text" @click.self="toggleAccordion">{{class_year}}</div>
      </div>
      <div class="right color_grey_dark" @click.self="toggleAccordion">{{arms}}</div>
    </div>

    <div class="accordion-bottom" v-if="toggle_accordion">
      <div class="branches w-100 overflow-auto">
        <!-- CLASS BRANCH COMPONENT -->
        <ClassBranch
          :class_branch="class_year+' - Gold'"
          class_code="688va6"
          @openTeacherModal="$emit('teacherModal')"
          @openClassModal="$emit('classModal')"
        />
        <ClassBranch
          :class_branch="class_year+' - Silver'"
          class_code="725bf9"
          @openTeacherModal="$emit('teacherModal')"
          @openClassModal="$emit('classModal')"
        />
        <ClassBranch
          :class_branch="class_year+' - Bronze'"
          class_code="441gt3"
          @openTeacherModal="$emit('teacherModal')"
          @openClassModal="$emit('classModal')"
        />
        <ClassBranch
          :class_branch="class_year+' - Diamond'"
          class_code="722hd6"
          @openTeacherModal="$emit('teacherModal')"
          @openClassModal="$emit('classModal')"
        />
        <!-- CLASS BRANCH COMPONENT -->
      </div>
      <!-- ADD BRANCH -->
      <div class="add-branch pointer">
        <div class="undone"></div>
        <div
          class="label-text font-weight-bold brand_accent"
          @click="$emit('branchModal')"
        >Add more Branches</div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassBranch from "@/components/schoolComps/dashboard/home/ClassBranch";

export default {
  name: "ClassStructure",

  components: {
    ClassBranch
  },

  props: {
    class_year: String,
    arms: String
  },

  data() {
    return {
      toggle_accordion: false
    };
  },

  methods: {
    toggleAccordion() {
      this.toggle_accordion = !this.toggle_accordion;
    }
  }
};
</script>

<style>
</style>
