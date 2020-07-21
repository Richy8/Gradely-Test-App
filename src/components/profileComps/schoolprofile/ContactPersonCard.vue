<template>
  <div>
    <div class="contact-person-card white rounded-5">
      <!-- CARD AVATAR SECTION -->
      <div class="card-avatar-section">
        <div class="title text-uppercase color_grey_dark">Contact Person</div>
        <div class="d-flex justify-content-start align-items-start nowrap">
          <!-- AVATAR -->
          <div class="avatar avatar_lg">
            <img v-lazy="dynamicImg(img)" :alt="name" class="avatar-img">
          </div>

          <!-- CONTACT INFO -->
          <div class="contact-info">
            <div class="name color_text">{{ name }}</div>
            <div class="role color_grey_dark">{{ role }}</div>
            <div class="contact">
              <a href="javascript:void(0)" class="btn-link link-underline font-weight-bold">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD CONTACT ADDRESS -->
      <div class="card-contact-address">
        <div class="title">Address</div>
        <div class="d-flex justify-content-start align-items-center nowrap">
          <!-- ICON -->
          <div class="avatar contact-icon">
            <span class="icon icon-map-pin-sm"></span>
          </div>

          <!-- INFO -->
          <div class="info">
            <div class="location">{{ location }}</div>
            <div class="contact-data">{{ address }}</div>
          </div>
        </div>
      </div>

      <!-- CARD CONTACT PHONE AND EMAIL -->
      <div class="card-contact-data">
        <div class="title">Contact</div>

        <!-- PHONE -->
        <div class="d-flex justify-content-start align-items-center nowrap bottom-10">
          <!-- ICON -->
          <div class="avatar contact-icon">
            <span class="icon icon-phone"></span>
          </div>

          <!-- INFO -->
          <div class="info">
            <div class="contact-data">{{ phone }}</div>
          </div>
        </div>

        <!-- EMAIL -->
        <div class="d-flex justify-content-start align-items-center nowrap bottom-10">
          <!-- ICON -->
          <div class="avatar contact-icon">
            <span class="icon icon-email"></span>
          </div>

          <!-- INFO -->
          <div class="info">
            <div class="contact-data">{{ email }}</div>
          </div>
        </div>

        <!-- WEBSITE -->
        <div class="d-flex justify-content-start align-items-center nowrap bottom-0">
          <!-- ICON -->
          <div class="avatar contact-icon">
            <span class="icon icon-link"></span>
          </div>

          <!-- INFO -->
          <div class="info">
            <div class="contact-data">{{ website }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPersonCard",
  props: [
    "name",
    "role",
    "location",
    "address",
    "phone",
    "email",
    "website",
    "img"
  ]
};
</script>

<style lang="scss">
.contact-person-card {
  width: 110%;
  border: 1px solid $border_grey;
  box-sizing: border-box;
  padding: 30px 30px 39px;

  @include breakpoint_max(xl) {
    width: 100%;
    padding: 25px 20px 30px;
  }

  .title {
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.05em;
    margin-bottom: 20px;

    @include breakpoint_max(lg) {
      font-size: 13px;
    }
  }

  .contact-icon {
    margin-right: 15px;
    background: #dbf5f8;

    .icon {
      @include transform_center;
      color: $brand_primary;
      font-size: 17px;
    }
  }

  .info {
    .location {
      font-size: 12px;
      line-height: 100%;
      letter-spacing: 0.05em;
      color: $color_grey_dark;
      margin-bottom: 7px;

      @include breakpoint_max(lg) {
        font-size: 11.5px;
      }
    }

    .contact-data {
      font-size: 13.5px;
      line-height: 100%;
      letter-spacing: 0.05em;
      color: $color_ash;
      word-break: break-all;

      @include breakpoint_max(lg) {
        font-size: 12.5px;
      }
    }
  }

  .bottom-10 {
    margin-bottom: 10px;
  }

  .bottom-0 {
    margin-bottom: 0px;
  }

  .card-avatar-section {
    margin-bottom: 30px;

    .avatar {
      margin-right: 15px;
    }

    .name {
      line-height: 165%;
      letter-spacing: 0.05em;
      font-weight: 900;
      word-break: break-all;

      @include breakpoint_max(lg) {
        font-size: 15px;
      }
    }

    .role {
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 0.05em;
      margin-bottom: 15px;
      word-break: break-all;

      @include breakpoint_max(lg) {
        font-size: 12px;
      }
    }

    .contact {
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0.05em;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }
    }
  }

  .card-contact-address {
    margin-bottom: 30px;
  }
}
</style>
