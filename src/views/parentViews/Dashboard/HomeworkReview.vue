<template>
  <div>
    <vue-headful :title="getPageTitle" description="Description goes here"/>
    <div class="homework-review-section base-type-layout">
      <!-- FIRST ROW -->
      <div class="container mb-3">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-start align-items-center">
              <div class="avatar">
                <span class="icon-caret-left flex-center brand_primary mr-3"></span>
              </div>
              <router-link
                :to="'/'+account_type+'/dashboard/homework'"
                class="go-back-link color_text font-weight-bold text-uppercase"
              >All Schoolworks</router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- SECOND ROW -->
      <div class="container mb-4">
        <div class="row">
          <div class="col-12">
            <div class="page-title font-weight-bold color_text">Week 2 - Homework</div>
          </div>
        </div>
      </div>

      <!-- THIRD ROW -->
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 left-layout">
            <div class="homework-score-card white rounded-10 mb-4">
              <!-- PERFORMANCE CHART COMPONENT -->
              <PerformanceChart :average_score="64" :switch_color="true" chart_title="You Scored"></PerformanceChart>
              <!-- PERFORMANCE CHART COMPONENT -->

              <!-- SCORE STATS -->
              <div class="score-stats">
                <div class="first-col">
                  <div class="count color_text font-weight-bold">22</div>
                  <div class="count-title text-uppercase color_grey_dark font-12">Correct</div>
                </div>

                <div class="second-col">
                  <div class="count color_text font-weight-bold">5</div>
                  <div class="count-title text-uppercase color_grey_dark font-12">Incorrect</div>
                </div>

                <div class="third-col">
                  <div class="count color_text font-weight-bold">3</div>
                  <div class="count-title text-uppercase color_grey_dark font-12">Unattempted</div>
                </div>
              </div>
              <!-- SCORE STATS -->

              <div class="d-flex justify-content-center w-100">
                <button
                  class="btn btn-md brand_primary_bg font-weight-bold font-11 py-3 brand_inverse_light"
                >Take another Homework</button>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-9 right-layout">
            <!-- RECOMMENDATION SECTION -->
            <div class="recommendation-section">
              <div class="title font-weight-bold color_text">Recommended for you</div>

              <div class="row">
                <div class="col-6 col-md-3 mb-3">
                  <RecommendCard
                    theme="light"
                    card_type="practice"
                    card_img="CardFour.png"
                    card_title="practice"
                    card_topic="Number Operations"
                    :show_lock="true"
                    :show_button="true"
                  ></RecommendCard>
                </div>

                <div class="col-6 col-md-3 mb-3">
                  <RecommendCard
                    theme="light"
                    card_type="video"
                    card_img="CardFive.png"
                    card_title="video lesson"
                    card_topic="Number bases"
                    :show_lock="true"
                    :show_button="true"
                  ></RecommendCard>
                </div>

                <div class="col-6 col-md-3 mb-3">
                  <RecommendCard
                    theme="light"
                    card_type="practice"
                    card_img="CardThree.png"
                    card_title="practice"
                    card_topic="Set theory"
                    :show_lock="true"
                    :show_button="true"
                  ></RecommendCard>
                </div>

                <div class="col-6 col-md-3 mb-3">
                  <RecommendCard
                    theme="light"
                    card_type="tutor"
                    card_img="TeacherOneLg.png"
                    card_title="tutoring"
                    card_topic="Algebra Sessions"
                    :show_lock="true"
                    :show_button="true"
                  ></RecommendCard>
                </div>
              </div>
            </div>

            <!-- REVIEW SECTION -->
            <div class="review-section">
              <div class="title font-weight-bold color_text">Review Questions</div>

              <!-- QUESTION CARD -->
              <QuestionCard
                question_theme="light"
                :question_id="1"
                question_text="What is 1,856 rounded to the nearest 10?"
                question_answer="2000"
                question_choice="1500"
                question_status="incorrect"
              ></QuestionCard>

              <QuestionCard
                question_theme="light"
                :question_id="2"
                question_text="What is 1,856 rounded to the nearest 10?"
                question_answer="2000"
                question_choice
                question_status="skipped"
              ></QuestionCard>

              <QuestionCard
                question_theme="light"
                :question_id="3"
                question_text="What is 3.141592653 rounded to 3 decimal places?"
                question_answer="3.142"
                question_choice="3.142"
                question_status="correct"
              ></QuestionCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";
import PerformanceChart from "@/components/profileComps/studentprofile/PerformanceChart";

export default {
  name: "Homework",

  components: {
    PerformanceChart,
    RecommendCard: () =>
      import(/* webpackChunkName: "RecommendCard" */ "@/components/classComps/catchup/RecommendCard"),
    QuestionCard: () =>
      import(/* webpackChunkName: "QuestionCard" */ "@/components/classComps/homework/QuestionCard")
  },

  computed: {
    getPageTitle() {
      return `Homework Review | ${capitalizeFirstLetter(this.account_type)}`;
    }
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
.homework-review-section {
  position: relative;
  top: 110px;

  .go-back-link {
    font-size: 14px;
    &:hover {
      color: darken($brand_accent, 7%) !important;
    }

    @include breakpoint_max(sm) {
      font-size: 13px;
    }
  }

  .page-title {
    font-size: 28px;
    line-height: 44px;

    @include breakpoint_max(sm) {
      font-size: 20px;
    }
  }

  .left-layout {
    min-width: 30%;
  }
  .right-layout {
    min-width: 70%;
    max-width: 70%;

    @include breakpoint_max(md) {
      min-width: 100%;
      max-width: 100%;
    }
  }

  .homework-score-card {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 48px 30px 30px;

    @include breakpoint_min_max(992, 1200) {
      padding: 40px 20px 30px;
    }

    @include breakpoint_min_max(768, 991) {
      padding: 40px 8px 30px;
    }

    .score-stats {
      margin: 35px auto;
      @include flex_row_between_wrap;
      .count {
        font-size: 19px;
        line-height: 140%;
        letter-spacing: 0.05em;
      }
      .count-title {
        font-size: 12px;
        line-height: 177.06%;
      }
    }
  }

  .recommendation-section {
    margin-bottom: 35px;
    .title {
      font-size: 21px;
      line-height: 29px;
      margin-bottom: 20px;

      @include breakpoint_max(sm) {
        font-size: 19px;
      }
    }
  }

  .review-section {
    margin-bottom: 90px;
    .title {
      font-size: 21px;
      line-height: 29px;
      margin-bottom: 20px;

      @include breakpoint_max(sm) {
        font-size: 19px;
      }
    }
  }
}
</style>
