<template>
  <div>
    <vue-headful title="Signup Lander | Gradely" description="Description goes here"/>
    <div class="signup-lander-section base-type-layout">
      <div class="container px-1">
        <!-- TOP ROW -->
        <div class="row top-row">
          <div class="col-5">
            <img :src="localImg('Gradely.png')" alt>
          </div>
          <div class="col-7 d-flex justify-content-end align-items-center nowrap">
            <div class="text color_text">Already have an account?</div>
            <div class>
              <router-link :to="{name: 'GradelyLogin'}" class="btn btn-md font-weight-bold">Login</router-link>
            </div>
          </div>
        </div>

        <!-- BOTTOM ROW -->
        <div class="row bottom-row">
          <div class="col-12 col-md-11 mx-auto">
            <div class="row">
              <!-- LEFT -->
              <div class="col-12 col-md-3 col-xl-4 left-col">
                <div class="text-title color_grey_dark text-uppercase">Menu</div>
                <!-- MENU ITEMS -->
                <ul class="list-unstyled">
                  <router-link :to="{name: 'GradelyLogin'}">Log In</router-link>
                  <router-link to>Gradely.school</router-link>
                  <router-link to>Gradely.ng</router-link>
                  <router-link to>Help Center</router-link>
                  <router-link to>Contact Us</router-link>
                  <router-link to>Terms of Use</router-link>
                  <router-link to>Privacy Policy</router-link>
                </ul>
              </div>

              <!-- RIGHT -->
              <div class="col-12 col-md-9 col-xl-8 right-col">
                <div class="text-title color_grey_dark text-uppercase">Sign up as...</div>

                <!-- USER TYPES -->
                <div
                  class="user-types w-100 d-flex justify-content-between align-items-start flex-wrap"
                >
                  <!-- USER BLOCK -->
                  <router-link
                    :to="{name: user.route}"
                    class="user-block rounded-10"
                    v-for="(user, index) in user_types"
                    :key="index"
                  >
                    <!-- AVATAR -->
                    <div class="avatar avatar-square" :class="user.icon_bg">
                      <span class="brand_primary flex-center" :class="user.icon"></span>
                    </div>

                    <!-- TYPE INFO -->
                    <div class="type-info">
                      <!-- TYPE TITLE -->
                      <div class="type-title brand_primary">{{ user.title }}</div>

                      <!-- TYPE TEXT -->
                      <div class="type-text color_text">{{ user.text }}</div>

                      <!-- TYPE BUTTON -->
                      <div class="type-cta">
                        <router-link
                          :to="{name: user.route}"
                          class="text-uppercase color_text"
                        >SIGNUP AS A {{ user.title }}</router-link>
                      </div>
                    </div>
                  </router-link>
                  <!-- USER BLOCK -->
                </div>
                <!-- USER TYPES -->

                <!-- BOTTTOM CTA -->
                <div class="bottom-cta d-flex justify-content-start align-items-center">
                  <div class="text color_text">Already have an account?</div>
                  <router-link
                    :to="{name: 'GradelyLogin'}"
                    class="btn btn-md font-weight-bold"
                  >Log In</router-link>
                </div>
                <!-- BOTTTOM CTA -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupLander",

  data() {
    return {
      user_types: [
        {
          title: "Student",
          text:
            "Create a student account. Start taking homeworks and tracking your performance with Gradely",
          icon: "icon-student",
          icon_bg: "brand_inverse_light_bg",
          route: "StudentSignup"
        },
        {
          title: "Parent",
          text:
            "Track your child’s performance and with actionable recommendation with Gradely for parents.",
          icon: "icon-parents",
          icon_bg: "brand_green_light_bg",
          route: "ParentSignup"
        },
        {
          title: "Teacher",
          text:
            "Manage your class assessment and grading and development with Gradely Teachers.",
          icon: "icon-teacher-class",
          icon_bg: "brand_accent_light_bg",
          route: "TeacherSignup"
        },
        {
          title: "School",
          text:
            "Manage your school, teacher and curriculum. Get discovered by thousands of parents.",
          icon: "icon-college",
          icon_bg: "brand_red_light_bg",
          route: "SchoolSignup"
        }
      ]
    };
  },

  methods: {}
};
</script>

