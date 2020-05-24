<template>
  <div>
    <Navbar/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "@/components/schoolComps/dashboard/Navbar.vue";

export default {
  name: "DashboardView",

  components: { Navbar }
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
