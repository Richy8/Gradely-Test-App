<template>
  <div>
    <!-- SCHOOL BANNER -->
    <div class="school-display-banner w-100 position-relative">
      <div class="banner-overlay box-overlay color_mid_blue_bg overflow-hidden">
        <img v-lazy="localImg('ClassDoodle.png')" alt="ClassDoodle" class="img img-overlay">
      </div>

      <!-- SCHOOL INFO DETAIL -->
      <div class="school-detail-info white-text h-auto">
        <!-- SCHOOL AVATAR -->
        <div class="avatar avatar_xl rounded-10">
          <div class="avatar-text white font-weight-bold">{{ getInitial }}</div>
        </div>
        <!-- SCHOOL INFO -->
        <div class="school-info d-flex flex-column justify-content-end align-items-start">
          <div class="school-name font-weight-bold color_white">{{ school_name }}</div>
          <div class="school-location brand_inverse_light">{{ getLocation }}</div>
          <div class="profile-update-cta brand_accent" v-if="banner_default">
            <router-link to="/school/dashboard/settings" class>Update school profile</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "SchoolBanner",

  mixins: [RenderImages],

  props: {
    school_name: String,
    school_state: String,
    school_country: String,
    banner_default: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    getInitial() {
      return this.school_name.slice(0, 1);
    },
    getLocation() {
      if (this.school_country) {
        return `${this.school_state}, ${this.school_country}`;
      } else {
        return `${this.school_state}`;
      }
    }
  }
};
</script>

<style lang="scss">
.school-display-banner {
  height: 223px;
  margin-bottom: 50px;

  @include breakpoint_max(md) {
    height: 160px;
  }

  @include breakpoint_max(sm) {
    height: 130px;
  }

  .banner-overlay {
    .img {
      @include img_cover;

      &-overlay {
        mix-blend-mode: overlay;
        opacity: 0.7;
      }
    }
  }

  .school-detail-info {
    @include transform_center;
    @include flex_row_start_nowrap;
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

    .avatar {
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
      margin-right: 16px;
    }

    .school-name {
      font-size: 32px;
      line-height: 145%;
      margin-bottom: 4px;

      @include breakpoint_max(md) {
        font-size: 20px;
      }

      @include breakpoint_max(sm) {
        font-size: 14px;
        margin-bottom: 0px;
      }
    }

    .school-location {
      font-size: 16px;
      line-height: 145%;
      margin-bottom: 10px;

      @include breakpoint_max(md) {
        font-size: 14px;
      }

      @include breakpoint_max(sm) {
        margin-bottom: 8px;
        font-size: 12px;
      }
    }

    .profile-update-cta {
      font-size: 12px;
      line-height: 16px;

      a {
        &:hover {
          color: #ffffff !important;
        }
      }
    }
  }
}
</style>
