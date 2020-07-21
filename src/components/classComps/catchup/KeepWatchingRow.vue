<template>
  <div>
    <div class="catchup-card-row keep-watching-row w-100 h-auto">
      <!-- CATCHUP TITLE ROW -->
      <div class="row catchup-title-row">
        <div class="col-12 d-flex justify-content-between align-items-center nowrap">
          <!-- LEFT -->
          <div class="left">
            <div class="title brand_white font-weight-bold">Keep Watching</div>
          </div>

          <!-- RIGHT-->
          <div class="right">
            <router-link to class="btn btn-sm brand_inverse_light font-10">See More</router-link>
          </div>
        </div>
      </div>
      <!-- CATCHUP TITLE ROW -->

      <!-- RECOMMEND CARD ROW -->
      <div class="row card-row">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="video"
            card_img="VideoCardOne.png"
            card_topic="Introduction to Algebraic Fractions"
            card_meta="3"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="video"
            card_img="VideoCardTwo.png"
            card_topic="Simple Tenses"
            card_meta="3"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="video"
            card_img="VideoCardThree.png"
            card_topic="Introduction to Algebraic Fractions"
            card_meta="3"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="video"
            card_img="VideoCardFour.png"
            card_topic="Simple Tenses"
            card_meta="3"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="video"
            card_img="VideoCardFive.png"
            card_topic="Introduction to Algebraic Fractions"
            card_meta="3"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="video"
            card_img="VideoCardSix.png"
            card_topic="Simple Tenses"
            card_meta="3"
          ></RecommendCard>
        </div>
      </div>
      <!-- RECOMMEND CARD ROW -->
    </div>
  </div>
</template>

<script>
export default {
  name: "KeepWatchingRow",

  components: {
    RecommendCard: () =>
      import(/* webpackChunkName: "RecommendCard" */ "@/components/classComps/catchup/RecommendCard")
  }
};
</script>

<style lang="scss">
.keep-watching-row {
  padding-bottom: 80px;
  border-bottom: none;
}
</style>
