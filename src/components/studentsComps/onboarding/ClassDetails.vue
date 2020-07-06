<template>
  <div class="class-details-section">
    <!-- AVATAR -->
    <div class="w-100 d-flex justify-content-center">
      <UniversityIcon></UniversityIcon>
    </div>
    <!-- AVATAR -->

    <!-- ONBOARDING TITLE -->
    <div class="onboarding-title font-weight-bold brand_navy text-center">Set Class Details</div>

    <!-- FORM AREA -->
    <form action @submit.prevent>
      <div class="form-group">
        <label for="class" class="control-label color_grey_dark">What class are you?</label>
        <select class="form-control" id="class" v-model="form.class">
          <option value selected disabled>- Select Class -</option>
        </select>
      </div>

      <div class="form-group">
        <label for="country" class="control-label color_grey_dark">Where are you from</label>
        <select class="form-control" id="country" v-model="form.country">
          <option value selected disabled>- Select Country -</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import UniversityIcon from "@/components/coloredIconPack/UniversityIcon";

export default {
  name: "ClassDetails",

  components: {
    UniversityIcon
  },

  data() {
    return {
      form: {
        class: "",
        country: ""
      }
    };
  }
};
</script>

<style lang="scss">
</style>
