<template>
  <div>
    <RecommendCard
      child_img="ChildSqr1.png"
      child_name="Haruna James"
      :percent_progress="42"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr2.png"
      child_name="Joshua Okafor"
      :percent_progress="30"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr3.png"
      child_name="Afolabi Andrew"
      :percent_progress="36"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr4.png"
      child_name="Femi Adekunle"
      :percent_progress="15"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr5.png"
      child_name="Bukola Salami"
      :percent_progress="35"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>
    <RecommendCard
      child_img="ChildSqr6.png"
      child_name="Jane Okoro"
      :percent_progress="25"
      @openVideo="$emit('toggleVideo')"
      @openPractice="$emit('togglePractice')"
    ></RecommendCard>

    <!-- RECOMMENDATION NOTE -->
    <RecommendationNote
      progress_state="struggling"
      recommendation_text="We advice that you focus on the following students while in class. Make sure they get it first before moving on."
    ></RecommendationNote>
    <!-- RECOMMENDATION NOTE -->

  </div>
</template>

<script>
import RecommendCard from "@/components/schoolComps/dashboard/class/class_report/RecommendCard";
import RecommendationNote from "@/components/schoolComps/dashboard/class/class_report/RecommendationNote";


export default {
  name: "StrugglingList",

  components: {
    RecommendCard,
    RecommendationNote,
  },

  data() {
    return {
      
    };
  },

  methods: {
    
  }
};
</script>

<style>
</style>
