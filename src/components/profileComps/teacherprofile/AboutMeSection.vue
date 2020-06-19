<template>
  <div>
    <div class="teacher-about">
      <div class="row">
        <!-- MOBILE PROFILE PHOTO -->
        <div class="col-3 d-md-none">
          <div class="avatar avatar-square avatar_xxl brand_inverse_light_bg">
            <img v-lazy="dynamicImg(teacher_img)" alt class="avatar-img">
          </div>
        </div>

        <!-- TEACHER INFO -->
        <div class="col-9">
          <div class="title text-uppercase font-weight-bold brand_primary">Teacher</div>

          <!-- TEACHER NAME -->
          <div class="teacher-name brand_navy font-weight-bold">{{teacher_name}}</div>

          <!-- SUBJECTS -->
          <div class="subjects color_grey_dark">{{teacher_subjects}}</div>

          <!-- ACTIVITY -->
          <div class="activity d-flex justify-content-start align-items-center border-0">
            <!-- CLASS TAUGHT -->
            <div class="class-taught">
              <!-- ACTIVITY COUNT -->
              <div class="count font-weight-bold brand_navy">
                {{class_count}}
                <span class="font-weight-normal color_grey_dark">Classes</span>
              </div>
              <div class="count-item color_ash">Taught</div>
            </div>

            <!-- HOMEWORK ASSIGNED -->
            <div class="homework-assigned">
              <!-- ACTIVITY COUNT -->
              <div class="count font-weight-bold brand_navy">
                {{homework_count}}
                <span class="font-weight-normal color_grey_dark">Homework</span>
              </div>
              <div class="count-item color_ash">Assigned</div>
            </div>
          </div>
        </div>

        <!-- ACTIVITY BUTTON -->
        <div
          class="col-12 button-row d-flex justify-content-start align-items-center d-md-none mt-4"
        >
          <!-- MESSAGE BUTTON -->
          <!-- <button class="btn btn-md btn-inverse color_text mr-3" @click="$emit('toggleMessage')">
            <span class="icon-chat mr-2 font-16"></span> Send a Message
          </button>-->

          <!-- REMOVE BUTTON -->
          <router-link
            to
            class="transparent_bg text-capitalize color_ash font-14 font-weight-600"
          >Remove from Class</router-link>
        </div>
      </div>

      <!-- ABOUT ME -->
      <div class="row">
        <div class="col-12 about-me-block">
          <!-- TITLE -->
          <div class="page-title color_text font-weight-bold">About Me</div>

          <!-- ABOUT TEXT -->
          <div class="about-text color_ash">{{about_me_text}}</div>

          <div class="contact-block">
            <!-- MOBILE PHONE -->
            <div>
              <span class="icon icon-phone"></span>
              <span class="info color_text">{{teacher_phone}}</span>
            </div>

            <!-- EMAIL ADDRESS -->
            <div>
              <span class="icon icon-email"></span>
              <span class="info color_text">{{teacher_email}}</span>
            </div>

            <!-- HOUSE ADDRESS -->
            <div>
              <span class="icon icon-map"></span>
              <span class="info color_text">{{teacher_address}}</span>
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
  name: "AboutMeSection",

  props: {
    teacher_img: String,
    teacher_name: String,
    teacher_subjects: String,
    class_count: Number,
    homework_count: Number,
    about_me_text: String,
    teacher_phone: String,
    teacher_email: String,
    teacher_address: String
  },

  mixins: [RenderImages]
};
</script>

<style lang="scss">
.teacher-about {
  .title {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }

  .teacher-name {
    margin-bottom: 2px;
    font-size: 32px;
    line-height: 44px;

    @include breakpoint_max(md) {
      font-size: 26px;
      line-height: 38px;
    }

    @include breakpoint_max(sm) {
      font-size: 23px;
    }
  }

  .subjects {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;

    @include breakpoint_max(md) {
      font-size: 14px;
      line-height: 18px;
    }

    @include breakpoint_max(sm) {
      font-size: 12px;
    }

    @include breakpoint_max(xs) {
      font-size: 11px;
    }
  }

  .class-taught {
    margin-right: 38px;

    @include breakpoint_max(sm) {
      margin-right: 30px;
    }
  }

  .class-taught,
  .homework-assigned {
    .count {
      font-size: 21px;
      line-height: 29px;
      letter-spacing: 0.05em;

      @include breakpoint_max(md) {
        font-size: 18px;
        line-height: 25px;
      }

      span {
        position: relative;
        bottom: -2px;
        font-size: 10px;
        line-height: 14px;

        @include breakpoint_max(md) {
          font-size: 9px;
          line-height: 12px;
        }
      }
    }

    .count-item {
      margin-top: 3px;
      font-size: 12px;
      line-height: 16px;

      @include breakpoint_max(md) {
        font-size: 11px;
        line-height: 15px;
      }

      @include breakpoint_max(sm) {
        margin-top: 0px;
      }
    }
  }

  .button-row {
    margin-top: 15px;

    .icon-chat {
      position: relative;
      top: 3px;
    }

    @include breakpoint_max(sm) {
      .btn {
        font-size: 11px;
        padding: 10px 15px;
      }
    }

    @include breakpoint_max(xs) {
      .btn {
        font-size: 10px;
        padding: 9px 14px;
      }
    }
  }

  // ABOUT ME INFO SECTION
  .about-me-block {
    margin-top: 50px;
    margin-bottom: 30px;

    @include breakpoint_max(sm) {
      margin-top: 30px;
    }

    .about-text {
      font-size: 15.5px;
      line-height: 170%;
      margin-bottom: 10px;

      @include breakpoint_max(md) {
        font-size: 15px;
        line-height: 165%;
      }

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }

    .contact-block {
      background: rgb(235, 235, 235);
      border-radius: 4px;
      padding: 19px 20px;

      @include breakpoint_max(sm) {
        padding: 11px 15px;
      }

      div {
        font-size: 14px;
        margin-bottom: 12px;

        &:last-of-type {
          margin-bottom: 0px;
        }

        @include breakpoint_max(md) {
          font-size: 13px;
        }

        @include breakpoint_max(sm) {
          font-size: 12.5px;
        }
      }

      .icon {
        position: relative;
        top: 2.5px;
        font-size: 21px;
        margin-right: 12px;
        color: $border_grey_dark;

        @include breakpoint_max(md) {
          font-size: 20px;
        }

        @include breakpoint_max(sm) {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
