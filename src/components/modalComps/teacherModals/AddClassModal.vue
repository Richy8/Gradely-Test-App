<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">ADD CLASS</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <SetupForm :show_invite="false" @findClass="toggleFindClassModal"></SetupForm>

        <div class="row mt-4">
          <div class="col-12 d-flex justify-content-center align-items-center">
            <button class="btn btn-md btn-secondary">Done</button>
          </div>
        </div>
      </div>
    </Modal>

    <!-- MODAL -->
    <FindClassModal v-if="find_class" @closeTriggered="toggleFindClassModal"></FindClassModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import SetupForm from "@/components/teachersComps/onboarding/SetupForm";

export default {
  name: "AddClassModal",

  components: {
    Modal,
    SetupForm,
    FindClassModal: () =>
      import(/* webpackChunkName: "FindClassmodal" */ "@/components/modalComps/teacherModals/FindClassModal")
  },

  data() {
    return {
      find_class: false
    };
  },

  methods: {
    toggleFindClassModal() {
      this.find_class = !this.find_class;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
