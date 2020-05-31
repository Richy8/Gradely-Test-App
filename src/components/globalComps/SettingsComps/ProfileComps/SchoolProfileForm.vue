<template>
  <div class="profile-form">
    <form @submit.prevent>
      <div class="container">
        <!-- BOARDING TYPE -->
        <div class="row form-group-row d-flex align-items-center">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for class="control-label">Boarding Type</label>
          </div>
          <!-- INPUT -->
          <div
            class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item d-flex justify-content-start align-items-center"
          >
            <label for="dayOnly" class="radio-inline">
              <input type="radio" v-model="form.boarding_type" value="day" id="dayOnly">
              <span class="label_title font-14 color_text">Day Only</span>
            </label>
            <label for="boardingOnly" class="radio-inline">
              <input type="radio" v-model="form.boarding_type" value="boarding" id="boardingOnly">
              <span class="label_title font-14 color_text">Boarding Daily</span>
            </label>
            <label for="dayBoarding" class="radio-inline">
              <input type="radio" v-model="form.boarding_type" value="dayboarding" id="dayBoarding">
              <span class="label_title font-14 color_text">Day and Boarding</span>
            </label>
          </div>
        </div>

        <!-- SCHOOL NAME -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="schoolName" class="control-label">School Name</label>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
            <input
              type="text"
              v-model="form.school_name"
              id="schoolName"
              class="form-control"
              placeholder="Enter your school name here"
            >
          </div>
        </div>

        <!-- TAG LINE -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="tagLine" class="control-label">Tagline</label>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
            <input
              type="text"
              v-model="form.tagline"
              id="tagLine"
              class="form-control"
              placeholder="Enter your school words here"
            >
          </div>
        </div>

        <!-- ABOUT SCHOOL -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="aboutSchool" class="control-label">About Your School</label>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
            <textarea
              id="aboutSchool"
              v-model="form.about_school"
              class="form-control"
              cols="30"
              rows="10"
              placeholder="Tell us about the school, your mission, vision, facilities and extra-curricular activities; anything to help promote your school."
            ></textarea>
          </div>
        </div>

        <!-- DATE ESTABLISHED  -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="dateEstablished" class="control-label">Date of Establishment</label>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item position-relative">
            <datepicker
              placeholder="Choose a Date"
              v-model="form.date_established"
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
            <label for="schoolAddress" class="control-label">School Address</label>
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
        <!-- SCHOOL ADDRESS -->
        <div class="row form-group-row d-flex align-items-start">
          <!-- LABEL -->
          <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
            <label for="contactDetails" class="control-label">Contact Details</label>
          </div>
          <!-- INPUT -->
          <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
            <div class="row">
              <!-- WEBSITE -->
              <div class="col-12 form-group-row">
                <div class="inputaffixed inputPrefixed">
                  <div class="inputfixture">
                    <span class="font-13-5 brand_inverse">https://</span>
                  </div>
                  <input
                    type="url"
                    v-model="form.website"
                    class="form-control inputControl"
                    placeholder="Enter your website’s URL"
                  >
                </div>
              </div>

              <!-- EMAIL ADDRESS -->
              <div class="col-12 form-group-row">
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="Contact email address"
                >
              </div>

              <!-- PHONE ONE -->
              <div class="col-6">
                <div class="inputaffixed inputPrefixed">
                  <div class="inputfixture">
                    <span class="font-13-5">+234</span>
                  </div>
                  <input
                    type="number"
                    v-model="form.phone_1"
                    class="form-control inputControl"
                    placeholder="Phone Number 1"
                  >
                </div>
              </div>

              <!-- PHONE TWO -->
              <div class="col-6">
                <div class="inputaffixed inputPrefixed">
                  <div class="inputfixture">
                    <span class="font-13-5">+234</span>
                  </div>
                  <input
                    type="number"
                    v-model="form.phone_2"
                    class="form-control inputControl"
                    placeholder="Phone Number 2"
                  >
                </div>
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
  name: "SchoolProfileForm",
  components: { Datepicker },
  data() {
    return {
      form: {
        boarding_type: "day",
        school_name: "",
        tagline: "",
        about_school: "",
        date_established: "",
        street_address: "",
        country: "",
        state: "",
        city: "",
        postal_code: "",
        website: "",
        email: "",
        phone_1: "",
        phone_2: ""
      }
    };
  }
};
</script>

<style lang="scss">
.profile-form {
  margin-top: -30px;
  padding-top: 26px;
  border-top: 1px solid $border_grey;

  @include breakpoint_max(lg) {
    margin-top: -20px;
    padding-top: 33px;
  }

  @include breakpoint_max(sm) {
    margin-top: 8px;
    padding-top: 30px;
  }

  .btn {
    padding: 13px 38px;
    font-size: 13px;

    @include breakpoint_max(lg) {
      font-size: 11.5px;
      padding: 11px 32px;
    }
  }
}
</style>
