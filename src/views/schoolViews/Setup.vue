<template>
  <div>
    <vue-headful title="Setup your school account | Gradelyng" description="Description goes here"/>
    <div class="school-setup-section">
      <b-container fluid>
        <b-row class="position-relative w-100 border">
          <b-col class="setup-container">
            <!-- TITLE -->
            <div class="title brand_primary text-center font-weight-bold">School Setup</div>
            <!-- SETUP BOX -->
            <div class="setup-box w-100 white rounded-20">
              <!-- SETUP TOP -->
              <div class="setup-top w-100 h-auto">
                <!-- TITLE -->
                <div class="title text-center color_text">Setup your classes</div>
                <!-- SETUP FORM COMPONENT -->
                <setupForm/>
                <!-- SETUP FORM COMPONENT -->
              </div>
              <!-- SETUP BOTTOM -->
              <div class="setup-bottom w-100 rounded-bottom-20">
                <button class="btn btn-whitish">Back</button>
                <button class="btn btn-accent">Continue</button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import setupForm from "@/components/schoolComps/setup/setupForm.vue";

export default {
  name: "Setup",
  components: {
    setupForm
  }
};
</script>

<style lang="scss" scoped>
</style>
