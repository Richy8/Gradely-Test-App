<template>
  <div>
    <div class="auth-section">
      <!-- FULL BACKGROUND IMAGE -->
      <div class="auth-frame">
        <img v-lazy="localImg('helpFooterBlob.svg')">
      </div>

      <!-- CLOSE DIALOG -->
      <div class="pageClose dialogDismiss">
        <router-link :to="{name: 'GradelySignupLander'}" class="close_dialog cls_lg transparent_bg"></router-link>
      </div>

      <!-- AUTHENTICATION FORM DISPLAY SECTION -->
      <main class="auth-section-block">
        <div class="container">
          <div class="row">
            <div class="col-md-4 offset-md-4">
              <!-- LOGO IMAGE HOLDER -->
              <div class="logo-holder d-flex" :class="{'justify-content-center': !left_align}">
                <router-link to class="w-auto">
                  <img v-lazy="localImg('Gradely.png')" alt="Gradely.ng">
                </router-link>
              </div>
              <!-- LOGO IMAGE HOLDER -->

              <slot name="auth_form_block"></slot>
            </div>
          </div>
        </div>
      </main>

      <!-- AUTH FOOTER -->
      <AuthFooter></AuthFooter>
      <!-- AUTH FOOTER -->
    </div>
  </div>
</template>

<script>

import AuthFooter from "@/components/globalComps/AuthComps/AuthFooter";

export default {
  name: "AuthContainer",

  components: {
    AuthFooter
  },

  props: {
    left_align: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.auth-section {
  .auth-frame {
    img {
      @include fixed_full_section();
      object-fit: cover;
    }
  }

  .auth-section-block {
    padding: 70px 0px;
  }

  .logo-holder {
    img {
      @include custom_min_edge(210, 60px);

      @include breakpoint_max(sm) {
        @include custom_min_edge(180, 55px);
      }
    }
  }

  .auth-form-block {
    margin-top: 40px;
  }
}

.auth-block-header {
  margin-bottom: 20px;

  .title,
  .sub-title {
    font-size: 32px;
    letter-spacing: 0.04rem;

    @include breakpoint_max(sm) {
      font-size: 25px;
    }
  }
  .sub-title {
    font-size: 20px;

    @include breakpoint_max(sm) {
      font-size: 18px;
    }
  }

  .info-text {
    font-size: 14px;
    line-height: 180%;

    @include breakpoint_max(sm) {
      font-size: 13.5px;
    }
  }
}

.auth-form {
  margin-top: 50px;

  span {
    .icon_eye {
      @include equal_min_edge(20);
    }
  }

  .disclaimer-block {
    margin-top: 18px;
    font-size: 14px;
  }

  .auth-cta {
    margin-top: 22px;
    .btn {
      padding: 15px 32px;
      min-width: 260px;

      @include breakpoint_max(sm) {
        padding: 13px 32px;
        min-width: 80%;
      }

      @include breakpoint_max(xs) {
        min-width: 100%;
      }
    }
  }
}
</style>
