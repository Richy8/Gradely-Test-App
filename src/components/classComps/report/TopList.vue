<template>
  <div>
    <RecommendCard child_img="ChildSqr4.png" child_name="Ebuka John" :percent_progress="78"></RecommendCard>
    <RecommendCard child_img="ChildSqr2.png" child_name="Elvis Efemena" :percent_progress="99"></RecommendCard>
    <RecommendCard child_img="ChildSqr1.png" child_name="Emeka Anyanwu" :percent_progress="90"></RecommendCard>
    <RecommendCard child_img="ChildSqr3.png" child_name="Esther Ayodele" :percent_progress="95"></RecommendCard>
    <RecommendCard child_img="ChildSqr6.png" child_name="Phillip Precious" :percent_progress="82"></RecommendCard>
    <RecommendCard child_img="ChildSqr5.png" child_name="Micheal David" :percent_progress="76"></RecommendCard>

    <!-- RECOMMENDATION NOTE -->
    <RecommendationNote
      progress_state="top"
      recommendation_text="We advice that you focus on the following students while in class. Make sure they get it first before moving on."
    ></RecommendationNote>
    <!-- RECOMMENDATION NOTE -->
  </div>
</template>

<script>
import RecommendCard from "@/components/classComps/report/RecommendCard";

export default {
  name: "TopList",

  components: {
    RecommendCard,
    RecommendationNote: () =>
      import(/* webpackChunkName: "Recommendation" */ "@/components/classComps/report/RecommendationNote")
  }
};
</script>

<style>
</style>
