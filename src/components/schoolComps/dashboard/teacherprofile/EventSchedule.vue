<template>
  <div>
    <div class="schedule-event position-relative">
      <div class="d-flex justify-content-between align-items-center nowrap">
        <!-- EVENT LABEL -->
        <div class="event-label position-absolute" :class="setLabelBg"></div>
        <!-- CLASS -->
        <div class="left">
          <div class="event-class font-weight-bold color_text">Year 7 - Gold</div>
          <div class="event-info color_grey_dark">Mathematics • 12:00 PM</div>
        </div>

        <!-- OPTION -->
        <div class="right">
          <div class="avatar avatar_xs pointer">
            <div class="span flex-center icon-ellipsis-h colr_grey_dark font-18"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle } from "@/assets/jsComps/extFunc";

export default {
  name: "EventSchedule",

  computed: {
    setLabelBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(11, 0)];
    }
  }
};
</script>

<style>
</style>
