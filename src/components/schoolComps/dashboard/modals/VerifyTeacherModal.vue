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
            <div class="d-flex">
              <!-- APPROVE ALL -->
              <div class="approve-all brand_accent pointer">
                <i class="fas fa-check mr-2"></i> Approve All
              </div>

              <!-- DECLINE ALL -->
              <div class="decline-all brand_tonic pointer">
                <i class="fas fa-times mr-2"></i> Decline All
              </div>
            </div>
          </div>

          <!-- VEIFICATION BLOCK COMPONENT -->
          <VerifyTeacherCard>
            <div slot="teacher-initials">BC</div>
            <div slot="teacher-name">Babatunde Calebs</div>
            <div slot="request-info">
              Wants to Join
              <span class="color_text font-weight-900">Year 11 - GOLD</span> as a
              <span class="color_text font-weight-900">Mathematics</span> teacher
            </div>
          </VerifyTeacherCard>

          <VerifyTeacherCard>
            <div slot="teacher-initials">EE</div>
            <div slot="teacher-name">Efemena Elvis</div>
            <div slot="request-info">
              Wants to Join
              <span class="color_text font-weight-900">Year 11 - GOLD</span> as a
              <span class="color_text font-weight-900">English Language</span> teacher
            </div>
          </VerifyTeacherCard>

          <VerifyTeacherCard>
            <div slot="teacher-initials">FI</div>
            <div slot="teacher-name">Femi Ibioye</div>
            <div slot="request-info">
              Wants to Join
              <span class="color_text font-weight-900">Year 11 - GOLD</span> as a
              <span class="color_text font-weight-900">Basic Technology</span> teacher
            </div>
          </VerifyTeacherCard>

          <VerifyTeacherCard>
            <div slot="teacher-initials">EE</div>
            <div slot="teacher-name">Efemena Elvis</div>
            <div slot="request-info">
              Wants to Join
              <span class="color_text font-weight-900">Year 11 - GOLD</span> as a
              <span class="color_text font-weight-900">English Language</span> teacher
            </div>
          </VerifyTeacherCard>

           <VerifyTeacherCard>
            <div slot="teacher-initials">BC</div>
            <div slot="teacher-name">Babatunde Calebs</div>
            <div slot="request-info">
              Wants to Join
              <span class="color_text font-weight-900">Year 11 - GOLD</span> as a
              <span class="color_text font-weight-900">Mathematics</span> teacher
            </div>
          </VerifyTeacherCard>
          <!-- VEIFICATION BLOCK COMPONENT -->
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/basicComps/Modal";
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

<style>
</style>
