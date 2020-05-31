<template>
  <div>
    <SubBuild/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import SubBuild from "@/views/schoolViews/NavBuildUp/SubBuild";

export default {
  name: "SubEntry",

  components: { SubBuild },

  mounted() {
    bgColorSetter("#f0f0f0");
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
