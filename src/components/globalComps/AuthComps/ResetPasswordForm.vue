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

      <form action @submit.prevent="handleResetPassword" class="auth-form" autocomplete="off">
        <!-- PASSWORD ONE -->
        <div class="form-group compact-row">
          <label
            for="new_password"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >New Password</label>
          <input
            type="password"
            v-model="resetForm.password"
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
            v-model="resetForm.confirm_password"
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
        password: null,
        confirm_password: null,
        token: null
      },
      show_alert: false,
      alert_type: null, //Error or Success
      alert_msg: null
    };
  },

  mounted() {
    this.resetForm.token = this.$route.query.token;
  },

  methods: {
    ...mapActions(["resetPassword"]),

    validateForm() {
      if (this.resetForm.password !== this.resetForm.confirm_password) {
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

        // CALL RESET FORM ACTION
        this.resetPassword(this.resetForm)
          .then(response => {
            // PROCESS SUCCESS RESPONSE
            if (response.code === 200) {
              this.show_alert = true;
              this.alert_type = "success";
              this.alert_msg = "Paswword reset was successful...";
              this.$refs.resetBtn.innerText = "RESET PASSWORD";

              setTimeout(() => {
                this.$router.push({ name: "GradelyLogin" });
              }, 800);
            }
            // PROCESS INVALID EMAIL
            else if (response.code === 406) {
              this.show_alert = true;
              this.alert_type = "error";
              this.alert_msg =
                "Your reset token is invalid! Please request a new reset link...";
              this.$refs.resetBtn.innerText = "RESET PASSWORD";

              setTimeout(() => {
                this.$router.push({ name: "GradelyForgetPassword" });
              }, 4000);
            }

            // PROCESS ERROR RESPONSE
            else {
              this.$refs.resetBtn.innerText = "RESET PASSWORD";
              this.show_alert = true;
              this.alert_type = "error";
              this.alert_msg = "Ooops! Please check your internet connection";
            }
          })
          .catch(err => console.log(err));
      }
    }
  }
};
</script>

<style lang='scss'>
</style>
