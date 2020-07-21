<template>
  <div>
    <vue-headful title="Parent Invitation | Gradelyng" description="Description goes here"/>
    <div class="onboarding-section">
      <div class="container onboarding-wrapper">
        <!-- CLOSE TRIGGER -->
        <div class="pageClose">
          <router-link :to="{name: 'StudentFeeds'}" class="transparent_bg color_ash">
            <span
              class="icon-decline color_grey_dark font-16 position-relative"
              style="top: 1.5px;"
            ></span> Cancel
          </router-link>
        </div>
        <!-- CLOSE TRIGGER -->

        <div class="setup-container">
          <!-- SETUP BOX -->
          <div class="setup-box white rounded-20">
            <!-- SETUP TOP -->
            <div class="w-100 setup-top">
              <!-- INVITAION FORM  -->
              <ParentInviteForm></ParentInviteForm>
              <!-- INVITAION FORM  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import ParentInviteForm from "@/components/studentsComps/onboarding/ParentInviteForm";

export default {
  name: "Onboarding",

  components: {
    ParentInviteForm
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
