<template>
  <div>
    <vue-headful title="School Calendar | Gradelyng" description="Description goes here"/>
    <div class="school-calendar-section">
      <!-- PAGE TITLE -->
      <div class="container px-1">
        <div class="row">
          <div class="col-12 dashboard-header-row">
            <!-- PAGE TITLE -->
            <div class="page-title">Calendar</div>
          </div>
        </div>
      </div>

      <div class="container mb-5 px-1">
        <div class="row">
          <!-- CALENDAR PLUGIN -->
          <div class="col-sm-12 col-md-5 left-layout">
            <!-- CALENDAR PLUGIN COMPONENT -->
            <CalendarPlugin></CalendarPlugin>
            <!-- CALENDAR PLUGIN COMPONENT -->

            <!-- TODO TASK LABELS -->
            <ul class="list-unstyled todo-label-list ml-2">
              <li class="lessons-todo checkbox">
                <label for="lessonTodo" class="pointer select-md">
                  <input type="checkbox" v-model="lessons" id="lessonTodo">
                  <span class="label_text font-14 color_grey_dark ml-2 select-none">Live Lessons</span>
                </label>
              </li>

              <li class="homework-todo checkbox">
                <label for="homeworkTodo" class="pointer select-brand-inverse select-md">
                  <input type="checkbox" v-model="homework" id="homeworkTodo">
                  <span class="label_text font-14 color_grey_dark ml-2 select-none">Due Homework</span>
                </label>
              </li>

              <li class="events-todo checkbox">
                <label for="eventsTodo" class="pointer select-color-grey-dark select-md">
                  <input type="checkbox" v-model="events" id="eventsTodo">
                  <span class="label_text font-14 color_grey_dark ml-2 select-none">Events</span>
                </label>
              </li>
            </ul>
            <!-- TODO TASK LABELS -->
          </div>

          <!-- TODO TASK BAR -->
          <div class="col-sm-12 col-md-7 right-layout">
            <div class="right-first-row w-100 h-auto">
              <!-- AVATAR SQUARE -->
              <div class="avatar avatar-square avatar_md left-avatar">
                <div class="avatar-with-meta">
                  <div class="avatar-title">05</div>
                  <div class="avatar-meta">Tue</div>
                </div>
              </div>

              <!-- ADD CALENDAR ICON -->
              <div class="position-relative">
                <div
                  class="avatar avatar_md btn-accent right-avatar pointer"
                  v-on-clickaway="onDrop"
                  @click="toggleDropdown"
                >
                  <span class="icon icon-plus"></span>
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
            </div>

            <!-- EVENTS COUNTER AND FILTER BY -->
            <div class="right-second-row">
              <div class="event-count color_grey_dark">18 Events due</div>
              <div class="filter color_text pointer position-relative" v-on-clickaway="onDropFilter" @click="toggleFilter">
                Filter by
                <i class="fas fa-caret-down ml-2"></i>

                <!-- DRODOWN MENU -->
                <div class="dropdown-btn-menu placement-bottom" v-if="toggle_filter">
                  <ul class="list-unstyled">
                   <li class="mb-1">
                      <router-link to disabled class="filter-by">Filter by:</router-link>
                    </li>
                    <li class="mb-1">
                      <router-link to>Class</router-link>
                    </li>
                    <li class="mb-1">
                      <router-link to>Events</router-link>
                    </li>
                    <li class="mb-1">
                      <router-link to>Homework</router-link>
                    </li>
                    <li class="mb-1">
                      <router-link to>Live Lessons</router-link>
                    </li>
                  </ul>
                </div>

                <!-- DROP DOWN MENU FOR FILTER BY CLASS -->
                <!-- <div class="dropdown-btn-menu placement-bottom filter-by-class">
                  <ul class="list-unstyled">
                   <li class="mb-1">
                      <router-link to disabled class="filter-by"> <span><i class="fas fa-arrow-left mr-2"></i></span> FILTER BY CLASS:</router-link>
                    </li>

                   <div class="d-flex justify-content-between align-items-start wrap w-100">
                     <div class="class-name">Year 7 - Gold</div>
                     <div class="class-name">Year 7 - Gold</div>
                     <div class="class-name">Year 7 - Gold</div>
                     <div class="class-name">Year 7 - Gold</div>
                     <div class="class-name">Year 7 - Gold</div>
                     <div class="class-name">Year 7 - Gold</div>
                     <div class="class-name">Year 7 - Gold</div>
                     <div class="class-name">Year 7 - Gold</div>
                     <div class="class-name">Year 7 - Gold</div>
                   </div>
                    
                  </ul>
                </div> -->

              </div>
            </div>

            <!-- TODO TASK COMPONENT -->
            <TodoTask
              status="brand_accent_bg"
              time="9:30 AM"
              title="Lesson title here"
              class_year="Year 7"
              class_branch="Gold"
              subject="Mathematics"
            ></TodoTask>

            <TodoTask
              status="brand_inverse_bg"
              time="10:45 AM"
              title="Homework here"
              class_year="Year 7"
              class_branch="Gold"
              subject="English Language"
            ></TodoTask>

            <TodoTask
              status="color_grey_dark_bg"
              time="12:20 AM"
              title="Events here"
              class_year="Year 7"
              class_branch="Gold"
              subject="Economics"
            ></TodoTask>

            <TodoTask
              status="brand_accent_bg"
              time="9:30 AM"
              title="Lesson title here"
              class_year="Year 7"
              class_branch="Gold"
              subject="Mathematics"
            ></TodoTask>

            <TodoTask
              status="brand_inverse_bg"
              time="10:45 AM"
              title="Homework here"
              class_year="Year 7"
              class_branch="Gold"
              subject="English Language"
            ></TodoTask>

            <TodoTask
              status="color_grey_dark_bg"
              time="12:20 AM"
              title="Events here"
              class_year="Year 7"
              class_branch="Gold"
              subject="Economics"
            ></TodoTask>

            <TodoTask
              status="brand_accent_bg"
              time="9:30 AM"
              title="Lesson title here"
              class_year="Year 7"
              class_branch="Gold"
              subject="Mathematics"
            ></TodoTask>

            <TodoTask
              status="brand_inverse_bg"
              time="10:45 AM"
              title="Homework here"
              class_year="Year 7"
              class_branch="Gold"
              subject="English Language"
            ></TodoTask>

            <TodoTask
              status="color_grey_dark_bg"
              time="12:20 AM"
              title="Events here"
              class_year="Year 7"
              class_branch="Gold"
              subject="Economics"
            ></TodoTask>
            <!-- TODO TASK COMPONENT -->

            <!-- PAGINATION COMPONENT -->
            <Pagination></Pagination>
            <!-- PAGINATION COMPONENT -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// BACKGROUND COLOR EXTERNAL FUNCTION
import { bgColorSetter } from "@/assets/jsComps/extFunc";
import { mixin as clickaway } from "vue-clickaway";
import Pagination from "@/components/basicComps/Pagination";
import CalendarPlugin from "@/components/schoolComps/dashboard/calendar/CalendarPlugin";
import TodoTask from "@/components/schoolComps/dashboard/calendar/TodoTask";

export default {
  name: "Calendar",

  components: {
    Pagination,
    CalendarPlugin,
    TodoTask
  },

  mixins: [clickaway],

  data() {
    return {
      lessons: true,
      homework: true,
      events: true,
      new_option: false,
      toggle_filter: false,
      flter_class: false
    };
  },

  mounted() {
    bgColorSetter("#f0f0f0");
  },

  methods: {
    toggleDropdown() {
      this.new_option = !this.new_option;
    },

    toggleFilter() {
      this.toggle_filter = !this.toggle_filter;
    },

    onDrop() {
      this.new_option = false;
    },

    onDropFilter() {
      this.toggle_filter = false;
    }
  }
};
</script>

<style>
</style>
