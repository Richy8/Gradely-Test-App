<template>
  <div>
    <vue-headful title="Class Members | School Dashboard" description="Description goes here"/>
    <div class="class-members-section sub-type-layout">
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
import MembersCard from "@/components/classComps/studentSideBar/MembersCard";
import MembersEmptyTeacherRow from "@/components/classComps/studentSideBar/MembersEmptyTeacherRow";
import StudentDefaultInfo from "@/components/classComps/members/students/StudentDefaultInfo";
import TeacherDefaultInfo from "@/components/classComps/members/teachers/TeacherDefaultInfo";

const MembersTeacherRow = () => ({
  component: import(/* webpackChunkName: "MembersTeacherRow" */ "@/components/classComps/studentSideBar/MembersTeacherRow"),
  loading: MembersEmptyTeacherRow,
  error: MembersEmptyTeacherRow,
  delay: 500,
  timeout: 7000
});

const StudentContentInfo = () => ({
  component: import(/* webpackChunkName: "StudentContentInfo" */ "@/components/classComps/members/students/StudentContentInfo"),
  loading: StudentDefaultInfo,
  error: StudentDefaultInfo,
  delay: 500,
  timeout: 7000
});

const TeacherContentInfo = () => ({
  component: import(/* webpackChunkName: "TeacherContentInfo" */ "@/components/classComps/members/teachers/TeacherContentInfo"),
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
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/modalComps/schoolModals/AddTeacherModal"),
    NewMessageModal: () =>
      import(/* webpackChunkName: "NewMessageModal" */ "@/components/modalComps/messageModals/NewMessageModal")
  },

  data() {
    return {
      member_view: null,
      teacher_modal: false,
      message_modal: false,
      teacher_count: 1,
      student_count: 1,
      class_option: {
        id: "1",
        year: "Year 7",
        branch: "Gold",
        code: "IMD/JSS1B"
      }
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

    switchClass(event) {
      this.class_option.id = event.id;
      this.class_option.year = event.year;
      this.class_option.branch = event.branch;
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
.class-members-section {
  .right-layout {
    @include breakpoint_max(md) {
      margin-bottom: 80px;
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

    @include breakpoint_max(sm) {
      font-size: 18px;
    }
  }
}
</style>
