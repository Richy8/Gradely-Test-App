<template>
  <div>
    <div class="auth-form-block">
      <!-- BLOCK HEADER -->
      <div class="auth-block-header w-100 text-center">
        <h3 class="sub-title font-weight-900 brand_primary">Parent Sign Up</h3>
      </div>
      <!-- BLOCK HEADER -->

      <!-- ERROR ALERT -->
      <AuthAlertCard v-if="show_alert" :alert_type="alert_type" :alert_msg="alert_msg"></AuthAlertCard>

      <form action @submit.prevent="signup" class="auth-form">
        <!-- FIRSTNAME -->
        <div class="alert alert-danger" v-if="show_err">
          <li
          v-for="(error,index) in error_msg"
          :key="index">
          {{ error[0] }}
          </li>
        </div>
        <div class="form-group compact-row">
          <label
            for="firstName"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >First Name</label>
          <input
            type="text"
            v-model="form.first_name"
            id="firstName"
            class="form-control"
            required
            placeholder="Enter your first name"
          >
        </div>

        <!-- LASTNAME -->
        <div class="form-group compact-row">
          <label
            for="lastName"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Last Name</label>
          <input
            type="text"
            v-model="form.last_name"
            id="lastName"
            class="form-control"
            required
            placeholder="Enter your last name"
          >
        </div>

        <!-- EMAIL -->
        <div class="form-group compact-row">
          <label
            for="email"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Email Address</label>
          <input
            type="text"
            v-model="form.email"
            id="email"
            class="form-control"
            required
            placeholder="Enter your email address"
          >
        </div>

        <!-- PHONE NUMBER -->
        <div class="form-group compact-row">
          <label
            for="email"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Phone Number</label>
          <input
            type="text"
            v-model="form.phone"
            id="phoneNumber"
            class="form-control"
            required
            placeholder="Enter your email address"
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
              v-model="form.password"
              class="form-control"
              id="password"
              required
              minlength="6"
              placeholder="Create a password"
            >
            <span class="input-group-addon show-pwd" @click="showPwd">
              <i class="pointer cust_icon icon_eye"></i>
            </span>
          </div>
        </div>

        <!-- DISCLAIMER BLOCK -->
        <div class="disclaimer-block color_grey_dark">
          <p class="text-center">
            By creating an account, you agree to our
            <router-link :to="{name: 'GradelyForgetPassword'}" class="btn-link">Terms and coditions</router-link>&nbsp;and&nbsp;
            <router-link :to="{name: 'GradelyForgetPassword'}" class="btn-link">Privacy Policies</router-link>
          </p>
        </div>

        <!-- AUTHENTICATION CTA -->
        <div class="auth-cta w-100 d-flex justify-content-center">
          <button type="submit" class="btn btn-accent font-weight-bold brand_navy">GET STARTED</button>
        </div>
      </form>

      <div class="auth-signup-cta color_ash mt-3">
        <p class="text-center font-15">
          Already have an account?
          <router-link :to="{name: 'GradelyLogin'}" class="btn-link">&nbsp; Log In now</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "SignupForm",

  components: {
    AuthAlertCard: () =>
      import(/* webpackChunkName: "AuthAlertCard" */ "@/components/globalComps/AuthComps/AuthAlertCard")
  },

  data() {
    return {
      form: {
        first_name: "parent",
        last_name: "test",
        email: "parent@mail.com",
        phone: "123456789",
        password: "password",
        userType: 'parent'   
      },
      passwordType: true,
      show_alert: false,
      alert_type: "",
      alert_msg: "",
      show_err: false,
      error_msg: null
    };
  },

  methods: {
    ...mapActions(['signupUser']),
    showPwd() {
      let pwd_icon = document.querySelector(".show-pwd");
      this.passwordType = !this.passwordType;
      pwd_icon.classList.toggle("show_pass");
    },
    signup(){
      let {first_name,last_name,email,phone,password,userType} = this.form

      this.signupUser({first_name,last_name,email,phone,password,userType})
      .then(res => {
        if (res.data.code == 200){
          const data = res.data.data;   
          //STORE TOKEN IN LOCAL STORAGE
          if (localStorage.getItem("gradelyAuthToken")) {
            localStorage.removeItem("gradelyAuthToken")
          }    
          localStorage.setItem("gradelyAuthToken",data.token)
          //redirect to next phase
          this.$router.replace({
            path: `/${data.type}/${!data.is_boarded ? 'onboarding' : 'dashboard'}`
            });
        }else{
          this.show_err = true;
          this.error_msg = Object.values(res.data.data);

        }
      });
    }
  }
};
</script>

<style lang="scss">
</style>
