<template>
  <div>
    <vue-headful title="Subscription Successful | Gradelyng" description="Description goes here"/>
    <div class="onboarding-section">
      <!-- CLOSE TRIGGER -->
      <div class="pageClose dialogDismiss">
        <button type="button" class="close_dialog cls_lg transparent_bg" @click="backToBilling"></button>
      </div>
      <!-- CLOSE TRIGGER -->

      <div class="container onboarding-wrapper">
        <div class="setup-container">
          <!-- SETUP BOX -->
          <div class="setup-box white rounded-20">
            <!-- SETUP TOP -->
            <div class="w-100 setup-top">
              <!-- SUBSCRIPTION SUCCESS COMPONENT -->
              <SubscriptionComplete></SubscriptionComplete>
              <!-- SUBSCRIPTION SUCCESS COMPONENT -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import SubscriptionComplete from "@/components/globalComps/SettingsComps/BillingComps/SubscriptionComplete";

export default {
  name: "SubscriptionSuccess",

  components: {
    SubscriptionComplete
  },

  data() {
    return {};
  },

  mounted() {
    bgColorSetter("#f0f0f0");
  },

  methods: {
    backToBilling() {
      this.$router.push("/parent/dashboard/settings/billing");
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
