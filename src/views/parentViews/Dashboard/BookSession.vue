<template>
  <div>
    <vue-headful title="Book Session | Gradelyng" description="Description goes here"/>
    <div class="tutor-booking-section container">
      <!-- CLOSE TRIGGER -->
      <div class="pageClose dialogDismiss">
        <router-link
          :to="'/'+account_type+'/dashboard/catchup/tutor_profile'"
          class="close_dialog cls_lg transparent_bg"
        ></router-link>
      </div>
      <!-- CLOSE TRIGGER -->

      <div class="row">
        <div class="col-12">
          <div class="title brand_navy">Book Session</div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-8">
          <div class="left-layout white rounded-20">
            <div class="title text-uppercase color_grey_dark font-weight-bold">Session Details</div>

            <!-- CHILDREN CONTAINER -->
            <div class="children-container white rounded-5" v-if="account_type==='parent'">
              <div
                class="title text-uppercase color_grey_dark font-weight-bold"
              >You are booking a tutor for...</div>
              <ChildrenListCard
                child_img="avatar14.png"
                child_name="Omolade Giwa"
                child_class_year="Year 7"
                :full_width="true"
                :border_bottom="true"
              ></ChildrenListCard>

              <!-- OPTION -->
              <div class="container-option">
                <div class="add-new-item mt-3 mb-1 pointer">
                  <div class="undone"></div>
                  <div
                    class="label-text font-weight-bold brand_accent"
                    @click="redirectToAddChild"
                  >Add another Child</div>
                </div>
              </div>
            </div>

            <!-- TUTOR PLAN COMPONENT -->
            <TutorPlan></TutorPlan>
            <!-- TUTOR PLAN COMPONENT -->

            <!-- SESSION SCHEDULE COMPONENT -->
            <SessionSchedule></SessionSchedule>
            <!-- SESSION SCHEDULE COMPONENT -->
          </div>
        </div>

        <!-- SUMMARY SECTION -->
        <div class="col-12 col-md-4">
          <SummaryCard page_redirect="tutor_booking"></SummaryCard>

          <!-- CONTACT SECTION -->
          <div class="contact-section">
            <!-- CONTACT TITLE -->
            <div class="contact-title color_text mb-4 text-center">Have more Questions?</div>

            <!-- CONTACT BUTTON -->
            <button
              class="contact-btn btn btn-md z-depth-0 btn-whitish border color_text font-weight-bold mb-4"
            >
              <img :src="localImg('WhatsappIcon.png')" alt class="mr-2">
              <span class="ml-2">Contact Us</span>
            </button>

            <!-- WAVY LINE IMAGE -->
            <img v-lazy="localImg('WavyLine.png')" alt class="mb-4">

            <!-- CONTACT INFO -->
            <div class="contact-info color_text text-center">
              Or you can call us on:
              <span class="brand_tonic">(+234) 810 059 8268</span>
            </div>
          </div>
          <!-- CONTACT SECTION -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "PlanUpgrade",

  components: {
    ChildrenListCard: () =>
      import(/* webpackChunkName: "ChildrenListCard" */ "@/components/globalComps/SettingsComps/ProfileComps/ChildrenListCard"),
    SummaryCard: () =>
      import(/* webpackChunkName: "SummaryCard" */ "@/components/globalComps/SettingsComps/BillingComps/SummaryCard"),
    TutorPlan: () =>
      import(/* webpackChunkName: "TutorPlan" */ "@/components/classComps/catchup/catchupbooking/TutorPlan"),
    SessionSchedule: () =>
      import(/* webpackChunkName: "SessionSchedule" */ "@/components/classComps/catchup/catchupbooking/SessionSchedule")
  },
  mixins: [RenderImages],

  data() {
    return {
      account_type: "",
      renewal: true,

      plans: [
        { duration: "3 Months", charge: 4500, selected: true },
        { duration: "6 Months", charge: 8100, selected: false },
        { duration: "1 Year", charge: 14500, selected: false }
      ]
    };
  },

  mounted() {
    bgColorSetter("#f0f0f0");
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    redirectToAddChild() {
      this.$router.push("/parent/onboarding/new_child");
    },

    togglePlan(index) {
      this.plans.map(plan => (plan.selected = false));
      this.plans[index].selected = true;
    }
  }
};
</script>

<style lang="scss">
.tutor-booking-section {
  margin-top: 90px;
  margin-bottom: 90px;

  .title {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 40px;
    font-weight: 900;

    @include breakpoint_max(xl) {
      font-size: 30px;
    }

    @include breakpoint_max(md) {
      font-size: 28px;
    }

    @include breakpoint_max(sm) {
      font-size: 26px;
    }
  }

  .left-layout {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
    padding: 40px;

    @include breakpoint_max(md) {
      margin-bottom: 50px;
    }

    .title {
      font-size: 18px;
      line-height: 29px;
      margin-bottom: 40px;

      @include breakpoint_max(xl) {
        font-size: 16px;
      }

      @include breakpoint_max(md) {
        font-size: 15px;
      }
    }

    .children-container {
      margin-bottom: 40px;

      .title {
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 15px;

        @include breakpoint_max(xl) {
          font-size: 12.5px;
        }
      }
    }
  }

  .contact-section {
    margin-top: 50px;
    @include flex_column_center;

    .contact-title {
      font-size: 21px;
      line-height: 160%;

      @include breakpoint_max(xs) {
        font-size: 18px;
      }
    }

    .contact-info {
      font-size: 15px;
      line-height: 160%;

      @include breakpoint_max(xs) {
        font-size: 14px;
      }
    }
  }
}
</style>
