<template>
  <div>
    <vue-headful title="Student Onboarding | Gradelyng" description="Description goes here"/>
    <div class="onboarding-section">
      <div class="container onboarding-wrapper">
        <div class="setup-container">
          <!-- SETUP BOX -->
          <div class="setup-box white rounded-20">
            <!-- SETUP TOP -->
            <div
              class="w-100"
              :class="[in_view==='SelectAvatar' ? 'setup-avatar-section': 'setup-top']"
            >
              <!-- ONBOARDING FORM COMPONENT -->
              <transition name="fade" mode="out-in">
                <keep-alive>
                  <component :is="in_view"></component>
                </keep-alive>
              </transition>
              <!-- ONBOARDING FORM COMPONENT -->
            </div>

            <!-- SETUP BOTTOM -->
            <div class="w-100 d-flex justify-content-center align-items-center">
              <button
                class="btn btn-secondary onboarding-bottom"
                v-if="in_view!=='SelectAvatar'"
                @click="nextOnboarding"
              >Continue</button>
              <button
                class="btn btn-secondary font-weight-bold onboarding-bottom mt-0"
                @click="processOnboarding"
                v-else
              >Finish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import SecurityQuestion from "@/components/studentsComps/onboarding/SecurityQuestion.vue";
import SelectAvatar from "@/components/studentsComps/onboarding/SelectAvatar.vue";

export default {
  name: "Onboarding",

  components: {
    SecurityQuestion,
    SelectAvatar
  },

  data() {
    return {
      in_view: "SecurityQuestion",
      views: ["SecurityQuestion", "SelectAvatar"],
      active: 0
    };
  },

  mounted() {
    bgColorSetter("#f0f0f0");
  },

  methods: {
    nextOnboarding() {
      this.active += 1;
      this.in_view = this.views[this.active];
    },

    processOnboarding() {
      this.$router.push("/student/dashboard");
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
