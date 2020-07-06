<template>
  <div>
    <div class="auth-form-block">
      <!-- BLOCK HEADER -->
      <div class="auth-block-header w-100 text-center">
        <h3 class="title font-weight-bold brand_primary">Welcome Back</h3>
      </div>
      <!-- BLOCK HEADER -->

      <!-- ERROR ALERT -->
      <AuthAlertCard v-if="show_alert" :alert_type="alert_type" :alert_msg="alert_msg"></AuthAlertCard>

      <form action @submit.prevent="handleLogin" class="auth-form">
        <!-- EMAIL -->
        <div class="alert alert-danger" v-if="show_error">{{ error_msg }}</div>
        <div class="form-group compact-row">
          <label
            for="userinfo"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Email or Class Code</label>
          <input
            type="text"
            v-model="loginform.email"
            id="userinfo"
            class="form-control"
            required
            placeholder="Enter your Email or Student Code"
          >
        </div>

        <!-- PASSWORD -->
        <div class="form-group compact-row">
          <label
            for="password"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Password</label>
          <div class="input-group">
            <input
              :type="passwordType ? 'password': 'text'"
              v-model="loginform.password"
              class="form-control"
              id="password"
              required
              minlength="6"
              placeholder="Enter your Password"
            >
            <span class="input-group-addon show-pwd" @click="showPwd">
              <i class="pointer cust_icon icon_eye"></i>
            </span>
          </div>
        </div>

        <!-- DISCLAIMER BLOCK -->
        <div class="disclaimer-block color_grey_dark">
          <p class="text-center">
            Can't remember your password?
            <router-link :to="{name: 'GradelyForgetPassword'}" class="btn-link">Reset it</router-link>
          </p>
        </div>

        <!-- AUTHENTICATION CTA -->
        <div class="auth-cta w-100 d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-accent font-weight-bold brand_navy"
            ref="loginBtn"
          >LOG IN</button>
        </div>
      </form>

      <div class="auth-signup-cta color_ash mt-3">
        <p class="text-center font-15">
          New to Gradely?
          <router-link to class="btn-link">&nbsp; Sign Up now</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginForm",

  components: {
    AuthAlertCard: () =>
      import(/* webpackChunkName: "AuthAlertCard" */ "@/components/globalComps/AuthComps/AuthAlertCard.vue")
  },

  data() {
    return {
      loginform: {
        email: "sample2@email.com",
        password: "password"
      },
      passwordType: true,
      show_alert: false,
      show_error: false,
      error_msg: "",
      alert_type: "",
      alert_msg: ""
    };
  },

  methods: {
    ...mapActions(["loginUser"]),

    showPwd() {
      let pwd_icon = document.querySelector(".show-pwd");
      this.passwordType = !this.passwordType;
      pwd_icon.classList.toggle("show_pass");
    },

    // HANDLE LOGIN OF USERS
    handleLogin() {
      this.$refs.loginBtn.innerText = "LOGGING IN..";
      // DISPATCH LOGIN ACTION
      let {email,password} = this.loginform 
      this.loginUser({
        email,
        password
      })
      .then(res => {
        // CONDITION FOR INVALID LOGIN DETAILS
        if (res.data.code !== 200) {
          this.show_error = true
          this.error_msg = res.data.message
          this.$refs.loginBtn.innerText = "LOG IN";
        }else{
          // RETRIEVE DATA FROM API
          const data = res.data.data;
          
          // REMOVE PREVIOUS TOKEN IF PRESENT
          if (localStorage.getItem("gradelyAuthTken")) {
            localStorage.removeItem("gradelyAuthToken");
          }
          // STORE TOKEN IN LOCAL STORAGE
          localStorage.setItem("gradelyAuthToken",data.token)

          // REDIRECT TO DASHBOARD PAGE
          this.$router.replace({
            path: `/${data.type}/dashboard`
            });
        }
        
      })
      ;
    }
  }
};
</script>

<style lang='scss'>
</style>