<style lang="scss">
.signup-lander-section {
  position: relative;
  top: 0px;

  .top-row {
    padding: 20px 0px;
    margin-bottom: 80px;
    border-bottom: 1px solid #ddf1fa;

    @include breakpoint_max(md) {
      margin-bottom: 50px;
    }

    img {
      margin-top: 5px;
      @include custom_min_edge(144, 42);

      @include breakpoint_max(md) {
        @include custom_min_edge(140, 42);
      }

      @include breakpoint_max(xs) {
        @include custom_min_edge(130, 38);
      }
    }

    .text {
      font-size: 14px;
      line-height: 19px;
      letter-spacing: 0.05em;
      margin-right: 10px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }

      @include breakpoint_max(md) {
        font-size: 12.5px;
        margin-right: 5px;
      }

      @include breakpoint_max(sm) {
        display: none;
      }
    }

    .btn {
      background: transparent !important;
      color: $brand_primary;
      border: 1.5px solid $brand_primary !important;
      transition: all 0.3s ease-in-out;

      @include breakpoint_max(xs) {
        font-size: 10px;
      }

      &:hover {
        color: $brand_white;
        background: $brand_primary !important;
      }
    }
  }

  .bottom-row {
    margin-bottom: 30px;
    .row {
      @include flex_row_between_wrap;
      align-items: flex-start;
    }

    .text-title {
      font-size: 14px;
      line-height: 150%;
      margin-bottom: 26px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }
    }

    .left-col {
      @include breakpoint_max(md) {
        order: 1;
      }

      ul {
        a {
          display: block;
          font-size: 16px;
          line-height: 165%;
          margin-bottom: 15px;
          color: $color_text;
          transition: all 0.3s ease-in-out;

          @include breakpoint_max(lg) {
            font-size: 15px;
          }

          @include breakpoint_max(md) {
            font-size: 14px;
            display: inline-block;
            margin-right: 15px;
          }

          @include breakpoint_max(xs) {
            font-size: 13px;
          }

          &:hover {
            color: $brand_inverse;
          }
        }
      }
    }

    .right-col {
      @include breakpoint_max(md) {
        order: 0;
      }
      .user-types {
        border-bottom: 1px solid #ddf1fa;

        .user-block {
          @include flex_row_start_nowrap;
          align-items: flex-start;
          padding: 18px;
          cursor: pointer;
          width: 48%;
          margin-bottom: 30px;
          transition: all 0.4s ease-in-out;

          @include breakpoint_max(lg) {
            width: 49.5%;
          }

          @include breakpoint_max(sm) {
            width: 100%;
          }

          .avatar {
            @include equal_min_edge(55);
            margin-right: 15px;
            border-radius: 10px;

            @include breakpoint_max(lg) {
              @include equal_min_edge(50);
            }

            @include breakpoint_max(md) {
              @include equal_min_edge(45);
            }

            span {
              font-size: 38px;

              @include breakpoint_max(lg) {
                font-size: 32px;
              }

              @include breakpoint_max(md) {
                font-size: 28px;
              }
            }
          }

          .type-title {
            font-size: 22px;
            line-height: 120%;
            margin-bottom: 12px;

            @include breakpoint_max(lg) {
              font-size: 19px;
            }

            @include breakpoint_max(md) {
              font-size: 18px;
            }

            @include breakpoint_max(xs) {
              font-size: 17px;
            }
          }

          .type-text {
            margin-bottom: 20px;
            font-size: 14px;
            line-height: 165%;

            @include breakpoint_max(lg) {
              font-size: 13px;
            }
          }

          .type-cta {
            a {
              display: block;
              height: auto;
              font-size: 14px;
              border-radius: 3px;
              line-height: 183.8%;
              letter-spacing: 0.05em;
              padding: 3.5px;
              padding-left: 10px;
              border-left: 4px solid $brand_accent;
              transition: all 0.3s ease-in-out;

              @include breakpoint_max(lg) {
                font-size: 13px;
              }

              &:hover {
                background: $brand_accent_light;
              }
            }
          }

          &:hover {
            background: #f5f5f5;
          }
        }
      }

      .bottom-cta {
        margin-top: 38px;
        margin-bottom: 38px;

        .text {
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 0.05em;
          margin-right: 10px;

          @include breakpoint_max(lg) {
            font-size: 13px;
          }

          @include breakpoint_max(md) {
            font-size: 12.5px;
            margin-right: 5px;
          }
        }

        .btn {
          background: transparent !important;
          color: $brand_primary;
          border: 1.5px solid $brand_primary !important;
          transition: all 0.3s ease-in-out;

          @include breakpoint_max(xs) {
            font-size: 10px;
          }

          &:hover {
            color: $brand_white;
            background: $brand_primary !important;
          }
        }
      }
    }
  }
}
</style>
