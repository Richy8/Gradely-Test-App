<template>
  <div>
    <vue-headful
      title="Parent Onboarding - Connect Child | Gradelyng"
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
              <ConnectChildForm></ConnectChildForm>
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
import ConnectChildForm from "@/components/parentsComps/onboarding/ConnectChildForm.vue";

export default {
  name: "OnboardingTwo",

  components: {
    ConnectChildForm
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
