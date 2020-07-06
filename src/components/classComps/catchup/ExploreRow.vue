<template>
  <div>
    <div class="explore-card-row w-100 h-auto">
      <!-- CATCHUP TITLE ROW -->
      <div class="row catchup-title-row">
        <div class="col-12 d-flex justify-content-between align-items-center nowrap">
          <!-- LEFT -->
          <div class="left">
            <div class="title brand_white font-weight-bold">Explore</div>
            <div class="meta border_grey_light">Find recently shared resources in your class</div>
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
          <ExploreCard
            card_type="video"
            card_img="VideoCardEight.png"
            child_img="GirlOne.png"
            child_name="Anthony Joshua"
          ></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="pdf" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="doc" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="ppt" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="doc" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="ppt" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard
            card_type="video"
            card_img="VideoCardEight.png"
            child_img="GirlOne.png"
            child_name="Anthony Joshua"
          ></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="pdf" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="doc" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="ppt" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="doc" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <ExploreCard card_type="ppt" card_img child_img child_name="Anthony Joshua"></ExploreCard>
        </div>
      </div>
      <!-- RECOMMEND CARD ROW -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ExploreRow",

  components: {
    ExploreCard: () =>
      import(/* webpackChunkName: "ExploreCard" */ "@/components/classComps/catchup/ExploreCard")
  }
};
</script>

<style lang="scss">
.explore-card-row {
}
</style>
