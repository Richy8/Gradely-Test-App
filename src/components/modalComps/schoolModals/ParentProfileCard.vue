<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="parent-profile-card color_deep_blue_bg position-relative h-auto">
          <!-- CARD TOP -->
          <div class="card-top position-relative w-100 h-auto">
            <!-- AVATAR -->
            <div class="avatar avatar_lg">
              <div class="avatar-text brand_accent_bg color_deep_blue font-weight-bold">RH</div>
            </div>

            <!-- PARENT NAME -->
            <div class="parent-name font-weight-bold color_white">Rubius Hagrid</div>

            <!-- PARENT ROLE -->
            <div class="parent-role font-14 border_grey">Father</div>

            <!-- PARENT INFO -->
            <div class="parent-info">
              <!-- PHONE -->
              <div class="col col-one">
                <!-- ICON -->
                <span class="icon-phone border_grey_dark mr-2"></span>
                <!-- INFO -->
                <div>
                  <div class="label">Phone Number</div>
                  <div class="output brand_accent link-underline">
                    <a href="tel:+2348033752311">08033752311</a>
                  </div>
                </div>
              </div>

              <!-- EMAIL -->
              <div class="col col-two">
                <!-- ICON -->
                <span class="icon-email border_grey_dark mr-2"></span>
                <!-- INFO -->
                <div>
                  <div class="label">Email Address</div>
                  <div class="output output-email brand_accent link-underline">
                    <a href="mailto:rbh_ltd@gmail.com">rbh_ltd@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- MESSAGE BUTTON -->
            <!-- <button
              class="btn btn-md d-flex flex-center rounded-20 btn-grey-outline"
              @click="$emit('toggleMessage')"
            >
              <span class="icon-chat font-16 border_grey_dark mr-2"></span>
              SEND A MESSAGE
            </button>-->
          </div>

          <!-- CARD BOTTOM -->
          <div class="card-bottom white position-relative w-100 h-auto">
            <div
              class="title-label font-weight-bold font-14 text-uppercase color_grey_dark"
            >Children</div>
            <!-- CHILDREN ROW -->
            <div
              class="children-row w-100 d-flex justify-content-around align-items-center flex-wrap"
            >
              <!-- CHILD COMPONENT -->
              <ChildListCard
                img="MaleChild.png"
                child_name="Jake Hagrid"
                class_year="Year 7"
                branch="Gold"
              ></ChildListCard>

              <ChildListCard
                img="FemaleChild.png"
                child_name="Penelope Hagrid"
                class_year="Year 7"
                branch="Silver"
              ></ChildListCard>
              <!-- CHILD COMPONENT -->
            </div>
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "ParentProfileCard",

  components: {
    ModalCover,
    ChildListCard: () =>
      import(/* webpackChunkName: "ChildListCard" */ "@/components/schoolComps/dashboard/parent/ChildListCard")
  },

  data() {
    return {
      message_modal: false
    };
  },

  methods: {}
};
</script>

<style lang="scss">
.parent-profile-card {
  .card-top {
    @include flex_column_center;
    justify-content: flex-start;
    position: relative;

    .avatar {
      margin-top: 50px;
      margin-bottom: 20px;

      .avatar-text {
        font-size: 21px;
        line-height: 29px;
        letter-spacing: 0.03em;
      }
    }

    .parent-name {
      font-size: 21px;
      line-height: 29px;
      letter-spacing: 0.03em;

      @include breakpoint_max(lg) {
        font-size: 18px;
      }
    }

    .parent-role {
      margin-bottom: 22px;
      letter-spacing: 0.03em;

      @include breakpoint_max(lg) {
        font-size: 13px !important;
      }
    }

    .parent-info {
      @include flex_row_around_nowrap;
      align-items: flex-start;
      margin-bottom: 55px;

      @include breakpoint_min_max(360, 390) {
        @include flex_row_center_nowrap;
        width: 95%;
        padding-left: 20px;
        padding-right: 20px;
      }

      .col {
        @include flex_row_start_nowrap;
        align-items: flex-start;

        .label {
          text-transform: capitalize;
          font-size: 12px;
          line-height: 16px;
          color: $border_grey;
          margin-bottom: 2px;

          @include breakpoint_max(xs) {
            font-size: 11px;
          }
        }

        .output {
          font-weight: bold;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 0.05em;

          @include breakpoint_max(xs) {
            font-size: 12px;
          }

          &-email {
            word-wrap: break-word;
            width: 180px;

            @include breakpoint_min_max(350, 390) {
              width: 120px;
            }
          }
        }

        &-one {
          margin-right: 5px;
        }

        &-two {
          margin-left: 5px;
        }

        @include breakpoint_max(lg) {
          &-one {
            margin-right: 0px;
          }

          &-two {
            margin-left: 0px;
          }
        }
      }
    }

    button {
      margin-bottom: 20px;

      @include breakpoint_max(xs) {
        font-size: 11px;
      }

      &:hover {
        span {
          color: $brand_primary !important;
        }
      }
    }
  }

  .card-bottom {
    padding: 20px 30px 30px;

    @include breakpoint_max(xs) {
      padding: 10px 20px 20px;
    }

    @include breakpoint_min_max(350, 400) {
      padding: 5px 20px 20px;
    }

    .title-label {
      margin-bottom: 15px;

      @include breakpoint_max(lg) {
        font-size: 13px !important;
      }
    }
  }
}
</style>
