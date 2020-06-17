<template>
  <div>
    <div class="conversation-card white pointer" @click="$emit('changeView')">
      <!-- AVATAR -->
      <div class="avatar avatar_sm_md">
        <div class="avatar-text white-text" :class="setAvatarBg">{{ userInitial }}</div>
      </div>

      <!-- MESSAGE INFO -->
      <div class="message-info w-100">
        <div class="info-row d-flex justify-content-between align-items-center nowrap">
          <!-- FULLNAME -->
          <div class="name color_text font-weight-bold">{{ contact_name }}</div>
          <!-- MESSAGE DATE -->
          <div class="date color_grey_dark text-right">
            <span class="day">{{ contact_day }}&nbsp;</span>
            <span class="month">{{ setMonth }},&nbsp;</span>
            <span class="year">{{ contact_year }}</span>
          </div>
        </div>

        <!-- MESSAGE BODY -->
        <div class="message-body color_grey_dark text-truncate">{{ contact_msg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/scripts/utilities";

export default {
  name: "ConversationCard",

  props: {
    contact_day: Number,
    contact_month: String,
    contact_year: Number,
    contact_name: String,
    contact_msg: String
  },

  computed: {
    setMonth() {
      return this.contact_month.slice(0, 3);
    },

    userInitial() {
      return setInitial(this.contact_name);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  }
};
</script>

<style lang="scss">
.conversation-card {
  @include flex_row_start_nowrap;
  padding: 15px 19px 17px 19px;
  border-bottom: 1px solid $border_grey_light;
  transition: all 0.3s ease-in-out;

  @include breakpoint_max(lg) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @include breakpoint_max(md) {
    padding-left: 19px;
    padding-right: 19px;
  }

  @include breakpoint_max(xs) {
    padding-left: 13px;
    padding-right: 13px;
  }

  &:hover {
    background: #e1f6f8 !important;
  }

  .avatar {
    margin-right: 15px;

    @include breakpoint_max(lg) {
      margin-right: 10px;
    }
  }

  .info-row {
    margin-bottom: 5px;
  }

  .name {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.03em;

    @include breakpoint_max(lg) {
      font-size: 12.5px;
    }

    @include breakpoint_max(md) {
      font-size: 13.5px;
    }
  }

  .date {
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0.02em;

    @include breakpoint_max(lg) {
      font-size: 10px;
    }

    @include breakpoint_max(md) {
      font-size: 10.5px;
    }
  }

  .message-body {
    font-size: 14px;
    line-height: 19px;
    width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @include breakpoint_max(xl) {
      font-size: 13.5px;
      width: 290px;
    }

    @include breakpoint_max(lg) {
      font-size: 11.5px;
      width: 200px;
    }

    @include breakpoint_max(md) {
      font-size: 13px;
      width: 450px;
    }

    @include breakpoint_max(sm) {
      white-space: unset;
      width: 100%;
    }
  }
}
</style>
