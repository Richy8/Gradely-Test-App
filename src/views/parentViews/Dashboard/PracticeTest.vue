<template>
  <div>
    <vue-headful title="Practice Test | Parents" description="Description goes here"/>
    <div class="practice-test-section base-type-layout">
      <div class="img-frame">
        <img v-lazy="localImg('MathsDoodle.png')" alt>
      </div>

      <!-- PROGRESS BAR -->
      <div class="progress-section position-fixed w-100 fixed-top">
        <div class="progress color_white_bg w-100 rounded-10" style="height: 3px;">
          <div
            class="progress-bar brand_accent_bg rounded-10"
            role="progressbar"
            style="width: 60%"
          ></div>
        </div>
      </div>
      <!-- PROGRESS BAR -->

      <!-- MENU SECTION -->
      <section class="menu-section position-fixed w-100">
        <div class="container px-1 menu-section">
          <div class="row">
            <div class="col-12">
              <!-- TOP ROW -->
              <div class="d-flex justify-content-between align-items-start nowrap mt-4">
                <!-- LEFT MENU COMPONENT -->
                <LeftMenu
                  :is_play="play_game"
                  @gamePaused="toggleSettings"
                  @gamePlay="toggleSettings"
                  v-if="!badge_update"
                ></LeftMenu>
                <!-- LEFT MENU COMPONENT -->

                <!-- RIGHT MENU COMPONENT-->
                <RightMenu v-if="!badge_update"></RightMenu>
                <!-- RIGHT MENU COMPONENT-->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- MENU SECTION -->

      <transition name="fade" mode="out-in">
        <div class="container px-1">
          <div class="row question-row">
            <div class="col-12 position-relative">
              <transition name="fade" mode="out-in">
                <keep-alive>
                  <div v-if="!badge_update">
                    <!-- SETTINGS BLOCK -->
                    <SettingsBlock v-if="pause_game" @gamePlay="togglePlayIcon"></SettingsBlock>
                    <!-- SETTINGS BLOCK -->

                    <!-- QUESTION CONTAINER -->
                    <QuestionBlock
                      :question_id="questions[current_index].id"
                      :is_question_image="questions[current_index].question_image"
                      :is_option_image="questions[current_index].option_image"
                      :question="questions[current_index].question"
                      :question_image="questions[current_index].image"
                      :question_answer="questions[current_index].answer"
                      :question_option="questions[current_index].options"
                      @questionSelected="revealNextQuestion"
                      v-else
                    ></QuestionBlock>
                    <!-- QUESTION CONTAINER -->
                  </div>

                  <div></div>
                </keep-alive>
              </transition>

              <!-- BADGE CARD -->
              <BadgeHintCard v-if="badge_update" @toggleUpdate="continueGame"></BadgeHintCard>
              <!-- BADGE CARD -->
            </div>
          </div>
        </div>
      </transition>

      <!-- HELP FLAG -->
      <section class="position-fixed w-100 help-flag-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="avatar help-flag brand_primary_bg pointer">
                <span class="icon-flag flex-center font-16 brand_inverse_light"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- HELP FLAG -->
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/classComps/practicetest/LeftMenu";
import RightMenu from "@/components/classComps/practicetest/RightMenu";
import QuestionBlock from "@/components/classComps/practicetest/QuestionBlock";
import { setTimeout } from "timers";

export default {
  name: "PracticeTest",

  components: {
    LeftMenu,
    RightMenu,
    QuestionBlock,
    BadgeHintCard: () =>
      import(/* webpackChunkNmae:"BadgeHintCard" */ "@/components/classComps/practicetest/BadgeHintCard"),
    SettingsBlock: () =>
      import(/* webpackChunkNmae:"SettingsBlock" */ "@/components/classComps/practicetest/SettingsBlock")
  },

  data() {
    return {
      account_type: "",
      play_game: false,
      pause_game: false,
      badge_update: true,
      start_index: 0,
      current_index: 0,

      questions: [
        {
          id: 1,
          question_image: true,
          option_image: false,
          question:
            "A ship is at position A on the sea surface and locates a wreck, C, on the seabed 321 m vertically below. The ship then steams 525 m due west until it reaches position B. From its new position at B, what is the size of the angle of depression from B to the wreck C?",
          image: "QuestionImg.png",
          answer: "23.44",
          options: ["25.44", "32.44", "34.45", "23.44"]
        },
        {
          id: 2,
          question_image: false,
          option_image: true,
          question: "Which of the object is shaped like a cuboid?",
          image: "",
          answer: "OptionB.png",
          options: ["OptionA.png", "OptionB.png", "OptionC.png", "OptionD.png"]
        },
        {
          id: 3,
          question_image: false,
          option_image: true,
          question: "Which of the object is shaped like a cuboid?",
          image: "",
          answer: "OptionB.png",
          options: ["OptionA.png", "OptionC.png", "OptionB.png", "OptionD.png"]
        },
        {
          id: 4,
          question_image: true,
          option_image: false,
          question:
            "A ship is at position A on the sea surface and locates a wreck, C, on the seabed 321 m vertically below. The ship then steams 525 m due west until it reaches position B. From its new position at B, what is the size of the angle of depression from B to the wreck C?",
          image: "QuestionImg.png",
          answer: "32.44",
          options: ["25.44", "32.44", "34.45", "23.44"]
        }
      ]
    };
  },

  mounted() {
    document.body.style.backgroundColor = "#113255";
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    revealNextQuestion() {
      setTimeout(() => {
        let question_length = this.questions.length - 1;

        this.start_index++;

        if (this.start_index > question_length) {
          this.$router.push(`/${this.account_type}/homework/practice_summary`);
        } else {
          this.current_index = this.start_index;
        }
      }, 1000);
    },

    togglePlayIcon() {
      this.play_game = !this.play_game;
      this.toggleSettings();
    },

    toggleSettings() {
      this.pause_game = !this.pause_game;
    },

    continueGame() {
      this.badge_update = !this.badge_update;
    }
  }
};
</script>

<style lang="scss">
.practice-test-section {
  position: relative;
  top: 0;

  .img-frame {
    img {
      @include fixed_full_section();
      object-fit: cover;
    }
  }

  .menu-section {
    top: 20px;
    z-index: 1;
  }

  .question-row {
    height: 100%;
    margin-top: 200px;
    margin-bottom: 100px;
  }

  .help-flag-section {
    bottom: 30px;
    right: 0;

    .help-flag {
      float: right;
      transition: all 0.3s ease-in-out;
      span {
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        transform: scale(0.95);
        span {
          transform: scale(0.95);
        }
      }
    }
  }
}
</style>
