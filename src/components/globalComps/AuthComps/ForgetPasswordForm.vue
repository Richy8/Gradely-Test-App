<template>
  <div>
    <div class="auth-form-block">
      <!-- BLOCK HEADER -->
      <div class="auth-block-header w-100 text-center">
        <h3 class="sub-title font-weight-bold brand_primary">Forgot your password?</h3>
        <p
          class="text-center border_grey_dark info-text"
        >Don't worry, just enter the Email address (Students enter their Student Code) associated with your account to request a password reset.</p>
      </div>
      <!-- BLOCK HEADER -->

      <!-- ERROR ALERT -->
      <AuthAlertCard v-if="show_alert" :alert_type="alert_type" :alert_msg="alert_msg"></AuthAlertCard>

      <form action @submit.prevent="handleForgetPassword" class="auth-form">
        
        <div v-if="showError" class="alert alert-danger">
          <li v-for="(error,index) in err_msg" :key="index"> {{ error[0] }} </li>
        </div>
        <!-- EMAIL -->
        <div class="form-group compact-row">
          <label
            for="user"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Email or Class Code</label>
          <input
            type="email"
            v-model="form.email"
            id="user"
            class="form-control"
            required
            placeholder="Enter your Email or Student Code"
          >
        </div>

        <!-- AUTHENTICATION CTA -->
        <div class="auth-cta w-100 d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-accent font-weight-bold brand_navy"
            ref="sendBtn"
          >SEND RESET LINK</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ForgetPasswordForm",

  components: {
    AuthAlertCard: () =>
      import(/* webpackChunkName: "AuthAlertCard" */ "@/components/globalComps/AuthComps/AuthAlertCard")
  },

  data() {
    return {
      form: {
        email: "school@mail.com"
      },
      show_alert: false,
      alert_type: "",
      alert_msg: "",
      showError: false,
      err_msg: null
    };
  },

  methods: {
    ...mapActions(["sendResetLink"]),

    handleForgetPassword() {
      this.$refs.sendBtn.innerText = "Sending...";
        // DISPATCH AN ACTION
        this.sendResetLink(this.form.email)
        .then(res =>{
          if (res.data.code == 200){
              this.$emit("toggleResetMsg", this.form.email);
          }else{
            this.$refs.sendBtn.innerText = "SEND RESET LINK";
            this.showError = true;
            this.err_msg = Object.values(res.data.data)
          }
        })
        

    }
  }
};
</script>

<style lang='scss'>
</style>
