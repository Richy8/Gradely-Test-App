<template>
  <div class="class-structure-section">
    <!-- ACCORDION TOP -->
    <div class="accordion-top pointer" @click="toggleAccordion">
      <div class="left d-flex">
        <div class="position-relative icon" :class="{'active': toggle_accordion}"></div>
        <div class="title color_text">{{class_year}}</div>
      </div>
      <div class="right color_grey_dark font-14">{{getArms}}</div>
    </div>

    <div class="accordion-bottom" v-if="toggle_accordion">
      <div
        class="branches w-100 d-flex justify-content-start align-items-start nowrap overflow-auto"
      >
        <!-- CLASS BRANCH COMPONENT -->
        <ClassBranch
          :class_year="class_year"
          class_branch="Gold"
          class_code="688va6"
          class_subject="Mathematics, Further Mathematics"
          branch_type="code"
          :show_option="true"
          @openTeacherModal="$emit('teacherModal')"
          @openClassModal="$emit('classModal')"
        />

        <ClassBranch
          :class_year="class_year"
          class_branch="Silver"
          class_code="688va6"
          class_subject="Mathematics"
          branch_type="code"
          :show_option="true"
          @openTeacherModal="$emit('teacherModal')"
          @openClassModal="$emit('classModal')"
        />

        <ClassBranch
          :class_year="class_year"
          class_branch="Bronze"
          class_code="688va6"
          class_subject="Mathematics, English Language"
          branch_type="code"
          :show_option="true"
          @openTeacherModal="$emit('teacherModal')"
          @openClassModal="$emit('classModal')"
        />
        <!-- CLASS BRANCH COMPONENT -->
      </div>

      <!-- ADD NEW BRANCH -->
      <div class="add-new-item pointer">
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
export default {
  name: "ClassStructure",

  components: {
    ClassBranch: () =>
      import(/* webpackChunkName: "classbranch" */ "@/components/schoolComps/dashboard/home/ClassBranch")
  },

  props: {
    class_year: String,
    arms: Number,
    active_accordion: Boolean
  },

  computed: {
    getArms() {
      if (this.arms === 0) {
        return `${this.default_arm} Arm`;
      } else if (this.arms === 1) {
        return `${this.arms} Arm`;
      } else {
        return `${this.arms} Arm`;
      }
    }
  },

  watch: {
    active_accordion: "updateAccordionDropdown"
  },

  mounted() {
    this.updateAccordionDropdown();
  },

  data() {
    return {
      default_arm: 0,
      toggle_accordion: false
    };
  },

  methods: {
    toggleAccordion() {
      this.toggle_accordion = !this.toggle_accordion;
    },

    updateAccordionDropdown() {
      this.toggle_accordion = this.active_accordion;
    }
  }
};
</script>

<style lang="scss">
// ACCORDION SECTION
.class-structure-section {
  margin: 5px auto;

  .accordion-top {
    .icon {
      margin-right: 25px;

      &:after {
        position: absolute;
        content: "";
        @include transform_center;
        @include equal_min_edge(9);
        border-top: 1px solid #000000;
        border-left: 1px solid #000000;
        transform: translateY(-6px) rotate(225deg);
        transition: transform 0.3s ease-in-out;
      }
    }

    .active {
      &:after {
        transform: translateY(-2px) rotate(45deg);
      }
    }

    .title {
      @include breakpoint_max(lg) {
        font-size: 14px;
      }

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
    }

    .right {
      @include breakpoint_max(lg) {
        font-size: 12px !important;
      }
    }
  }

  .accordion-bottom {
    .branches {
      &::-webkit-scrollbar {
        height: 5px;
      }

      &::-webkit-scrollbar-track {
        border-radius: 3px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: $color_grey_light;
      }

      @include breakpoint_max(md) {
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    // ADD NEW ITEM
    .add-new-item {
      margin-top: 15px;
      margin-bottom: 0px;
    }
  }
}
</style>
