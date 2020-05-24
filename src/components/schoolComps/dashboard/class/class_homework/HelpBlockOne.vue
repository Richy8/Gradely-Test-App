<template>
  <div>
    <div class="help-block-one">
      <div class="title text-capitalize font-weight-bold color_text">Help these Students</div>

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

      <!-- SHOW MORE -->
      <div class="show-more mt-3">
        <router-link to class="btn-link font-weight-bold">Show the Whole Class</router-link>
      </div>
      <!-- SHOW MORE -->
    </div>
  </div>
</template>

<script>
import RecommendCard from "@/components/schoolComps/dashboard/class/class_report/RecommendCard";

export default {
  name: "HelpBlockOne",

  components: {
    RecommendCard
  }
};
</script>

<style>
</style>
