<template>
  <div>
    <!-- VERIFY CARD -->
    <div class="verify-card">
      <div class="verify-detail">
        <!-- AVATAR   -->
        <div class="avatar avatar_md">
          <div class="avatar-text white-text" :class="setAvatarBg">
            <slot name="teacher-initials"></slot>
          </div>
        </div>
        <!-- INFO -->
        <div class="verify-info">
          <div class="name font-weight-900 color_text">
            <slot name="teacher-name"></slot>
          </div>
          <div class="meta color_grey_dark">
            <slot name="request-info"></slot>
          </div>
        </div>
      </div>

      <!-- VERIFY ACTION -->
      <div class="verify-action">
        <!-- APPROVE ICON -->
        <div class="avatar approve-box d-flex flex-center pointer">
          <div class="cust_icon accept_icon_primary"></div>
        </div>
        <!-- DECLINE ICON -->
        <div class="avatar decline-box d-flex flex-center pointer">
          <div class="cust_icon decline_icon_tonic"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle } from "@/assets/jsComps/extFunc";

export default {
  name: "VerifyTeacherCard",

  computed: {
      setAvatarBg(){
          let shuffled = shuffle(colors);
          return shuffled[random(15, 0)];
      }
  }
};
</script>

<style>
</style>
