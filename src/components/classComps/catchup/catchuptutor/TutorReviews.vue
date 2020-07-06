<template>
  <div>
    <div class="tutor-review-section">
      <!-- AVATAR -->
      <div class="avatar avatar-square avatar_md">
        <img v-lazy="dynamicImg(card_img)" alt class="avatar-img" v-if="card_img">
        <div class="avatar-text brand_inverse_light_bg brand_navy" v-else>{{ getInitial }}</div>
      </div>

      <!-- CARD INFO -->
      <div class="card-info">
        <!-- TOP -->
        <div class="top">
          <span class="name color_text font-weight-bold">{{ card_name }}</span> -
          <span class="date color_grey_dark">{{ card_date }}</span>
        </div>

        <!-- MID -->
        <div class="mid d-flex justify-content-start align-items-center nowrap">
          <!-- REVIEW TITLE -->
          <div class="review-title brand_primary">{{ review_title }}</div>

          <!-- STAR RATING -->
          <StarRating :tutor_rating="review_rating"></StarRating>
        </div>

        <!-- BOTTOM -->
        <div class="bottom color_ash">{{ review_text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import { setInitial } from "@/scripts/utilities";

export default {
  name: "TutorReviews",

  props: {
    card_img: String,
    card_name: String,
    card_date: String,
    review_title: String,
    review_rating: Number,
    review_text: String
  },

  mixins: [RenderImages],

  computed: {
    getInitial() {
      return setInitial(this.card_name);
    }
  },

  components: {
    StarRating: () =>
      import(/* webpackChunkName: "TutorCatchup" */ "@/components/classComps/catchup/catchuptutor/StarRating")
  }
};
</script>

<style lang="scss">
.tutor-review-section {
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid $border_grey;
  @include flex_row_start_nowrap;
  align-items: flex-start;

  .avatar {
    margin-right: 15px;
  }

  .top {
    margin-bottom: 10px;
    .name {
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(xs) {
        font-size: 15px;
      }
    }
    .date {
      font-size: 13px;
      line-height: 18px;
    }
  }
  .mid {
    margin-bottom: 10px;
    .review-title {
      font-size: 16px;
      line-height: 22px;
      margin-right: 22px;

      @include breakpoint_max(xs) {
        font-size: 15px;
      }
    }
  }
  .bottom {
    font-size: 14px;
    line-height: 165%;

    @include breakpoint_max(xs) {
      font-size: 13.5px;
    }
  }
}
</style>
