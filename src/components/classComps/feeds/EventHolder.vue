<template>
  <div>
    <div class="event-holder position-relative pointer">
      <!-- EVENT INFO -->
      <div class="event-info">
        <!-- EVENT ICON -->
        <div class="avatar" :class="setEventBg" v-if="account_type==='school'">
          <span class="flex-center font-22" :class="setEventIcon"></span>
        </div>

        <div
          class="avatar avatar-square avatar_sm_md"
          :class="setEventBg"
          v-else-if="account_type==='teacher' && event_type==='live class'"
        >
          <span class="flex-center font-22" :class="setEventIcon"></span>
        </div>

        <div
          class="avatar avatar-square avatar_sm_md"
          :class="setEventBg"
          v-else-if="account_type==='teacher' && event_type==='homework'"
        >
          <div class="avatar-with-meta">
            <div class="avatar-title font-11 mt-2">{{ event_date }}</div>
            <div class="avatar-meta font-9 mb-2">{{ event_month }}</div>
          </div>
        </div>

        <!-- EVENT DESCRIPTION -->
        <div class="event-description">
          <div class="title white-text">{{ event_title }}</div>
          <div
            class="meta brand_inverse_light"
            v-if="account_type==='school' || event_type==='live class'"
          >{{ event_meta }} • {{ event_time }}</div>

          <!-- OPTIONS -->
          <div
            class="homework-event-option d-flex justify-content-start align-items-center position-relative"
            v-if="account_type==='teacher' && event_type==='homework'"
          >
            <router-link to class="event-option-title btn-link link-no-underline mr-3">View</router-link>
            <!-- Option -->
            <div class="avatar" v-on-clickaway="dropHomework" @click="toggleHomework">
              <span class="icon-ellipsis-h brand_white flex-center font-18 pointer"></span>
            </div>

            <!-- DROPDOWN MENU -->
            <div class="dropdown-btn-menu placement-bottom" v-if="homework_option">
              <ul class="list-unstyled">
                <li>
                  <router-link to>View Details</router-link>
                </li>
                <li>
                  <router-link to>Edit Homework</router-link>
                </li>
                <li>
                  <router-link to>Extend due date</router-link>
                </li>
                <li>
                  <router-link to>Refresh Homework</router-link>
                </li>
                <li>
                  <router-link to>Delete Homework</router-link>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="d-flex justify-content-start align-items-center position-relative"
            v-else-if="account_type==='teacher' && event_type==='live class'"
          >
            <router-link to class="event-option-title btn-link link-no-underline mr-3">Start</router-link>
            <!-- Option -->
            <div class="avatar" v-on-clickaway="dropEvent" @click="toggleEvent">
              <span class="icon-ellipsis-h brand_white flex-center font-18 pointer"></span>
            </div>

            <!-- DROPDOWN MENU -->
            <div class="dropdown-btn-menu placement-bottom" v-if="event_option">
              <ul class="list-unstyled">
                <li>
                  <router-link to>Reschedule</router-link>
                </li>
                <li>
                  <router-link to>Edit Details</router-link>
                </li>
                <li>
                  <router-link to>Cancel Class</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- EVENT OPTION -->
      <div class="avatar option" v-show="event_type!=='default' && account_type==='school'">
        <span class="flex-center icon-caret-right white-text"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "EventHolder",

  props: {
    event_type: {
      type: String,
      default: "default"
    },
    event_title: String,
    event_meta: String,
    event_date: String,
    event_month: String,
    event_time: String
  },

  mixins: [clickaway],

  computed: {
    setEventIcon() {
      if (this.event_type === "homework" && this.account_type === "school") {
        return this.icons.homework;
      } else if (
        this.event_type === "live class" &&
        this.account_type === "school"
      ) {
        return this.icons.school_live_class;
      } else if (
        this.event_type === "live class" &&
        this.account_type === "teacher"
      ) {
        return this.icons.teacher_live_class;
      } else if (this.event_type === "default") {
        return this.icons.default;
      } else {
        return false;
      }
    },

    setEventBg() {
      if (this.event_type === "homework") {
        return this.bg_color.homework;
      } else if (this.event_type === "live class") {
        return this.bg_color.live_class;
      } else if (this.event_type === "default") {
        return this.bg_color.default;
      } else {
        return false;
      }
    }
  },

  mounted() {
    this.getAccountType();
  },

  data() {
    return {
      account_type: "",
      homework_option: false,
      event_option: false,
      icons: {
        homework: "icon-library brand_navy",
        school_live_class: "icon-video-card brand_tonic",
        teacher_live_class: "icon-videocam brand_accent",
        default: "color_ash icon-pie"
      },

      bg_color: {
        homework: "brand_inverse_light_bg",
        live_class: "brand_red_light_bg",
        default: "border_grey_light_bg"
      }
    };
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    toggleHomework() {
      this.homework_option = !this.homework_option;
    },

    toggleEvent() {
      this.event_option = !this.event_option;
    },

    dropHomework() {
      this.homework_option = false;
    },

    dropEvent() {
      this.event_option = false;
    }
  }
};
</script>

<style lang="scss">
.event-holder {
  @include flex_row_between_nowrap;
  padding: 10px 2px 11px;
  border-bottom: 1px solid rgba(black, 0.15);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgb(1, 65, 117);
  }

  .event-info {
    @include flex_row_start_nowrap;
    align-items: flex-start;
    .avatar {
      margin-right: 10px;

      @include breakpoint_max(sm) {
        @include equal_min_edge(32);
      }
    }

    .title {
      font-size: 13px;
      margin-bottom: 2px;
      line-height: 16px;
    }

    .meta {
      font-size: 10px;
      line-height: 18px;
    }

    .event-option-title {
      font-size: 12.5px;
    }
  }

  .option {
    opacity: 0.4;
  }

  .dropdown-btn-menu {
    width: 180px;
    left: 2px;
    li {
      a {
        padding: 7px 5px;
        font-size: 12px;
      }
    }
  }
}
</style>
