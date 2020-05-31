<template>
  <div class="calendar-plugin-section position-relative" :class="[border ? 'calendar-border' : '']">
    <!-- CALENDAR PLUGIN -->
    <div class="calendar-plugin position-relative rounded-10 w-100 white h-auto overflow-hidden">
      <!-- VIEW ONE -->
      <div class="date-view px-2 w-100" v-if="view_index === 0">
        <!-- LEFT NAV -->
        <div
          class="left-nav color_ash_lighter pointer"
          @click="decreaseMonth"
          v-if="nav_align === 'center'"
        >
          <span class="icon-caret-left"></span>
        </div>
        <!-- DATE DISPLAY SECTION -->
        <div class="date-display color_ash font-weight-bold pointer" @click="switchToMonth">
          {{ setMonthDisplay }}, {{ setYear }}
          <span
            class="icon-caret-fill-down ml-1 position-relative font-10"
          ></span>
        </div>
        <!-- RIGHT NAV -->
        <div
          class="right-nav color_ash_lighter pointer"
          @click="increaseMonth"
          v-if="nav_align === 'center'"
        >
          <span class="icon-caret-right"></span>
        </div>

        <!-- RIGHT ALIGNED NAV -->
        <div
          class="d-flex justify-content-end align-items-center nowrap"
          v-if="nav_align === 'right'"
        >
          <!-- LEFT NAV -->
          <div class="left-nav color_ash_lighter pointer mr-4" @click="decreaseMonth">
            <span class="icon-caret-left"></span>
          </div>
          <!-- RIGHT NAV -->
          <div class="right-nav color_ash_lighter pointer ml-4" @click="increaseMonth">
            <span class="icon-caret-right"></span>
          </div>
        </div>
        <!-- RIGHT ALIGNED NAV -->
      </div>

      <!-- VIEW TWO -->
      <div class="date-view px-2" v-if="view_index === 1">
        <!-- LEFT NAV -->
        <div
          class="left-nav color_ash_lighter pointer"
          @click="decreaseYear"
          v-if="nav_align === 'center'"
        >
          <span class="icon-caret-left"></span>
        </div>
        <!-- DATE DISPLAY SECTION -->
        <div class="date-display color_ash font-weight-bold pointer" @click="switchToYear">
          {{ setYear }}
          <span class="icon-caret-fill-down ml-1 position-relative font-10"></span>
        </div>
        <!-- RIGHT NAV -->
        <div
          class="right-nav color_ash_lighter pointer"
          @click="increaseYear"
          v-if="nav_align === 'center'"
        >
          <span class="icon-caret-right"></span>
        </div>

        <!-- RIGHT ALIGNED NAV -->
        <div
          class="d-flex justify-content-end align-items-center nowrap"
          v-if="nav_align === 'right'"
        >
          <!-- LEFT NAV -->
          <div class="left-nav color_ash_lighter pointer mr-4" @click="decreaseYear">
            <span class="icon-caret-left"></span>
          </div>
          <!-- RIGHT NAV -->
          <div class="right-nav color_ash_lighter pointer ml-4" @click="increaseYear">
            <span class="icon-caret-right"></span>
          </div>
        </div>
      </div>

      <!-- VIEW THREE -->
      <div class="date-view px-2" v-if="view_index === 2">
        <!-- LEFT NAV -->
        <div
          class="left-nav color_ash_lighter pointer"
          @click="decreaseYearRange"
          v-if="nav_align === 'center'"
        >
          <span class="icon-caret-left"></span>
        </div>
        <!-- DATE DISPLAY SECTION -->
        <div
          class="date-display color_ash font-weight-bold pointer"
          @click="switchToDay"
        >{{ setYear - 15 }} - {{ setYear }}</div>
        <!-- RIGHT NAV -->
        <div
          class="right-nav color_ash_lighter pointer"
          @click="increaseYearRange"
          v-if="nav_align === 'center'"
        >
          <span class="icon-caret-right"></span>
        </div>

        <!-- RIGHT ALIGNED NAV -->
        <div
          class="d-flex justify-content-end align-items-center nowrap"
          v-if="nav_align === 'right'"
        >
          <!-- LEFT NAV -->
          <div class="left-nav color_ash_lighter pointer mr-4" @click="decreaseYearRange">
            <span class="icon-caret-left"></span>
          </div>
          <!-- RIGHT NAV -->
          <div class="right-nav color_ash_lighter pointer ml-4" @click="increaseYearRange">
            <span class="icon-caret-right"></span>
          </div>
        </div>
      </div>

      <!-- DAYS AND YEARS COMPONENT SWITCHER -->
      <transition name mode="out-in">
        <keep-alive>
          <!-- DAYS LIST -->
          <DaysList
            v-if="view_index === 0"
            :current_day="setCurrentDay"
            :day="setDay"
            :month="setMonth"
            :year="setYear"
          ></DaysList>
          <!-- DAYS LIST -->

          <!-- MONTH LIST -->
          <MonthList v-else-if="view_index === 1" @updateMonth="changeMonth($event)"></MonthList>
          <!-- MONTH LIST -->

          <!-- YEAR LIST -->
          <YearsList
            v-else-if="view_index === 2"
            :current_year="setCurrentYear"
            :year_min="setYear-15"
            :year_max="setYear"
            @updateYear="changeYear($event)"
          ></YearsList>
          <!-- YEAR LIST -->
        </keep-alive>
      </transition>
      <!-- DAYS AND YEARS COMPONENT SWITCHER -->

      <!-- CALENDAR DIVIDER -->
      <div class="calendar-divider w-100" v-show="create_new"></div>

      <!-- CREATE VIEW -->
      <div
        class="add-new-item create-view pointer"
        v-show="create_new"
        v-on-clickaway="onDrop"
        @click="toggleDropdown"
      >
        <div class="undone"></div>
        <div class="label-text font-weight-bold brand_accent">Create New</div>
      </div>
    </div>

    <!-- DRODOWN MENU -->
    <div class="dropdown-btn-menu placement-bottom" v-if="new_option">
      <ul class="list-unstyled">
        <li class="mb-1">
          <router-link to>New Homework</router-link>
        </li>
        <li class="mb-1">
          <router-link to>Schedule a Live Class</router-link>
        </li>
        <li class="mb-1">
          <router-link to>School Event</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import DaysList from "@/components/globalComps/CalendarComps/DaysList";
