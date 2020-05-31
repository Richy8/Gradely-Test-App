<template>
  <div>
    <Modal modal_size="modal-md" @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">Verify Teacher</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <!-- VERIFY TEACHER MODAL -->
        <div class="verify-teacher-modal">
          <div class="verify-teacher-top">
            <div class="d-flex justify-content-end align-items-center nowrap">
              <!-- APPROVE ALL -->
              <div class="approve-all font-weight-500 font-14 brand_accent pointer">
                <span class="icon-accept mr-2 font-18"></span> Approve All
              </div>

              <!-- DECLINE ALL -->
              <div class="decline-all font-weight-500 font-14 brand_tonic pointer">
                <span class="icon-decline font-18 mr-2"></span> Decline All
              </div>
            </div>
          </div>

          <!-- VEIFICATION BLOCK COMPONENT -->
          <VerifyTeacherCard
            fullname="Efemena Elvis"
            class_year="year 7"
            class_branch="Gold"
            class_subject="English Language"
          ></VerifyTeacherCard>

          <VerifyTeacherCard
            fullname="Efemena Elvis"
            class_year="year 7"
            class_branch="Gold"
            class_subject="English Language"
          ></VerifyTeacherCard>

          <VerifyTeacherCard
            fullname="Efemena Elvis"
            class_year="year 7"
            class_branch="Gold"
            class_subject="English Language"
          ></VerifyTeacherCard>

          <VerifyTeacherCard
            fullname="Efemena Elvis"
            class_year="year 7"
            class_branch="Gold"
            class_subject="English Language"
          ></VerifyTeacherCard>
          <!-- VEIFICATION BLOCK COMPONENT -->
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import VerifyTeacherCard from "@/components/schoolComps/dashboard/teacher/VerifyTeacherCard";

export default {
  name: "VerifyTeacherModal",

  components: {
    Modal,
    VerifyTeacherCard
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
// VERIFY TEACHER MODAL
.verify-teacher-modal {
  .verify-teacher-top {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid $border_grey;

    .approve-all,
    .decline-all {
      span {
        position: relative;
        top: 2px;
      }
      transition: color 0.3s ease-in-out;
    }

    .approve-all {
      margin-right: 32px;

      &:hover {
        color: darken($brand_accent, 30%) !important;
      }
    }

    .decline-all {
      &:hover {
        color: darken($brand_tonic, 30%) !important;
      }
    }
  }
}
</style>
