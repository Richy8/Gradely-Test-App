<template>
  <div>
    <div class="auth-form-block">
      <!-- ERROR ALERT -->
      <div style="position: relative; top: -30px">
        <AuthAlertCard v-if="show_alert" :alert_type="alert_type" :alert_msg="alert_msg"></AuthAlertCard>
      </div>

      <form action @submit.prevent="studentSignup" class="auth-form mt-2" autocomplete="off">
        <!-- FIRST NAME -->
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

        <!-- LAST NAME -->
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

        <!-- CLASS -->
        <div class="form-group compact-row">
          <label
            for="class"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Class</label>
          <input
            type="text"
            v-model="form.class"
            id="class"
            class="form-control"
            required
            placeholder="Enter your class"
          >
        </div>

        <!-- COUNTRY -->
        <div class="form-group compact-row">
          <label
            for="country"
            class="label-compact label-sm font-weight-bold brand_primary font-11-5"
          >Country</label>
          <input
            type="text"
            v-model="form.country"
            id="country"
            class="form-control"
            required
            placeholder="Enter your country"
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
              :type="password_type ? 'password': 'text'"
              v-model="form.password"
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
            By creating an account, you agree to our
            <router-link :to="{name: ''}" class="btn-link">Terms and coditions</router-link>&nbsp;and&nbsp;
            <router-link :to="{name: ''}" class="btn-link">Privacy Policies</router-link>
          </p>
        </div>

        <!-- AUTHENTICATION CTA -->
        <div class="auth-cta w-100 d-flex justify-content-center">
          <button
            type="submit"
            class="btn stretch-btn btn-accent font-weight-bold brand_navy"
          >GET STARTED</button>
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
import { mapActions } from "vuex";

export default {
  name: "SignUpForm",

  components: {
    AuthAlertCard: () =>
      import(/* webpackChunkName: "AuthAlertCard" */ "@/components/globalComps/AuthComps/AuthAlertCard")
  },

  data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        class: null,
        country: null,
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

    getAccountType() {
      this.form.account_type = this.$route.path.split("/")[1];
    },

    showPwd() {
      let pwd_icon = document.querySelector(".show-pwd");
      this.password_type = !this.password_type;
      pwd_icon.classList.toggle("show_pass");
    },

    studentSignup() {
      // DISPATCH SIGNUP ACTION
      this.signupUser(this.form)
        .then(response => {
          // PROCESS A NON 200 RESPONSE
          if (response.code !== 200) {
            setTimeout(() => {
              this.show_alert = true;
              this.alert_type = "error";

              // CHECK IF RESPONSE MESSAGE IS A NETWORK ERROR
              if (response.message === "Network Error") {
                this.alert_msg = "0ops! No internet connection, try again!";
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
              "Signup as student user was successful! Redirecting...";

            setTimeout(() => {
              this.$router.push({ name: "StudentOnboarding" });
            }, 2500);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang='scss' scoped>
.disclaimer-block {
  p {
    font-size: 15px;
  }
}

.auth-cta {
  .stretch-btn {
    min-width: 80%;
  }
}
</style>
