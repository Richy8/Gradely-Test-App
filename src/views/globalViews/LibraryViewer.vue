<template>
  <div>
    <vue-headful title="Library Viewer | Gradelyng" description="Description goes here"/>
    <div class="library-viewer-section base-type-layout">
      <!-- SECTION TOP -->
      <section class="top black">
        <div class="container">
          <!-- TOP -->
          <div class="row">
            <div class="col-12 d-flex justify-content-between align-items-center nowrap">
              <!-- LEFT -->
              <div class="left d-flex justify-content-start align-items-center nowrap">
                <!-- AVATAR -->
                <div class="avatar avatar-square">
                  <img v-lazy="dynamicImg('MaleChild.png')" alt class="avatar-img">
                  <!-- <div class="avatar-text brand_tonic_bg brand_white">AJ</div> -->
                </div>

                <!-- USER INFO -->
                <div class="user-info">
                  <div class="name font-weight-bold">Rukayat Rufai</div>
                  <div class="date color_grey_dark">
                    <span>12th June, 2020</span> &nbsp;
                    <span>2:46 PM</span>
                  </div>
                </div>
              </div>

              <!-- RIGHT -->
              <div class="right d-flex justify-content-start align-items-center nowrap">
                <!-- DOWNLOAD ICON -->
                <div class="avatar pointer mr-2">
                  <span class="icon-cloud-download flex-center white-text font-30"></span>
                </div>

                <!-- SHARE ICON -->
                <div class="avatar pointer mx-2">
                  <span class="icon-share flex-center white-text font-19"></span>
                </div>

                <!-- DIVIDER -->
                <div class="divider mx-2">
                  <span class="invisible">x</span>
                </div>

                <!-- CLOSE ICON -->
                <div class="avatar pointer ml-2">
                  <span class="icon-decline flex-center white-text font-21 font-weight-400"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- SECTION TOP -->

      <!-- SECTION BOTTOM -->
      <section class="bottom">
        <!-- BOTTOM -->
        <div class="container h-100">
          <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center nowrap">
              <!-- IMAGE CONTAINER -->
              <div class="image-container border" v-if="show">
                <img v-lazy="dynamicImg('PostImg.png')" alt>
              </div>
              <!-- IMAGE CONTAINER -->

              <!-- VIDEO CONTAINER -->
              <div class="video-wrapper" v-if="show">
                <div class="video-content">
                  <video :poster="dynamicImg('PostVideoLg.png')">
                    <source :src="dynamicVid('TestVideo.mp4')" type="video/mp4">Your Browser does not support the video tag
                  </video>

                  <!-- PLAY BUTTON -->
                  <div class="avatar">
                    <span class="icon-play-bg brand_accent flex-center pointer"></span>
                  </div>
                  <!-- PLAY BUTTON -->

                  <!-- VIDEO OVERLAY -->
                  <div class="overlay position-absolute w-100 h-100 rgba-black-light"></div>
                  <!-- VIDEO OVERLAY -->
                </div>

                <!-- VIDEO TITLE -->
                <div
                  class="video-title brand_inverse_light mt-4 text-center"
                >Video title here if there is any.</div>
              </div>
              <!-- VIDEO CONTAINER -->

              <!-- FILE COMTAINER -->
              <div class="file-wrapper">
                <div class="row h-auto">
                  <div class="col-12 col-md-10 offset-md-1 file-container h-auto">
                    <pdf
                      src="https://res.cloudinary.com/richy-jones/image/upload/v1594866912/4_5812035339350443887.pdf"
                    ></pdf>
                  </div>
                </div>
              </div>
              <!-- FILE COMTAINER -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import pdf from "vue-pdf";

export default {
  name: "LibraryViewer",

  components: {
    pdf
  },

  props: {},

  data() {
    return {
      show: false
    };
  },

  mounted() {
    bgColorSetter("#0f0f0f");
  }
};
</script>

<style lang="scss">
.library-viewer-section {
  position: relative;
  top: 0;

  .top {
    padding-top: 12px;
    padding-bottom: 12px;

    .left {
      .avatar {
        @include equal_min_edge(42);
        margin-right: 15px;
      }

      .name {
        font-size: 14px;
        line-height: 17px;
        color: #dbf5f8;
        margin-bottom: 3px;
      }

      .date {
        font-size: 12px;
        line-height: 16px;
      }
    }

    .right {
      .divider {
        background: #fff;
        height: 110%;
        min-width: 1px;
        width: 1px;
      }
    }
  }

  .bottom {
    height: 90vh;

    .image-container {
      position: relative;
      margin-top: 120px;
      width: 520px;
      height: auto;

      img {
        position: absolute;
        width: 100%;
        height: auto;
      }
    }

    .video-content {
      position: relative;
      margin-top: 120px;
      width: 750px;
      height: 460px;

      .avatar {
        @include equal_min_edge(60);
        @include transform_center;
        z-index: 9;

        span {
          font-size: 55px;
        }
      }

      .overlay {
        background: #000000;
        opacity: 0.5;
      }

      video {
        @include img_cover;
      }
    }

    .file-wrapper {
      .file-container {
        margin-top: 50px;
        margin-bottom: 50px;
      }
    }
  }
}
</style>
