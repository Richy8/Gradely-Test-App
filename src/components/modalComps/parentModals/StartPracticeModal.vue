<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="practice-card-modal color_deep_blue_bg position-relative h-auto">
          <!-- CARD TOP -->
          <div class="card-top position-relative w-100 h-auto">
            <!-- AVATAR -->
            <div class="avatar avatar_xl avatar-square icon-box brand_navy_bg">
              <img v-lazy="dynamicImg('Practice.png')" alt class="avatar-img">
            </div>

            <!-- NAME -->
            <div class="name font-weight-bold color_white">Basic Algebra</div>

            <!-- subject -->
            <div class="subject font-14 border_grey_dark">Mathematics</div>

            <div class="item-row w-100 d-flex justify-content-around align-items-center nowrap">
              <!-- ITEM ONE -->
              <div class="item d-flex justify-content-start align-items-start nowrap">
                <div class="avatar">
                  <span class="icon-help-circle flex-center border_grey_dark"></span>
                </div>

                <div class="info">
                  <div class="value brand_inverse_light">
                    <span class="font-weight-bold">12</span>
                    <span></span>
                  </div>
                  <div class="title brand_inverse_light font-12">Questions</div>
                </div>
              </div>

              <!-- ITEM TWO -->
              <div class="item d-flex justify-content-start align-items-start nowrap">
                <div class="avatar">
                  <span class="icon-watch flex-center border_grey_dark"></span>
                </div>

                <div class="info">
                  <div class="value brand_inverse_light">
                    <span class="font-weight-bold">15</span> &nbsp;
                    <span>minutes</span>
                  </div>
                  <div class="title brand_inverse_light font-12">Duration</div>
                </div>
              </div>

              <!-- ITEM THREE -->
              <div class="item d-flex justify-content-start align-items-start nowrap">
                <div class="avatar">
                  <span class="icon-bar-chart flex-center border_grey_dark"></span>
                </div>

                <div class="info">
                  <div class="value brand_inverse_light">
                    <span class="font-weight-bold">Single Topic</span>
                    <span></span>
                  </div>
                  <div class="title brand_inverse_light font-12">Type</div>
                </div>
              </div>
            </div>
          </div>

          <!-- CARD BOTTOM -->
          <div class="card-bottom white position-relative w-100 h-auto" style="padding: 40px 0px;">
            <!-- START BUTTON -->
            <div class="d-flex justify-content-center">
              <router-link
                :to="'/'+account_type+'/homework/practice-test'"
                class="btn btn-md btn-accent brand_navy font-weight-900 py-3 px-5"
              >Start Practice</router-link>
            </div>
            <!-- START BUTTON -->
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "StartHomeworkModal",

  components: {
    ModalCover
  },

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.practice-card-modal {
  .card-top {
    @include flex_column_center;
    justify-content: flex-start;
    position: relative;

    .icon-box {
      margin-top: 50px;
      margin-bottom: 20px;
    }

    .name {
      font-size: 21px;
      line-height: 29px;
      margin-bottom: 4px;
      letter-spacing: 0.03em;

      @include breakpoint_max(lg) {
        font-size: 18px;
      }
    }

    .subject {
      margin-bottom: 20px;
      letter-spacing: 0.03em;

      @include breakpoint_max(lg) {
        font-size: 13px !important;
      }
    }

    .homework-info {
      margin-bottom: 40px;
    }
  }

  .item-row {
    padding: 34px 30px 30px;

    @include breakpoint_max(xs) {
      padding: 34px 10px 30px;
    }

    .item {
      .avatar {
        margin-right: 5px;
        margin-top: -4px;

        @include breakpoint_max(sm) {
          margin-right: 2px;
        }

        span {
          font-size: 19px;

          @include breakpoint_max(sm) {
            font-size: 17px;
          }
        }
      }

      .value {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 2px;

        @include breakpoint_max(sm) {
          font-size: 14px;
        }
        @include breakpoint_max(xs) {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
