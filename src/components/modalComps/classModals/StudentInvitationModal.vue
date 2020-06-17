<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
          <div class="student-invitaion-message">
              <!-- AVATAR -->
              <div class="avatar avatar_xl">
                  <img src="@/assets/images/AddStudent.png" alt="" class="avatar-img">
              </div>

              <!-- TITLE TEXT -->
              <div class="title font-weight-bold color_text text-center">You have added 5 Students</div>

                <!-- MESSAGE -->
              <div class="message text-center">
                  You have created a new Gradely account for 5 students. Download a printable document with their individual login information below. A copy has also been sent to your email address.
              </div>

                <!-- DOWNLOAD BUTTON -->
              <button class="btn btn-md btn-accent">DOWNLOAD AND CONTINUE</button>

              <!-- RETURN TO CLASS -->
              <div class="to-class font-weight-bold text-uppercase text-center">Return to Class</div>
          </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "StudentInvitationModal",

  components: { Modal },

  data(){
      return{
        
      }
  }
};
</script>

<style>
</style>
