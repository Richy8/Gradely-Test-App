<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "AuthFooter"
};
</script>

<style lang="scss">
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
