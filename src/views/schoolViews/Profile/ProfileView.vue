<template>
  <div>
    <ProfileNavbar/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// BACKGROUND COLOR EXTERNAL FUNCTION
import { bgColorSetter } from "@/assets/jsComps/extFunc";
import ProfileNavbar from "@/components/schoolComps/dashboard/ProfileNavbar";

export default {
  name: "ProfileView",

  components: { ProfileNavbar },

  mounted() {
    bgColorSetter("#f5f5f5");
  }
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}
</style>
