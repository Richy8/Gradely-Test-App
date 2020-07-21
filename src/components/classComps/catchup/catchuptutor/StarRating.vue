<template>
  <div>
    <div class="star-rating-section">
      <span class="icon-star-full" :class="star" v-for="(star, index) in stars" :key="index"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRating",

  props: {
    tutor_rating: Number
  },

  data() {
    return {
      stars_list: Array(5).fill("border_grey"),
      stars: ""
    };
  },

  watch: {
    tutor_rating: "updateRatings"
  },

  mounted() {
    this.updateRatings();
  },

  methods: {
    updateRatings() {
      if (this.tutor_rating > 0 || this.tutor_rating <= 5) {
        let rating = Math.floor(this.tutor_rating);
        for (let i = 0; i < rating; i++) {
          this.stars_list[i] = "brand_accent";
        }
        this.stars = this.stars_list;
        this.checkHalfRating();
        this.stars_list = Array(5).fill("border_grey");
      } else {
        this.stars = this.stars_list;
      }
    },

    checkHalfRating() {
      let result = this.tutor_rating % 1;
      if (result !== 0) {
        let rating = Math.floor(this.tutor_rating);
        this.stars[rating] = "half_accent";
      }
    }
  }
};
</script>

<style lang="scss">
.star-rating-section {
  span {
    font-size: 17px;

    @include breakpoint_max(lg) {
      font-size: 15px;
    }

    @include breakpoint_max(md) {
      font-size: 14px;
    }

    @include breakpoint_max(xs) {
      font-size: 13px;
    }
  }
}
</style>
