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

      <form action @submit.prevent class="auth-form">
        <!-- FIRSTNAME -->
        <div class="form-group compact-row">
          <label
            for="firstName"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >First Name</label>
          <input
            type="text"
            v-model="form.firstname"
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
            v-model="form.lastname"
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
            v-model="form.phoneNumber"
            id="email"
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
export default {
  name: "SignupForm",

  components: {
    AuthAlertCard: () =>
      import(/* webpackChunkName: "AuthAlertCard" */ "@/components/globalComps/AuthComps/AuthAlertCard")
  },

  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: ""
      },
      passwordType: true,
      show_alert: false,
      alert_type: "",
      alert_msg: ""
    };
  },

  methods: {
    showPwd() {
      let pwd_icon = document.querySelector(".show-pwd");
      this.passwordType = !this.passwordType;
      pwd_icon.classList.toggle("show_pass");
    }
  }
};
</script>

<style lang="scss">
</style>
