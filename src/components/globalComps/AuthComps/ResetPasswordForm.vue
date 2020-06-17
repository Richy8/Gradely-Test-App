<template>
  <div>
    <div class="auth-form-block">
      <!-- BLOCK HEADER -->
      <div class="auth-block-header w-100 text-center">
        <h3 class="title font-weight-bold brand_primary">Reset Password</h3>
      </div>
      <!-- BLOCK HEADER -->

      <!-- ERROR ALERT -->
      <AuthAlertCard v-if="show_alert" :alert_type="alert_type" :alert_msg="alert_msg"></AuthAlertCard>

      <form action @submit.prevent="handleResetPassword" class="auth-form">
        <!-- PASSWORD ONE -->
        <div class="form-group compact-row">
          <label
            for="new_password"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >New Password</label>
          <input
            type="password"
            v-model="resetForm.password_one"
            id="new_password"
            class="form-control"
            required
            minlength="6"
            placeholder="Create a new passsword"
          >
        </div>

        <!-- PASSWORD TWO -->
        <div class="form-group compact-row">
          <label
            for="confirm_password"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Confirm Password</label>
          <input
            type="password"
            v-model="resetForm.password_two"
            id="confirm_password"
            class="form-control"
            required
            minlength="6"
            placeholder="Enter the new passsword again"
          >
        </div>

        <!-- AUTHENTICATION CTA -->
        <div class="auth-cta w-100 d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-accent font-weight-bold brand_navy"
            ref="resetBtn"
          >RESET PASSWORD</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ResetPasswordForm",

  components: {
    AuthAlertCard: () =>
      import(/* webpackChunkName: "AuthAlertCard" */ "@/components/globalComps/AuthComps/AuthAlertCard")
  },

  data() {
    return {
      resetForm: {
        password_one: "",
        password_two: ""
      },
      show_alert: false,
      alert_type: "",
      alert_msg: ""
    };
  },

  methods: {
    ...mapActions(["resetPassword"]),

    validateForm() {
      if (this.resetForm.password_one !== this.resetForm.password_two) {
        this.show_alert = true;
        this.alert_type = "error";
        this.alert_msg = "Passwords do not match. Please try again.";
        return false;
      } else {
        this.show_alert = false;
        this.alert_type = "";
        this.alert_msg = "";
        return true;
      }
    },

    handleResetPassword() {
      if (this.validateForm()) {
        this.$refs.resetBtn.innerText = "Resetting...";
        this.resetPassword(this.resetForm.password_one);
      }
    }
  }
};
</script>

<style lang='scss'>
</style>
