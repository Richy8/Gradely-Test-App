<template>
  <div>
    <div class="homework-content-info">
      <!-- HOMEWORK COUNT AND FILTER ROW -->
      <div class="count-filter-row">
        <!-- HOMEWORK COUNT -->
        <div class="count font-weight-bold color_grey_dark">21 Homework</div>

        <!-- FILTER -->
        <div class="filter color_text">
          Filter
          <i class="fas fa-caret-down ml-2"></i>
        </div>
      </div>

      <!-- CONTENT CARD COMPONENT -->
       <HomeworkCard
        :day="12"
        month="March"
        title="Week 1 Homework"
        subject="Mathematics"
        :progress="78"
      ></HomeworkCard>

      
      <HomeworkCard
        :day="17"
        month="August"
        title="Week 4 Homework"
        subject="Mathematics"
        :progress="54"
      ></HomeworkCard>

      <HomeworkCard
        :day="24"
        month="July"
        title="Week 1 Homework"
        subject="Biology"
        :progress="25"
      ></HomeworkCard>
      <!-- CONTENT CARD COMPONENT -->
    </div>

    <!-- PAFINATION COMPONENT -->
    <Pagination></Pagination>
    <!-- PAFINATION COMPONENT -->
  </div>
</template>

<script>
// import ContentCard from "@/components/schoolComps/dashboard/class/class_homework/ContentCard";
import HomeworkCard from "@/components/schoolComps/dashboard/teacherprofile/HomeworkCard";
import Pagination from "@/components/basicComps/Pagination";

export default {
  name: "ContentInfo",

  components: {
    HomeworkCard,
    Pagination
  }
};
</script>

<style>
</style>
