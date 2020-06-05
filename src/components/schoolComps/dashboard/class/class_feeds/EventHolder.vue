<template>
  <div>
    <div class="event-holder pointer">
      <!-- EVENT INFO -->
      <div class="event-info">
        <!-- EVENT ICON -->
        <div class="avatar" :class="setEventBg">
          <span class="flex-center font-22" :class="setEventIcon"></span>
        </div>

        <!-- EVENT DESCRIPTION -->
        <div class="event-description">
          <div class="title white-text">{{ event_title }}</div>
          <div
            class="meta brand_inverse_light"
            v-if="event_meta"
          >{{ event_meta }} • {{ event_time }}</div>
        </div>
      </div>

      <!-- EVENT OPTION -->
      <div class="avatar option" v-show="event_type!=='default'">
        <span class="flex-center icon-caret-right white-text"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventHolder",

  props: {
    event_type: {
      type: String,
      default: "default"
    },
    event_title: String,
    event_meta: String,
    event_time: String
  },

  computed: {
    setEventIcon() {
      if (this.event_type === "homework") {
        return this.icons.homework;
      } else if (this.event_type === "live class") {
        return this.icons.live_class;
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

  data() {
    return {
      icons: {
        homework: "icon-library brand_navy",
        live_class: "icon-video-card brand_tonic",
        default: "color_ash icon-pie"
      },

      bg_color: {
        homework: "brand_inverse_light_bg",
        live_class: "brand_red_light_bg",
        default: "border_grey_light_bg"
      }
    };
  }
};
</script>

<style lang="scss">
.event-holder {
  @include flex_row_between_nowrap;
  padding: 10px 2px 11px;
  border-bottom: 1px solid rgba(black, 0.15);
  opacity: 0.95;

  .event-info {
    @include flex_row_start_nowrap;
    .avatar {
      margin-right: 10px;
    }

    .title {
      font-size: 12px;
      margin-bottom: 2px;
      line-height: 16px;
    }

    .meta {
      font-size: 10px;
      line-height: 14px;
    }
  }

  .option {
    opacity: 0.4;
  }
}
</style>
