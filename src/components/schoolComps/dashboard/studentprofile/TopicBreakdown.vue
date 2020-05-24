<template>
  <div>
    <!-- TOPIC BREAKDOWN BLOCK -->
    <div class="topic-breakdown-block profile-block rounded-5">
      <div class="title-row d-flex justify-content-between align-items-center nowrap">
        <!-- TITLE -->
        <div class="title-bold color_text text-uppercase">Topic Breakdown</div>

        <!-- SELECT WEEK -->
        <div class="week">
          <select class="form-control rounded-30">
            <option value="1">1 Week</option>
            <option value="3">2 Week</option>
            <option value="3">3 Week</option>
          </select>
        </div>
      </div>

      <!-- BREAKDOWN ROW -->
      <div class="breakdown-row row">
        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math1.png"
            topic="Number Base"
            :trend_percent="86"
            :trend_count="2"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard topic_img="Math2.png" topic="Indices" :trend_percent="59" :trend_count="1"></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math3.png"
            topic="Logarithm"
            :trend_percent="39"
            :trend_count="1"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math4.png"
            topic="Fractions"
            :trend_percent="93"
            :trend_count="2"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math5.png"
            topic="Constructions"
            :trend_percent="10"
            :trend_count="2"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math6.png"
            topic="Modular Arithmetic"
            :trend_percent="72"
            :trend_count="2"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math7.png"
            topic="Variation"
            :trend_percent="55"
            :trend_count="1"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math8.png"
            topic="Subject of Formula"
            :trend_percent="30"
            :trend_count="2"
          ></BreakdownCard>
        </div>
      </div>

      <!-- SHOW MORE -->
      <div class="show-more mt-3">
        <router-link to class="btn-link font-weight-bold">See Full Report</router-link>
      </div>
      <!-- SHOW MORE -->
    </div>
  </div>
</template>

<script>
import BreakdownCard from "@/components/schoolComps/dashboard/studentprofile/BreakdownCard";

export default {
  name: "TopicBreakdown",

  components: {
    BreakdownCard
  }
};
</script>

<style>
</style>
