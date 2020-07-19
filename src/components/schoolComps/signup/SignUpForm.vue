<template>
  <div>
    <!-- SIGNUP ALERT -->
    <SignupAlert v-if="show_alert" :alert_type="alert_type" :alert_msg="alert_msg"></SignupAlert>
    <!-- SIGNUP ALERT -->

    <form @submit.prevent="schoolSignup" class="school-signup-form" autocomplete="off">
      <!-- FIRST NAME AND LAST NAME -->
      <div class="row">
        <div class="form-group col-sm-6">
          <label for class="control-label font-weight-bold text-uppercase">First Name</label>
          <input
            type="text"
            v-model="form.first_name"
            required
            class="form-control"
            placeholder="E.g David"
          >
        </div>
        <div class="form-group col-sm-6">
          <label for class="control-label font-weight-bold text-uppercase">Last Name (Surname)</label>
          <input
            type="text"
            v-model="form.last_name"
            required
            class="form-control"
            placeholder="E.g Nwankwo"
          >
        </div>
      </div>

      <!-- SCHOOL NAME -->
      <div class="form-group">
        <label for class="control-label font-weight-bold text-uppercase">School Name</label>
        <input
          type="text"
          v-model="form.school_name"
          class="form-control"
          required
          placeholder="The Name of your school"
        >
      </div>

      <!-- SCHOOL ROLE -->
      <div class="form-group">
        <label for class="control-label font-weight-bold text-uppercase">Country</label>
        <input
          type="text"
          v-model="form.country"
          class="form-control"
          required
          placeholder="The Name of your Country"
        >
      </div>

      <!-- SCHOOL EMAIL ADDRESS -->
      <div class="form-group">
        <label for class="control-label font-weight-bold text-uppercase">Email Address</label>
        <input
          type="email"
          v-model="form.email"
          required
          class="form-control"
          placeholder="E.g davidisaboy@gmail.com"
        >
      </div>

      <!-- PHONE NUMBER -->
      <div class="form-group">
        <label for class="control-label font-weight-bold text-uppercase">Phone Number</label>
        <div class="inputaffixed inputPrefixed">
          <div class="inputfixture">
            <span class="font-14 color_text">+234</span>
          </div>
          <input
            type="number"
            v-model="form.phone"
            required
            class="form-control inputControl"
            placeholder="Enter phone number"
          >
        </div>
      </div>

      <div class="form-group">
        <label for class="control-label font-weight-bold text-uppercase">Password</label>
        <div class="input-group">
          <input
            :type="password_type ? 'password': 'text'"
            v-model="form.password"
            required
            class="form-control"
            placeholder="Create a Password"
          >
          <span class="input-group-addon show-pwd" @click="showPwd">
            <i class="pointer cust_icon icon_eye"></i>
          </span>
        </div>
      </div>

      <div class="row">
        <div class="col-md-5">
          <button type="submit" class="btn btn-block btn-accent font-weight-bold">Get Started</button>
        </div>
        <div class="disclaimer-block col-md-7 mt-3 mt-md-0 color_ash">
          <p>
            By creating an account, you agree to our
            <router-link :to="{name: ''}" class="btn-link">Terms</router-link>and
            <router-link :to="{name: ''}" class="btn-link">Policies</router-link>.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SignupAlert from "@/components/globalComps/AuthComps/SignupAlert";
import { setTimeout } from "timers";
//import axios from 'axios';

export default {
  name: "SignUpForm",

  components: {
    SignupAlert
  },

  data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        school_name: null,
        country: null,
        email: null,
        phone: null,
        password: null,
        account_type: null
      },
      password_type: true,
      show_alert: false,
      alert_type: null,
      alert_msg: null
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    ...mapActions(["signupUser"]),

    showPwd() {
      let pwd_icon = document.querySelector(".show-pwd");
      this.password_type = !this.password_type;
      pwd_icon.classList.toggle("show_pass");
    },

    getAccountType() {
      this.form.account_type = this.$route.path.split("/")[1];
    },

    validatePhone() {
      if (this.form.phone.length > 10 || this.form.phone.length < 10) {
        this.show_alert = true;
        this.alert_type = "error";
        this.alert_msg = "Please check length of phone number...";
        return false;
      } else {
        this.show_alert = false;
        this.alert_type = null;
        this.alert_msg = null;

        let phone = this.form.phone.split("");
        phone.unshift("0");
        this.form.phone = phone.join("");
      }
    },

    schoolSignup() {
      // VLAIDATE PHONE
      this.validatePhone();

      // DISPATCH SIGNUP ACTION
      this.signupUser(this.form)
        .then(response => {
          // PROCESS A NON 200 RESPONSE
          console.log(response.code);

          if (response.code !== 200) {
            setTimeout(() => {
              this.show_alert = true;
              this.alert_type = "error";

              // CHECK IF RESPONSE MESSAGE IS A NETWORK ERROR
              if (response.message === "Network Error") {
                this.alert_msg = "0ops! No internet connection, try again!";
              } else if (response.data.phone) {
                this.alert_msg = "This phone number has already been taken!";
              } else if (response.data.email) {
                this.alert_msg = "This email has already been taken!";
              } else {
                this.alert_msg = "Internal Server Error! Contact developer";
              }
            }, 1000);
          }
          // PROCESS 200 RESPONSE
          else {
            this.show_alert = true;
            this.alert_type = "success";
            this.alert_msg =
              "Signup as school user was successful! Redirecting...";

            setTimeout(() => {
              this.$router.push({ name: "SchoolOnboarding" });
            }, 2500);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang='scss'>
.school-signup-form {
  label {
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(xl) {
      font-size: 12px;
    }
  }

  .disclaimer-block {
    font-size: 14px;
    line-height: 165%;

    @include breakpoint_max(xl) {
      font-size: 12px;
    }

    @include breakpoint_max(md) {
      font-size: 13px;
    }
  }
}
</style>
