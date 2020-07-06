<template>
  <div>
    <div class="catchup-card-row w-100 h-auto mb-5 mb-md-2">
      <!-- CATCHUP TITLE ROW -->
      <div class="row catchup-title-row">
        <div class="col-12 d-flex justify-content-between align-items-center nowrap">
          <!-- LEFT -->
          <div class="left">
            <div class="title brand_white font-weight-bold">CatchUp! in English Language</div>
            <div class="meta border_grey_light">Based on your current academic calendar</div>
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
            :mid_height="true"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardTwo.png"
            card_topic="Locus"
            :mid_height="true"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardThree.png"
            card_topic="Probability"
            :mid_height="true"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardFour.png"
            card_topic="Rates & Percentages"
            :mid_height="true"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardSix.png"
            card_topic="Word Stress"
            :mid_height="true"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="PracticeCardSeven.png"
            card_topic="Coordinate Geometry"
            :mid_height="true"
          ></RecommendCard>
        </div>
      </div>
      <!-- RECOMMEND CARD ROW -->
    </div>
  </div>
</template>

<script>
export default {
  name: "EnglishRow",

  components: {
    RecommendCard: () =>
      import(/* webpackChunkName: "RecommendCard" */ "@/components/classComps/catchup/RecommendCard")
  }
};
</script>

<style lang="scss">
</style>
