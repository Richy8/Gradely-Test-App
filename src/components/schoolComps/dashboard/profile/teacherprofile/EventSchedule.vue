<template>
  <div>
    <div class="schedule-event position-relative">
      <div class="d-flex justify-content-between align-items-center nowrap">
        <!-- EVENT LABEL -->
        <div class="event-label position-absolute" :class="setLabelBg"></div>
        <!-- CLASS -->
        <div class="left">
          <div class="event-class font-weight-bold color_text">{{class_year}} - {{class_branch}}</div>
          <div class="event-info color_grey_dark">{{subject}} • {{time}}</div>
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
import { colors, random, shuffle } from "@/scripts/utilities";

export default {
  name: "EventSchedule",

  props: {
    class_year: String,
    class_branch: String,
    subject: String,
    time: String
  },

  computed: {
    setLabelBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(11, 0)];
    }
  }
};
</script>

<style lang="scss">
.schedule-event {
  padding: 10px 10px 10px 15px;
  margin-right: 20px;
  margin-bottom: 12px;
  border-bottom: 1px solid $border_grey;

  @include breakpoint_max(md) {
    margin-left: 20px;
  }

  .event-label {
    top: 0;
    left: 0;
    width: 6px;
    height: 86%;
  }

  .event-class {
    margin-bottom: 2px;
    font-size: 14px;
    line-height: 177.06%;
  }

  .event-info {
    font-size: 13px;
    line-height: 18px;

    @include breakpoint_max(lg) {
      font-size: 12px;
    }
  }
}
</style>
