<template>
  <div>
    <div class="conversation-card pointer" @click="$emit('changeView')">
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
import { colors, random, shuffle, setInitial } from "@/assets/jsComps/extFunc";

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

<style>
</style>
