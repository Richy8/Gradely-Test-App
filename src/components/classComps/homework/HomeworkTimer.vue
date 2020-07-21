<template>
  <div>
    <div class="timer-box rounded-5 overflow-hidden">
      <!-- TOP -->
      <div class="top brand_accent_bg">
        <div class="avatar avatar_sm">
          <span class="icon-timer flex-center color_ash"></span>
        </div>

        <div class="text color_text font-weight-bold">Time Left</div>
      </div>
      <!-- BOTTOM -->
      <div class="bottom white">
        <div class="time font-weight-bold" v-if="minutes<=-1">{{ end_minute }}m : {{ end_seconds }}s</div>
        <div class="time font-weight-bold" v-else>{{ minutes }}m : {{ seconds }}s</div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  name: "HomeworkTimer",

  props: {
    start_minutes: Number,
    test_complete: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      minutes: this.start_minutes,
      seconds: 59,
      end_minute: 0,
      end_seconds: 0
    };
  },

  watch: {
    test_complete: "updateTimer"
  },

  mounted() {
    setInterval(this.startTimer, 1000);
  },

  methods: {
    startTimer() {
      this.seconds--;
      if (this.seconds === 0) {
        this.minutes--;
        this.seconds = 59;

        if (this.minutes === -1) {
          this.$emit("timeElapsed");
        } else {
          this.startTimer();
        }
      }
    },

    updateTimer() {
      if (this.test_complete) {
        this.end_minute = this.minutes;
        this.end_seconds = this.seconds;
        this.minutes = -1;
      }
    }
  }
};
</script>

<style lang="scss">
.timer-box {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  width: 80%;

  @include breakpoint_max(lg) {
    width: 100%;
  }

  @include breakpoint_max(md) {
    margin-bottom: 20px;
    float: right;
    width: 29%;
  }

  @include breakpoint_min_max(350, 390) {
    width: 34%;
  }

  .top {
    padding: 12px 13px;
    @include flex_row_start_nowrap;

    .avatar {
      margin-right: 10px;

      @include breakpoint_max(sm) {
        margin-right: 5px;
      }

      @include breakpoint_max(xs) {
        margin-right: 3px;
      }

      span {
        font-size: 20px;

        @include breakpoint_max(sm) {
          font-size: 16px;
        }
      }
    }

    @include breakpoint_max(sm) {
      padding: 8px 10px;
    }

    .text {
      font-size: 15px;

      @include breakpoint_max(lg) {
        font-size: 14px;
      }

      @include breakpoint_max(sm) {
        font-size: 13px;
      }

      @include breakpoint_max(xs) {
        margin-top: 2px;
        font-size: 12px;
      }
    }
  }

  .bottom {
    padding: 23px 26px;
    @include flex_row_center_nowrap;

    @include breakpoint_max(lg) {
      padding: 20px 20px;
    }

    @include breakpoint_max(sm) {
      padding: 10px 15px;
    }

    .time {
      font-size: 21px;
      line-height: 29px;

      @include breakpoint_max(lg) {
        font-size: 18px;
      }
      @include breakpoint_max(sm) {
        font-size: 16px;
      }

      @include breakpoint_max(xs) {
        font-size: 14.8px;
      }
    }
  }
}
</style>
