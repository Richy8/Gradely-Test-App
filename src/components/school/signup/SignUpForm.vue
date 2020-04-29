<template>
  <div class="section-three">
    <form @click.prevent>
      <!-- INPUT FORM FOR FIRST AND LAST NAME -->
      <div class="form-group fullname">
        <!-- FIRSTNAME -->
        <div class="firstname">
          <label for="firtsName">FIRST NAME</label>
          <input
            type="text"
            v-model="form.firstname"
            class="form-control font-13 title-black"
            id="firstName"
            placeholder="E.g David"
          >
        </div>
        <!-- LASTNAME -->
        <div class="lastname">
          <label for="lastName">LAST NAME (SURNAME)</label>
          <input
            type="text"
            v-model="form.lastname"
            class="form-control font-13 title-black"
            id="lastName"
            placeholder="E.g Nwankwo"
          >
        </div>
      </div>

      <!-- NAME OF SCHOOL -->
      <div class="form-group">
        <label for="schoolName">SCHOOL NAME</label>
        <input
          type="text"
          v-model="form.school"
          class="form-control font-13 title-black"
          id="schoolName"
          placeholder="The Name of your School"
        >
      </div>

      <!-- EMAIL ADDRESS -->
      <div class="form-group">
        <label for="emailAddress">EMAIL ADDRESS</label>
        <input
          type="email"
          v-model="form.email"
          class="form-control font-13 title-black"
          id="emailAddress"
          placeholder="E.g davidisaboy@gmail.com"
        >
      </div>

      <!-- PHONE NUMBER -->
      <div class="form-group">
        <label for="phoneNumber">PHONE NUMBER</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text font-13 title-black transparent-bg">+ 234</span>
          </div>
          <input
            type="number"
            v-model="form.phone"
            class="form-control font-13 title-black"
            id="phoneNumber"
            placeholder="Enter phone number"
          >
        </div>
      </div>

      <!-- PASSWORD -->
      <div class="form-group">
        <label for="password">PASSWORD</label>
        <div class="input-group">
          <input
            :type="passwordType ? 'password' : text"
            v-model="form.password"
            class="form-control font-13 title-black"
            id="password"
            placeholder="Create a Password"
          >
          <div class="input-group-append">
            <span class="input-group-text font-13 title-black pointer transparent-bg">
              <b-icon icon="eye" class="title-black" @click="passwordType = !passwordType"></b-icon>
            </span>
          </div>
        </div>
      </div>

      <!-- SUBMIT BUTTON -->
      <div class="form-group mx-0 px-0 d-flex justify-content-start align-items-center">
        <button
          type="submit"
          class="btn btn-md navy-blue orange-light-bg mx-0 rounded-25 font-weight-bold"
        >CREATE ACCOUNT</button>

        <div class="policy-text w-50 font-12 ml-4 font-weight-400 dark-ash">
          By creating an account you agree to our
          <span>
            <a href="#" class="orange-light">Terms</a>
          </span> and
          <span>
            <a href="#" class="orange-light">Policies</a>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        school: "",
        email: "",
        phone: "",
        password: ""
      },
      passwordType: true
    };
  }
};
</script>

<style lang='scss'>
</style>
