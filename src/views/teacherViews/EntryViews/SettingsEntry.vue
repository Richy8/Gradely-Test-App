<template>
  <div>
    <BaseBuild/>
    <div class="container px-1 settings-container">
      <div class="row">
        <!-- SIDE NAVIGATION -->
        <div class="col-12 col-md-3 settings-navigation">
          <SettingsNav settings_type="teacher"/>
        </div>

        <!-- SETTINGS ROUTER VIEW -->
        <div class="col-12 offset-md-1 col-md-8 settings-display">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bgColorSetter } from "@/scripts/utilities";
import BaseBuild from "@/views/teacherViews/NavBuildUp/BaseBuild";
import SettingsNav from "@/components/globalComps/NavComps/SettingsNav";

export default {
  name: "SettingsEntry",

  components: {
    BaseBuild,
    SettingsNav
  },

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
