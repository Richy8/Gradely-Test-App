<template>
  <div>
    <div class="recent-homework-section">
      <!-- TITLE -->
      <div class="page-title font-weight-bold color_text">Recent Homework</div>

      <!-- HOMEWORK CARD COMPONENT -->
      <HomeworkCard
        :day="12"
        month="March"
        title="Week 1 Homework"
        subject="Mathematics"
        class_year="Year 7"
        class_branch="Gold"
        :progress="78"
      ></HomeworkCard>

      <HomeworkCard
        :day="17"
        month="August"
        title="Week 4 Homework"
        subject="Mathematics"
        class_year="Year 7"
        class_branch="Silver"
        :progress="54"
      ></HomeworkCard>

      <HomeworkCard
        :day="24"
        month="July"
        title="Week 1 Homework"
        subject="Biology"
        class_year="Year 8"
        class_branch="Bronze"
        :progress="25"
      ></HomeworkCard>

      <HomeworkCard
        :day="6"
        month="September"
        title="Week 1 Homework"
        subject="Chemistry"
        class_year="Year 7"
        class_branch="Silver"
        :progress="87"
      ></HomeworkCard>

      <HomeworkCard
        :day="18"
        month="April"
        title="Week 2 Homework"
        subject="Physics"
        class_year="Year 9"
        class_branch="Gold"
        :progress="20"
      ></HomeworkCard>
      <!-- HOMEWORK CARD COMPONENT -->

      <div class="show-more">
        <router-link to class="btn-link font-weight-bold">See All Aderonke’s Homework</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HomeworkCard from "@/components/schoolComps/dashboard/teacherprofile/HomeworkCard";

export default {
  name: "Homework",

  components: {
    HomeworkCard
  }
};
</script>

<style>
</style>
