<template>
  <div>
    <RecommendCard
      child_img="ChildSqr4.png"
      child_name="Ebuka John"
      :percent_progress="78"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr2.png"
      child_name="Elvis Efemena"
      :percent_progress="99"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr1.png"
      child_name="Emeka Anyanwu"
      :percent_progress="90"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr3.png"
      child_name="Esther Ayodele"
      :percent_progress="95"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr6.png"
      child_name="Phillip Precious"
      :percent_progress="82"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr5.png"
      child_name="Micheal David"
      :percent_progress="76"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>

    <!-- RECOMMENDATION NOTE -->
    <RecommendationNote
      progress_state="top"
      recommendation_text="We advice that you focus on the following students while in class. Make sure they get it first before moving on."
    ></RecommendationNote>
    <!-- RECOMMENDATION NOTE -->
  </div>
</template>

<script>
import RecommendCard from "@/components/schoolComps/dashboard/class/class_report/RecommendCard";
import RecommendationNote from "@/components/schoolComps/dashboard/class/class_report/RecommendationNote";

export default {
  name: "TopList",

  components: {
    RecommendCard,
    RecommendationNote
  }
};
</script>

<style>
</style>
