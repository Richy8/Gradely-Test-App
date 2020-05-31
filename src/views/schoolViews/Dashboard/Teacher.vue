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
              class="avatar avatar_sm_md btn-accent right-avatar pointer"
              @click="toggleTeacherModal"
            >
              <span class="icon icon-one icon-plus font-22"></span>
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
      <div class="container px-1">
        <div class="row">
          <!-- TEACHER CARD -->
          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              fullname="Babatunde Calebs"
              email="babatundecalebs@gmail.com"
              :classes="3"
              :subject="2"
              @toggleMessage="toggleMessageModal"
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              fullname="Efemena Elvis"
              email="efemenaelvis@gmail.com"
              :classes="2"
              :subject="3"
              @toggleMessage="toggleMessageModal"
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              fullname="Richy Jones"
              email="richyjones@gmail.com"
              :classes="1"
              :subject="1"
              @toggleMessage="toggleMessageModal"
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              fullname="Femi Ibioye"
              email="femiibioye@gmail.com"
              :classes="4"
              :subject="2"
              @toggleMessage="toggleMessageModal"
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              fullname="Femi Ibioye"
              email="femiibioye@gmail.com"
              :classes="4"
              :subject="2"
              @toggleMessage="toggleMessageModal"
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              fullname="Babatunde Calebs"
              email="babatundecalebs@gmail.com"
              :classes="3"
              :subject="2"
              @toggleMessage="toggleMessageModal"
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              fullname="Richy Jones"
              email="richyjones@gmail.com"
              :classes="1"
              :subject="1"
              @toggleMessage="toggleMessageModal"
            ></TeacherCard>
          </div>

          <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <TeacherCard
              fullname="Efemena Elvis"
              email="efemenaelvis@gmail.com"
              :classes="2"
              :subject="3"
              @toggleMessage="toggleMessageModal"
            ></TeacherCard>
          </div>
          <!-- TEACHER CARD -->
        </div>
      </div>
      <!-- TEACHER CARD COMPONENT DISPLAY -->

      <!-- PAGINATION COMPONENT -->
      <div class="container pagination-section-component px-1">
        <div class="row d-flex flex-center">
          <Pagination></Pagination>
        </div>
      </div>
      <!-- PAGINATION COMPONENT -->
    </div>

    <!-- MODAL COMPONENT -->
    <AddTeacherModal v-if="add_teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>

    <VerifyTeacherModal v-if="verify_teacher_modal" @closeTriggered="toggleVerifyTeacherModal"></VerifyTeacherModal>

    <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
    <!-- MODAL COMPONENT -->
  </div>
</template>

<script>
import TeacherCard from "@/components/schoolComps/dashboard/teacher/TeacherCard";
import Alert from "@/components/globalComps/Alert";
import Pagination from "@/components/globalComps/Pagination";

export default {
  name: "Teacher",

  components: {
    TeacherCard,
    Alert,
    Pagination,
    AddTeacherModal: () =>
      import(/* webpackChunkName: "addteachermodal" */ "@/components/schoolComps/modals/AddTeacherModal"),
    VerifyTeacherModal: () =>
      import(/* webpackChunkName: "verifyteachermodal" */ "@/components/schoolComps/modals/VerifyTeacherModal"),
    NewMessageModal: () =>
      import(/* webpackChunkName: "newmessagemodal" */ "@/components/schoolComps/modals/NewMessageModal")
  },

  data() {
    return {
      show_alert: true,
      add_teacher_modal: false,
      verify_teacher_modal: false,
      message_modal: false
    };
  },

  methods: {
    closeAlert() {
      this.show_alert = !this.show_alert;
    },

    toggleTeacherModal() {
      this.add_teacher_modal = !this.add_teacher_modal;
    },

    toggleVerifyTeacherModal() {
      this.verify_teacher_modal = !this.verify_teacher_modal;
    },

    toggleMessageModal() {
      this.message_modal = !this.message_modal;
    }
  }
};
</script>

<style>
</style>
