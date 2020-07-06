<template>
  <div>
    <vue-headful title="Create a Student Account | Gradelyng" description="Description goes here"/>

    <!-- STUDENTS SIGNUP SECTION -->
    <div class="student-signup-section">
      <div class="container-fluid">
        <div class="row d-flex">
          <!-- FORM SECTION  -->
          <div class="col-md-4 px-0">
            <div class="signup-area">
              <!-- GRADELY ICON -->
              <img v-lazy="localImg('Gradely.png')" class="brand-logo" alt="Gradely.ng">
              <div class="signup-text brand_navy font-weight-bold">Student Sign Up</div>

              <!-- SIGNUP FORM -->
              <SignUpForm></SignUpForm>
            </div>

            <!-- AUTH FOOTER -->
            <AuthFooter></AuthFooter>
          </div>

          <!-- SIGNUP BG -->
          <div class="col-md-8 px-0 signup-bg">
            <!-- CLOSE DIALOG -->
            <div class="pageClose dialogDismiss">
              <button type="button" class="close_dialog cls_lg transparent_bg"></button>
            </div>
            <!-- SIGNUP BG -->
            <img v-lazy="localImg('SignupBgStudent.png')" alt="SignUpBg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import SignUpForm from "@/components/studentsComps/signup/SignUpForm.vue";
import AuthFooter from "@/components/globalComps/AuthComps/AuthFooter";

export default {
  name: "Signup",

  components: {
    SignUpForm,
    AuthFooter
  },

  mixins: [RenderImages]
};
</script>

<style lang="scss">
.signup-area {
  padding-left: 60px;
  padding-right: 60px;
  @include flex_column_center;
  justify-content: flex-start;

  @include breakpoint_max(lg) {
    padding-left: 40px;
    padding-right: 40px;
  }

  .brand-logo {
    @include custom_min_edge(210, 58);
    margin-top: 50px;
  }

  .signup-text {
    font-size: 19px;
    line-height: 29px;
    margin: 40px auto;
  }
}

.signup-bg {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;

  @include breakpoint_max(md) {
    position: relative;
    height: 550px;
  }

  @include breakpoint_max(sm) {
    height: 480px;
  }

  @include breakpoint_max(xs) {
    height: 420px;
  }

  img {
    @include img_cover();
  }
}
</style>
