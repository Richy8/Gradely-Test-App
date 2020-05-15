<template>
  <div>
    <vue-headful :title="setTitle" description="Description goes here"/>
    <div class="school-profile-section">
      <!-- SCHOOL DISPLAY BANNER -->
      <div class="school-display-banner w-100">
        <div class="banner-overlay box-overlay black">
          <img
            src="@/assets/images/ChristLandBanner.png"
            alt="SchoolBanner"
            class="img img-opacify"
          >
        </div>

        <!-- SETTINGS BUTTON -->
        <div class="button-container mx-auto position-relative">
          <div class="w-100 d-flex justify-content-end">
            <router-link to="/school/dashboard/settings" class="btn btn-md btn-accent mx-0">Settings</router-link>
          </div>
        </div>
      </div>

      <!-- SCHOOL DETAILS -->
      <div class="container school-details">
        <div class="row school-row px-1">
          <!-- SCHOOL AVATAR -->
          <div class="col-12 col-md-3 px-0">
            <div class="avatar avatar_massive rounded-10 white">
              <img src="@/assets/images/ChrisLand.png" alt="School logo" class="avatar-img">
            </div>
          </div>

          <!-- SCHOOL INFO -->
          <div class="col-12 col-md-9 px-0 school-info">
            <div class="school-title color_text font-weight-bold">Chrisland Schools</div>
            <div class="school-motto border_grey_dark">Show forth the light</div>

            <!-- MORE INFO -->
            <div class="info-row d-flex justify-content-start align-items-start nowrap">
              <div class="info-column">
                <div class="data-label">Curriculum</div>
                <div class="data">British Nigerian</div>
              </div>

              <div class="info-column">
                <div class="data-label">Boarding Type</div>
                <div class="data">Day</div>
              </div>

              <div class="info-column">
                <div class="data-label">EDUCATIONAL SCOPE</div>
                <div class="data">Secondary/College</div>
              </div>

              <div class="info-column">
                <div class="data-label">Date Established</div>
                <div class="data">October 2008</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT SECTION -->
      <section class="bottom-half">
        <div class="container px-1 mb-5">
          <div class="row">
            <!-- ABOUT AND DEMOGRAPHICS COMPONENTS -->
            <div class="col-12 col-md-7 mb-4">
              <AboutSchool></AboutSchool>
              <Demographics></Demographics>
            </div>

            <!-- CONTACT PERSON CARD COMPONENT -->
            <div class="col-12 offset-md-0 offset-lg-1 col-md-5 col-lg-4">
              <ContactPersonCard
                name="Dr. (Mrs.) W.A Awosika (OON)"
                role="Founder/Chairman"
                location="Ikeja Branch"
                address="26, Opebi Road, Ikeja"
                phone="+2348072548185"
                email="info@chrislandschools.org"
                website="www.chrislandschools.org"
                img="Teacher.png"
              ></ContactPersonCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// BACKGROUND COLOR EXTERNAL FUNCTION
import { bgColorSetter } from "@/assets/jsComps/extFunc";
import AboutSchool from "@/components/schoolComps/dashboard/schoolprofile/AboutSchool";
import Demographics from "@/components/schoolComps/dashboard/schoolprofile/Demographics";
import ContactPersonCard from "@/components/schoolComps/dashboard/schoolprofile/ContactPersonCard";

export default {
  name: "SchoolProfile",

  components: {
    AboutSchool,
    Demographics,
    ContactPersonCard
  },

  data() {
    return {
      school: "Chrisland Intl"
    };
  },

  computed: {
    setTitle() {
      return `${this.school} | School Profile`;
    }
  },

  mounted() {
    bgColorSetter("#ffffff");
  }
};
</script>

<style>
</style>
