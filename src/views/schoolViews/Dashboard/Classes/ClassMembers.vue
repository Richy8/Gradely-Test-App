<template>
  <div>
    <vue-headful title="Class Members | School Dashboard" description="Description goes here"/>
    <div class="class-members-section">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-left-layout">
            <!-- MEMBERS CARD COMPONENT -->
            <MembersCard class_year="Year 7" class_branch="Gold" class_code="IMD/JSS1B">
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

          <!-- CLASS MEMBERS AND TEACHERS -->
          <div class="col-12 offset-md-1 col-md-8 offset-lg-0 col-lg-9 right-layout">
            <!-- PAGE TITLE -->
            <div class="page-title font-weight-bold color_text">Members</div>

            <!-- PAGE TABS -->
            <div class="page-tab w-100 d-flex justify-content-start align-items-center nowrap">
              <div class="tab select-none active" @click="switchView('student')">Students</div>

              <div class="tab select-none" @click="switchView('teacher')">Teachers</div>
            </div>

            <!-- STUDENTS AND TEACHERS COMPONENTS GOES HERE -->
            <transition name="fade" mode="out-in">
              <component
                :is="member_view"
                @toggleMessage="toggleMessageModal"
                @toggleTeacher="toggleTeacherModal"
              ></component>
            </transition>
            <!-- STUDENTS AND TEACHERS COMPONENTS GOES HERE -->
          </div>
          <!-- CLASS MEMBERS AND TEACHERS -->
        </div>
      </div>
    </div>

    <!-- ADD TEACHER MODAL -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <!-- ADD TEACHER MODAL -->
    <!-- NEW MESSAGE MODAL -->
    <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
    <!-- NEW MESSAGE MODAL -->
  </div>
</template>

<script>
import MembersCard from "@/components/schoolComps/dashboard/class/MembersCard";
import MembersEmptyTeacherRow from "@/components/schoolComps/dashboard/class/MembersEmptyTeacherRow";
import StudentDefaultInfo from "@/components/schoolComps/dashboard/class/class_members/students/StudentDefaultInfo";
import TeacherDefaultInfo from "@/components/schoolComps/dashboard/class/class_members/teachers/TeacherDefaultInfo";

const MembersTeacherRow = () => ({
  component: import(/* webpackChunkName: "MembersTeacherRow" */ "@/components/schoolComps/dashboard/class/MembersTeacherRow"),
  loading: MembersEmptyTeacherRow,
  error: MembersEmptyTeacherRow,
  delay: 500,
  timeout: 7000
});

const StudentContentInfo = () => ({
  component: import(/* webpackChunkName: "StudentContentInfo" */ "@/components/schoolComps/dashboard/class/class_members/students/StudentContentInfo"),
  loading: StudentDefaultInfo,
  error: StudentDefaultInfo,
  delay: 500,
  timeout: 7000
});

const TeacherContentInfo = () => ({
  component: import(/* webpackChunkName: "TeacherContentInfo" */ "@/components/schoolComps/dashboard/class/class_members/teachers/TeacherContentInfo"),
  loading: TeacherDefaultInfo,
  error: TeacherDefaultInfo,
  delay: 500,
  timeout: 7000
});

export default {
  name: "ClassMembers",

  components: {
    MembersCard,
    MembersEmptyTeacherRow,
    MembersTeacherRow,
    StudentDefaultInfo,
    TeacherDefaultInfo,
    StudentContentInfo,
    TeacherContentInfo,
    AddTeacherModal: () =>
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/schoolComps/modals/AddTeacherModal"),
    NewMessageModal: () =>
      import(/* webpackChunkName: "NewMessageModal" */ "@/components/schoolComps/modals/NewMessageModal")
  },

  data() {
    return {
      member_view: null,
      teacher_modal: false,
      message_modal: false,
      teacher_count: 1,
      student_count: 1
    };
  },

  watch: {
    teacher_count: "updateTeacherView",
    student_count: "updateStudentView"
  },

  mounted() {
    this.updateStudentView();
  },

  methods: {
    switchView(view) {
      let tabs = document.querySelectorAll(".tab");
      tabs.forEach(elm => {
        elm.classList.remove("active");
      });

      if (view === "student") {
        this.updateStudentView();
        event.target.classList.add("active");
      } else {
        this.updateTeacherView();
        event.target.classList.add("active");
      }
    },

    updateStudentView() {
      this.student_count > 0
        ? (this.member_view = "StudentContentInfo")
        : (this.member_view = "StudentDefaultInfo");
    },

    updateTeacherView() {
      this.teacher_count > 0
        ? (this.member_view = "TeacherContentInfo")
        : (this.member_view = "TeacherDefaultInfo");
    },

    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    },

    toggleMessageModal() {
      this.message_modal = !this.message_modal;
    }
  }
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}

// PAGE TAB
%page-tab-styling {
  position: absolute;
  content: "";
  width: 100%;
  height: 3px;
  bottom: -7.5px;
  left: 0;
  background: $brand_accent;
}

.page-tab {
  padding-bottom: 8px;
  border-bottom: 1px solid $border_grey;

  .tab {
    position: relative;
    font-size: 14px;
    line-height: 19px;
    color: $border_grey_dark;
    padding-left: 15.5px;
    padding-right: 15.5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @include breakpoint_max(lg) {
      font-size: 13.5px;
    }

    &:hover {
      color: #2e2d2d;
      font-weight: 500;

      &:after {
        @extend %page-tab-styling;
      }
    }
  }

  .active {
    color: #2e2d2d;
    font-weight: 500;

    &:after {
      @extend %page-tab-styling;
    }
  }
}
</style>
