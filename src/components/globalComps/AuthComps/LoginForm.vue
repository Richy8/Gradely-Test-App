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

      <form action @submit.prevent="handleLogin" class="auth-form" autocomplete="off">
        <!-- EMAIL -->
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
          <router-link :to="{name: 'GradelySignupLander'}" class="btn-link">&nbsp; Sign Up now</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "LoginForm",

  components: {
    AuthAlertCard: () =>
      import(/* webpackChunkName: "AuthAlertCard" */ "@/components/globalComps/AuthComps/AuthAlertCard.vue")
  },

  computed: {
    ...mapGetters(["getAuthUser"])
  },

  data() {
    return {
      loginform: {
        email: null,
        password: null
      },
      passwordType: true,
      show_alert: false,
      alert_type: null, //SET TO EITHER SUCCESS OR ERROR
      alert_msg: null
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
    async handleLogin() {
      this.$refs.loginBtn.innerText = "LOGGING IN..";

      // DISPATCH LOGIN ACTION
      this.loginUser(this.loginform)
        .then(response => {
          // HANDLE A NON 200 RESPONSE ERROR
          if (response.code !== 200) {
            setTimeout(() => {
              this.show_alert = true;
              this.alert_type = "error";

              // CHECK IF RESPONSE MESSAGE IS A NETWORK ERROR
              if (response.message === "Network Error") {
                this.alert_msg = "0ops! No internet connection, try again!";
              } else {
                this.alert_msg = response.message;
              }
              this.$refs.loginBtn.innerText = "LOG IN";
            }, 1000);
          }
          // HANDLE A 200 RESPONSE ERROR
          else {
            this.show_alert = true;
            this.alert_type = "success";
            this.alert_msg = response.message;
            this.$refs.loginBtn.innerText = "LOG IN";

            // REDIRECT A USER TO DASHBOARD AFTER 1 SECOND
            setTimeout(() => {
              let account_type = this.getAuthUser.type;
              let is_boarded = this.getAuthUser.is_boarded;

              if (is_boarded === 0) {
                if (account_type !== "parent") {
                  this.$router.push(`/${account_type}/onboarding`);
                } else {
                  this.$router.push({ name: "ParentNewChildOnboarding" });
                }
              } else {
                this.$router.push(`/${account_type}/dashboard`);
              }
            }, 1000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang='scss'>
</style>
