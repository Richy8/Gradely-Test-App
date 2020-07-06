<template>
  <div class="security-question-section">
    <!-- AVATAR -->
    <div class="w-100 d-flex justify-content-center">
      <ShieldIcon></ShieldIcon>
    </div>
    <!-- AVATAR -->

    <!-- ONBOARDING TITLE -->
    <div class="onboarding-title font-weight-bold brand_navy text-center">Set Security Question</div>

    <!-- ONBOADING SUBTITLE -->
    <div
      class="onboarding-subtitle color_ash text-center"
    >Set a security question and answer on your account. You will need this to change your password whenever you forget it.</div>

    <!-- FORM AREA -->
    <form action @submit.prevent>
      <div class="form-group">
        <label for="securityQuestion" class="control-label color_grey_dark">Select a Question</label>
        <select class="form-control" id="securityQuestion" v-model="form.security_question">
          <option value selected disabled>- Select a question -</option>
        </select>
      </div>

      <div class="form-group">
        <label for="securityAnswer" class="control-label color_grey_dark">Answer to your Question</label>
        <input
          type="text"
          v-model="form.security_answer"
          class="form-control"
          id="securityAnswer"
          placeholder="Enter your answer to the selected question"
        >
      </div>
    </form>
  </div>
</template>

<script>
import ShieldIcon from "@/components/coloredIconPack/ShieldIcon";

export default {
  name: "SecurityQuestion",

  components: {
    ShieldIcon
  },

  data() {
    return {
      form: {
        security_question: "",
        security_answer: ""
      }
    };
  }
};
</script>

<style lang="scss">
</style>
