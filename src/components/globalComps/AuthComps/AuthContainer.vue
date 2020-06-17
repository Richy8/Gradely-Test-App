<template>
  <div>
    <div class="auth-section">
      <!-- FULL BACKGROUND IMAGE -->
      <div class="auth-frame">
        <img v-lazy="localImg('helpFooterBlob.svg')">
      </div>

      <!-- CLOSE DIALOG -->
      <div class="pageClose dialogDismiss">
        <button type="button" class="close_dialog cls_lg transparent_bg"></button>
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
      <footer class="auth-footer">
        <div class="container">
          <!-- SOCIAL LINKS -->
          <div class="social-links">
            <!-- FACEBOOK -->
            <div class="avatar transparent_bg">
              <a href class="border_grey_dark">
                <span class="flex-center icon-facebook font-19"></span>
              </a>
            </div>

            <!-- TWITTER -->
            <div class="avatar transparent_bg">
              <a href class="border_grey_dark">
                <span class="flex-center icon-twitter font-17"></span>
              </a>
            </div>

            <!-- INSTAGRAM -->
            <div class="avatar transparent_bg">
              <a href class="border_grey_dark">
                <span class="flex-center icon-instagram font-19"></span>
              </a>
            </div>

            <!-- LINKEDIN -->
            <div class="avatar transparent_bg">
              <a href class="border_grey_dark">
                <span class="flex-center icon-linkedin font-18"></span>
              </a>
            </div>

            <!-- YOUTUBE -->
            <div class="avatar transparent_bg">
              <a href class="border_grey_dark">
                <span class="flex-center icon-youtube font-15"></span>
              </a>
            </div>
          </div>

          <!-- AUTH NAVIGATION -->
          <div class="auth-nav d-flex justify-content-center align-items-center flex-wrap">
            <a href="#" class="border_grey_dark">Home</a>
            <a href class="border_grey_dark">For Schools</a>
            <a href class="border_grey_dark">Blog</a>
            <a href class="border_grey_dark">About Us</a>
            <a href class="border_grey_dark">Help & FAQs</a>
            <a href class="border_grey_dark">Terms</a>
            <a href class="border_grey_dark">Policies</a>
          </div>
        </div>

        <!-- AUTH COPYRIGHT -->
        <div class="auth-copyright mt-4 mb-3">
          <p class="text-center color_grey_dark font-12">© 2020, Gradely. All rights reserved.</p>
        </div>
      </footer>
      <!-- AUTH FOOTER -->
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "AuthContainer",

  props: {
    left_align: {
      type: Boolean,
      default: false
    }
  },

  mixins: [RenderImages]
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

.error-message {
  padding: 10px 15px 12px;
  margin: 30px auto 0px;
  border: 1px solid $brand_red;
  font-size: 13.5px;
  line-height: 27px;

  @include breakpoint_max(sm) {
    font-size: 13px;
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

.auth-footer {
  margin-top: 50px;
  padding-bottom: 30px;

  .social-links {
    @include flex_row_center_nowrap;
    .avatar {
      margin: auto 4px;
      a {
        transition: all 0.6s ease-in-out;
        &:hover {
          color: darken($brand_accent, 5%) !important;
        }
      }
    }
  }

  .auth-nav {
    margin-top: 30px;
    a {
      z-index: 99;
      font-size: 12.5px;
      margin: 7.5px 15px;
      transition: all 0.6s ease-in-out;
      &:hover {
        color: darken($brand_accent, 5%) !important;
      }
    }
  }
}
</style>
