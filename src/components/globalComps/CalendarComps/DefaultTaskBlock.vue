<template>
  <div class="w-100">
    <!-- EVENTS COUNTER AND FILTER BY -->
    <div class="right-second-row">
      <div class="event-count color_grey_dark">0 Events due</div>
      <div class="filter color_text position-relative">
        Filter by
        <span class="icon-caret-fill-down ml-1 position-relative font-10"></span>
      </div>
    </div>

    <div class="w-100 position-relative">
      <!--DEFAULT TASK COMPONENT -->
      <DefaultTask></DefaultTask>
      <DefaultTask></DefaultTask>
      <DefaultTask></DefaultTask>
      <DefaultTask></DefaultTask>
      <DefaultTask></DefaultTask>
      <DefaultTask></DefaultTask>
      <DefaultTask></DefaultTask>
      <DefaultTask></DefaultTask>
      <!--DEFAULT TASK COMPONENT -->

      <EmptyContent
        display_img="EmptyEvent.png"
        display_color="pale_orange_bg"
        :display_text="'You have no event scheduled for today, ' + getDay +' '+ getMonth+', '+getYear+ '. Create an event to find them here'"
        button_type="emit"
        button_text="Create Event"
        button_function
        button_route_name
        :show_button="true"
      ></EmptyContent>
    </div>
  </div>
</template>

<script>
import DefaultTask from "@/components/globalComps/CalendarComps/DefaultTask";

export default {
  name: "DefaultTaskBlock",

  components: {
    DefaultTask,
    EmptyContent: () =>
      import(/* webpack ChunkName: "defaulttask" */ "@/components/globalComps/EmptyContent")
  },

  data() {
    return {
      date_obj: new Date(),
      first: [1, 21, 31],
      second: [2, 22],
      third: [3]
    };
  },

  computed: {
    getDay() {
      let today = this.date_obj.getDate();
      if (this.first.includes(today)) {
        return `${today}st`;
      } else if (this.second.includes(today)) {
        return `${today}nd`;
      } else if (this.third.includes(today)) {
        return `${today}rd`;
      } else {
        return `${today}th`;
      }
    },

    getMonth() {
      let month = [
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
      ];
      return month[this.date_obj.getMonth()];
    },

    getYear() {
      return this.date_obj.getFullYear();
    }
  }
};
</script>

<style>
</style>
