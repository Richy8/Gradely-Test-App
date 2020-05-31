<template>
  <div>
    <RecommendCard
      child_img="ChildSqr6.png"
      child_name="Efemena Elvis"
      :percent_progress="65"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr5.png"
      child_name="Richy Jones"
      :percent_progress="50"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr4.png"
      child_name="Nelly Okoh"
      :percent_progress="69"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr4.png"
      child_name="Esther Patrick"
      :percent_progress="74"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr2.png"
      child_name="Jacob Dada"
      :percent_progress="55"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr1.png"
      child_name="Hassan Ibrahim"
      :percent_progress="60"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>`
    <!-- RECOMMENDATION NOTE -->
    <RecommendationNote
      progress_state="average"
      recommendation_text="We advice that you focus on the following students while in class. Make sure they get it first before moving on."
    ></RecommendationNote>
    <!-- RECOMMENDATION NOTE -->
  </div>
</template>

<script>
import RecommendCard from "@/components/schoolComps/dashboard/class/class_report/RecommendCard";

export default {
  name: "AverageList",

  components: {
    RecommendCard,
    RecommendationNote: () =>
      import(/* webpackChunkName: "Recommendation" */ "@/components/schoolComps/dashboard/class/class_report/RecommendationNote")
  }
};
</script>

<style>
</style>
