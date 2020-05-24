<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="video-card">
          <!-- CARD TOP -->
          <div class="card-top position-relative">
            <img src="@/assets/images/VideoTeacher.png" alt>

            <!-- PLAY ICON -->
            <div class="avatar play-icon pointer">
              <span class="flex-center icon-play-bg brand_accent"></span>
            </div>
          </div>

          <!-- CARD BOTTOM -->
          <div class="card-bottom">
            <!-- VIDEO CARD ICON -->
            <div class="avatar avatar_vid_md video-card-icon">
              <span class="flex-center icon-video-card brand_tonic font-25"></span>
            </div>

            <!-- VIDEO INFO -->
            <div class="text-uppercase title">Video Lesson</div>
            <div class="topic">Number and Number System</div>
            <div class="d-flex justfy-content-start align-items-center nowrap">
              <!-- TIMER -->
              <div class="d-flex justify-content-start align-items-center nowrap duration">
                <div class="avatar" style="margin-left:-5px;">
                  <span class="flex-center icon-clock color_grey_dark font-20"></span>
                </div>
                <div class="text font-14 color_grey_dark">13:43m</div>
              </div>

              <!-- CLASS -->
              <div class="d-flex justify-content-start align-items-center nowrap class_year">
                <div class="avatar">
                  <span class="flex-center icon-briefcase color_grey_dark font-20"></span>
                </div>
                <div class="text font-14 color_grey_dark">Year 7</div>
              </div>
            </div>
            <!-- VIDEO INFO -->
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import ModalCover from "@/components/basicComps/ModalCover";

export default {
  name: "VideoCardModal",

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
.video-card {
  .card-top,
  .card-bottom {
    width: 100%;
  }

  .card-top {
    height: 333px;
    background: #0a1f36;
    mix-blend-mode: normal;

    @media (max-width: 568px) {
      height: 325px;
    }

    @media (max-width: 460px) {
      height: 300px;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: normal;
      opacity: 0.5;
    }

    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 48px;
      min-width: 58px;
      min-height: 58px;
      width: 58px;
      height: 58px;
    }
  }

  .card-bottom {
    position: relative;
    padding: 39px 20px 34px;
    background: #ffffff;

    .video-card-icon {
      position: absolute;
      background: #ffdcde;
      left: 21px;
      top: -24px;
    }

    .title {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 2px;
      color: #f6515b;
      font-weight: 900;
    }

    .topic {
      font-size: 22px;
      line-height: 29px;
      margin-bottom: 16px;
      color: #113255;
      font-weight: 900;

      @media (max-width: 767px) {
        font-size: 20px;
      }

      @media (max-width: 568px) {
        font-size: 18px;
      }
    }

    .duration {
      margin-right: 27px;
    }

    .duration,
    .class_year {
      .avatar {
        margin-right: 12px;
      }
      .text {
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
}
</style>
