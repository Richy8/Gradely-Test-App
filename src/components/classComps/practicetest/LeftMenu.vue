<template>
  <div>
    <div class="left-menu-section">
      <div class="d-flex justify-content-start align-items-center nowrap">
        <!-- PAUSE -->
        <div class="pause-box rounded-5 pointer" @click="toggleSettings">
          <span class="icon-play brand_inverse_light font-15 flex-center" v-if="paused"></span>
          <span class="icon-pause-no-fill brand_inverse_light font-15 flex-center" v-else></span>
        </div>

        <!-- PRACTICE COUNT -->
        <div class="practice-count-box rounded-5">
          <span class="brand_inverse_light count">3</span>
          <span class="brand_inverse_light total">/9</span>
        </div>

        <!-- PRACTICE PROGRESS -->
        <div class="practice-progress-box">
          <div class="progress rounded-5">
            <div class="progress-bar" role="progressbar" style="width: 45%"></div>

            <!-- ITEM COUNT -->
            <div class="item-count d-flex justify-content-end align-items-center">
              <FlameIcon size="font-14"></FlameIcon>
              <div class="brand_inverse_light ml-2">3</div>
            </div>
            <!-- ITEM COUNT -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlameIcon from "@/components/coloredIconPack/FlameIcon";

export default {
  name: "LeftMenu",

  props: {
    is_play: {
      type: Boolean,
      default: false
    }
  },

  components: {
    FlameIcon
  },

  data() {
    return {
      paused: false
    };
  },

  watch: {
    is_play: "togglePlay"
  },

  methods: {
    togglePlay() {
      this.paused = false;
    },

    toggleSettings() {
      this.paused = !this.paused;
      this.paused ? this.$emit("gamePaused") : this.$emit("gamePlay");
    }
  }
};
</script>

<style lang="scss">
.left-menu-section {
  .pause-box,
  .practice-count-box {
    margin-right: 3px;
    padding: 10px 13px;
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease-in-out;

    span {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
      transform: scale(0.95);
    }
  }

  .practice-count-box {
    font-size: 13px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 12px;
    }

    .count {
      font-size: 15px;

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }
  }

  .practice-progress-box {
    width: 220px;
    margin-left: 1px;

    @include breakpoint_max(sm) {
      width: 170px;
    }

    @include breakpoint_max(xs) {
      width: 140px;
    }

    .progress {
      position: relative;
      background: $color_text;
      height: 34px;

      .progress-bar {
        background: #ff8c46;
      }

      .item-count {
        position: absolute;
        right: 10px;
        top: 25%;
        font-size: 12px;

        @include breakpoint_max(sm) {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
