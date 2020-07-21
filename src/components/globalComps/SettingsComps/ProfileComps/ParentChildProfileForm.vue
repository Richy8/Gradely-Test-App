<template>
  <div>
    <form @submit.prevent>
      <!-- FORM DIVIDER -->
      <div class="form-divider"></div>

      <div class="container">
        <!-- GENDER -->
        <div class="row form-group-row d-flex align-items-center">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for class="control-label">Gender</label>
          </div>
          <!-- INPUT -->
          <div
            class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item d-flex justify-content-start align-items-center"
          >
            <label for="male" class="radio-inline">
              <input type="radio" v-model="form.gender" value="male" id="male">
              <span class="label_title color_text">Male</span>
            </label>
            <label for="female" class="radio-inline">
              <input type="radio" v-model="form.gender" value="female" id="female">
              <span class="label_title color_text">Female</span>
            </label>
          </div>
        </div>

        <!-- YOUR NAME -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="teacherName" class="control-label">Your Name</label>
            <div class="help-block mt-0 font-11-5 color_grey_dark">First name and Last name</div>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
            <div class="row">
              <div class="col-6">
                <input
                  type="text"
                  v-model="form.firstname"
                  id="teacherName"
                  class="form-control"
                  placeholder="Enter your firstname here"
                >
              </div>
              <div class="col-6">
                <input
                  type="text"
                  v-model="form.lastname"
                  id="teacherName"
                  class="form-control"
                  placeholder="Enter your lastname here"
                >
              </div>
            </div>
          </div>
        </div>

        <!-- PHONE NUMBER -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="phoneNumber" class="control-label">Phone Number</label>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
            <div class="inputaffixed inputPrefixed">
              <div class="inputfixture">
                <span class="font-13-5">+234</span>
              </div>
              <input
                type="number"
                v-model="form.phone"
                class="form-control inputControl"
                placeholder="Enter your phone number"
              >
            </div>
          </div>
        </div>

        <!-- DATE ESTABLISHED  -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="dateOfBirth" class="control-label">Date of Birth</label>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item position-relative">
            <datepicker
              placeholder="Choose a Date"
              v-model="form.date_of_birth"
              input-class="form-control white"
            ></datepicker>
            <div class="set-icon">
              <span class="icon-calendar font-24 border_grey_dark"></span>
            </div>
          </div>
        </div>
      </div>

      <!-- FORM DIVIDER -->
      <div class="form-divider"></div>

      <div class="container">
        <!-- SCHOOL ADDRESS -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="schoolAddress" class="control-label">Contact Details</label>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
            <div class="row">
              <!-- STREET ADDRESS -->
              <div class="col-12 form-group-row">
                <input
                  type="text"
                  v-model="form.street_address"
                  id="schoolAddress"
                  class="form-control"
                  placeholder="Street address"
                >
              </div>

              <!-- COUNTRY -->
              <div class="col-6 form-group-row">
                <select v-model="form.country" class="form-control">
                  <option value selected disabled>Country</option>
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Mali</option>
                </select>
              </div>

              <!-- STATE -->
              <div class="col-6 form-group-row">
                <select v-model="form.state" class="form-control">
                  <option value selected disabled>State</option>
                  <option>Lagos</option>
                  <option>Ogun</option>
                  <option>Abuja</option>
                </select>
              </div>

              <!-- CITY -->
              <div class="col-6">
                <input type="text" v-model="form.city" class="form-control" placeholder="City/Town">
              </div>

              <!-- POSTAL CODE -->
              <div class="col-6">
                <input
                  type="text"
                  v-model="form.postal_code"
                  class="form-control"
                  placeholder="Postal Code"
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FORM DIVIDER -->
      <div class="form-divider"></div>

      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-end px-0">
            <button type="submit" class="btn btn-md btn-accent mr-0">Save Changes</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "ParentPersonalProfileForm",
  components: { Datepicker },
  data() {
    return {
      form: {
        gender: "male",
        firstname: "",
        lastname: "",
        about_me: "",
        phone: "",
        date_of_birth: "",
        school_role: "",
        street_address: "",
        country: "",
        state: "",
        city: "",
        postal_code: ""
      }
    };
  }
};
</script>

<style lang="scss">
.label_title {
  font-size: 14px;

  @include breakpoint_max(sm) {
    font-size: 13.5px;
  }
}
</style>
