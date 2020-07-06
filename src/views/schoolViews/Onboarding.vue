<template>
  <div>
    <vue-headful title="School Onboarding | Gradelyng" description="Description goes here"/>
    <div class="onboarding-section">
      <div class="container onboarding-wrapper">
        <div class="setup-container">
          <!-- TITLE -->
          <div class="school-setup-title brand_primary text-center font-weight-bold">School Setup</div>
          <!-- SETUP BOX -->
          <div class="setup-box white rounded-20">
            <!-- SETUP TOP -->
            <div class="setup-top w-100">
              <!-- TITLE -->
              <div class="school-sub-title text-center color_text">Setup your classes</div>
              <!-- SETUP FORM COMPONENT -->
              <setupForm/>
              <!-- SETUP FORM COMPONENT -->
            </div>
            <!-- SETUP BOTTOM -->
            <div class="setup-bottom w-100 rounded-bottom-20">
              <button class="btn btn-whitish">Back</button>
              <button class="btn btn-accent" @click="update">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setupForm from "@/components/schoolComps/onboarding/setupForm.vue";
import { bgColorSetter } from "@/scripts/utilities";

export default {
  name: "Onboarding",
  components: {
    setupForm
  },

  mounted() {
    if (!localStorage.getItem("gradelyAuthToken")) {
      this.$router.replace({path: "/login"})
    }
    bgColorSetter("#f0f0f0");
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
.school-setup-title {
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 40px;

  @include breakpoint_max(xl) {
    font-size: 30px;
  }

  @include breakpoint_max(lg) {
    font-size: 29px;
  }

  @include breakpoint_max(md) {
    font-size: 27px;
  }
}

.school-sub-title {
  font-size: 21px;
  line-height: 29px;
  margin-bottom: 38px;

  @include breakpoint_max(xl) {
    font-size: 20px;
  }

  @include breakpoint_max(lg) {
    font-size: 19px;
  }

  @include breakpoint_max(md) {
    font-size: 17px;
  }
}
</style>
