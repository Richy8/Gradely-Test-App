<template>
  <div>
    <div class="catchup-card-row w-100 h-auto">
      <!-- CATCHUP TITLE ROW -->
      <div class="row catchup-title-row">
        <div class="col-12 d-flex justify-content-between align-items-center nowrap">
          <!-- LEFT -->
          <div class="left">
            <div class="title brand_white font-weight-bold">Recommended for Andrew Today</div>
            <div
              class="meta border_grey_light"
            >Based on this week’s performance in Class and Practice</div>
          </div>

          <!-- RIGHT-->
          <div class="right">
            <!-- <router-link to class="btn btn-sm brand_inverse_light font-10">See All</router-link> -->
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
            card_img="PracticeCardOne.png"
            card_title="practice"
            card_topic="Approximation"
            :show_lock="true"
            :show_button="false"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="practice"
            card_img="CardStack.png"
            card_title="practice"
            card_topic="Algebra +"
            :show_lock="true"
            :show_button="false"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="video"
            card_img="CardFive.png"
            card_title="video lesson"
            card_topic="Number Base System"
            :show_lock="true"
            :show_button="false"
          ></RecommendCard>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <RecommendCard
            theme="dark"
            card_type="tutor"
            card_img="TeacherOneLg.png"
            card_title="tutoring"
            card_topic="Number Base"
            card_meta="2"
            :show_lock="false"
            :show_button="false"
          ></RecommendCard>
        </div>
      </div>
      <!-- RECOMMEND CARD ROW -->
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationRow",

  components: {
    RecommendCard: () =>
      import(/* webpackChunkName: "RecommendCard" */ "@/components/classComps/catchup/RecommendCard")
  }
};
</script>

<style lang="scss">
.catchup-card-row {
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 0 !important;
  border-bottom: 1px solid rgba(black, 0.4);
}
</style>
