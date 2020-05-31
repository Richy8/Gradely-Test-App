<template>
  <div>
    <vue-headful
      title="Profile Settings | Gradely.ng - School"
      description="Description goes here"
    />

    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">School Details</div>

      <!-- SCHOOL BANNER -->
      <div class="school-banner w-100">
        <div class="banner-overlay box-overlay rounded-10">
          <img :src="dynamicImg('ChristLandBanner.png')" alt="SchoolBanner" class="img">
        </div>

        <!-- CHANGE PHOTO BUTTON -->
        <div class="form-group banner-input">
          <label for="changeBanner" class="pointer">
            <input type="file" class="inputFile" id="changeBanner" hidden>
            <div class="d-flex justify-content-around align-items-center">
              <span class="icon icon-camera brand_inverse font-17-5 mr-2"></span>
              <div>CHANGE IMAGE</div>
            </div>
          </label>
        </div>
      </div>

      <!-- SCHOOL LOGO SECTION -->
      <div class="school-logo-section">
        <!-- DISPLAY LOGO -->
        <div class="avatar avatar-square avatar_xxl rounded-10">
          <div class="avatar-text brand_inverse_bg brand_primary">C</div>
        </div>

        <div class="right-section">
          <!-- LOGO INSTRUCTION -->
          <div class="logo-guide">
            <div class="title font-weight-bold color_text">School Logo</div>
            <div class="options">Accepts .png, .jpg or .jpeg</div>
          </div>

          <!-- LOGO CHANGE BUTTON -->
          <div class="logo-change-button">
            <label for="changeLogo" class="btn btn-default-outline btn-md">
              <input type="file" class="inputFile" id="changeLogo" hidden>
              <div class="d-flex flex-center">
                <div>CHANGE LOGO</div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <!-- PROFILE FORM COMPONENT -->
      <SchoolProfileForm></SchoolProfileForm>
      <!-- PROFILE FORM COMPONENT -->
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "SchoolSettingsProfile",

  mixins: [RenderImages],

  components: {
    SchoolProfileForm: () =>
      import(/* webpackChunkName: "SchoolProfileForm" */ "@/components/globalComps/SettingsComps/ProfileComps/SchoolProfileForm")
  },

  data() {
    return {
      form: {
        banner: ""
      }
    };
  }
};
</script>

<style lang="scss">
// SCHOOL PROFILE SETTINGS
.school-banner {
  position: relative;
  height: 190px;

  @include breakpoint_max(md) {
    height: 150px;
  }

  @include breakpoint_max(sm) {
    height: 130px;
  }

  @include breakpoint_max(xs) {
    height: 110px;
  }

  .banner-overlay {
    background: rgba(0, 0, 0, 0.9);
    overflow: hidden;

    .img {
      @include img_cover;
    }
  }

  .banner-input {
    position: absolute;
    right: 30px;
    bottom: -5px;
    font-weight: 800;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: $color_white;
    text-shadow: 0 0.25px, 0.25px 0, 0.25px 0.25px;
    transition: all 0.3s ease-in-out;

    @include breakpoint_max(lg) {
      font-size: 11px;
      font-weight: 600;
    }

    &:hover {
      color: rgb(216, 216, 216);
    }
  }
}

.school-logo-section {
  padding-left: 30px;
  @include flex_row_start_nowrap;
  align-items: flex-start;

  @include breakpoint_max(lg) {
    padding-left: 20px;
  }

  .avatar {
    position: relative;
    top: -70px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
    margin-right: 30px;

    @include breakpoint_max(lg) {
      top: -50px;
      @include equal_min_edge(110);
    }

    @include breakpoint_max(sm) {
      top: -35px;
      margin-right: 20px;
      @include equal_min_edge(90);
    }

    @include breakpoint_max(xs) {
      top: -30px;
      @include equal_min_edge(80);
    }

    .avatar-text {
      text-shadow: 0px 0.4px, 0.4px 0px, 0.4px 0.4px;

      @include breakpoint_max(lg) {
        font-size: 56px;
      }

      @include breakpoint_max(sm) {
        font-size: 48px;
      }
    }
  }
}

.right-section {
  @include flex_row_start_nowrap;
  align-items: flex-start;
  padding-top: 15px;

  .logo-guide {
    margin-right: 30px;

    @include breakpoint_max(lg) {
      margin-right: 10px;
    }

    @include breakpoint_max(sm) {
      margin-right: 5px;
    }

    .title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 4px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }
    }

    .options {
      font-size: 12px;
      line-height: 16px;
      color: $color_ash;

      @include breakpoint_max(lg) {
        font-size: 11px;
      }
    }
  }

  .btn {
    border: 1px solid $border_grey;
    padding: 13px 34px;

    @include breakpoint_max(lg) {
      padding: 11px 15px;
    }

    @include breakpoint_max(sm) {
      font-size: 10px;
      padding: 10px 13px;
    }
  }
}
</style>
