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
          <EventSchedule></EventSchedule>
          <EventSchedule></EventSchedule>
          <EventSchedule></EventSchedule>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarPlugin from "@/components/schoolComps/dashboard/calendar/CalendarPlugin";
import EventSchedule from "@/components/schoolComps/dashboard/teacherprofile/EventSchedule";

export default {
  name: "Schedule",

  components: {
    CalendarPlugin,
    EventSchedule
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
      ],
    };
  },

  computed: {
    getDay(){
      return this.date_obj.getDate()
    },

    getMonth(){
      let month = this.date_obj.getMonth();
      return this.months[month].slice(0, 3);
    }
  },

  methods: {
    toggleCalendar() {
      let calendar = document.querySelector(".calendar-popup");
      calendar.classList.toggle('d-none');
    }
  }
};
</script>

<style>
</style>
