<template>
  <div>
    <vue-headful :title="getPageTitle" description="Description goes here"/>
    <div class="homework-test-section">
      <div class="img-frame">
        <img v-lazy="localImg('MathsDoodle.png')" alt>
      </div>

      <!-- CLOSE TRIGGER -->
      <div class="pageClose dialogDismiss" :class="{'d-none': processing_page}">
        <button type="button" class="close_dialog cls_lg transparent_bg" @click="backToHomework"></button>
      </div>
      <!-- CLOSE TRIGGER -->

      <!-- HOMEWORK CONTAINER -->
      <div class="container homework-container">
        <div class="row">
          <div class="col-12">
            <!-- HOMEWORK TITLE -->
            <div class="homework-title font-weight-bold color_text">Week 1 - Homework</div>

            <!-- HOMEWORK PROGRESS -->
            <div class="row">
              <div class="col-12 col-md-8">
                <div class="homework-progress progress border_grey_light_bg">
                  <div
                    class="progress-bar brand_inverse_bg rounded-30"
                    :style="'width:'+ question_progress +'%'"
                    role="progressbar"
                  ></div>
                </div>
              </div>

              <div class="col-0 col-md-3 offset-md-1"></div>
            </div>
            <!-- HOMEWORK PROGRESS -->

            <!-- HOMEWORK CONTENT -->
            <div class="homework-content row">
              <!-- CONTENT -->
              <div class="col-12 col-md-8 order-1 order-md-0">
                <div class="test-content white rounded-5">
                  <div class="top-row d-flex justify-content-start align-items-center nowrap">
                    <!-- TEST NUMBER -->
                    <div class="test-number-card">
                      <div class="position-relative">
                        <span class="icon-chat-card brand_navy font-45"></span>
                        <span
                          class="test-number position-absolute font-weight-bold brand_white"
                        >{{ questions[current_question].id }}</span>
                      </div>
                    </div>

                    <!-- TEXT QUESTION -->
                    <div class="test-question brand_navy">{{ questions[current_question].question }}</div>
                  </div>

                  <!-- TEST OPTIONS -->
                  <div class="bottom-row">
                    <!-- OPTION -->

                    <div
                      class="option"
                      v-for="(option, index) in questions[current_question].options"
                      :key="index"
                    >
                      <div class="avatar">
                        <div class="avatar-text brand_inverse_light_bg">{{ convertToLetter(index) }}</div>
                      </div>

                      <!-- VALUE -->
                      <label :for="'option'+index" class="radio pointer">
                        <input
                          type="radio"
                          v-model="form.option"
                          :value="option"
                          :id="'option'+index"
                          class="mr-3"
                        >
                        <span class="label_title">{{ option }}</span>
                      </label>
                      <!-- VALUE -->
                    </div>

                    <!-- OPTION -->
                  </div>
                  <!-- TEST OPTIONS -->
                </div>

                <!-- HELP TEXT -->
                <div class="help-text color_grey_dark">
                  Have any issue with this question?
                  <router-link to class="brand_tonic font-weight-bold">Report Question</router-link>
                </div>
              </div>
              <!-- CONTENT -->

              <!-- HOMEWORK TIMER -->
              <div class="col-12 col-md-3 offset-md-1 order-0 order-md-1">
                <!-- TIMER BOX -->
                <HomeworkTimer
                  :start_minutes="15"
                  :test_complete="result_modal"
                  @timeElapsed="revealProcessingPage"
                ></HomeworkTimer>
              </div>
              <!-- HOMEWORK TIMER -->
            </div>
            <!-- HOMEWORK CONTENT -->
          </div>
        </div>
      </div>

      <!-- FOOTER ROW -->
      <div class="footer-row w-100 brand_navy_bg">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center nowrap">
              <!-- LEFT BUTTON -->
              <div
                class="left-button d-flex justify-content-start align-items-center pointer"
                @click="backToHomework"
              >
                <div class="avatar avatar_xs mr-2">
                  <span class="icon-arrow-left flex-center font-14 brand_inverse_light"></span>
                </div>
                <div class="text-uppercase brand_inverse_light font-11-5 font-weight-bold">Back</div>
              </div>
              <!-- LEFT BUTTON -->

              <!-- RIGHT BUTTON -->
              <button
                class="btn btn-md btn-accent brand_navy font-weight-bold font-10-5"
                @click="revealProcessingPage"
                v-if="last_question"
              >Finish</button>
              <button
                class="btn btn-md btn-accent brand_navy font-weight-bold font-10-5"
                @click="nextQuestion"
                v-else
              >Continue</button>
              <!-- RIGHT BUTTON -->
            </div>
          </div>
        </div>
      </div>
      <!-- FOOTER ROW -->

      <!-- TEST PROCESSING COMPONENT -->
      <transition name="fade" mode="out-in">
        <TestProcessing v-if="processing_page" :hide_info="hide"></TestProcessing>
      </transition>
      <!-- TEST PROCESSING COMPONENT -->
    </div>

    <!-- MODAL -->
    <HomeworkResultModal v-if="result_modal" :score="result"></HomeworkResultModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import { bgColorSetter, capitalizeFirstLetter } from "@/scripts/utilities";
import HomeworkTimer from "@/components/classComps/homework/HomeworkTimer";
import { setTimeout } from "timers";

