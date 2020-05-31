<template>
  <div>
    <div class="container school-details">
      <div class="row school-row px-1 d-flex justify-content-start align-items-start nowrap">
        <!-- SCHOOL AVATAR -->
        <div class="col-12 col-md-3 px-0">
          <div class="avatar avatar_massive rounded-10 white">
            <img :src="dynamicImg(school_logo)" :alt="school_name" class="avatar-img m-auto">
          </div>
        </div>

        <!-- SCHOOL INFO -->
        <div class="col-12 col-md-9 px-0 school-info">
          <div class="school-title color_text font-weight-bold text-capitalize">{{school_name}}</div>
          <div class="school-motto border_grey_dark">{{school_motto}}</div>

          <!-- MORE INFO -->
          <div
            class="info-row d-flex justify-content-start align-items-start nowrap overflow-auto w-100"
          >
            <div class="info-column">
              <div class="data-label">Curriculum</div>
              <div class="data">{{school_curriculum}}</div>
            </div>

            <div class="info-column">
              <div class="data-label">Boarding Type</div>
              <div class="data">{{boarding_type}}</div>
            </div>

            <div class="info-column">
              <div class="data-label">EDUCATIONAL SCOPE</div>
              <div class="data">{{education_scope}}</div>
            </div>

            <div class="info-column">
              <div class="data-label">Date Established</div>
              <div class="data">{{date_established}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "SchoolInfoBlock",
  props: {
    school_logo: String,
    school_name: String,
    school_motto: String,
    school_curriculum: String,
    boarding_type: String,
    education_scope: String,
    date_established: String
  },
  mixins: [RenderImages]
};
</script>

<style lang="scss">
.school-details {
  margin-bottom: 30px;

  .school-row {
    @include breakpoint_max(md) {
      @include flex_column_start;
    }
  }

  .avatar {
    box-shadow: 1px 4px 20px rgba(0, 0, 0, 0.15);
    margin-right: 26px;
    position: relative;
    top: -63px;

    @include breakpoint_max(md) {
      top: -42px;
    }

    @include breakpoint_max(sm) {
      margin-left: 15px !important;
    }

    @include breakpoint_max(xs) {
      margin-left: 11px !important;
    }

    .avatar-img {
      width: 90%;
    }
  }

  .school-info {
    padding-top: 45px;

    @include breakpoint_max(xl) {
      padding-left: 40px !important;
    }

    @include breakpoint_max(lg) {
      padding-left: 85px !important;
    }

    @include breakpoint_max(md) {
      padding-top: 0px;
      padding-left: 0px !important;
      margin-top: -20px;
    }

    @include breakpoint_max(sm) {
      width: 95%;
      margin-left: auto;
      margin-right: auto;
    }

    .school-title {
      font-size: 32px;
      line-height: 145%;
      margin-bottom: 4px;
      letter-spacing: 0.02em;
      text-shadow: 0.25px 0px, 0px 0.25px, 0.25px 0.25px;

      @include breakpoint_max(lg) {
        font-size: 28px;
      }

      @include breakpoint_max(md) {
        font-size: 26px;
      }

      @include breakpoint_max(sm) {
        font-size: 24px;
        font-weight: 500 !important;
      }
    }

    .school-motto {
      line-height: 145%;
      margin-bottom: 30px;
      letter-spacing: 0.01em;

      @include breakpoint_max(sm) {
        font-size: 15px;
      }
    }

    .info-row {
      -ms-overflow-style: none;

      &-webkit-scrollbar {
        display: none;
      }

      .info-column {
        width: auto;
        margin-right: 30px;

        .data-label {
          font-size: 13px;
          line-height: 145%;
          color: $border_grey_dark;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 4px;

          @include breakpoint_max(lg) {
            font-size: 12px;
          }

          @include breakpoint_max(sm) {
            font-size: 11.5px;
          }
        }

        .data {
          font-weight: 500;
          font-size: 15.5px;
          line-height: 145%;
          color: $color_text;
          letter-spacing: 0.03em;
          text-shadow: 0.4px 0px, 0px 0.4px, 0.4px 0.4px;

          @include breakpoint_max(lg) {
            font-size: 14.5px;
          }

          @include breakpoint_max(sm) {
            font-size: 13.75px;
          }
        }
      }
    }
  }
}
</style>
