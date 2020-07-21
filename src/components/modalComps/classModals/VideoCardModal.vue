<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="video-card">
          <!-- CARD TOP -->
          <div class="card-top position-relative">
            <!-- <img src="@/assets/images/VideoTeacher.png" alt> -->
            <video :poster="dynamicImg('VideoTeacher.png')" @pause="pauseVideo" @play="playVideo">
              <source :src="dynamicVid('TestVideo.mp4')" type="video/mp4">Your Browser does not support the video tag
            </video>

            <!-- PLAY ICON -->
            <div class="avatar pointer play-icon">
              <span class="flex-center icon-play-bg brand_accent" @click="playVideo"></span>
            </div>

            <!-- PAUSE ICON -->
            <div class="avatar pointer pause-icon d-none">
              <span class="flex-center icon-pause brand_accent" @click="playVideo"></span>
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

            <div class="d-flex justify-content-between align-items-center nowrap">
              <!-- LEFT -->
              <div class="left d-flex justify-content-start align-items-center nowrap">
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

              <!-- RIGHT -->
              <div class="right">
                <router-link to class="recommend-btn color_text rounded-20">
                  <span class="icon-thumbs-up font-17 mr-2"></span>
                  <span class="font-weight-bold">Recommend</span>
                </router-link>
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
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "VideoCardModal",

  components: {
    ModalCover
  },

  data() {
    return {};
  },

  methods: {
    playVideo() {
      let videoObj = document.querySelector("video");
      let playBtn = document.querySelector(".play-icon");

      videoObj.play();
      videoObj.setAttribute("controls", true);

      playBtn.style.opacity = 0;
    },

    pauseVideo() {
      let videoObj = document.querySelector("video");
      let playBtn = document.querySelector(".play-icon");

      videoObj.pause();
      videoObj.setAttribute("controls", false);

      playBtn.style.opacity = 1;
    }
  }
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

    video {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      mix-blend-mode: normal;
      opacity: 0.8;
    }

    .play-icon,
    .pause-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 48px;
      min-width: 58px;
      min-height: 58px;
      width: 58px;
      height: 58px;
      transition: all 0.3s ease-in-out;
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

    .recommend-btn {
      border: 1px solid $brand_accent;
      background: $brand_accent_light;
      padding: 10px 20px;
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
