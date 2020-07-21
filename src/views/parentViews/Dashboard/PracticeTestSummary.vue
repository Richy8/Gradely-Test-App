<template>
  <div>
    <vue-headful title="Practice Summary | Parents" description="Description goes here"/>
    <div class="practice-summary-section base-type-layout">
      <div class="img-frame">
        <img v-lazy="localImg('MathsDoodle.png')" alt>
      </div>

      <!-- CLOSE DIALOG -->
      <div class="pageClose dialogDismiss">
        <router-link
          :to="'/'+account_type+'/dashboard/catchup'"
          class="close_dialog cls_lg transparent_bg"
        ></router-link>
      </div>
      <!-- CLOSE DIALOG -->

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2">
            <div class="summary-block position-relative rounded-15 overflow-hidden">
              <!-- BOX OVERLAY -->
              <div class="box-overlay position-absolute w-100 h-100"></div>

              <!-- PRACTICE SUMMARY SECTION -->
              <div class="summary-section">
                <div class="d-flex justify-content-start align-items-start nowrap">
                  <!-- PRACTICE IMAGE -->
                  <div class="practice-img">
                    <div class="avatar avatar_xxl avatar-square">
                      <img v-lazy="dynamicImg('CardStack.png')" alt class="avatar-img">
                    </div>

                    <!-- VIEW ALL -->
                    <div class="view-all w-100 text-center">
                      <span
                        class="icon-eye font-18 border_grey_dark mr-2 position-relative pointer"
                        style="top: 3px;"
                      ></span>
                      <span
                        class="font-12 border_grey_dark position-relative pointer"
                      >See all topics</span>
                    </div>
                  </div>

                  <!-- PRACTICE SCORE INFO -->
                  <div class="summary-info">
                    <!-- TOPIC TITLE -->
                    <div class="topic-title white-text font-weight-bold position-relative">Algebra +</div>

                    <!-- SCORE PROGRESS -->
                    <div class="summary-progress">
                      <div class="score brand_inverse_light position-relative">You scored</div>
                      <div class="progress position-relative brand_inverse_light rounded-15">
                        <div class="progress-bar" role="progressbar" style="width:87%;"></div>
                        <!-- PROGRESS COUNT -->
                        <div class="progress-count position-absolute font-10 color_text">87%</div>
                      </div>
                    </div>

                    <!-- DASHBOARD BUTTON -->
                    <router-link
                      :to="'/'+account_type+'/dashboard/catchup'"
                      class="btn btn-md btn-accent font-weight-bold color_text mx-0 position-relative"
                    >Go to Dashboard</router-link>
                  </div>
                </div>
              </div>
              <!-- PRACTICE SUMMARY SECTION -->

              <!-- PRACTICE BADGES SECTION -->
              <div class="badges-section position-relative">
                <div class="section-title border_grey_dark text-center font-weight-bold">BADGES</div>

                <div class="d-flex justify-content-around align-items-center flex-wrap">
                  <BadgeCard
                    badge_name="streak"
                    badge_img="badge-streak.png"
                    :badge_count="9"
                    badge_count_position="bottom"
                  ></BadgeCard>

                  <BadgeCard
                    badge_name="clue"
                    badge_img="badge-clue.png"
                    :badge_count="312"
                    badge_count_position="top"
                  ></BadgeCard>

                  <BadgeCard
                    badge_name="champ"
                    badge_img="badge-champ.png"
                    :badge_count="0"
                    badge_count_position
                  ></BadgeCard>

                  <BadgeCard
                    badge_name="coins"
                    badge_img="badge-coins.png"
                    :badge_count="54"
                    badge_count_position="bottom"
                  ></BadgeCard>
                </div>
              </div>

              <!-- PRACTICE BADGES SECTION -->

              <!-- PRACTICE QUESTION SECTION -->
              <div class="question-section position-relative">
                <div
                  class="section-title border_grey_dark text-center font-weight-bold"
                >Questions Attempted</div>

                <QuestionCard
                  question_theme="dark"
                  :question_id="1"
                  question_text="What is two dimensional shape?"
                  question_answer="A 2 dimensional shape is a shape that can be drawn on paper. It is flat and plane shape. It has two dimensions; height and width."
                  question_choice=" A shape with length and breath "
                  question_status="correct"
                ></QuestionCard>

                <QuestionCard
                  question_theme="dark"
                  :question_id="2"
                  question_text="Find the mean of the following data 9, 7, 11, 13, 2, 4, 5, 5"
                  question_answer="The mean is the usual average. First, add up all the numbers in the set and then divide the total by the total number of data points in the set. (9 + 7 + 11 + 13 + 2 + 4 + 5 + 5) / 8 = 56 / 8 = 7"
                  question_choice="8"
                  question_status="incorrect"
                ></QuestionCard>
              </div>
              <!-- PRACTICE QUESTION SECTION -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BadgeCard from "@/components/classComps/report/BadgeCard";

export default {
  name: "PracticeSummaryTest",

  components: {
    BadgeCard,
    QuestionCard: () =>
      import(/* webpackChunkName: "QuestionCard" */ "@/components/classComps/homework/QuestionCard")
  },

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    document.body.style.backgroundColor = "#113255";
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
.practice-summary-section {
  position: relative;
  top: 0;

  .img-frame {
    img {
      @include fixed_full_section();
      object-fit: cover;
    }
  }

  .box-overlay {
    background: #000000;
    opacity: 0.4;
  }

  .summary-block {
    margin: 90px auto;
    padding: 45px;

    @include breakpoint_max(xs) {
      padding: 20px;
    }

    .summary-section {
      padding-bottom: 20px;
      margin-bottom: 20.75px;
      border-bottom: 1px solid rgba(213, 213, 213, 0.3);

      .practice-img {
        margin-right: 30px;

        @include breakpoint_max(lg) {
          margin-right: 20px;
        }

        @include breakpoint_max(xs) {
          margin-right: 15px;
        }

        .avatar {
          margin-bottom: 14px;
        }
      }

      .summary-info {
        .topic-title {
          font-size: 21px;
          line-height: 29px;
          margin-bottom: 20px;

          @include breakpoint_max(lg) {
            font-size: 19px;
          }

          @include breakpoint_max(xs) {
            font-size: 16.5px;
          }
        }

        .score {
          margin-bottom: 4px;
          font-size: 12px;
          line-height: 16px;

          @include breakpoint_max(xs) {
            font-size: 11px;
          }
        }

        .progress {
          width: 300px;
          height: 16px;
          margin-bottom: 30px;

          @include breakpoint_max(lg) {
            width: 220px;
          }

          @include breakpoint_max(xs) {
            width: 110%;
          }
        }

        .progress-count {
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .btn {
          @include breakpoint_max(xs) {
            font-size: 10px;
          }
        }
      }
    }
  }

  .section-title {
    position: relative;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 30px;
    text-transform: uppercase;

    @include breakpoint_max(sm) {
      font-size: 15px;
    }

    @include breakpoint_max(xs) {
      font-size: 13.5px;
    }
  }

  .badges-section {
    padding-bottom: 40px;
    margin-bottom: 20.75px;
    border-bottom: 1px solid rgba(213, 213, 213, 0.3);
  }
}
</style>
