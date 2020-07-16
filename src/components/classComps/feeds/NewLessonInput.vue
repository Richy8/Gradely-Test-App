<template>
  <div class="w-100">
    <div class="new-post-input-section w-100">
      <!-- META TEXT -->
      <div class="meta-text border_grey_dark">Add Instructions</div>

      <!-- POST INPUT BLOCK -->
      <div class="input-block white rounded-5 w-100">
        <div class="title-row">
          <div class="title-text font-weight-bold color_text">New Lesson</div>

          <div class="cancel border_grey_dark pointer">Cancel</div>
        </div>

        <!-- TITLE INPUT -->
        <input
          type="text"
          class="form-control border-0 color_grey_dark title-input"
          placeholder="Add lesson title"
        >

        <!-- SUBJECT SELECTOR -->
        <div class="input-selector mt-3">
          <!-- AVATAR -->
          <div class="avatar">
            <span class="icon-book-cover flex-center font-24 color_grey_dark font-weight-400"></span>
          </div>

          <!-- INPUT -->
          <select id class="form-control border-0 color_white_bg input-form">
            <option value selected disabled>Select Subject</option>
            <option value="Further Mathematics">Further Mathematics</option>
            <option value="English Language">English Language</option>
          </select>
        </div>

        <!-- LESSON DESCRIPTION -->
        <div class="input-selector mt-3 align-items-start">
          <!-- AVATAR -->
          <div class="avatar">
            <span class="icon-align-justify flex-center font-24 color_grey_dark font-weight-400"></span>
          </div>

          <!-- INPUT -->
          <textarea
            rows="4"
            class="form-control color_white_bg border-0 w-100"
            placeholder="Add lesson description"
          ></textarea>
        </div>

        <!-- FILE UPLOAD -->
        <div class="mt-4 input-selector align-items-start">
          <!-- AVATAR -->
          <div class="avatar">
            <span class="icon-file flex-center font-24 color_grey_dark font-weight-400"></span>
          </div>

          <!-- FILE CONTENT -->
          <div class="file-content w-100">
            <div class="text">
              <span class="font-weight-bold text-uppercase mr-1">Lesson Note</span>
              <span>(PDF, Word docx, video, Powerpoint)</span>
            </div>

            <!-- UPLOAD BUTTON -->
            <div
              class="upload-btn w-100 brand_accent_light_bg text-center brand_navy rounded-5 pointer"
            >Click here to upload File</div>

            <!-- UPLOADED CONTENT -->
            <div class="uploaded-content d-flex justify-content-between align-items-center pb-3">
              <div class="content rounded-5">
                <div class="left">
                  <!-- FILE IMAGE -->
                  <div class="avatar avatar-square brand_accent_bg">
                    <img v-lazy="localImg('DocPPT.png')" alt>
                  </div>

                  <!-- FILE INFO -->
                  <div class="file-info">
                    <div class="file-title color_text">File name goes here</div>
                    <div class="file-meta color_grey_dark">Powerpoint. 122KB</div>
                  </div>
                </div>

                <!-- RIGHT -->
                <div class="right">
                  <div class="avatar avatar_sm pointer">
                    <span class="icon-thrash border_grey_dark font-18 flex-center"></span>
                  </div>
                </div>
              </div>

              <div class="content rounded-5">
                <div class="left">
                  <!-- FILE IMAGE -->
                  <div class="avatar avatar-square brand_accent_bg">
                    <img v-lazy="localImg('DocPPT.png')" alt>
                  </div>

                  <!-- FILE INFO -->
                  <div class="file-info">
                    <div class="file-title color_text">File name goes here</div>
                    <div class="file-meta color_grey_dark">Powerpoint. 122KB</div>
                  </div>
                </div>

                <!-- RIGHT -->
                <div class="right">
                  <div class="avatar avatar_sm pointer">
                    <span class="icon-thrash border_grey_dark font-18 flex-center"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- FILE CONTENT -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewLiveClassInput",
  components: {},

  data() {
    return {};
  }
};
</script>

<style lang="scss">
.new-post-input-section {
  transition: all 0.6s ease-in-out;
  animation: panel-slide-down 0.5s ease-in-out forwards;

  .file-content {
    .text {
      font-size: 12px;
      line-height: 16px;
      color: $color_grey_dark;
      margin-bottom: 10px;
    }

    .upload-btn {
      font-size: 12.5px;
      line-height: 16px;
      padding: 16px;
      border: 1px solid $brand_accent;
      transition: all 0.4s ease-in-out;

      &:hover {
        transform: scale(0.97);
      }
    }

    .uploaded-content {
      margin-top: 10px;
      .content {
        @include flex_row_between_nowrap;
        width: 49%;
        border: 1px solid $border_grey;
        padding: 10px;

        .left {
          @include flex_row_start_nowrap;

          .avatar {
            @include equal_min_edge(40);
            margin-right: 15px;

            img {
              @include transform_center;
              @include equal_min_edge(18);
            }
          }

          .file-title {
            font-size: 14px;
            line-height: 19px;
            margin-bottom: 5px;
          }

          .file-meta {
            font-size: 12px;
            line-height: 16px;
          }
        }
        .right {
          .avatar {
            &:hover {
              span {
                color: $brand_tonic !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
