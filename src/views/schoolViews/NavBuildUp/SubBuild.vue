<template>
  <div>
    <!-- BASE NAV COMPONENT -->
    <BaseNav
      :nav_text="['Home', 'Teachers', 'Parents', 'Messages']"
      :nav_icon="['icon-tachometer', 'icon-teacher', 'icon-parent-child', 'icon-message']"
      :nav_name="['SchoolDashboard', 'SchoolDashboardTeacher', 'SchoolDashboardParent', 'SchoolDashboardMessage']"
      nav_type="school"
      :show_nav="false"
    ></BaseNav>
    <!-- BASE NAV COMPONENT -->

    <!-- SUBNAV COMPONENT -->
    <SubNav
      :nav_text="['Feeds', 'Members', 'Homework', 'Report']"
      :nav_icon="['icon-feeds', 'icon-members', 'icon-library', 'icon-pie-chart']"
      :nav_name="['ClassFeeds', 'ClassMembers', 'ClassHomework', 'ClassReport']"
      :settings_route="['ClassHomework']"
    ></SubNav>
    <!-- SUBNAV COMPONENT -->

    <!-- MOBILE TOP NAV COMPONENT -->
    <MobileTopNav nav_type="class"></MobileTopNav>
    <!-- MOBILE TOP NAV COMPONENT -->

    <!-- MOBILE BASE NAV COMPONENT -->
    <MobileBaseNav
      :nav_text="['Feeds', 'Members', 'Homework', 'Report']"
      :nav_icon="['icon-feeds', 'icon-members', 'icon-library', 'icon-pie-chart']"
      :nav_name="['ClassFeeds', 'ClassMembers', 'ClassHomework', 'ClassReport']"
    ></MobileBaseNav>
    <!-- MOBILE BASE NAV COMPONENT -->
  </div>
</template>

<script>
import BaseNav from "@/components/globalComps/NavComps/BaseNav";
import SubNav from "@/components/globalComps/NavComps/SubNav";
import MobileTopNav from "@/components/globalComps/NavComps/MobileTopNav";
import MobileBaseNav from "@/components/globalComps/NavComps/MobileBaseNav";

export default {
  name: "BaseBuild",

  components: {
    BaseNav,
    SubNav,
    MobileTopNav,
    MobileBaseNav
  }
};
</script>

<style>
</style>