export default {
  name: "HomeworkTest",

  components: {
    HomeworkTimer,
    HomeworkResultModal: () =>
      import(/* webpackChunkName: "HomeworkResultModal" */ "@/components/modalComps/classModals/HomeworkResultModal"),
    TestProcessing: () =>
      import(/* webpackChunkName: "TestProcessing" */ "@/components/classComps/homework/TestProcessing")
  },

  computed: {
    getPageTitle() {
      return `Homework Test | ${capitalizeFirstLetter(this.account_type)}`;
    }
  },

  data() {
    return {
      account_type: "",
      form: {
        option: ""
      },

      result: 80,
      hide: false,
      processing_page: false,
      result_modal: false,

      question_progress: "",
      current_question: 0,
      last_question: false,

      questions: [
        {
          id: 1,
          question: "Using the rules in the image, what is Log381?",
          options: [23, 45, 18, 33]
        },
        {
          id: 2,
          question: "How many letters are in alphabet?",
          options: [26, 16, 8, 10]
        },
        {
          id: 3,
          question: "Who is the founder of amazon?",
          options: ["Mark Zukaberg", "Jeff Bezos", "Jack Dorsey", "Bill Gates"]
        },
        {
          id: 4,
          question: "Which of these is not a javascript framework?",
          options: ["Angular", "Vue", "Flask", "React"]
        },
        {
          id: 5,
          question: "How many cores makes up an Octacore?",
          options: [5, 10, 6, 8]
        }
      ]
    };
  },

  watch: {
    current_question: "endQuestion"
  },

  mounted() {
    bgColorSetter("#f0f0f0");
    this.setProgressCount();
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    backToHomework() {
      this.$router.push("/parent/dashboard/homework");
    },

    setProgressCount() {
      let count = 100 / this.questions.length;
      this.question_progress = count;
    },

    nextQuestion() {
      let count = 100 / this.questions.length;
      this.current_question += 1;
      this.question_progress += count;
    },

    endQuestion() {
      let total_questions = this.questions.length;
      if (total_questions - 1 === this.current_question) {
        this.last_question = true;
      }
    },

    revealProcessingPage() {
      setTimeout(() => {
        this.processing_page = !this.processing_page;
      }, 1000);

      setTimeout(() => {
        this.toggleHomeworkResultModal();
        this.hide = !this.hide;
      }, 3000);
    },

    toggleHomeworkResultModal() {
      this.result_modal = !this.result_modal;
    },

    convertToLetter(num) {
      if (num === 0) {
        return "a";
      } else if (num === 1) {
        return "b";
      } else if (num === 2) {
        return "c";
      } else if (num === 3) {
        return "d";
      }
    }
  }
};
</script>

<style lang="scss">
.homework-test-section {
  .img-frame {
    img {
      @include fixed_full_section();
      object-fit: cover;
    }
  }

  .homework-container {
    margin-top: 60px;

    .homework-title {
      font-size: 22px;
      line-height: 29px;
      margin-bottom: 20px;

      @include breakpoint_max(lg) {
        font-size: 19px;
      }
    }

    .homework-progress {
      height: 25px;
      margin-bottom: 40px;

      @include breakpoint_max(lg) {
        height: 18px;
        margin-bottom: 30px;
      }

      @include breakpoint_max(sm) {
        height: 15px;
        margin-bottom: 25px;
      }
    }

    .homework-content {
      @include breakpoint_max(md) {
        margin-bottom: 120px;
      }

      .test-content {
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
        padding-top: 20px;
        padding-bottom: 40px;

        .top-row {
          margin-left: -10px;
        }

        .bottom-row {
          margin-top: 10px;
          margin-left: 65px;

          @include breakpoint_max(lg) {
            margin-left: 40px;
          }
        }

        .test-number {
          top: 40%;
          left: 50%;
          transform: translate(-50%, -40%);
          font-size: 14px;
          display: block;

          @include breakpoint_max(lg) {
            font-size: 12px;
          }
        }

        .test-question {
          font-size: 18px;
          line-height: 25px;
          margin-top: -5px;
          margin-left: 30px;

          @include breakpoint_max(lg) {
            margin-left: 15px;
            font-size: 15px;
          }
        }

        .option {
          @include flex_row_start_nowrap;
          margin-bottom: 5px;

          &:last-of-type {
            margin-bottom: 0px;
          }

          .avatar {
            margin-right: 25px;
          }

          .avatar-text {
            font-size: 14px;
            font-weight: bold;
            color: $brand_navy;
            text-transform: lowercase;

            @include breakpoint_max(lg) {
              font-size: 13px;
            }
          }

          label {
            margin-top: 10px;

            @include breakpoint_max(lg) {
              .radio input {
                &:before {
                  @include equal_min_edge(18);
                }
              }

              .label_title {
                margin-top: 12px;
                font-size: 14.5px;
              }
            }
          }
        }
      }

      .help-text {
        margin-top: 20px;
        font-size: 15px;

        @include breakpoint_max(lg) {
          font-size: 14px;
        }

        a {
          transition: all 0.3s ease-in-out;
          &:hover {
            color: $brand_inverse !important;
          }
        }
      }
    }
  }

  .footer-row {
    position: fixed;
    bottom: 0;
    padding: 7px 0px 7px;

    .left-button {
      .avatar {
        border: 1px solid $brand_inverse_light;
      }
    }
  }
}
</style>
