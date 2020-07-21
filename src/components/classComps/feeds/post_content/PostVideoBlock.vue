<template>
  <div>
    <div class="video-block-container">
      <!-- POST TEXT -->
      <div class="post-text color_ash font-13 mb-3 transparent_bg">{{ post.text }}</div>
      <!-- POST TEXT -->

      <div class="video-holder position-relative">
        <video :poster="dynamicImg('PostVideo.png')" @pause="pauseVideo" @play="playVideo">
          <source :src="dynamicVid(post.video)" type="video/mp4">Your Browser does not support the video tag
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
    </div>
  </div>
</template>

<script>
export default {
  name: "PostVideoBlock",

  props: {
    post: Object
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

<style lang="scss">
.video-block-container {
  .video-holder {
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
}
</style>
