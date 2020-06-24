<template>
  <div>
    <vue-headful title="Parent Signup | Gradelyng" description="Description goes here"/>

    <AuthContainer>
      <div slot="auth_form_block">
        <SignupForm></SignupForm>
      </div>
    </AuthContainer>
  </div>
</template>

<script>
import AuthContainer from "@/components/globalComps/AuthComps/AuthContainer";
import SignupForm from "@/components/parentComps/signup/SignUpForm";

export default {
  name: "Signup",

  components: {
    AuthContainer,
    SignupForm
  }
};
</script>

<style lang="scss">
</style>
