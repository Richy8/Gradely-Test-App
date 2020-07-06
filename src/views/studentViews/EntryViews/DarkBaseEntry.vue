<template>
  <div>
    <DarkBaseBuild/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import DarkBaseBuild from "@/views/studentViews/NavBuildUp/DarkBaseBuild";

export default {
  name: "DarkBaseEntry",

  components: { DarkBaseBuild },

  mounted() {
    bgColorSetter("#002051");
  }
};
</script>

<style lang="scss">
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
