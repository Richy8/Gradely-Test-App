<template>
  <div class="user-lander-section">
    <!-- USER DATA -->
    <div class="user-group-row">
      <div class="label">Your Name</div>
      <div class="user-data d-flex justify-content-start align-items-center nowrap">
        <div class="value">{{ fullname }}</div>
        <div class="update-link font-weight-bold">
          <router-link
            :to="'/'+account_type+'/dashboard/settings'"
            class="btn-link font-weight-bold"
          >Update</router-link>
        </div>
      </div>
    </div>

    <!-- LOGIN EMAIL -->
    <div class="user-group-row">
      <div class="label">Login Email</div>
      <div class="user-data d-flex justify-content-start align-items-center nowrap">
        <div class="value">{{ email }}</div>
        <div class="update-link btn-link" @click="toggleEmailModal">Update</div>
      </div>
    </div>

    <!-- STUDENT CODE -->
    <div class="user-group-row" v-if="account_type==='student'">
      <div class="label">Student Code</div>
      <div class="user-data d-flex justify-content-start align-items-center nowrap">
        <div class="value">{{ student_code }}</div>
      </div>
    </div>

    <!-- PASSWORD -->
    <div class="user-group-row">
      <div class="label">Password</div>
      <div class="user-data d-flex justify-content-start align-items-center nowrap">
        <div class="value">**********</div>
        <div class="update-link font-weight-bold">
          <router-link
            :to="'/'+account_type+'/dashboard/settings/account-settings'"
            class="btn-link font-weight-bold"
          >Update</router-link>
        </div>
      </div>
    </div>

    <!-- EMAIL UPDATE MODAL COMPONENT -->
    <UpdateEmailModal v-if="email_modal" @closeTriggered="toggleEmailModal"></UpdateEmailModal>
  </div>
</template>

<script>
export default {
  name: "PersonalProfileDetails",

  components: {
    UpdateEmailModal: () =>
      import(/* webpackChunkName: "updateEmailModal" */ "@/components/modalComps/settingsModals/UpdateEmailModal")
  },

  props: ["fullname", "email", "student_code"],

  data() {
    return {
      account_type: "",
      email_modal: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    toggleEmailModal() {
      this.email_modal = !this.email_modal;
    },

    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.user-lander-section {
  .user-group-row {
    margin-bottom: 30px;
  }

  .label {
    font-weight: bold;
    font-size: 13.5px;
    line-height: 19px;
    color: #7a7a7a;
    margin-bottom: 5px;

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }

  .value {
    margin-right: 54px;
    font-weight: normal;
    font-size: 16px;
    line-height: 25px;
    color: #233446;

    @include breakpoint_max(sm) {
      font-size: 15px;
    }
  }

  .update-link {
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    text-transform: uppercase;

    @include breakpoint_max(sm) {
      font-size: 12.5px;
    }
  }
}
</style>
