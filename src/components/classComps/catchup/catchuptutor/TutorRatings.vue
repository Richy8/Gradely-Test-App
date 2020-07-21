<template>
  <div>
    <div class="tutor-ratings-section">
      <div class="tutor-page-title color_text text-capitalize">Ratings & Reviews</div>

      <!-- RATING -->
      <div class="rating-row">
        <!-- LEFT -->
        <div class="left">
          <div class="top color_text font_weight_900">
            {{ tutor_rating }}
            <span class="icon-star-full brand_accent"></span>
          </div>
          <div class="mid color_text">out of 5</div>
          <div class="bottom color_text">{{ tutor_total_rating }} Ratings</div>
        </div>

        <!-- RIGHT -->
        <div class="right">
          <ProgressRating :rating_id="5" :rating_progress="80"></ProgressRating>
          <ProgressRating :rating_id="4" :rating_progress="40"></ProgressRating>
          <ProgressRating :rating_id="3" :rating_progress="20"></ProgressRating>
          <ProgressRating :rating_id="2" :rating_progress="5"></ProgressRating>
          <ProgressRating :rating_id="1" :rating_progress="1"></ProgressRating>
        </div>
      </div>
      <!-- RATING -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorRatings",

  props: {
    tutor_rating: Number,
    tutor_total_rating: Number
  },

  components: {
    ProgressRating: () =>
      import(/* webpackChunkName: "TutorCatchup" */ "@/components/classComps/catchup/catchuptutor/ProgressRating")
  }
};
</script>

<style lang="scss">
.tutor-ratings-section {
  margin-bottom: 25px;

  .rating-row {
    @include flex_row_start_nowrap;

    .left {
      @include flex_column_center;
      margin-right: 60px;

      .top {
        font-size: 28px;
        line-height: 44px;
        margin-bottom: 7px;
        text-shadow: 0.9px 0px, 0px 0.9px, 0.9px 0.9px;

        span {
          font-size: 20px;
          margin-left: 2px;
        }
      }
      .mid,
      .bottom {
        font-size: 13.5px;
        line-height: 19px;
        opacity: 0.85;
      }
      .mid {
        margin-bottom: 9px;
      }
    }
  }
}
</style>
