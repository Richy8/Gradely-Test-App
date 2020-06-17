<template>
  <div>
    <vue-headful title="Class Report | Teachers" description="Description goes here"/>
    <div class="class-report-section mt-5 base-type-layout">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout">
            <!-- TEACHER CLASSES COMPONENT -->
            <TeacherClassCard></TeacherClassCard>
            <!-- TEACHER CLASSES COMPONENT -->
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS REPORT -->
          <div class="col-12 col-md-9 col-lg-9 right-layout">
            <!-- PAGE TITLE -->
            <div class="page-title font-weight-bold color_text">Class Report</div>

            <!-- REPORT ROW -->
            <div class="report-intro-row d-flex justify-content-between align-items-center nowrap">
              <!-- SUBJECT AND TERM -->
              <div class="left d-flex justify-content-start align-items-center nowrap">
                <!-- SUBJECT SELECT -->
                <div class="subject">
                  <select class="form-control">
                    <option value="Mathematics">Mathematics</option>
                    <option value="English Language">English Language</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Physics">Physics</option>
                  </select>
                </div>

                <!-- TERM SELECT -->
                <div class="term">
                  <select class="form-control">
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                  </select>
                </div>
              </div>

              <!-- EXPORT -->
              <div class="right d-none d-md-block">
                <div class="export-btn rounded-30 color_grey_dark pointer">
                  <div>Export</div>
                  <div class="avatar">
                    <span class="flex-center icon-printer color_ash"></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- TOPIC PROGRESS COMPONENT -->
            <TopicProgress></TopicProgress>
            <!-- TOPIC PROGRESS COMPONENT -->

            <!-- RECOMMENDATION COMPONENTONENT -->
            <Recommendation></Recommendation>
            <!-- RECOMMENDATION COMPONENTONENT -->
          </div>
          <!-- CLASS REPORT -->
        </div>
      </div>
    </div>
    <!-- MODAL COMPONENTS -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <!-- MODAL COMPONENTS -->
  </div>
</template>

<script>
import TeacherClassCard from "@/components/classComps/teacherSideBar/TeacherClassCard";
import TopicProgress from "@/components/classComps/report/TopicProgress";

export default {
  name: "Report",

  components: {
    TeacherClassCard,
    TopicProgress,
    Recommendation: () =>
      import(/* webpackChunkName: "Recommendation" */ "@/components/classComps/report/Recommendation"),
    AddTeacherModal: () =>
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/modalComps/schoolModals/AddTeacherModal")
  },

  data() {
    return {
      teacher_modal: false
    };
  },

  methods: {
    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    }
  }
};
</script>

<style lang='scss'>
.class-report-section {
  .right-layout {
    @include breakpoint_max(lg) {
      padding-left: 30px;
      padding-right: 0px;
    }

    @include breakpoint_max(md) {
      margin-bottom: 80px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}

// PAGE TITLE
.page-title {
  font-size: 21px;
  line-height: 29px;
  margin-bottom: 30px;

  @include breakpoint_max(lg) {
    font-size: 20px;
  }

  @include breakpoint_max(xs) {
    font-size: 19px;
  }
}

.report-intro-row {
  margin-top: 30px;
  margin-bottom: 20px;

  .form-control {
    position: relative;
    border-radius: 30px;
    border: 1px solid $border_grey_light;
    box-sizing: border-box;
    font-size: 13px;
    color: $color_grey_dark;
    padding: 8px 20px;

    &:focus {
      border: 1px solid $brand_accent;
    }

    @include breakpoint_max(xs) {
      font-size: 12px;
    }
  }

  .subject {
    width: 170px;

    @include breakpoint_max(xs) {
      width: 160px;
    }
  }

  .term {
    width: 120px;
    margin-left: 15px;

    @include breakpoint_max(xs) {
      width: 110px;
    }
  }

  .export-btn {
    @include flex_row_between_nowrap;
    background: #ffffff;
    border: 1px solid $border_grey_light;
    box-sizing: border-box;
    width: 110px;
    padding: 6px 20px;
    font-size: 12px;
    line-height: 16px;
    transition: all 0.4s ease-in-out;

    span {
      font-size: 16px;
      margin-left: 11px;
      transition: all 0.4s ease-in-out;
    }

    &:hover {
      background: $brand_primary;
      border: 1px solid $brand_primary;
      color: #ffffff !important;

      span {
        color: #ffffff !important;
      }
    }
  }
}
</style>
