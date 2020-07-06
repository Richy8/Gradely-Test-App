<template>
  <div>
    <form @submit.prevent="schoolSignup" class="school-signup-form">
      <!-- FIRST NAME AND LAST NAME -->
      <div class="row">
        <div class="alert alert-danger" v-if="show_err">
          <li
          v-for="(error,index) in error_msg"
          :key="index">
          {{ error[0] }}
          </li>
        </div>
        <div class="form-group col-sm-6">
          <label for class="control-label font-weight-bold text-uppercase">First Name</label>
          <input type="text" v-model="form.first_name" class="form-control" placeholder="E.g David">
        </div>
        <div class="form-group col-sm-6">
          <label for class="control-label font-weight-bold text-uppercase">Last Name (Surname)</label>
          <input type="text" v-model="form.last_name" class="form-control" placeholder="E.g Nwankwo">
        </div>
      </div>

      <!-- SCHOOL NAME -->
      <div class="form-group">
        <label for class="control-label font-weight-bold text-uppercase">School Name</label>
        <input
          type="text"
          v-model="form.school_name"
          class="form-control"
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
          placeholder="The Name of your Country"
        >
      </div>

      <!-- SCHOOL EMAIL ADDRESS -->
      <div class="form-group">
        <label for class="control-label font-weight-bold text-uppercase">Email Address</label>
        <input
          type="email"
          v-model="form.email"
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
            type="text"
            v-model="form.phone"
            class="form-control inputControl"
            placeholder="Enter phone number"
          >
        </div>
      </div>

      <div class="form-group">
        <label for class="control-label font-weight-bold text-uppercase">Password</label>
        <div class="input-group">
          <input
            :type="passwordType ? 'password': 'text'"
            v-model="form.password"
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
            <a href="#" class="btn-link">Terms</a> and
            <a href="#" class="btn-link">Policies</a>.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

//import axios from 'axios';

export default {
  name: "SignUpForm",
  data() {
    return {
      form: {
        first_name: "school",
        last_name: "school",
        school_name: "school name",
        country: "nigeria",
        email: "school@mail.com",
        phone: "9090527304",
        password: "password",
        userType: 'school'
      },
      passwordType: true,
      show_err: false,
      error_msg: null

    };
  },

  methods: {
    ...mapActions(["signupUser"]),
    showPwd() {
      let pwd_icon = document.querySelector(".show-pwd");
      this.passwordType = !this.passwordType;
      pwd_icon.classList.toggle("show_pass");
    },
    async schoolSignup(){
      if(this.form.phone[0] !== "0" && this.form.phone.length == 10 ){
          let phone = this.form.phone.split('');
          phone.unshift("0");
          this.form.phone = phone.join("");
      }       
      this.signupUser({...this.form})
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
      })
      .catch(err => console.log(err))
    }
  },
  computed: {

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
