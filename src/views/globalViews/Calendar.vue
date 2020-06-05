<template>
  <div>
    <vue-headful title="School Calendar | Gradelyng" description="Description goes here"/>
    <div class="gradely-calendar-section">
      <!-- PAGE TITLE -->
      <div class="container px-1">
        <div class="row">
          <div class="col-12 dashboard-header-row">
            <!-- PAGE TITLE -->
            <div class="page-title">Calendar</div>

            <!-- CALENDAR ICON -->
            <div class="avatar avatar_md btn-whitish d-md-none pointer" @click="toggleCalendar">
              <span class="icon icon-calendar"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="container px-1 bottom-container">
        <div class="row">
          <!-- CALENDAR PLUGIN -->
          <div class="col-12 col-md-5 left-layout d-none d-md-block" id="calendarLayout">
            <!-- CALENDAR PLUGIN COMPONENT -->
            <CalendarPlugin></CalendarPlugin>
            <!-- CALENDAR PLUGIN COMPONENT -->

            <!-- TODO TASK LABELS -->
            <ul class="list-unstyled todo-label-list ml-2">
              <li class="lessons-todo checkbox">
                <label for="lessonTodo" class="pointer checkbox-md">
                  <input type="checkbox" v-model="lessons" id="lessonTodo">
                  <span class="label_text font-14 color_grey_dark ml-2 select-none">Live Lessons</span>
                </label>
              </li>

              <li class="homework-todo checkbox">
                <label for="homeworkTodo" class="pointer checkbox-brand-inverse checkbox-md">
                  <input type="checkbox" v-model="homework" id="homeworkTodo">
                  <span class="label_text font-14 color_grey_dark ml-2 select-none">Homework</span>
                </label>
              </li>

              <li class="events-todo checkbox">
                <label for="examsTodo" class="pointer checkbox-brand-tonic checkbox-md">
                  <input type="checkbox" v-model="exams" id="examsTodo">
                  <span class="label_text font-14 color_grey_dark ml-2 select-none">Exams</span>
                </label>
              </li>

              <li class="events-todo checkbox">
                <label for="eventsTodo" class="pointer checkbox-color-grey-dark checkbox-md">
                  <input type="checkbox" v-model="events" id="eventsTodo">
                  <span class="label_text font-14 color_grey_dark ml-2 select-none">Events</span>
                </label>
              </li>
            </ul>
            <!-- TODO TASK LABELS -->
          </div>

          <!-- TODO TASK BAR -->
          <div class="col-12 col-md-7 right-layout">
            <div class="right-first-row w-100 h-auto">
              <div class="left-set d-flex justify-content-start align-items-center">
                <!-- AVATAR SQUARE -->
                <div class="avatar avatar-square avatar_md left-avatar">
                  <div class="avatar-with-meta">
                    <div class="avatar-title font-13">{{ setDay }}</div>
                    <div class="avatar-meta font-10">{{ setWeekDay }}</div>
                  </div>
                </div>
                <!-- TEXT -->
                <div class="text">Today</div>
              </div>

              <!-- ADD CALENDAR ICON -->
              <div class="position-relative right-set">
                <div
                  class="avatar avatar_sm_md btn-accent right-avatar pointer"
                  v-on-clickaway="onDrop"
                  @click="toggleDropdown"
                >
                  <span class="icon icon-plus font-22"></span>
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

            <!-- COMPONENTS GOES HERE -->
            <transition name="fade" mode="out-in">
              <component :is="in_view"></component>
            </transition>
            <!-- COMPONENTS GOES HERE -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import CalendarPlugin from "@/components/globalComps/CalendarComps/CalendarPlugin";
import DefaultTaskBlock from "@/components/globalComps/CalendarComps/DefaultTaskBlock";

const ContentTaskBlock = () => ({
  component: import(/* webpackChunkName: "ContentTaskBlock" */ "@/components/globalComps/CalendarComps/ContentTaskBlock"),
  loading: DefaultTaskBlock,
  Error: DefaultTaskBlock,
  delay: 500,
  timeout: 7000
});

export default {
  name: "Calendar",

  components: {
    CalendarPlugin,
    DefaultTaskBlock,
    ContentTaskBlock
  },

  mixins: [clickaway],

  data() {
    return {
      in_view: null,
      lessons: true,
      homework: true,
      exams: true,
      events: true,
      new_option: false,
      date_obj: new Date(),
      week: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      todo_task: 0
    };
  },

  computed: {
    setDay() {
      return this.date_obj.getDate();
    },

    setWeekDay() {
      return this.week[this.date_obj.getDay()];
    }
  },

  watch: {
    todo_task: "updateView"
  },

  mounted() {
    this.updateView();
  },

  methods: {
    updateView() {
      this.todo_task > 0
        ? (this.in_view = "ContentTaskBlock")
        : (this.in_view = "DefaultTaskBlock");
    },

    toggleCalendar() {
      let calendar = document.getElementById("calendarLayout");
      calendar.classList.toggle("d-none");
    },

    toggleDropdown() {
      this.new_option = !this.new_option;
    },

    onDrop() {
      this.new_option = false;
    }
  }
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}
</style>
