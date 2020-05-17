<template>
  <div class="calendar-plugin-section position-relative">
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
      <div class="create-view pointer" v-on-clickaway="onDrop" @click="toggleDropdown">
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
import {mixin as clickaway} from "vue-clickaway";
import DaysList from "@/components/schoolComps/dashboard/calendar/DaysList";
import YearsList from "@/components/schoolComps/dashboard/calendar/YearsList";

export default {
  name: "CalendarPlugin",

  mixins: [clickaway],

  components: {
    DaysList,
    YearsList
  },

  data() {
    return {
      in_view: true,
      new_option: false
    };
  },

  methods: {
    switchToYear() {
      this.in_view = !this.in_view;
    },

    toggleDropdown() {
      this.new_option = !this.new_option;
    },

    onDrop() {
      this.new_option = false
    }
  }
};
</script>

<style>
</style>
