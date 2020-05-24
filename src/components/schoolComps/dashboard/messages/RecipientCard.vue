<template>
  <div class="recipient-card w-100 pointer">
    <label :for="fullname" class="w-100 h-100">
      <div class="d-flex justify-content-between align-items-center">
        <!-- USER INFO -->
        <div class="left">
          <div class="d-flex justify-content-start align-items-center nowrap">
            <!-- AVATAR -->
            <div class="avatar">
              <div class="avatar-text white-text" :class="setAvatarBg">{{ userInitial }}</div>
            </div>

            <!-- USER NAME -->
            <div class="color_text font-14">{{ fullname }}</div>
          </div>
        </div>

        <!-- SLECT INPUT -->
        <div class="right">
          <input type="checkbox" v-model="recipient" value="" :id="fullname">
        </div>
      </div>
    </label>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/assets/jsComps/extFunc";

export default {
  name: "RecipientCard",

  props: {
    fullname: String
  },

  data() {
      return {
          recipient: ""
      }
  },

  computed: {
   userInitial() {
      return setInitial(this.fullname);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  }
};
</script>

<style lang="scss" scoped>
.recipient-card {
  padding: 10px 2px;
  border-bottom: 1px solid #d5d5d5;
}

.avatar {
  margin-right: 10px;
}
</style>
