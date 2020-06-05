<template>
  <div>
    <div class="upcoming-event-block rounded-5">
      <!-- BLOCK TITLE -->
      <div class="block-title font-weight-bold text-uppercase color_white">Upcoming</div>

      <!-- EVENTS SCHEDULES HERE -->
      <div class="event-holder-component" v-if="event_count>0">
        <EventHolder
          :event_type="event.type"
          :event_title="event.title"
          :event_meta="event.description"
          :event_time="event.time"
          v-for="(event, index) in event_data"
          :key="index"
        ></EventHolder>
      </div>
      <div class="event-holder-default-component" v-else>
        <EventHolder event_title="There are no upcoming classwork for this class."></EventHolder>
      </div>

      <!-- EVENTS SCHEDULES HERE -->

      <!-- NEW EVENT ROW -->
      <div class="new-event-row">
        <!-- CALENDAR LINK -->
        <div class="calendar-link d-flex justify-content-start align-items-center nowrap">
          <div class="avatar calendar-icon">
            <span class="icon-calendar flex-center brand_accent font-20"></span>
          </div>
          <!-- LINK TEXT -->
          <div class="link-text font-weight-bold color_white">
            <router-link :to="{name: 'SchoolCalendar'}">See Calendar</router-link>
          </div>
        </div>

        <!-- ADD EVENT BUTTON -->
        <div class="add-event">
          <div
            class="avatar brand_accent_bg pointer"
            v-on-clickaway="dropEventOptions"
            @click="toggleEventOptions"
          >
            <span class="icon-plus flex-center color_text font-20"></span>
          </div>

          <!-- DROPDOWN MENU -->
          <div class="dropdown-btn-menu placement-bottom" v-if="event_options">
            <ul class="list-unstyled">
              <li>
                <router-link to>Create Poll</router-link>
              </li>
              <li>
                <router-link :to="{name: 'ClassFeeds'}">Create Homework</router-link>
              </li>
              <li>
                <router-link :to="{name: 'ClassFeeds'}">New Live Class</router-link>
              </li>
              <li>
                <router-link :to="{name: 'AddStudents'}">Add Students</router-link>
              </li>
              <li>
                <router-link to @click.native="$emit('toggleTeacher')">Add Teacher</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import EventHolder from "@/components/schoolComps/dashboard/class/class_feeds/EventHolder";

export default {
  name: "UpcomingEventBlock",

  components: {
    EventHolder
  },

  mixins: [clickaway],

  data() {
    return {
      event_options: false,
      event_count: 1,
      event_data: [
        {
          title: "Homework title goes here.",
          description: "English Language",
          time: "2 days",
          type: "homework"
        },
        {
          title: "Homework title goes here.",
          description: "Mathematics",
          time: "3 days",
          type: "homework"
        },
        {
          title: "Live Mathematics Class",
          description: "April 21",
          time: "12:30 PM",
          type: "live class"
        }
      ]
    };
  },

  methods: {
    toggleEventOptions() {
      this.event_options = !this.event_options;
    },

    dropEventOptions() {
      this.event_options = false;
    }
  }
};
</script>

<style lang="scss">
.upcoming-event-block {
  background: #004680;
  padding: 15px 15px 17px;

  .block-title {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 20px;

    @include breakpoint_max(sm) {
      font-size: 13px;
    }
  }

  .new-event-row {
    @include flex_row_between_nowrap;
    margin-top: 15px;

    .calendar-icon {
      margin-right: 8px;
    }

    .link-text {
      font-size: 13.5px;
      line-height: 19px;

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
      @include breakpoint_max(xs) {
        font-size: 12.5px;
      }
    }

    .add-event {
      position: relative;
      .avatar {
        transition: all 0.3s ease-in-out;
        span {
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          background: darken($brand_accent, 5%) !important;
          span {
            color: white !important;
          }
        }
      }

      .dropdown-btn-menu {
        width: 200px;
      }
    }
  }
}
</style>
