<template>
  <div>
    <vue-headful
      title="Create your school account | Gradelyng"
      description="Description goes here"
    />
    <div class="school-signup-section">
      <b-container fluid>
        <b-row class="w-100">
          <b-col class="left-pane d-none d-md-block p-0">
            <!-- SIGNUP IMAGE -->
            <img :src="localImg('SignupBg.png')" alt="signup-img">
            <!-- image overlay -->
            <div class="box-overlay brand_inverse_bg"></div>
            <!-- CONTENT -->
            <div class="content-box h-100">
              <div class="d-flex flex-column justify-content-center align-items-start">
                <!-- CONTENT ONE -->
                <div class="content-one brand_black font-weight-bold">Gradely for Schools</div>
                <!-- CONTENT TWO -->
                <div
                  class="content-two white-text font-weight-bold"
                >Come a step closer to the future of education</div>
                <!-- CONTENT THREE -->
                <div class="content-three">
                  <ul class="list-unstyled color_text">
                    <li>- Experience the power of Digitised homework</li>
                    <li>- Track your school and class activities with ease</li>
                    <li>- Remote live classes</li>
                  </ul>
                </div>
              </div>
            </div>
          </b-col>

          <!-- CLOSE DIALOG -->
          <div class="pageClose dialogDismiss">
            <button type="button" class="close_dialog cls_lg"></button>
          </div>

          <b-col class="school-sign-up-container">
            <div class="sign-up-box color_text">
              <!-- BRAND LOGO -->
              <img :src="localImg('Gradely.png')" class="brand-logo" alt="Gradely.ng">
              <div class="text-info-one font-weight-bold">Create your School account</div>
              <div class="text-info-two type-16 type-xl-14 type-sm-13">
                Already have an account?
                <a href="#" class="btn-link">Login</a>
              </div>

              <!-- SIGNUP FORM COMPONENT -->
              <SignUpForm/>
              <!-- SIGNUP FORM COMPONENT -->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import SignUpForm from "@/components/schoolComps/signup/SignUpForm.vue";

export default {
  name: "Signup",

  components: { SignUpForm },

  mixins: [RenderImages],

  data() {
    return {
      showModal: true
    };
  }
};
</script>

<style lang="scss">
</style>
