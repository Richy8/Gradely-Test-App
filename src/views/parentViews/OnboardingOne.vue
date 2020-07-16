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
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import NewChildForm from "@/components/parentsComps/onboarding/NewChildForm.vue";

export default {
  name: "OnboardingOne",

  components: {
    NewChildForm
  },

  data() {
    return {};
  },

  mounted() {
    bgColorSetter("#f0f0f0");
  },

  methods: {}
};
</script>

<style lang="scss">
.onboarding-section {
  .onboarding-bottom {
    margin: 50px auto 60px;
  }
}
</style>
