<template>
  <div>
    <ModalCover :show_close="false">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body" class="post-modal">
        <!-- MODAL TOP -->
        <div class="container-fluid modal-top pt-3 pb-4">
          <div class="post-modal-title-row">
            <!-- TITLE -->
            <div class="title text-uppercase font-weight-bold color_grey_dark font-14 pt-1">New Post</div>

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

          <!-- MODAL BODY -->
          <div class="post-modal-body">
            <!-- DISPLAY AVATAR -->
            <div class="avatar avatar-square avatar_md">
              <div class="avatar-text font-weight-bold" :class="color_scheme">{{ getInitial }}</div>
            </div>

            <!-- POST FORM AREA -->
            <div class="post-form-area w-100">
              <div class="user-name color_text font-weight-bold font-12-5 mb-2">{{ fullname }}</div>

              <!-- INPUT FORM -->
              <ckeditor
                tag-name="textarea"
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
              ></ckeditor>
              <!-- INPUT FORM -->

              <!-- SELECTED MESSAGE OPTION DISPLAY  -->
              <div class="message-option-display my-3">
                <transition name="fade" mode="out-in">
                  <keep-alive>
                    <component :is="in_view" @removePoll="in_view=null"></component>
                  </keep-alive>
                </transition>
              </div>
              <!-- SELECTED MESSAGE OPTION DISPLAY  -->

              <!-- SELECT POST AUDIENCE -->
              <div class="post-audience">
                <span class="color_ash font-12">Post to</span>
                <!-- SELECT DROPDOWN -->
                <span
                  class="select-dropdown rounded-30 color_white_bg pointer"
                  v-on-clickaway="dropOption"
                  @click="toggleAudienceOption"
                >
                  <span class="color_text font-12">{{selected}}</span>
                  <span class="icon icon-caret-fill-down color_text font-8"></span>

                  <!-- POST AUDIENCE DROPDOWN -->
                  <div
                    class="dropdown-btn-menu audience-menu placement-bottom-top"
                    v-if="toggle_option"
                  >
                    <ul class="list-unstyled">
                      <!-- OPTIONS HEADER -->
                      <li class="color_text font-9 options-header">Who should see this?</li>
                      <!-- AUDIENCE OPTION -->
                      <li
                        class="audience-option pointer"
                        v-for="(audience, index) in audience_options"
                        :key="index"
                        @click="selectAudience(index)"
                      >
                        <div class="done" :class="{'invisible' : !audience.select}"></div>
                        <div class="option-info">
                          <div class="title">{{ audience.title }}</div>
                          <div class="meta">{{ audience.meta }}</div>
                        </div>
                      </li>
                      <!-- AUDIENCE OPTION -->
                    </ul>
                  </div>
                </span>
              </div>
            </div>
            <!-- POST FORM AREA -->
          </div>
        </div>

        <!-- MODAL BOTTOM -->
        <div class="container-fluid modal-bottom px-1">
          <PostInputOptions :disabled="false" @pollClicked="in_view='NewPollsBlock'"></PostInputOptions>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";
import { mixin as clickaway } from "vue-clickaway";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ModalCover from "@/components/globalComps/ModalCover";
import PostInputOptions from "@/components/classComps/feeds/PostInputOptions";

export default {
  name: "NewMessageModal",

  components: {
    ModalCover,
    PostInputOptions,
    NewPollsBlock: () =>
      import(/* NewPollsBlock */ "@/components/classComps/feeds/NewPollsBlock")
  },

  props: {
    fullname: String,
    color_scheme: String,
    account_type: String
  },

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    }
  },

  mixins: [clickaway],

  data() {
    return {
      in_view: null,
      toggle_option: false,
      selected: "Current class",
      editor: ClassicEditor,
      editorData: "<p>Make an announcement</p>",
      editorConfig: {
        toolbar: ["bold", "italic", "bulletedList", "numberedList"]
      },
      audience_options: [
        { title: "Everyone", meta: "Everyone in my school", select: false },
        {
          title: "Current class",
          meta: "Only members of this class",
          select: true
        },
        {
          title: "Students only",
          meta: "Visible to only the students in this class",
          select: false
        },
        {
          title: "Custom",
          meta: "Select those you want to see this",
          select: false
        }
      ]
    };
  },

  methods: {
    selectAudience(index) {
      this.audience_options.map(val => (val.select = false));
      this.audience_options[index].select = true;

      this.selected = this.audience_options[index].title;
    },

    toggleAudienceOption() {
      this.toggle_option = !this.toggle_option;
    },

    dropOption() {
      this.toggle_option = false;
    }
  }
};
</script>

<style lang="scss">
.post-modal {
  .post-modal-title-row {
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

      @include breakpoint_max(md) {
        top: 15px !important;
        right: 14px !important;
      }
    }
  }

  .post-modal-body {
    @include flex_row_start_nowrap;
    align-items: flex-start;
    .avatar {
      margin-right: 15px;
    }

    .post-form-area {
      padding-top: 3px;

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
          border: 0.5px solid rgba($brand_accent, 0.7);
        }
      }

      .post-audience {
        margin-top: 30px;
      }

      .select-dropdown {
        padding: 5px 15px;
        margin-left: 10px;
        position: relative;

        .icon {
          margin-left: 20px;
        }

        .audience-menu {
          width: 220px;
          padding: 0px !important;
          animation: panel-slide-up 0.5s ease-in-out backwards !important;

          .options-header {
            padding: 12px !important;
          }

          .audience-option {
            @include flex_row_start_nowrap;
            padding: 6px 11px 7px;
            margin-bottom: 2px;
            background: $color_white;

            &:hover {
              background: #ebebeb;
            }

            .done {
              @include equal_min_edge(18);
              margin-right: 15px;
              &:after {
                font-size: 13px;
              }
            }

            .title {
              font-weight: 600;
              color: $brand_primary;
              font-size: 11px;
              line-height: 14px;
              margin-bottom: 3px;
            }

            .meta {
              color: $color_grey_dark;
              font-size: 8.3px;
              line-height: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
