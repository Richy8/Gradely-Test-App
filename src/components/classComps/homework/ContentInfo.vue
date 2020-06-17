<template>
  <div>
    <div class="homework-content-info">
      <!-- HOMEWORK COUNT AND FILTER ROW -->
      <div class="count-filter-row">
        <!-- HOMEWORK COUNT -->
        <div class="count font-weight-bold color_grey_dark">21 Homework</div>

        <!-- FILTER -->
        <div class="filter color_text d-flex justify-content-end align-items-center pointer">
          <div>Filter</div>
          <span class="icon-caret-fill-down font-9 ml-2"></span>
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

      <HomeworkCard :day="24" month="July" title="Week 1 Homework" subject="Biology" :progress="25"></HomeworkCard>
      <!-- CONTENT CARD COMPONENT -->

      <!-- PAFINATION COMPONENT -->
      <Pagination></Pagination>
      <!-- PAFINATION COMPONENT -->
    </div>
  </div>
</template>

<script>
import HomeworkCard from "@/components/classComps/homework/HomeworkCard";

export default {
  name: "ContentInfo",

  components: {
    HomeworkCard,
    Pagination: () =>
      import(/* webpackChunkName: "Pagination" */ "@/components/globalComps/Pagination")
  }
};
</script>

<style lang="scss" scoped>
.homework-content-info {
  margin-top: 25px;
  margin-bottom: 40px;

  @include breakpoint_max(md) {
    margin-bottom: 90px;
  }
}

.count-filter-row {
  margin-bottom: 13px;
  @include flex_row_between_nowrap;

  .count {
    font-size: 14px;
    line-height: 19px;
  }

  .filter {
    margin-right: 10px;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
