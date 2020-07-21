<template>
  <div>
    <div class="catchup-card-row w-100 h-auto">
      <!-- CATCHUP TITLE ROW -->
      <div class="row catchup-title-row">
        <div class="col-12 d-flex justify-content-between align-items-center nowrap">
          <!-- LEFT -->
          <div class="left">
            <div class="title brand_white font-weight-bold">Recently Practiced</div>
            <div class="meta border_grey_light">You may want to try again</div>
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
            card_type="practice"
            card_img="Practice.png"
            card_topic="Number Base"
            :card_progress="92"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardTwo.png"
            card_topic="Locus"
            :card_progress="12"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardThree.png"
            card_topic="Probability"
            :card_progress="62"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardFour.png"
            card_topic="Rates & Percentages"
            :card_progress="54"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardSix.png"
            card_topic="Word Stress"
            :card_progress="32"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardSeven.png"
            card_topic="Coordinate Geometry"
            :card_progress="13"
          ></RecommendCard>
        </div>
      </div>
      <!-- RECOMMEND CARD ROW -->
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentPracticeRow",

  components: {
    RecommendCard: () =>
      import(/* webpackChunkName: "RecommendCard" */ "@/components/classComps/catchup/RecommendCard")
  }
};
</script>

<style lang="scss">
</style>
