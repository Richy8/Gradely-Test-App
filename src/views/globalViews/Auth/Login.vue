<template>
  <div>
    <vue-headful title="Welcome Back | Gradelyng" description="Description goes here"/>

    <AuthContainer>
      <div slot="auth_form_block">
        <LoginForm></LoginForm>
      </div>
    </AuthContainer>
  </div>
</template>

<script>
import AuthContainer from "@/components/globalComps/AuthComps/AuthContainer";
import LoginForm from "@/components/globalComps/AuthComps/LoginForm.vue";

export default {
  name: "Login",

  components: {
    AuthContainer,
    LoginForm
  }

  // beforeRouteEnter() {
  //   // let token = !!localStorage.getItem("gradelyAuthToken");
  //   // if (localStorage.getItem("gradelyAuthToken") !== null) {
  //   //   let user_type = JSON.parse(localStorage.getItem("authUser")).type;
  //   //   location.href = location.origin + "/" + user_type + "/dashboard";
  //   // }
  // }
};
</script>

<style lang="scss">
</style>
