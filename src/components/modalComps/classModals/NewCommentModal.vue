<template>
  <div>
    <ModalCover :show_close="false">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body" class="comment-modal">
        <!-- MODAL TOP -->
        <div class="container-fluid modal-top pt-3 pb-4">
          <div class="comment-modal-title-row">
            <!-- TITLE -->
            <div
              class="title text-uppercase font-weight-bold color_grey_dark font-14 pt-1"
            >New Comment</div>

            <!-- CLOSE DIALOG -->
            <div class="close-bar position-relative">
              <div class="pageClose dialogDismiss">
                <button
                  type="button"
                  class="close_dialog color_white_bg cls_md"
                  @click="$emit('closeTriggered')"
                ></button>
              </div>
            </div>
          </div>

          <!-- COMMENT AUTHOR -->
          <div class="comment-author">
            Replying
            <span class="author font-weight-bold brand_navy">Francis Sanni</span>
          </div>

          <!-- MODAL BODY -->
          <div class="comment-modal-body">
            <!-- DISPLAY AVATAR -->
            <div class="avatar avatar-square avatar_md">
              <div class="avatar-text brand_inverse_light_bg brand_navy font-weight-bold">FS</div>
            </div>

            <!-- COMMENT FORM AREA -->
            <div class="comment-form-area w-100">
              <!-- INPUT FORM -->
              <!-- <textarea
                class="form-control font-12-5 px-0 border-0"
                placeholder="Write your comment"
                rows="7"
              ></textarea>-->
              <ckeditor
                tag-name="textarea"
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
              ></ckeditor>
              <!-- INPUT FORM -->
            </div>
            <!-- COMMENT FORM AREA -->
          </div>
        </div>

        <!-- MODAL BOTTOM -->
        <div class="container-fluid modal-bottom px-1">
          <PostInputOptions :disabled="false" :comment_type="true"></PostInputOptions>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import ModalCover from "@/components/globalComps/ModalCover";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PostInputOptions from "@/components/schoolComps/dashboard/class/class_feeds/PostInputOptions";

export default {
  name: "NewMessageModal",

  components: {
    ModalCover,
    PostInputOptions
  },

  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Make an announcement</p>",
      editorConfig: {
        fontSize: {
          options: [9, 11, "default", 13, 17, 19, 21]
        },
        toolbar: ["bold", "italic", "bulletedList", "numberedList"]
      }
    };
  },

  methods: {}
};
</script>

<style lang="scss">
.comment-modal {
  .comment-modal-title-row {
    @include flex_row_between_nowrap;
    margin-bottom: 25px;

    .pageClose {
      top: 15px;
      right: 20px;
      .close_dialog {
        transition: all 0.4s ease-in-out;
        &:hover {
          background: $brand_inverse_light !important;
        }
      }
    }
  }

  .comment-author {
    margin: 20px 0 10px;
    font-size: 13px;
  }

  .comment-modal-body {
    @include flex_row_start_nowrap;
    align-items: flex-start;
    .avatar {
      margin-right: 15px;
    }

    .comment-form-area {
      padding-top: 0px;

      .ck-toolbar {
        background: transparent !important;
        border: 1px solid $border_grey_light;
      }
      .ck-icon {
        width: 14.5px;
        height: 14.5px;
        color: $color_grey_dark;
        font-size: 14px;
      }
      .ck-content {
        border: 1px solid transparent;
        font-size: 13.5px;
        height: 100px;

        &:focus {
          border: 1px solid $brand_accent;
        }
      }
    }
  }
}
</style>
