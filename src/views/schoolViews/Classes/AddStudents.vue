<template>
  <div>
    <vue-headful title="Add Students | School Dashboard" description="Description goes here"/>
    <div class="add-students-page">
      <!-- PAGE TITLE -->
      <div class="container px-1">
        <div class="row">
          <div class="col-12">
            <div class="dashboard-header-row">
              <div class="page-title">Add Students</div>
            </div>
          </div>
        </div>
      </div>

      <!-- STUDENT CLASS ADDUP FORM -->
      <div class="container px-1 form-container">
        <form action @submit.prevent>
          <!-- CLASS NAME -->
          <div class="row form-row-group">
            <!-- LABEL -->
            <div class="col-12 col-md-3">
              <label for="className" class="control-label">Class</label>
              <div class="label-info">Class to add students</div>
            </div>

            <!-- INPUT -->
            <div class="col-12 col-md-9">
              <select id="className" class="form-control form-control-top">
                <option value selected disabled>Select Class</option>
                <option value="JSS2 - Gold">JSS2 - Gold (IMD/JSS2gold)</option>
                <option value="JSS2 - Silver">JSS2 - Silver (IMD/JSS2silver)</option>
                <option value="JSS2 - Bronze">JSS2 - Bronze (IMD/JSS2bronze)</option>
              </select>
            </div>
          </div>

          <!-- DEFAULT PASSWORD -->
          <div class="row form-row-group">
            <!-- LABEL -->
            <div class="col-12 col-md-3">
              <label for="defaultPwd" class="control-label">Default Password</label>
              <div
                class="label-info"
              >This will be required for your students to log into their gradely account.</div>
            </div>

            <!-- INPUT -->
            <div class="col-12 col-md-9">
              <input
                type="password"
                class="form-control form-control-top"
                id="defaultPwd"
                placeholder="Create a default password"
              >
            </div>
          </div>

          <!-- STUDENT INFO FORM -->
          <div class="student-info-form overflow-auto">
            <table class="table">
              <thead>
                <tr>
                  <td></td>
                  <td class="font-weight-bold font-14 color_grey_dark">STUDENT NAME</td>
                  <td class="font-weight-bold font-14 color_grey_dark">
                    EMAIL ADDRESS
                    <span
                      class="hint--top hint--primary hint--midlg hint--rounded"
                      aria-label="We recommend adding the parent’s email address"
                    >
                      <i class="fas fa-info-circle red-text ml-2"></i>
                    </span>
                  </td>
                  <td class="font-weight-bold font-14 color_grey_dark">
                    PHONE NUMBER
                    <span
                      class="hint--top hint--primary hint--midlg hint--rounded"
                      aria-label="We recommend adding the parent’s phone number"
                    >
                      <i class="fas fa-info-circle red-text ml-2"></i>
                    </span>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(student, index) in student_form" :key="index">
                  <td class="text-center d-flex justify-content-center align-items-center">
                    <div class="avatar">
                      <div class="avatar-text color_grey_dark">{{ student.id }}</div>
                    </div>
                  </td>
                  <td>
                    <input
                      type="text"
                      v-model="student.fullname"
                      class="form-control"
                      placeholder="First name, Last name"
                    >
                  </td>
                  <td>
                    <input
                      type="email"
                      v-model="student.email"
                      class="form-control"
                      placeholder="Email Address"
                    >
                  </td>
                  <td>
                    <input
                      type="number"
                      v-model="student.phone"
                      class="form-control"
                      placeholder="Phone Number"
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- ADD ANOTHER STUDENT -->
          <div class="add-new-item pointer">
            <div class="undone"></div>
            <div class="label-text font-weight-bold brand_accent">Add another Student</div>
          </div>

            <!-- FORM DIVIDER -->
          <div class="form-divider"></div>

          <div class="form-group d-flex justify-content-center align-items-center mb-5">
              <button class="btn btn-md transparent_bg color_text z-depth-0 mr-3">Cancel</button>
              <button class="btn btn-md btn-accent ml-3" @click="toggleModal">Add all to Class</button>
          </div>
        </form>
      </div>
      <!-- STUDENT CLASS ADDUP FORM -->

    <!-- STUDENT INVITAION MESSAGE MODAL COMPONENT -->
    <StudentInvitationModal v-if="on_success" @closeTriggered="toggleModal"></StudentInvitationModal>
    <!-- STUDENT INVITAION MESSAGE MODAL COMPONENT -->

    </div>
  </div>
</template>

<script>
import StudentInvitationModal from "@/components/schoolComps/dashboard/modals/StudentInvitationModal";

export default {
  name: "AddStudents",

  components: {StudentInvitationModal},

  data() {
    return {
      class_form: {
        class_name: "",
        password: ""
      },
      student_form: [
        {
          id: 1,
          fullname: "",
          email: "",
          phone: ""
        },
        {
          id: 2,
          fullname: "",
          email: "",
          phone: ""
        },
        {
          id: 3,
          fullname: "",
          email: "",
          phone: ""
        },
        {
          id: 4,
          fullname: "",
          email: "",
          phone: ""
        },
        {
          id: 5,
          fullname: "",
          email: "",
          phone: ""
        }
      ],
      on_success: false
    };
  },

  methods: {
      toggleModal() {
          this.on_success = !this.on_success;
      }
  }
};
</script>

<style>
</style>
