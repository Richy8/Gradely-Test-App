<template>
  <div>
    <!-- ACCORDION TOP -->
    <div
      class="accordion-top d-flex justify-content-start align-items-center nowrap pointer"
      @click="toggleAccordion"
    >
      <div class="avatar mr-3">
        <span class="flex-center color_grey_dark font-15">
          <span class="icon-caret-right" v-if="close"></span>
          <span class="icon-caret-down" v-if="open"></span>
        </span>
      </div>

      <div class="info">
        <div class="question color_text font-weight-bold">{{ question }}</div>
        <div
          class="description color_grey_dark"
        >{{ struggling_student }} of {{ total_student }} students struggled with this question</div>
      </div>
    </div>

    <!-- ACCORDION BOTTOM -->
    <div class="accordion-bottom white" v-if="toggle_accordion">
      <div class="struggling-list">
        <div class="student" v-for="(student, index) in student_list" :key="index">
          <!-- AVATAR -->
          <div class="avatar">
            <img :src="dynamicImg(student.img)" :alt="student.name" class="avatar-img">
          </div>
          <!-- NAME -->
          <div class="name color_text font-weight-bold">{{ student.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StrugglingStudent",

  props: {
    question: String,
    struggling_student: Number,
    total_student: Number,
    student_list: Array
  },

  data() {
    return {
      close: true,
      open: false,
      toggle_accordion: false
    };
  },

  methods: {
    toggleAccordion() {
      this.close = !this.close;
      this.open = !this.open;
      this.toggle_accordion = !this.toggle_accordion;
    }
  }
};
</script>

<style lang="scss">
.accordion-top,
.accordion-bottom {
  border: 1px solid $border_grey_light;
}

.accordion-top {
  z-index: 1 !important;

  .info {
    .question {
      margin-bottom: 2px;
      font-size: 14px;
      line-height: 19px;

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
    }

    .description {
      font-size: 11px;
      line-height: 15px;
    }
  }
}

.accordion-bottom {
  .struggling-list {
    padding: 10px 50px 16px;
    @include flex_row_start_wrap;

    .student {
      @include flex_row_start_nowrap;
      margin-right: 50px;
      margin-bottom: 30px;

      .avatar {
        margin-right: 15px;
      }

      .name {
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
}
</style>
