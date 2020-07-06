<template>
  <div>
    <div class="default-setup-block">
      <div
        class="text brand_inverse_light"
      >You have no upcoming activities. Here are things you can do to fix that.</div>
    </div>

    <!-- ACTIVITY LIST -->
    <ActivityList
      activity_progress="undone"
      activity_text="Invite your school"
      activity_type="route"
      activity_route
      activity_function
      label_text="brand_inverse_light"
      v-if="account_type==='parent'"
    ></ActivityList>

    <ActivityList
      activity_progress="undone"
      activity_text="Join a class"
      activity_type="route"
      activity_route
      activity_function
      label_text="brand_inverse_light"
      v-if="account_type==='parent' || account_type==='student'"
    ></ActivityList>

    <ActivityList
      activity_progress="undone"
      activity_text="Take Practice"
      activity_type="route"
      activity_route
      activity_function
      label_text="brand_inverse_light"
      v-if="account_type==='parent'"
    ></ActivityList>

    <ActivityList
      activity_progress="undone"
      activity_text="Book a Tutor"
      activity_type="route"
      activity_route
      activity_function
      label_text="brand_inverse_light"
      v-if="account_type==='parent'"
    ></ActivityList>

    <ActivityList
      activity_progress="undone"
      activity_text="Invite your Parent"
      activity_type="route"
      activity_route
      activity_function
      label_text="brand_inverse_light"
      v-if="account_type==='student'"
    ></ActivityList>

    <ActivityList
      activity_progress="undone"
      activity_text="Take Diagnostic Test"
      activity_type="route"
      activity_route
      activity_function
      label_text="brand_inverse_light"
      v-if="account_type==='student'"
    ></ActivityList>

    <ActivityList
      activity_progress="undone"
      activity_text="Update Profile"
      activity_type="route"
      activity_route
      activity_function
      label_text="brand_inverse_light"
      v-if="account_type==='student'"
    ></ActivityList>
  </div>
</template>

<script>
import ActivityList from "@/components/schoolComps/dashboard/home/ActivityList";

export default {
  name: "DefaultSetupBlock",

  components: {
    ActivityList
  },

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.default-setup-block {
  .text {
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 15px;
  }
}
</style>
