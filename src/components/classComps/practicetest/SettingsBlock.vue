<template>
  <div class="d-flex justify-content-center">
    <div class="settings-block rounded-15">
      <!-- TOP -->
      <div class="top d-flex justify-content-start align-items-start nowrap w-100 px-2">
        <div class="left">
          <div class="avatar avatar-square">
            <img v-lazy="dynamicImg('Practice.png')" alt class="avatar-img">
          </div>
        </div>

        <div class="right">
          <!-- TOPIC -->
          <div class="topic white-text">Linear Algebra</div>

          <!-- META -->
          <div class="meta">4 Questions remaining</div>

          <!-- BUTTONS -->
          <div class="d-flex justify-content-start align-items-center flex-wrap">
            <button
              class="btn btn-md btn-accent brand_navy font-weight-bold ml-0 mr-2 mr-md-3"
              @click="$emit('gamePlay')"
            >Resume</button>
            <button
              class="btn btn-md transparent_bg brand_white font-weight-bold ml-0 ml-md-3 border"
            >Save & Exit</button>
          </div>
        </div>
      </div>

      <!-- BOTTOM -->
      <div class="bottom w-100">
        <div class="text-title border_grey font-weight-bold">Game Settings</div>

        <!-- GAME MUSIC -->
        <div class="item d-flex justify-content-between align-items-center">
          <!-- LEFT -->
          <div class="left d-flex justify-content-start align-items-center">
            <div class="icon">
              <span class="icon-music-note font-20 border_grey"></span>
            </div>

            <!-- TEXT -->
            <div class="text brand_white font-weight-bold">Game Music</div>
          </div>

          <!-- RIGHT -->
          <div class="right">
            <div
              class="option pointer"
              :class="music ? 'brand_inverse_light_bg' : 'border_grey_bg'"
              @click="toggleMusic"
            >
              <div class="option-text color_text mr-2" v-if="music">On</div>
              <div
                class="option-select rounded-circle"
                :class="music ? 'brand_inverse_bg' : 'color_grey_dark_bg'"
              ></div>
              <div class="option-text color_grey_dark ml-2" v-if="!music">Off</div>
            </div>
          </div>
        </div>

        <!-- SOUND EFFECTS -->
        <div class="item d-flex justify-content-between align-items-center">
          <!-- LEFT -->
          <div class="left d-flex justify-content-start align-items-center">
            <div class="icon">
              <span class="icon-sound font-20 border_grey"></span>
            </div>

            <!-- TEXT -->
            <div class="text brand_white font-weight-bold">Sound Effects</div>
          </div>

          <!-- RIGHT -->
          <div class="right">
            <div
              class="option pointer"
              :class="sound ? 'brand_inverse_light_bg' : 'border_grey_bg'"
              @click="toggleSound"
            >
              <div class="option-text color_text mr-2" v-if="sound">On</div>
              <div
                class="option-select rounded-circle"
                :class="sound ? 'brand_inverse_bg' : 'color_grey_dark_bg'"
              ></div>
              <div class="option-text color_grey_dark ml-2" v-if="!sound">Off</div>
            </div>
          </div>
        </div>

        <!-- TIMER -->
        <div class="item d-flex justify-content-between align-items-center">
          <!-- LEFT -->
          <div class="left d-flex justify-content-start align-items-center">
            <div class="icon">
              <span class="icon-timer font-20 border_grey"></span>
            </div>

            <!-- TEXT -->
            <div class="text brand_white font-weight-bold">Timer</div>
          </div>

          <!-- RIGHT -->
          <div class="right">
            <div
              class="option pointer"
              :class="timer ? 'brand_inverse_light_bg' : 'border_grey_bg'"
              @click="toggleTimer"
            >
              <div class="option-text color_text mr-2" v-if="timer">On</div>
              <div
                class="option-select rounded-circle brand_inverse_bg"
                :class="timer ? 'brand_inverse_bg' : 'color_grey_dark_bg'"
              ></div>
              <div class="option-text color_grey_dark ml-2" v-if="!timer">Off</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsBlock",

  data() {
    return {
      music: true,
      sound: false,
      timer: true
    };
  },

  methods: {
    toggleMusic() {
      this.music = !this.music;
    },

    toggleSound() {
      this.sound = !this.sound;
    },

    toggleTimer() {
      this.timer = !this.timer;
    }
  }
};
</script>

<style lang="scss">
.settings-block {
  width: 600px;
  @include flex_column_start;
  background: rgba(0, 0, 0, 0.4);
  padding: 40px;

  @include breakpoint_max(sm) {
    padding: 30px;
  }

  @include breakpoint_max(xs) {
    padding: 30px 20px;
  }

  .top {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(213, 213, 213, 0.3);

    .left {
      margin-right: 20px;

      @include breakpoint_max(xs) {
        margin-right: 15px;
      }

      .avatar {
        @include equal_min_edge(110);

        @include breakpoint_max(sm) {
          @include equal_min_edge(100);
        }

        @include breakpoint_max(xs) {
          @include equal_min_edge(90);
        }
      }
    }

    .right {
      .topic {
        font-size: 21px;
        line-height: 29px;
        margin-bottom: 3px;

        @include breakpoint_max(sm) {
          font-size: 17px;
        }

        @include breakpoint_max(xs) {
          font-size: 15px;
        }
      }

      .meta {
        font-size: 14px;
        line-height: 19px;
        color: rgba(219, 245, 248, 0.75);
        margin-bottom: 11px;

        @include breakpoint_max(sm) {
          font-size: 13px;
        }

        @include breakpoint_max(xs) {
          font-size: 12px;
        }
      }

      .btn {
        transition: all 0.3s ease-in-out;

        @include breakpoint_max(sm) {
          font-size: 10.5px;
        }

        @include breakpoint_max(xs) {
          font-size: 9px;
        }

        &:hover {
          transform: scale(0.97);
        }
      }
    }
  }

  .bottom {
    .text-title {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 16px;
    }

    .item {
      min-width: 100%;
      width: 100%;
      margin-bottom: 15px;

      .icon {
        margin-right: 16px;
      }

      .text {
        font-size: 16px;
        line-height: 16px;

        @include breakpoint_max(xs) {
          font-size: 14px;
        }
      }

      .option {
        @include flex_row_between_nowrap;
        border-radius: 20px;
        padding: 8px 7px;
        transition: all 0.3s ease-in-out;

        @include breakpoint_max(xs) {
          padding: 7px;
        }

        .option-text {
          font-size: 12.5px;
          line-height: 16px;
          transition: all 0.3s ease-in-out;

          @include breakpoint_max(xs) {
            font-size: 12px;
          }
        }

        .option-select {
          @include equal_min_edge(20);
          transition: all 0.3s ease-in-out;

          @include breakpoint_max(xs) {
            @include equal_min_edge(18);
          }
        }
      }
    }
  }
}
</style>
