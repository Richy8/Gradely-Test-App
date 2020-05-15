<template>
  <div class="calendar-plugin-section">
    <!-- CALENDAR PLUGIN -->
    <div class="calendar-plugin">
      <!-- DATE VIEW -->
      <div class="date-view px-2">
        <!-- LEFT NAV -->
        <div class="left-nav color_ash_lighter pointer">
          <i class="fas fa-chevron-left"></i>
        </div>
        <!-- DATE DISPLAY SECTION -->
        <div class="date-display color_ash font-weight-bold pointer" @click="switchToYear">
          April, 2020
          <i class="fas fa-caret-down ml-3"></i>
        </div>
        <!-- RIGHT NAV -->
        <div class="right-nav color_ash_lighter pointer">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>

      <!-- DAYS AND YEARS COMPONENT SWITCHER -->
      <transition name mode="out-in">
        <keep-alive>
          <DaysList v-if="in_view"></DaysList>
          <YearsList v-else></YearsList>
        </keep-alive>
      </transition>
      <!-- DAYS AND YEARS COMPONENT SWITCHER -->

      <!-- CALENDAR DIVIDER -->
      <div class="calendar-divider"></div>

      <!-- CREATE VIEW -->
      <div class="create-view pointer">
        <div class="undone"></div>
        <div class="label-text font-weight-bold brand_accent">Create New</div>
      </div>
    </div>
  </div>
</template>

<script>
import DaysList from "@/components/schoolComps/dashboard/calendar/DaysList";
import YearsList from "@/components/schoolComps/dashboard/calendar/YearsList";

export default {
  name: "CalendarPlugin",

  components: {
    DaysList,
    YearsList
  },

  data() {
    return {
      in_view: true
    };
  },

  methods: {
      switchToYear() {
          this.in_view = !this.in_view;
      }
  }
};
</script>

<style>
</style>
