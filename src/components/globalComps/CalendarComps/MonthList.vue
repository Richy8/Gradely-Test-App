<template>
  <div>
    <div class="month-view-section">
      <!-- MONTH VIEW -->
      <div class="month-view w-100 font-14">
        <div class="month month-0" @click="$emit('updateMonth', 0)">January</div>
        <div class="month month-1" @click="$emit('updateMonth', 1)">February</div>
        <div class="month month-2" @click="$emit('updateMonth', 2)">March</div>
        <div class="month month-3" @click="$emit('updateMonth', 3)">April</div>
        <div class="month month-4" @click="$emit('updateMonth', 4)">May</div>
        <div class="month month-5" @click="$emit('updateMonth', 5)">June</div>
        <div class="month month-6" @click="$emit('updateMonth', 6)">July</div>
        <div class="month month-7" @click="$emit('updateMonth', 7)">August</div>
        <div class="month month-8" @click="$emit('updateMonth', 8)">September</div>
        <div class="month month-9" @click="$emit('updateMonth', 9)">October</div>
        <div class="month month-10" @click="$emit('updateMonth', 10)">November</div>
        <div class="month month-11" @click="$emit('updateMonth', 11)">December</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonthList",

  data() {
    return {
      date_obj: new Date()
    };
  },

  mounted() {
    let current_month = this.date_obj.getMonth();
    let month_view = document.querySelector(".month-view");
    month_view.querySelector(".month-" + current_month).classList.add("active");
  }
};
</script>

<style lang="scss">
.month-view-section {
  .month-view {
    @include flex_row_between_wrap;
    justify-content: flex-start;

    .month {
      width: 33.2%;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-bottom: 5px;
      text-align: center;
      border: none;
      cursor: pointer;
      font-weight: 500;
      user-select: none;
      color: $color_ash;
      transition: background-color 0.1s ease-in-out;

      &:hover {
        background-color: rgba($brand_accent, 0.3);
      }
    }

    .active {
      background: rgba($brand_inverse, 0.2);
    }
  }
}
</style>
