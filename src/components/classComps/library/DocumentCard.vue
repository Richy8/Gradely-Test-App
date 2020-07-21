<template>
  <div>
    <div class="document-card-section white rounded-5">
      <!-- LEFT -->
      <div class="left">
        <div class="avatar avatar-square rounded-10" :class="card_bg">
          <img v-lazy="localImg('DocPDF.png')" alt v-if="file_type === 'pdf'">
          <img v-lazy="localImg('DocPPT.png')" alt v-else-if="file_type === 'ppt'">
          <img v-lazy="localImg('DocWord.png')" alt v-else-if="file_type === 'doc'">
        </div>

        <!-- FILE INFO -->
        <div class="file-info">
          <div class="file-title color_text">{{ file_name }}</div>
          <div class="file-meta color_grey_dark">
            <span>{{ file_date }}</span>,
            <span>&nbsp;{{ file_time }}</span>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="right">
        <div class="file-author">
          <span class="color_grey_dark">By:&nbsp;</span>
          <span class="color_text">{{ file_author }}</span>
        </div>

        <!-- CARD OPTION -->
        <div class="position-relative">
          <div class="avatar pointer" v-on-clickaway="dropOption" @click="toggleCardOption">
            <span class="icon-ellipsis-h border_grey_dark font-24 flex-center"></span>
          </div>

          <!-- DROPDOWN MENU -->
          <div class="dropdown-btn-menu placement-bottom" v-if="card_option">
            <ul class="list-unstyled">
              <li>
                <router-link to>View Document</router-link>
              </li>
              <li>
                <router-link to>Download Document</router-link>
              </li>
              <li>
                <router-link to>Delete Document</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "DocumentCard",

  props: {
    file: String,
    file_name: String,
    file_type: String,
    file_date: String,
    file_time: String,
    file_author: String
  },

  mixins: [clickaway],

  data() {
    return {
      card_option: false,
      card_bg: ""
    };
  },

  watch: {
    fie_type: "setFileTheme"
  },

  mounted() {
    this.setFileTheme();
  },

  methods: {
    setFileTheme() {
      if (this.file_type === "pdf") {
        this.card_bg = "brand_red_light_bg";
      } else if (this.file_type === "ppt") {
        this.card_bg = "brand_accent_bg";
      } else if (this.file_type === "doc") {
        this.card_bg = "brand_blue_bg";
      }
    },

    toggleCardOption() {
      this.card_option = !this.card_option;
    },

    dropOption() {
      this.card_option = false;
    }
  }
};
</script>

<style lang="scss">
.document-card-section {
  @include flex_row_between_nowrap;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  padding: 12px;
  margin-bottom: 5px;
  transition: all 0.3s ease-in-out;

  .left {
    @include flex-row_start_nowrap;
    width: 50%;

    @include breakpoint_max(sm) {
      width: 55%;
    }

    .avatar {
      @include equal_min_edge(44);
      margin-right: 15px;

      @include breakpoint_max(sm) {
        @include equal_min_edge(40);
      }

      img {
        @include transform_center;
        @include equal_min_edge(20);

        @include breakpoint_max(sm) {
          @include equal_min_edge(18);
        }
      }
    }

    .file-title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 4px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }

      @include breakpoint_max(sm) {
        font-size: 12.5px;
      }
    }

    .file-meta {
      font-size: 12px;
      line-height: 16px;

      @include breakpoint_max(lg) {
        font-size: 11.5px;
      }

      @include breakpoint_max(sm) {
        font-size: 10.5px;
      }
    }
  }

  .right {
    @include flex_row_between_nowrap;
    width: 50%;

    @include breakpoint_max(sm) {
      width: 45%;
      padding-left: 10px;
      padding-right: 10px;
    }

    .file-author {
      font-size: 14px;
      line-height: 19px;

      @include breakpoint_max(lg) {
        font-size: 12.5px;
      }

      @include breakpoint_max(sm) {
        font-size: 12px;
      }
    }

    .avatar {
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.6s ease-in-out;
      &:hover {
        border: 1px solid $border_grey;
      }
    }

    .dropdown-btn-menu {
      width: 200px;

      @include breakpoint_max(sm) {
        width: 170px;
      }
    }
  }
}
</style>
