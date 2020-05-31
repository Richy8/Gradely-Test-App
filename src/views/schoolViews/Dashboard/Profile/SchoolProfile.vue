<template>
  <div>
    <vue-headful :title="setTitle" description="Description goes here"/>
    <div class="school-profile-section">
      <!-- SCHOOL DISPLAY BANNER -->
      <SchoolProfileBanner banner_img="ChristLandBanner.png"></SchoolProfileBanner>

      <!-- SCHOOL DETAILS -->
      <SchoolInfoBlock
        school_logo="ChrisLand.png"
        school_name="ChristLand Itnl College"
        school_motto="Show forth the light"
        school_curriculum="British Nigerian"
        boarding_type="Day"
        education_scope="Secondary/College"
        date_established="October 2008"
      ></SchoolInfoBlock>

      <!-- ABOUT SECTION -->
      <section class="bottom-half">
        <div class="container px-1 mb-5">
          <div class="row">
            <!-- ABOUT AND DEMOGRAPHICS COMPONENTS -->
            <div class="col-12 col-md-7 mb-4">
              <AboutSchool
                chunk_one="Our Vision is to be at the forefront in the private education sector, and to nurture the children to become all they can be through quality all-round education, from kindergarten to tertiary level, Our Vision is to be at the forefront in the private education sector, and to nurture the children to become all they can be through quality all-round education, from kindergarten to tertiary level."
                chunk_two="Our Vision is to be at the forefront in the private education sector, and to nurture the children to become all they can be through quality all-round education, from kindergarten to tertiary level, Our Vision is to be at the forefront in the private education sector, and to nurture the children to become all they can be through quality all-round education, from kindergarten to tertiary level"
              ></AboutSchool>
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
import SchoolProfileBanner from "@/components/schoolComps/dashboard/profile/schoolprofile/SchoolProfileBanner";
import SchoolInfoBlock from "@/components/schoolComps/dashboard/profile/schoolprofile/SchoolInfoBlock";
import AboutSchool from "@/components/schoolComps/dashboard/profile/schoolprofile/AboutSchool";

export default {
  name: "SchoolProfile",

  components: {
    SchoolProfileBanner,
    SchoolInfoBlock,
    AboutSchool,
    ContactPersonCard: () =>
      import(/* webpackChunkName: "ContactCardPerson" */ "@/components/schoolComps/dashboard/profile/schoolprofile/ContactPersonCard"),
    Demographics: () =>
      import(/* webpackChunkName: "Demographics" */ "@/components/schoolComps/dashboard/profile/schoolprofile/Demographics")
  },

  data() {
    return {
      school: "Christland Intl College"
    };
  },

  computed: {
    setTitle() {
      return `${this.school} | School Profile`;
    }
  }
};
</script>

<style>
</style>
