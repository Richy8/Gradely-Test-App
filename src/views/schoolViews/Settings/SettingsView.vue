<template>
  <div>
    <Navbar/>
    <div class="container px-1 settings-container">
      <div class="row">
        <!-- SIDE NAVIGATION -->
        <div class="col-12 col-md-3 settings-navigation">
          <Sidebar/>
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
// BACKGROUND COLOR EXTERNAL FUNCTION
import { bgColorSetter } from "@/assets/jsComps/extFunc";
import Navbar from "@/components/schoolComps/dashboard/Navbar";
import Sidebar from "@/components/schoolComps/dashboard/Sidebar";

export default {
  name: "SettingsView",

  components: {
    Navbar,
    Sidebar
  },

  mounted() {
    bgColorSetter("#f0f0f0");
  }
};
</script>

<style lang="scss" scoped>
   .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .2s ease-in;
    }
    .fade-leave-active{
        transition: opacity .2s ease-out;
        opacity: 0;
    }
</style>
