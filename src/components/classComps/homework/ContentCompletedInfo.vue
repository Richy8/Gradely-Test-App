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
      <HomeworkBlock
        :day="17"
        month="March"
        title="Homework title goes here"
        subject="Mathematics"
        percent="76"
        status="Completed"
      ></HomeworkBlock>

      <HomeworkBlock
        :day="20"
        month="March"
        title="Homework title goes here"
        subject="English Language"
        percent="5"
        status="Missed"
      ></HomeworkBlock>

      <HomeworkBlock
        :day="17"
        month="April"
        title="Homework title goes here"
        subject="Basic Technology"
        percent="65"
        status="Completed"
      ></HomeworkBlock>

      <!-- CONTENT CARD COMPONENT -->

      <!-- PAFINATION COMPONENT -->
      <Pagination></Pagination>
      <!-- PAFINATION COMPONENT -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentCompletedInfo",

  components: {
    HomeworkBlock: () =>
      import(/* webpackChunkName: "HomeworkBlock" */ "@/components/profileComps/studentprofile/HomeworkBlock"),
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
