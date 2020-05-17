<template>
  <div>
    <div class="school-preference">
      <form @submit.prevent>
        <!-- Curriculum One -->
        <div class="preference-card">
          <div class="checkbox">
            <label for="curriculumOne" class="label label-active">
              <!-- INPUT -->
              <input
                type="checkbox"
                id="curriculumOne"
                @change="onChecked"
                v-model="form.curriculum_one"
              >
              <!-- TEXT CONTENT -->
              <div class="text-content">
                <div class="title">Nigerian Curriculum</div>
                <div
                  class="description"
                >Prepare your students for Nigerian accredited examinations at the Senior and Junior secondary School level</div>
              </div>
            </label>
          </div>
        </div>
        <!-- Curriculum One -->

        <!-- Curriculum Two -->
        <div class="preference-card">
          <div class="checkbox">
            <label for="curriculumTwo" class="label">
              <!-- INPUT -->
              <input
                type="checkbox"
                id="curriculumTwo"
                @change="onChecked"
                v-model="form.curriculum_two"
              >
              <!-- TEXT CONTENT -->
              <div class="text-content">
                <div class="title">British Curriculum</div>
                <div
                  class="description"
                >Designed to prepare students for the International General Certificate of Secondary Education.</div>
              </div>
            </label>
          </div>
        </div>
        <!-- Curriculum Two -->
      </form>

      <!-- CURRICULUM REQUEST SECTION -->
      <div class="preference-request rounded-5 pointer" @click.self="toggleModal">
        <span class="icon icon-help-circle d-block" @click.self="toggleModal"></span>
        <div class="help-text" @click.self="toggleModal">Request for more curriculum</div>
      </div>

      <!-- CURRICULUM REQUEST MODAL COMPONENTS -->
      <CurriculumRequestModal v-if="curriculum_request" @closeTriggered="toggleModal"></CurriculumRequestModal>
      <!-- CURRICULUM REQUEST MODAL COMPONENTS -->
    </div>
  </div>
</template>

<script>
import CurriculumRequestModal from "@/components/schoolComps/dashboard/modals/CurriculumRequestModal";

export default {
  name: "CurriculumPref",

  components: { CurriculumRequestModal },

  data() {
    return {
      form: {
        curriculum_one: true,
        curriculum_two: false
      },
      curriculum_request: false
    };
  },

  methods: {
    onChecked(event) {
      event.target.checked
        ? event.target.parentElement.classList.add("label-active")
        : event.target.parentElement.classList.remove("label-active");
    },

    toggleModal() {
      this.curriculum_request = !this.curriculum_request;
    }
  }
};
</script>

<style>
</style>
