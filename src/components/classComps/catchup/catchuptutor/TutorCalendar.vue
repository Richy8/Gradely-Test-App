<template>
  <div>
    <div class="tutor-calendar-section white rounded-5">
      <div class="d-flex justify-content-between align-items-start flex-wrap">
        <!-- CALENDAR -->
        <div class="left-layout calendar-popup d-none d-sm-block">
          <CalendarPlugin :border="false" :create_new="false" nav_align="right"></CalendarPlugin>
        </div>

        <!-- SESSIONS -->
        <div class="right-layout">
          <!-- TOP ROW -->
          <div class="top-row d-flex justify-content-between align-items-center nowrap">
            <!-- DATE AVATAR CONTAINER -->
            <div class="d-flex justify-content-start align-items-center nowrap">
              <div class="avatar avatar-square avatar_sm_md">
                <div class="avatar-with-meta brand_inverse_light_bg">
                  <div class="avatar-title brand_navy font-14">{{ getDay }}</div>
                  <div class="avatar-meta color_ash font-10">{{ getMonth }}</div>
                </div>
              </div>

              <!-- TITLE INFO -->
              <div>
                <div class="title font-weight-bold brand_navy">Book a Session</div>
                <div class="meta color_gray_dark">Select your preferred time</div>
              </div>
            </div>

            <!-- CALENDAR ICON -->
            <div>
              <span
                class="icon-calendar color_grey_dark font-20 mr-4 d-sm-none"
                @click="toggleCalendar"
              ></span>
            </div>
          </div>

          <!-- TIMING COMPONENT -->
          <TimeSession time_range="10:00 AM - 11:00 AM"></TimeSession>
          <TimeSession time_range="11:00 AM - 12:00 PM"></TimeSession>
          <TimeSession time_range="12:00 PM - 01:00 PM" :is_booked="true"></TimeSession>
          <TimeSession time_range="01:00 PM - 02:00 PM"></TimeSession>
          <TimeSession time_range="02:00 PM - 03:00 PM" :is_booked="true"></TimeSession>
          <TimeSession time_range="03:00 PM - 04:00 PM"></TimeSession>
          <!-- TIMING COMPONENT -->
        </div>
        <!-- SESSIONS -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorCalendar",

  components: {
    CalendarPlugin: () =>
      import(/* webpackChunkName: "calendar" */ "@/components/globalComps/CalendarComps/CalendarPlugin"),
    TimeSession: () =>
      import(/* webpackChunkName: "TimeSession" */ "@/components/classComps/catchup/catchuptutor/TimeSession")
  },

  data() {
    return {
      date_obj: new Date(),
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
      ]
    };
  },

  computed: {
    getDay() {
      return this.date_obj.getDate();
    },

    getMonth() {
      let month = this.date_obj.getMonth();
      return this.months[month].slice(0, 3);
    }
  },

  methods: {
    toggleCalendar() {
      let calendar = document.querySelector(".calendar-popup");
      calendar.classList.toggle("d-none");
    }
  }
};
</script>

<style lang="scss">
.tutor-calendar-section {
  margin-bottom: 30px;
  padding: 10px 0px;

  .left-layout {
    width: 60%;

    @include breakpoint_max(lg) {
      width: 53%;
    }

    @include breakpoint_max(md) {
      width: 57%;
    }

    @include breakpoint_max(sm) {
      width: 100%;
    }
  }

  .right-layout {
    width: 40%;
    padding-right: 10px;

    @include breakpoint_max(lg) {
      width: 47%;
      padding-left: 5px;
    }

    @include breakpoint_max(md) {
      width: 43%;
      padding-left: 5px;
    }

    @include breakpoint_max(sm) {
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
    }

    .top-row {
      .avatar {
        margin-right: 15px;
        @include equal_min_edge(42);
      }

      .title {
        font-size: 17px;
        line-height: 22px;
        margin-top: 21px;
      }

      .meta {
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>
