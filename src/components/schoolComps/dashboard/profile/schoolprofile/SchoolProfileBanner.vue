<template>
  <div>
    <div class="school-display-banner w-100 position-relative">
      <div class="banner-overlay box-overlay black overflow-hidden">
        <img :src="dynamicImg(banner_img)" alt="SchoolBanner" class="img img-opacify">
      </div>

      <!-- SETTINGS BUTTON -->
      <div class="button-container mx-auto position-relative">
        <div class="w-100 d-flex justify-content-end">
          <router-link
            :to="{name: 'SchoolSettingsProfile'}"
            class="btn btn-md btn-accent mx-0"
          >Settings</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "SchoolProfileBanner",

  props: {
    banner_img: String
  },

  mixins: [RenderImages]
};
</script>

<style lang="scss">
.school-display-banner {
  height: 248px;

  @include breakpoint_max(lg) {
    height: 220px;
  }

  @include breakpoint_max(md) {
    height: 160px;
  }

  @include breakpoint_max(sm) {
    height: 125px;
  }

  @include breakpoint_max(xs) {
    height: 110px;
  }

  .banner-overlay {
    .img {
      @include img_cover;

      &-opacify {
        opacity: 0.7;
      }
    }
  }

  .button-container {
    width: 1140px;

    @include breakpoint_max(xl) {
      width: 960px;
    }

    @include breakpoint_max(lg) {
      width: 720px;
    }

    @include breakpoint_max(md) {
      width: 510px;
    }

    @include breakpoint_max(sm) {
      width: 94%;
    }

    .btn {
      margin-top: 40px;
      padding: 13px 33px;

      @include breakpoint_max(md) {
        padding: 9px 24px;
        font-size: 11.5px;
      }
    }
  }
}
</style>