import MonthList from "@/components/globalComps/CalendarComps/MonthList";
import YearsList from "@/components/globalComps/CalendarComps/YearsList";

export default {
  name: "CalendarPlugin",

  props: {
    border: {
      type: Boolean,
      default: false
    },

    create_new: {
      type: Boolean,
      default: true
    },

    nav_align: {
      type: String,
      default: "center"
    }
  },

  mixins: [clickaway],

  components: {
    DaysList,
    MonthList,
    YearsList
  },

  data() {
    return {
      view_index: 0,
      new_option: false,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      date_obj: new Date(),
      day: 0,
      month: 0,
      year: 0,
      month_display: ""
    };
  },

  computed: {
    setCurrentDay() {
      let new_date = new Date();
      return new_date.getDate();
    },

    setCurrentYear() {
      let new_date = new Date();
      return new_date.getFullYear();
    },

    setDay() {
      return this.date_obj.getDate();
    },

    setMonth() {
      return this.date_obj.getMonth();
    },

    setMonthDisplay() {
      return this.months[this.setMonth];
    },

    setYear() {
      return this.date_obj.getFullYear();
    }
  },

  mounted() {
    this.month = this.date_obj.getMonth();
    this.year = this.date_obj.getFullYear();
  },

  methods: {
    switchToDay() {
      this.view_index = 0;
    },

    switchToMonth() {
      this.view_index = 1;
    },

    switchToYear() {
      this.view_index = 2;
    },

    toggleDropdown() {
      this.new_option = !this.new_option;
    },

    onDrop() {
      this.new_option = false;
    },

    increaseMonth() {
      this.month++;
      this.date_obj = new Date(this.year, this.month);
    },

    decreaseMonth() {
      this.month--;
      this.date_obj = new Date(this.year, this.month);
    },

    increaseYear() {
      this.year++;
      this.date_obj = new Date(this.year, this.month);
    },

    decreaseYear() {
      this.year--;
      this.date_obj = new Date(this.year, this.month);
    },

    increaseYearRange() {
      this.year += 15;
      this.date_obj = new Date(this.year, this.month);
    },

    decreaseYearRange() {
      this.year -= 15;
      this.date_obj = new Date(this.year, this.month);
    },

    changeMonth(event) {
      this.month = event;
      this.date_obj = new Date(this.year, this.month);
      this.switchToDay();
    },

    changeYear(event) {
      this.year = event;
      this.date_obj = new Date(this.year, this.month);
      this.switchToMonth();
    }
  }
};
</script>

<style>
</style>
