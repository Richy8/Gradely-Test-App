<template>
  <div>
    <vue-headful title="Forget Password | Gradelyng" description="Description goes here"/>

    <AuthContainer :left_align="logo_alignment">
      <div slot="auth_form_block">
        <transition name="fade" mode="out-in">
          <component
            :is="in_view"
            :email="user_email"
            @toggleResetMsg="resetMessage($event)"
            @toggleEmailForm="emailForm"
          ></component>
        </transition>
      </div>
    </AuthContainer>
  </div>
</template>

<script>
import AuthContainer from "@/components/globalComps/AuthComps/AuthContainer";
import ForgetPasswordForm from "@/components/globalComps/AuthComps/ForgetPasswordForm.vue";
import ResetMessage from "@/components/globalComps/AuthComps/ResetMessage.vue";

export default {
  name: "ForgetPassword",

  components: {
    AuthContainer,
    ForgetPasswordForm,
    ResetMessage
  },

  data() {
    return {
      in_view: "ForgetPasswordForm",
      logo_alignment: false,
      user_email: ""
    };
  },

  methods: {
    resetMessage(event) {
      this.in_view = "ResetMessage";
      this.logo_alignment = true;
      this.user_email = event;
    },

    emailForm() {
      this.in_view = "ForgetPasswordForm";
      this.logo_alignment = false;
    }
  }
};
</script>

<style lang="scss">
</style>
