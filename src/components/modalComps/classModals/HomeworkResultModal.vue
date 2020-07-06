<template>
  <div>
    <ModalCover :show_close="false">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body" class="result-modal">
        <div class="img-frame" v-if="score>75">
          <img v-lazy="localImg('confetti.png')" alt>
        </div>

        <!-- CONTENT -->
        <div class="content">
          <div class="d-flex justify-content-start align-items-start nowrap">
            <!-- IMG SECTION -->
            <div class="img-section" v-if="score>75">
              <img v-lazy="localImg('PerformanceTop.png')" alt>
            </div>
            <div class="img-section" v-else>
              <img v-lazy="localImg('PerformancePoor.png')" alt>
            </div>

            <!-- RESULT INFO -->
            <div class="result-info">
              <!-- TITLE -->
              <div class="title brand_navy font-weight-bold" v-if="score>75">Great Job!</div>
              <div class="title brand_navy font-weight-bold" v-else>You can do better</div>

              <!-- MESSAGE -->
              <div
                class="message color_text"
                v-if="score>75"
              >You are making great progress towards becoming a mathematics wizard</div>
              <div
                class="message color_text"
                v-else
              >You’ve tried, but you can still do better. There is a maths genius in you.</div>

              <!-- PROGRESS SECTION -->
              <div class="progress-section">
                <div class="d-flex justify-content-between align-items-center nowrap mb-2">
                  <div class="text color_ash">You Scored</div>
                  <div class="score font-weight-bold brand_navy">{{ score }}%</div>
                </div>

                <div class="progress brand_inverse_light_bg">
                  <div
                    class="progress-bar"
                    :class="progress_color"
                    :style="'width:'+ score +'%'"
                    role="progressbar"
                  ></div>
                </div>
              </div>

              <!-- REVIEW BUTTON -->
              <router-link
                :to="{name: 'ParentHomeworkReview'}"
                class="btn btn-md btn-accent font-weight-bold brand_navy mx-0"
              >Review Homework</router-link>
            </div>
          </div>
        </div>
        <!-- CONTENT -->
      </div>
    </ModalCover>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "NewMessageModal",

  components: {
    ModalCover
  },

  mixins: [RenderImages],

  props: {
    subject: String,
    score: Number
  },

  data() {
    return {
      progress_color: ""
    };
  },

  mounted() {
    this.setProgressColor();
  },

  methods: {
    setProgressColor() {
      if (this.score > 75) {
        this.progress_color = "brand_green_bg";
      } else if (this.score <= 74 && this.score >= 45) {
        this.progress_color = "brand_accent_bg";
      } else {
        this.progress_color = "brand_red_bg";
      }
    }
  }
};
</script>

<style lang="scss">
.result-modal {
  .img-frame {
    img {
      @include fixed_full_section();
      object-fit: cover;
    }
  }

  .content {
    padding: 60px 55px 60px;

    .img-section {
      margin-right: 20px;
    }

    .title {
      font-size: 23px;
      line-height: 29px;
      margin-bottom: 25px;
    }

    .message {
      font-size: 15px;
      line-height: 165%;
      margin-bottom: 23px;
    }

    .text {
      font-size: 12px;
      line-height: 165%;
    }

    .score {
      font-size: 16px;
      line-height: 165%;
    }

    .btn {
      margin-top: 35px;
    }
  }
}
</style>
