<template>
  <div>
    <div class="explore-card w-100">
      <!-- TOP -->
      <div
        class="top w-100 position-relative rounded-5 overflow-hidden black pointer"
        :class="getCardBg"
      >
        <img v-lazy="dynamicImg(card_img)" alt v-if="card_type==='video'">
        <img v-lazy="localImg('DocPDF.png')" alt v-else-if="card_type==='pdf'">
        <img v-lazy="localImg('DocWord.png')" alt v-else-if="card_type==='doc'">
        <img v-lazy="localImg('DocPPT.png')" alt v-else-if="card_type==='ppt'">

        <!-- VIDO CARD IMAGE OVELAY -->
        <div
          class="box-overlay position-absolute w-100 h-100 rgba-black-light"
          v-if="card_type==='video'"
        >
          <span class="flex-center icon-play-bg brand_accent font-35" v-if="card_type==='video'"></span>
        </div>
      </div>

      <!-- BOTTOM -->
      <div class="bottom d-flex justify-content-start align-items-center nowrap">
        <!-- AVATAR -->
        <div class="avatar avatar_sm">
          <img v-lazy="dynamicImg(child_img)" alt class="avatar-img" v-if="child_img">
          <div
            class="avatar-text brand_white font-weight-400 font-9-5"
            :class="getAvatarBg"
            v-else
          >{{ getInitial }}</div>
        </div>

        <!-- CHILD NAME -->
        <div class="name font-weight-bold font-12 border_grey_dark">{{ child_name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInitial, colors, random, shuffle } from "@/scripts/utilities";
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "ExploreCard",

  props: {
    card_type: String,
    card_img: String,
    child_img: String,
    child_name: String
  },

  computed: {
    getInitial() {
      return setInitial(this.child_name);
    },

    getAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(11, 0)];
    },

    getCardBg() {
      if (this.card_type === "pdf") {
        return this.doc_colors[0];
      } else if (this.card_type === "ppt") {
        return this.doc_colors[1];
      } else if (this.card_type === "doc") {
        return this.doc_colors[2];
      } else {
        return false;
      }
    }
  },

  mixins: [RenderImages],

  data() {
    return {
      doc_colors: ["brand_red_light_bg", "brand_accent_bg", "brand_blue_bg"]
    };
  }
};
</script>

<style lang="scss">
.explore-card {
  transition: all 0.4s ease-in-out;
  margin-bottom: 25px;

  &:hover {
    transform: scale(0.97);
  }

  .top {
    margin-bottom: 10px;
    height: 160px;
    img {
      @include transform_center;
    }
  }
  .bottom {
    .avatar {
      margin-right: 10px;
    }
  }
}
</style>
