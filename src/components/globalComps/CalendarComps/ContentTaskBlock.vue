<template>
  <div class="w-100">
    <!-- EVENTS COUNTER AND FILTER BY -->
    <div class="right-second-row">
      <div class="event-count color_grey_dark">{{ task_count }} Events due</div>
      <div
        class="filter color_text pointer position-relative"
        v-on-clickaway="onDropFilter"
        @click="toggleFilter"
      >
        Filter by
        <span class="icon-caret-fill-down ml-1 position-relative font-10"></span>

        <!-- DRODOWN MENU -->
        <div class="dropdown-btn-menu placement-bottom" v-if="toggle_filter">
          <ul class="list-unstyled">
            <li class="mb-1">
              <router-link to disabled class="filter-by">Filter by:</router-link>
            </li>
            <li class="mb-1">
              <router-link to v-on-clickaway="onDropFilter" @click.native="toggleClassFilter">Class</router-link>
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
        <div class="dropdown-btn-menu placement-bottom filter-by-class" v-if="class_filter">
          <ul class="list-unstyled">
            <li class="mb-1">
              <a class="filter-by">
                <span v-on-clickaway="onDropClassFilter" @click="toggleFilter">
                  <i class="fas fa-arrow-left mr-2"></i>
                </span> FILTER BY CLASS:
              </a>
            </li>

            <div
              class="class-holder mt-2 w-100 d-flex justify-content-start align-items-start flex-wrap"
            >
              <div class="class-name">Year 7 - Gold</div>
              <div class="class-name">Year 7 - Silver</div>
              <div class="class-name">Year 8 - Gold</div>
              <div class="class-name">Year 8 - Silver</div>
              <div class="class-name">Year 9 - Gold</div>
              <div class="class-name">Year 9 - Silver</div>
              <div class="class-name">Year 10 - Gold</div>
              <div class="class-name">Year 10 - Silver</div>
              <div class="class-name">Year 11 - Gold</div>
              <div class="class-name">Year 11 - Silver</div>
              <div class="class-name">Year 12 - Gold</div>
              <div class="class-name">Year 12 - Silver</div>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-100">
      <!-- TODO TASK COMPONENT -->
      <TodoTask
        status="lesson"
        time="9:30 AM"
        title="Lesson title here"
        class_year="Year 7"
        class_branch="Gold"
        subject="Mathematics"
      ></TodoTask>

      <TodoTask
        status="homework"
        time="10:45 AM"
        title="Homework here"
        class_year="Year 7"
        class_branch="Gold"
        subject="English Language"
      ></TodoTask>

      <TodoTask
        status="exam"
        time="12:20 AM"
        title="Exam here"
        class_year="Year 7"
        class_branch="Gold"
        subject="Economics"
      ></TodoTask>

      <TodoTask
        status="event"
        time="12:20 AM"
        title="Events here"
        class_year="Year 7"
        class_branch="Gold"
        subject="Economics"
      ></TodoTask>

      <TodoTask
        status="lesson"
        time="9:30 AM"
        title="Lesson title here"
        class_year="Year 7"
        class_branch="Gold"
        subject="Mathematics"
      ></TodoTask>

      <TodoTask
        status="homework"
        time="10:45 AM"
        title="Homework here"
        class_year="Year 7"
        class_branch="Gold"
        subject="English Language"
      ></TodoTask>

      <TodoTask
        status="exam"
        time="12:20 AM"
        title="Exam here"
        class_year="Year 7"
        class_branch="Gold"
        subject="Economics"
      ></TodoTask>

      <TodoTask
        status="event"
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
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ContentTaskBlock",

  components: {
    TodoTask: () =>
      import(/* webpack ChunkName: "todotask" */ "@/components/globalComps/CalendarComps/TodoTask"),
    Pagination: () =>
      import(/* webpack ChunkName: "pagination" */ "@/components/globalComps/Pagination")
  },

  mixins: [clickaway],

  data() {
    return {
      task_count: 18,
      toggle_filter: false,
      class_filter: false
    };
  },

  methods: {
    toggleFilter() {
      this.toggle_filter = !this.toggle_filter;
    },

    toggleClassFilter() {
      this.class_filter = !this.class_filter;
    },

    onDropFilter() {
      this.toggle_filter = false;
    },

    onDropClassFilter() {
      this.class_filter = false;
    }
  }
};
</script>

<style>
</style>
