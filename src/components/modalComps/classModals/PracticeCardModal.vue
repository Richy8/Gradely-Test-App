<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="practice-card">
          <!-- CARD TOP -->
          <div class="card-top d-flex justify-content-start align-items-start nowrap">
            <!-- DISPLAY IMAGE -->
            <div class="avatar avatar-square avatar_xxl practice-img">
              <img v-lazy="dynamicImg('Practice.png')" alt class="avatar-img">
            </div>

            <!-- PRACTICE INFO -->
            <div class="practice-info">
              <!-- CARD TITLE -->
              <div class="card-title border_grey_dark text-uppercase">PRACTICE EXERCISE</div>

              <!-- PRACTICE TOPIC -->
              <div class="topic color_white">Basic Algebra</div>

              <!-- PRACTICE INFO -->
              <div class="d-flex justify-content-start align-items-center nowrap practice-info">
                <!-- QUESTIONS -->
                <div class="d-flex justify-content-start align-items-center nowrap questions">
                  <div class="avatar" style="margin-left:-5px;">
                    <span class="flex-center icon-help-circle border_grey_dark font-20"></span>
                  </div>
                  <div class="text border_grey" style="margin-left:-5px;">12 Questions</div>
                </div>

                <!-- DIFFICULTY -->
                <div class="d-flex justify-content-start align-items-center nowrap difficulty">
                  <div class="avatar">
                    <span class="flex-center icon-bar-chart border_grey_dark font-20"></span>
                  </div>
                  <div class="text border_grey">Medium</div>
                </div>
              </div>

              <!-- ATTEMPT LINK -->
              <router-link to class="btn-link font-14 practice-link">Attempt Practice</router-link>
            </div>
          </div>

          <!-- CARD BOTTOM -->
          <div class="card-bottom">
            <!-- SAMPLE QUESTION -->
            <div class="brand_navy title text-uppercase">SAMPLE QUESTIONS</div>

            <!-- QUESTIONS -->
            <div
              class="question color_ash"
            >An ___________________ is a number that tells us how many times the base is multiplied by itself.</div>
            <div class="question color_ash">Write with an exponent: 3 . 3 . 3 . 3. 3</div>
            <div class="question color_ash">Write with an exponent: 8 . 8 . 8</div>
            <!-- QUESTIONS -->
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "PracticeCardModal",

  components: {
    ModalCover
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.practice-card {
  .card-top,
  .card-bottom {
    width: 100%;
  }

  .card-top {
    height: auto;
    padding: 40px 30px 30px;
    background: #004680;
    mix-blend-mode: normal;

    @media (max-width: 578px) {
      padding: 30px 25px 30px;
    }

    @media (max-width: 460px) {
      padding: 25px 15px 30px;
    }

    .practice-img {
      margin-top: 15px;
      margin-right: 15px;

      @include breakpoint_max(sm) {
        @include equal_min_edge(80);
      }
    }

    .card-title {
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 2px;
      margin-top: 20px;

      @media (max-width: 578px) {
        font-size: 11px;
      }
    }

    .topic {
      font-weight: bold;
      font-size: 21px;
      line-height: 29px;
      margin-top: 10px;
      margin-bottom: 15.5px;

      @media (max-width: 578px) {
        font-size: 19px;
      }

      @media (max-width: 460px) {
        font-size: 16px;
      }
    }

    .practice-info {
      margin-bottom: 20.5px;
      .questions {
        margin-right: 24px;
      }

      .avatar {
        margin-right: 11px;
      }

      .questions,
      .difficulty {
        .avatar {
          span {
            @include breakpoint_max(sm) {
              font-size: 19px !important;
            }

            @include breakpoint_max(xs) {
              font-size: 17px !important;
            }
          }
        }
        .text {
          font-size: 14px;
          position: relative;
          top: 1px;

          @include breakpoint_max(xs) {
            font-size: 12px;
          }
        }
      }
    }

    .practice-link {
      font-weight: bold;
      font-size: 14px;
      line-height: 19px;

      @media (max-width: 460px) {
        font-size: 12.5px !important;
      }
    }
  }

  .card-bottom {
    position: relative;
    padding: 18px 30px 40px;
    background: #ffffff;

    @media (max-width: 578px) {
      padding: 30px 25px 30px;
    }

    @media (max-width: 460px) {
      padding: 25px 15px 30px;
    }

    .title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 19px;

      @media (max-width: 460px) {
        font-size: 12.5px;
      }
    }

    .question {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 15px;

      @media (max-width: 460px) {
        font-size: 13px;
      }
    }
  }
}
</style>
