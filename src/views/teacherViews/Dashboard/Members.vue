<template>
  <div>
    <vue-headful title="Class Members | Teachers" description="Description goes here"/>
    <div class="class-members-section mt-5 base-type-layout">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout mb-4">
            <!-- TEACHER CLASSES COMPONENT -->
            <TeacherClassCard></TeacherClassCard>
            <!-- TEACHER CLASSES COMPONENT -->
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS MEMBERS -->
          <div class="col-12 offset-md-1 col-md-8 offset-lg-0 col-lg-9 right-layout">
            <!-- PAGE TITLE -->
            <div class="page-title font-weight-bold color_text">Members</div>

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
          <!-- CLASS MEMBERS -->
        </div>
      </div>
    </div>
    <!-- MODAL COMPONENTS -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
    <!-- MODAL COMPONENTS -->
  </div>
</template>

<script>
import TeacherClassCard from "@/components/classComps/teacherSideBar/TeacherClassCard";
import StudentDefaultInfo from "@/components/classComps/members/students/StudentDefaultInfo";

const StudentContentInfo = () => ({
  component: import(/* webpackChunkName: "StudentContentInfo" */ "@/components/classComps/members/students/StudentContentInfo"),
  loading: StudentDefaultInfo,
  error: StudentDefaultInfo,
  delay: 500,
  timeout: 7000
});
export default {
  name: "Members",

  components: {
    TeacherClassCard,
    StudentDefaultInfo,
    StudentContentInfo,
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
      student_count: 1
    };
  },

  watch: {
    student_count: "updateStudentView"
  },

  mounted() {
    this.updateStudentView();
  },

  methods: {
    updateStudentView() {
      this.student_count > 0
        ? (this.member_view = "StudentContentInfo")
        : (this.member_view = "StudentDefaultInfo");
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
