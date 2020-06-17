<template>
  <div>
    <div class="auth-form-block">
      <!-- BLOCK HEADER -->
      <div class="auth-block-header w-100">
        <h3 class="title text-left font-weight-bold brand_primary">Reset Link Sent</h3>

        <p class="text-left border_grey_dark info-text mt-3">
          A password reset link has been sent to your email address
          <span
            class="font-weight-bold brand_inverse"
          >{{ email }}</span>. Follow the instructions to reset your password.
        </p>

        <p
          class="text-left border_grey_dark info-text"
        >If you cannot find the email in your inbox, please check your spam folder, and whitelist it as not spam, so that you can continue receiving emails from us.</p>

        <p class="text-left border_grey_dark info-text">
          Didn't receive any email?
          <router-link to class="btn-link">Resend Link</router-link>
        </p>
      </div>
      <!-- BLOCK HEADER -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetMessage",

  props: {
    email: String
  }
};
</script>

<style lang="scss">
</style>
