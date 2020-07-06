<template>
  <div>
    <!-- BASE NAV COMPONENT -->
    <BaseNav
      :nav_text="['Home', 'Catchup', 'Homework', 'Report']"
      :nav_icon="['icon-feeds', 'icon-target', 'icon-library', 'icon-pie-chart']"
      :nav_name="['StudentFeeds', 'StudentCatchup', 'StudentHomework', 'StudentReport']"
      nav_type="student"
      :show_nav="true"
    ></BaseNav>
    <!-- BASE NAV COMPONENT -->

    <!-- MOBILE TOP NAV COMPONENT -->
    <MobileTopNav nav_type="student"></MobileTopNav>
    <!-- MOBILE TOP NAV COMPONENT -->

    <!-- MOBILE BASE NAV COMPONENT -->
    <MobileBaseNav
      :nav_text="['Home', 'Catchup', 'Homework', 'Report']"
      :nav_icon="['icon-feeds', 'icon-target', 'icon-library', 'icon-pie-chart']"
      :nav_name="['StudentFeeds', 'StudentCatchup', 'StudentHomework', 'StudentReport']"
    ></MobileBaseNav>
    <!-- MOBILE BASE NAV COMPONENT -->
  </div>
</template>

<script>
import BaseNav from "@/components/globalComps/NavComps/BaseNav";
import MobileTopNav from "@/components/globalComps/NavComps/MobileTopNav";
import MobileBaseNav from "@/components/globalComps/NavComps/MobileBaseNav";

export default {
  name: "BaseBuild",

  components: {
    BaseNav,
    MobileTopNav,
    MobileBaseNav
  }
};
</script>

<style>
</style>
