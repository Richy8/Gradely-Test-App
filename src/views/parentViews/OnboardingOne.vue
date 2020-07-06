<template>
  <div>
    <vue-headful
      title="Parent Onboarding - Add Child | Gradelyng"
      description="Description goes here"
    />
    <div class="onboarding-section">
      <div class="container onboarding-wrapper">
        <div class="setup-container">
          <!-- SETUP BOX -->
          <div class="setup-box white rounded-20">
            <!-- SETUP TOP -->
            <div class="w-100 setup-top">
              <!-- ONBOARDING FORM COMPONENT -->
              <NewChildForm></NewChildForm>
              <!-- ONBOARDING FORM COMPONENT -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <WelcomeDialogue v-if="welcome_dialogue" @closeDialog="dialogueCompleted"></WelcomeDialogue>
    <!-- MODAL -->
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import WelcomeDialogue from "@/components/schoolComps/welcome/WelcomeDialog";
import NewChildForm from "@/components/parentsComps/onboarding/NewChildForm.vue";

export default {
  name: "OnboardingOne",

  components: {
    WelcomeDialogue,
    NewChildForm
  },

  data() {
    return {
      welcome_dialogue: true
    };
  },

  mounted() {
    bgColorSetter("#f0f0f0");
  },

  methods: {
    dialogueCompleted() {
      this.welcome_dialogue = !this.welcome_dialogue;
    }
  }
};
</script>

<style lang="scss">
.onboarding-section {
  .onboarding-bottom {
    margin: 50px auto 60px;
  }
}
</style>
