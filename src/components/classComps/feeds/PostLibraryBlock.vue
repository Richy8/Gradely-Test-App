<template>
  <div>
    <div class="post-library-block">
      <!-- FOLDER -->
      <div
        class="folder white rounded-10 overflow-hidden"
        v-for="(library, index) in libraries"
        :key="index"
      >
        <!-- AVATAR -->
        <div class="avatar avatar-square" :class="library.icon_bg_color">
          <span class="icon font-22 flex-center" :class="library.icon_theme"></span>
        </div>

        <!-- TITLE TEXT -->
        <div class="title-text font-weight-bold brand_navy">{{ library.title }}</div>

        <!-- ITEM COUNT -->
        <div class="item-count color_grey_dark">{{ setFileCount(library.count, library.type) }}</div>

        <!-- VIEW MORE -->
        <div class="view-more brand_accent_bg position-absolute pointer">
          <router-link :to="{name: account_type+''+library.route}">
            <span class="flex-center icon-arrow-right brand_navy font-16"></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";

export default {
  name: "PostLibraryBlock",

  data() {
    return {
      account_type: "",
      libraries: [
        {
          title: "Assessment",
          type: "item",
          count: 12,
          icon_theme: "icon-library brand_inverse",
          icon_bg_color: "brand_inverse_light_bg",
          route: "Assessments"
        },
        {
          title: "Documents",
          type: "file",
          count: 14,
          icon_theme: "icon-file-text color_text",
          icon_bg_color: "color_white_bg",
          route: "Documents"
        },
        {
          title: "Videos",
          type: "item",
          count: 9,
          icon_theme: "icon-video-card brand_tonic",
          icon_bg_color: "brand_red_light_bg",
          route: "Videos"
        },
        {
          title: "Discussions",
          type: "file",
          count: 13,
          icon_theme: "icon-discussion brand_accent",
          icon_bg_color: "brand_accent_light_bg",
          route: "Discussions"
        }
      ]
    };
  },

  created() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = capitalizeFirstLetter(this.$route.path.split("/")[1]);
    },

    setFileCount(count, type) {
      if (count > 1) {
        return `${count} ${type}s`;
      } else {
        return `${count} ${type}`;
      }
    }
  }
};
</script>

<style lang="scss">
.post-library-block {
  @include flex_row_between_wrap;
  margin-top: 10px;

  .folder {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    padding: 20px 15px 38px;
    width: 45%;
    margin-bottom: 30px;
    position: relative;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: scale(0.97);
    }

    .avatar {
      @include equal_min_edge(40);
      margin-bottom: 15px;
    }

    .title-text {
      font-size: 14.5px;
      line-height: 19px;
      margin-bottom: 5px;
    }

    .item-count {
      font-size: 12.5px;
      line-height: 16px;
    }

    .view-more {
      @include custom_min_edge(38, 28);
      right: 0;
      bottom: 0;

      span {
        position: relative;
        top: 1px;
      }
    }
  }
}
</style>
