<template>
  <!-- SIGNUP PAGE  -->
  <section class="signup-section position-relative overflow-auto">
    <b-container fluid>
      <b-row class="container-row position-relative">
        <!-- LEFT PANE -->
        <b-col md="5" class="left-pane position-fixed d-none d-md-block p-0 z-depth-3">
          <img
            src="https://res.cloudinary.com/richy-jones/image/upload/v1587381343/GRADELY_ASSETS/SignupBg.png"
            alt="LeftPaneImg"
            class="left-pane-content"
          >
          <!-- IMG OVERLAY -->
          <div class="left-pane-content pane-img-overlay"></div>
          <!-- LEFT PANE CONTENT -->
          <div
            class="content-box px-md-4 p-lg-5 d-flex flex-column justify-content-center align-items-center"
          >
            <div class="content">
              <span class="section-one">Gradely for schools</span>
              <h3 class="section-two">Come a step closer to the future of Education</h3>
              <ul class="section-three list-unstyled">
                <li>
                  <b-icon icon="dash"></b-icon>Experience the power of Digitised homework
                </li>
                <li>
                  <b-icon icon="dash"></b-icon>Track your school and class activities with ease
                </li>
                <li>
                  <b-icon icon="dash"></b-icon>Remote live classes
                </li>
              </ul>
            </div>
          </div>
        </b-col>

        <!-- RIGHT PANE -->
        <b-col sm="12" md="7" offset-md="5" class="p-0">
          <div class="right-pane d-flex flex-column justify-content-start align-items-center">
            <div class="right-pane-content">
              <!-- BRAND MOCKUP -->
              <div class="brand-mockup position-relative">
                <img
                  src="https://res.cloudinary.com/richy-jones/image/upload/v1587388460/GRADELY_ASSETS/GradelyMockup.png"
                  alt="Gradely.Ng"
                >
              </div>
              <!-- SECTION ONE -->
              <div class="section-one">
                <h3>Create your School Account</h3>
              </div>

              <!-- SECTION TWO -->
              <div class="section-two">
                <h4>
                  Already have an account?
                  <a href class="login-link link-underline orange-light">Login</a>
                </h4>
              </div>

              <!-- REGISTRATION FORM -->
              <SignUpForm/>
              
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
  <!-- SIGNUP PAGE  -->
</template>

<script>
import SignUpForm from "@/components/signup/SignUpForm";

export default {
  name: "Signup",
  components: {
    SignUpForm
  }
};
</script>

<style lang="scss">
</style>
