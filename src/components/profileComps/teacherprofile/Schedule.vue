<template>
  <div>
    <div class="schedule-section white rounded-5">
      <div class="row">
        <!-- CALENDAR -->
        <div class="col-12 col-md-6 col-lg-7 calendar-popup d-none d-md-block">
          <CalendarPlugin :border="false" :create_new="false" nav_align="right"></CalendarPlugin>
        </div>

        <!-- CALENDAR SCHEDULES -->
        <div class="col-12 col-md-6 col-lg-5">
          <div class="schedule-block">
            <!-- SCHEDULE HEADER -->
            <div class="d-flex justify-content-between align-items-center nowrap">
              <div class="d-flex justify-content-start align-items-center nowrap">
                <!-- AVATAR DATE -->
                <div class="avatar rounded-10 avatar_sm_md">
                  <div class="avatar-with-meta brand_inverse_light_bg">
                    <div class="avatar-title brand_navy font-14">{{ getDay }}</div>
                    <div class="avatar-meta color_ash font-10">{{ getMonth }}</div>
                  </div>
                </div>

                <!-- SCHEDULE DESCRIPTION -->
                <div class="schedule-info">
                  <div class="title font-weight-bold color_text">Today’s Schedule</div>
                  <div class="description color_grey_dark">Lessons across all classes.</div>
                </div>
              </div>

              <!-- CALENDAR ICON -->
              <div>
                <span
                  class="icon-calendar color_grey_dark font-20 mr-4 d-md-none"
                  @click="toggleCalendar"
                ></span>
              </div>
            </div>
          </div>

          <!-- SCHEDULE EVENTS -->
          <EventSchedule
            class_year="Year 7"
            class_branch="Gold"
            subject="Mathematics"
            time="15:00 PM"
          ></EventSchedule>

          <EventSchedule
            class_year="Year 8"
            class_branch="Silver"
            subject="Biology"
            time="08:00 AM"
          ></EventSchedule>

          <EventSchedule
            class_year="Year 9"
            class_branch="Bronze"
            subject="Geography"
            time="12:00 PM"
          ></EventSchedule>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Schedule",

  components: {
    CalendarPlugin: () =>
      import(/* webpackChunkName: "calendar" */ "@/components/globalComps/CalendarComps/CalendarPlugin"),
    EventSchedule: () =>
      import(/* webpackChunkName: "schedule" */ "@/components/profileComps/teacherprofile/EventSchedule")
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
.schedule-section {
  padding: 10px 0px;
  margin-bottom: 30px;

  .schedule-block {
    margin-top: 25px;
    margin-bottom: 22px;

    @include breakpoint_max(md) {
      margin-left: 20px;
    }

    .avatar {
      margin-right: 15px;
    }

    .title {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 1px;
    }

    .description {
      font-size: 12px;
      line-height: 16px;
    }
  }
}
</style>
