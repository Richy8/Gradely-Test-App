<template>
  <div>
    <div class="days-view-section">
      <!-- WEEK VIEW -->
      <div class="week-view">
        <div class="week">Mon</div>
        <div class="week">Tue</div>
        <div class="week">Wed</div>
        <div class="week">Thur</div>
        <div class="week">Fri</div>
        <div class="week">Sat</div>
        <div class="week">Sun</div>
      </div>

      <!-- DAY VIEW -->
      <div class="day-view">
        <div
          class="day-col"
          v-for="(data, index) in days"
          :key="index"
          :class="[data === today ? 'active' : '']"
        >
          <div class="day" :class="[data === undefined ? 'invicible' : 'day-'+data]">{{ data }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DaysList",

  props: {
    current_day: Number,
    day: Number,
    month: Number,
    year: Number
  },

  watch: {
    month: "dayData",
    year: "dayData"
  },

  data() {
    return {
      date_obj: new Date(),
      days: [],
      today: ""
    };
  },

  mounted() {
    this.dayData();
  },

  methods: {
    dayData() {
      this.days.length = 0;

      let first_day = this.firstDay(this.year, this.month).getDay();

      let total_days = this.lastDay(this.year, this.month).getDate();

      this.initialArrayLength(first_day);

      for (let i = 1; i <= total_days; i++) {
        this.days.push(i);
      }

      this.activeDay();
    },

    firstDay(year, month) {
      return new Date(year, month);
    },

    lastDay(year, month) {
      return new Date(year, month + 1, 0);
    },

    activeDay() {
      if (
        this.date_obj.getMonth() === this.month &&
        this.date_obj.getFullYear() === this.year
      ) {
        this.today = this.current_day;
      } else {
        this.today = "";
      }
    },

    initialArrayLength(day) {
      if (day === 0) {
        this.days.length = 6;
      } else if (day === 1) {
        this.days.length = 0;
      } else if (day === 2) {
        this.days.length = 1;
      } else if (day === 3) {
        this.days.length = 2;
      } else if (day === 4) {
        this.days.length = 3;
      } else if (day === 5) {
        this.days.length = 4;
      } else if (day === 6) {
        this.days.length = 5;
      }
    }
  }
};
</script>

<style>
</style>
