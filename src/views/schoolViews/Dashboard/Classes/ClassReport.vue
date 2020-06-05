<template>
  <div>
    <vue-headful title="Class Report | School Dashboard" description="Description goes here"/>
    <div class="class-report-section">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout">
            <!-- MEMBERS CARD COMPONENT -->
            <MembersCard
              :class_id="class_option.id"
              :class_year="class_option.year"
              :class_branch="class_option.branch"
              :class_code="class_option.code"
              @getSelected="switchClass($event)"
              show_add_button
            >
              <div slot="teacher__content">
                <!-- CONTENT TEACHER LIST -->
                <MembersTeacherRow v-if="teacher_count > 0" @toggleTeacher="toggleTeacherModal"></MembersTeacherRow>

                <!-- EMPTY TEACHER LIST -->
                <div class="teacher-list-empty mb-3">
                  <MembersEmptyTeacherRow
                    v-if="teacher_count === 0"
                    @toggleTeacher="toggleTeacherModal"
                  ></MembersEmptyTeacherRow>
                </div>
              </div>
            </MembersCard>
            <!-- MEMBERS CARD COMPONENT -->
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
    <!-- ADD TEACHER MODAL -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <!-- ADD TEACHER MODAL -->
  </div>
</template>

<script>
import MembersCard from "@/components/schoolComps/dashboard/class/MembersCard";
import MembersEmptyTeacherRow from "@/components/schoolComps/dashboard/class/MembersEmptyTeacherRow";
import TopicProgress from "@/components/schoolComps/dashboard/class/class_report/TopicProgress";

const MembersTeacherRow = () => ({
  component: import(/* webpackChunkName: "MembersTeacherRow" */ "@/components/schoolComps/dashboard/class/MembersTeacherRow"),
  loading: MembersEmptyTeacherRow,
  error: MembersEmptyTeacherRow,
  delay: 500,
  timeout: 7000
});

export default {
  name: "ClassReport",

  components: {
    MembersCard,
    MembersEmptyTeacherRow,
    MembersTeacherRow,
    TopicProgress,
    Recommendation: () =>
      import(/* webpackChunkName: "Recommendation" */ "@/components/schoolComps/dashboard/class/class_report/Recommendation"),
    AddTeacherModal: () =>
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/schoolComps/modals/AddTeacherModal")
  },

  data() {
    return {
      teacher_modal: false,
      teacher_count: 1,
      class_option: {
        id: "1",
        year: "Year 7",
        branch: "Gold",
        code: "IMD/JSS1B"
      }
    };
  },

  methods: {
    switchClass(event) {
      this.class_option.id = event.id;
      this.class_option.year = event.year;
      this.class_option.branch = event.branch;
    },

    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    }
  }
};
</script>

<style lang="scss">
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
      background: #2c4f74;
      border: 1px solid #2c4f74;
      color: #ffffff !important;

      span {
        color: #ffffff !important;
      }
    }
  }
}
</style>
