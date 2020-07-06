<template>
  <div>
    <div class="getting-started-container">
      <!-- BLOCK ONE -->
      <div class="item-block white rounded-5" v-if="account_type==='student'">
        <!-- TOP ROW -->
        <GettingStartedTop></GettingStartedTop>

        <!-- BOTTOM ROW -->
        <div class="bottom-row">
          <!-- INFO CONTAINER -->
          <div class="recommendation-container position-relative w-100 rounded-5 mb-5">
            <!-- RECOMMENDATION CONTENT -->
            <div class="recommendation-content w-100 position-relative">
              <div class="title-one color_text mb-3">Recommended for Andrew</div>

              <!-- RECOMMENDATION ROW -->
              <div class="recommendation-row d-flex justify-content start align-items-start nowrap">
                <DiagnosticTestCard test_img="CardOne.png" test_topic="Approximation"></DiagnosticTestCard>
                <DiagnosticTestCard test_img="CardTwo.png" test_topic="Algebra"></DiagnosticTestCard>
                <DiagnosticTestCard test_img="CardOne.png" test_topic="Set Theory"></DiagnosticTestCard>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BLOCK TWO -->
      <div class="item-block white rounded-5" v-if="account_type==='parent'">
        <!-- TOP ROW -->
        <GettingStartedTop></GettingStartedTop>

        <!-- BOTTOM ROW -->
        <div class="bottom-row">
          <!-- INFO CONTAINER -->
          <div
            class="info-container position-relative w-100 rounded-5 overflow-hidden brand_inverse_light_bg"
          >
            <img v-lazy="localImg('GettingStartedFour.png')" alt class="full-img">
            <!-- TEXT CONTENT -->
            <div class="text-content w-100 h-100 position-absolute">
              <!-- TITLE -->
              <div class="title-one font-weight-bold color_text">Help your Child succeed</div>
              <!-- SUBTITLE -->
              <div
                class="subtitle-one color_text"
              >Gradely CatchUp! is described in this statement. Ideally, it shouldn’t be more than 3 lines in lenght.</div>
              <!-- BUTTON -->
              <button class="btn btn-whitish brand_navy font-weight-bold mx-0">Try CatchUp!</button>
            </div>
          </div>
        </div>
      </div>

      <!-- BLOCK THREE -->
      <div class="item-block white rounded-5">
        <!-- TOP ROW -->
        <GettingStartedTop></GettingStartedTop>

        <!-- BOTTOM ROW -->
        <div class="bottom-row">
          <!-- INFO CONTAINER -->
          <div
            class="info-container position-relative w-100 rounded-5 overflow-hidden brand_inverse_light_bg"
          >
            <img v-lazy="localImg('GettingStartedThree.jpg')" alt class="full-img">
            <!-- TEXT CONTENT -->
            <div class="text-content w-100 h-100 position-absolute">
              <!-- TITLE -->
              <div class="title-one font-weight-bold brand_white">Experience Gradely for Schools</div>
              <!-- SUBTITLE -->
              <div
                class="subtitle-one brand_inverse_light"
              >This statement describes the benefits of inviting their school to Gradely</div>
              <!-- BUTTON -->
              <button
                class="btn btn-whitish brand_navy font-weight-bold mx-0"
              >Connect with your School</button>
            </div>
          </div>
        </div>
      </div>

      <!-- BLOCK FOUR -->
      <div class="item-block white rounded-5">
        <!-- TOP ROW -->
        <GettingStartedTop></GettingStartedTop>

        <!-- BOTTOM ROW -->
        <div class="bottom-row">
          <!-- INFO CONTAINER -->
          <div
            class="info-container position-relative w-100 rounded-5 overflow-hidden brand_inverse_light_bg"
          >
            <div class="content d-flex justify-content-start align-items-center nowrap">
              <!-- LEFT CONTENT -->
              <div class="img-content">
                <img v-lazy="localImg('GettingStartedTwo.png')" alt>
              </div>

              <!-- RIGHT CONTENT -->
              <div class="right-content">
                <!-- TITLE -->
                <div class="title-two brand_navy">Help your Child Excel</div>
                <!-- SUBTITLE -->
                <div
                  class="subtitle-two color_text"
                >Book a tutor session with one of our experienced tutors across subjects</div>
                <!-- BUTTON -->
                <button class="btn btn-accent brand_navy font-weight-bold mx-0">Book a Session</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import GettingStartedTop from "@/components/classComps/feeds/GettingStartedTop";
import DiagnosticTestCard from "@/components/classComps/feeds/DiagnosticTestCard";

export default {
  name: "GettingStartedList",

  mixins: [RenderImages],

  components: {
    GettingStartedTop,
    DiagnosticTestCard
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
.getting-started-container {
  .item-block {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 10px 15px;
    margin-bottom: 15px;
  }

  .bottom-row {
    .info-container {
      height: 290px;

      @include breakpoint_max(sm) {
        height: 270px;
      }

      .full-img {
        @include img_cover;
      }
    }

    .recommendation-container {
      .title-one {
        font-size: 14px;
      }

      .recommendation-row {
        overflow: auto;

        &::-webkit-scrollbar {
          height: 8px;
        }

        &::-webkit-scrollbar-track {
          border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 3px;
          background: $color_grey_light;
        }
      }
    }

    .text-content {
      padding-top: 24px;
      padding-left: 20px;
      padding-right: 20px;

      .title-one {
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 15px;
        width: 50%;

        @include breakpoint_max(sm) {
          font-size: 20px;
          line-height: 28px;
          width: 80%;
        }
      }

      .subtitle-one {
        font-size: 12.5px;
        line-height: 165%;
        margin-bottom: 21px;
        width: 70%;

        @include breakpoint_max(sm) {
          font-size: 12px;
          width: 90%;
        }
      }

      .btn {
        @include breakpoint_max(sm) {
          font-size: 10px !important;
        }
      }
    }

    .content {
      padding: 25px 0px;

      .img-content {
        @include custom_min_edge(225, 240);
        position: relative;
        margin-right: 15px;

        @include breakpoint_max(sm) {
          @include custom_min_edge(200, 220);
          margin-right: 10px;
        }

        @include breakpoint_max(xs) {
          @include custom_min_edge(165, 200);
          margin-right: 7px;
        }

        @include breakpoint_min_max(355, 390) {
          @include custom_min_edge(150, 170);
        }

        @include breakpoint_min_max(330, 354) {
          @include custom_min_edge(135, 160);
        }

        img {
          @include img_cover;
        }
      }

      .title-two {
        font-weight: 900;
        font-size: 25px;
        line-height: 32px;
        margin-bottom: 15px;
        width: 60%;

        @include breakpoint_max(sm) {
          font-size: 20px;
          line-height: 28px;
          width: 90%;
        }

        @include breakpoint_max(xs) {
          font-size: 18px;
          line-height: 26px;
        }
      }
      .subtitle-two {
        font-size: 12.5px;
        line-height: 165%;
        margin-bottom: 20px;

        @include breakpoint_max(sm) {
          font-size: 12px;
        }
      }

      .btn {
        @include breakpoint_max(sm) {
          font-size: 10px !important;
        }
      }
    }
  }
}
</style>
