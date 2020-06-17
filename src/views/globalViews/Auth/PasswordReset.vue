<template>
  <div>
    <vue-headful title="Reset Password | Gradelyng" description="Description goes here"/>

    <AuthContainer>
      <div slot="auth_form_block">
        <ResetPasswordForm></ResetPasswordForm>
      </div>
    </AuthContainer>
  </div>
</template>

<script>
import AuthContainer from "@/components/globalComps/AuthComps/AuthContainer";
import ResetPasswordForm from "@/components/globalComps/AuthComps/ResetPasswordForm.vue";

export default {
  name: "PasswordReset",

  components: {
    AuthContainer,
    ResetPasswordForm
  }
};
</script>

<style lang="scss">
</style>
