<template>
  <div>
    <vue-headful title="School Teachers | Gradelyng" description="Description goes here"/>
    <div class="school-teacher-section">
      <!-- PAGE TITLE -->
      <div class="container px-1">
        <div class="row">

          <div class="col-12 dashboard-header-row">
            <!-- PAGE TITLE -->
            <div class="page-title">Teachers</div>

            <!-- ADD TEACHER INFO -->
            <div
              class="avatar avatar_md btn-accent right-avatar pointer"
              @click="toggleTeacherModal"
            >
              <span class="icon icon-one icon-plus font-24"></span>
            </div>

          </div>
        </div>
      </div>

      <!-- ALERT COMPONENT -->
      <div class="container alert-card-component px-1">
        <div class="row">
          <div class="col-12">
            <Alert v-if="show_alert" @closeAlertDialog="closeAlert">
              <div slot="alert-message">
                <span class="counter font-weight-bold">12</span>
                teachers needs your approval to join a class.
                <router-link
                  to
                  class="btn-link font-weight-bold"
                  @click.native="toggleVerifyTeacherModal"
                >Check them out</router-link>
              </div>
            </Alert>
          </div>
        </div>
      </div>
      <!-- ALERT COMPONENT -->

      <!-- TEACHER CARD COMPONENT DISPLAY -->
      <div class="container teacher-card-display px-1">
        <div class="row">
          <!-- TEACHER CARD -->
          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              initials="BC"
              fullname="Babatunde Calebs"
              email="babatundecalebs@gmail.com"
              :classes=3
              :subject=2
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              initials="EE"
              fullname="Efemena Elvis"
              email="efemenaelvis@gmail.com"
              :classes=2
              :subject=3
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              initials="RJ"
              fullname="Richy Jones"
              email="richyjones@gmail.com"
              :classes=1
              :subject=1
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              initials="FI"
              fullname="Femi Ibioye"
              email="femiibioye@gmail.com"
              :classes=4
              :subject=2
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              initials="FI"
              fullname="Femi Ibioye"
              email="femiibioye@gmail.com"
              :classes=4
              :subject=2
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              initials="BC"
              fullname="Babatunde Calebs"
              email="babatundecalebs@gmail.com"
              :classes=3
              :subject=2
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              initials="RJ"
              fullname="Richy Jones"
              email="richyjones@gmail.com"
              :classes=1
              :subject=1
            ></TeacherCard>
          </div>

           <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              initials="EE"
              fullname="Efemena Elvis"
              email="efemenaelvis@gmail.com"
              :classes=2
              :subject=3
            ></TeacherCard>
          </div>
          <!-- TEACHER CARD -->
        </div>
      </div>
      <!-- TEACHER CARD COMPONENT DISPLAY -->

      <!-- PAGINATION COMPONENT -->
      <div class="container pagination-section px-1">
        <div class="row d-flex flex-center">
          <Pagination></Pagination>
        </div>
      </div>
      <!-- PAGINATION COMPONENT -->
    </div>

    <!-- MODAL COMPONENT -->
    <AddTeacherModal v-if="add_teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <VerifyTeacherModal v-if="verify_teacher_modal" @closeTriggered="toggleVerifyTeacherModal"></VerifyTeacherModal>
    <!-- MODAL COMPONENT -->
  </div>
</template>

<script>
// BACKGROUND COLOR EXTERNAL FUNCTION
import { bgColorSetter } from "@/assets/jsComps/extFunc";
import Pagination from "@/components/basicComps/Pagination";
import Alert from "@/components/basicComps/Alert";
import TeacherCard from "@/components/schoolComps/dashboard/teacher/TeacherCard";
import VerifyTeacherModal from "@/components/schoolComps/dashboard/modals/VerifyTeacherModal";

// MODAL
import AddTeacherModal from "@/components/schoolComps/dashboard/modals/AddTeacherModal";

export default {
  name: "Teacher",

  components: {
    Alert,
    Pagination,
    TeacherCard,
    AddTeacherModal,
    VerifyTeacherModal
  },

  data() {
    return {
      show_alert: true,
      add_teacher_modal: false,
      verify_teacher_modal: false
    };
  },

  mounted() {
    bgColorSetter("#f4f4f4");
  },

  methods: {
    btnHover(event, icon) {
      event.target.firstElementChild.classList.contains(icon)
        ? event.target.firstElementChild.classList.remove(icon)
        : event.target.firstElementChild.classList.add(icon);
    },

    closeAlert() {
      this.show_alert = !this.show_alert;
    },

    toggleTeacherModal() {
      this.add_teacher_modal = !this.add_teacher_modal;
    },

    toggleVerifyTeacherModal() {
      this.verify_teacher_modal = !this.verify_teacher_modal;
    }
  }
};
</script>

<style>
</style>
