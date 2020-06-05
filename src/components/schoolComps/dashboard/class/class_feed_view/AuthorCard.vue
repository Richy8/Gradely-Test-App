<template>
  <div>
    <div class="author-card-section white rounded-5">
      <!-- CARD TITLE -->
      <div class="author-card-title font-weight-bold color_grey_dark">Post Author</div>

      <!-- CARD BODY -->
      <div class="author-card-body d-flex justify-content-start align-items-center nowrap">
        <!-- AUTHOR AVATAR -->
        <div class="avatar avatar-square avatar_md">
          <!-- <img :src="dynamicImg()" alt class="avatar-img"> -->
          <div class="avatar-text brand_navy brand_inverse_light_bg">FS</div>
        </div>

        <!-- AUTHOR INFO -->
        <div class="author-info">
          <div class="author-name font-weight-bold color_text">Francis Sanni</div>
          <div class="author-role color_grey_dark">School Admin</div>
        </div>
      </div>

      <!-- CARD BOTTOM -->
      <div class="author-card-bottom">
        <div class="author-card-title font-weight-bold color_grey_dark">Post Audience</div>
        <div class="bottom-section">
          <div class="class-year color_text font-weight-bold">Year 7 - Gold</div>
          <div class="audience color_grey_dark">All Members</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "AuthorCard",

  mixins: [RenderImages]
};
</script>

<style lang="scss">
.author-card-section {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 15px;

  @include breakpoint_max(lg) {
    margin-bottom: 30px;
  }

  .author-card-title {
    text-transform: uppercase;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 15px;
  }

  .author-card-body {
    margin-bottom: 20px;
    .avatar {
      margin-right: 16px;
    }

    .author-name {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 4px;

      @include breakpoint_max(lg) {
        font-size: 15px;
      }
      @include breakpoint_max(sm) {
        font-size: 14.5px;
      }
      @include breakpoint_max(xs) {
        font-size: 14px;
      }
    }
    .author-role {
      font-size: 14px;
      line-height: 19px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }
      @include breakpoint_max(xs) {
        font-size: 12.5px;
      }
    }
  }

  .author-card-bottom {
    @include breakpoint_max(md) {
      display: none;
    }

    .bottom-section {
      padding: 4px 15px 2px;
      border-left: 5px solid $brand_accent;

      .class-year {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 4px;
      }
      .audience {
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
}
</style>
