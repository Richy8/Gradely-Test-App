<template>
  <div>
    <!-- BASE NAV COMPONENT -->
    <BaseNav
      :nav_text="['Home', 'Teachers', 'Parents']"
      :nav_icon="['icon-tachometer', 'icon-teacher', 'icon-parent-child']"
      :nav_name="['SchoolDashboard', 'SchoolDashboardTeacher', 'SchoolDashboardParent']"
      nav_type="school"
      :show_nav="true"
    ></BaseNav>
    <!-- BASE NAV COMPONENT -->

    <!-- MOBILE TOP NAV COMPONENT -->
    <MobileTopNav nav_type="single"></MobileTopNav>
    <!-- MOBILE TOP NAV COMPONENT -->

    <!-- MOBILE BASE NAV COMPONENT -->
    <MobileBaseNav
      :nav_text="['Home', 'Teachers', 'Parents']"
      :nav_icon="['icon-tachometer', 'icon-teacher', 'icon-parent-child']"
      :nav_name="['SchoolDashboard', 'SchoolDashboardTeacher', 'SchoolDashboardParent']"
    ></MobileBaseNav>
    <!-- MOBILE BASE NAV COMPONENT -->
  </div>
</template>

<script>
import BaseNav from "@/components/globalComps/NavComps/BaseNav";
import MobileTopNav from "@/components/globalComps/NavComps/MobileTopNav";
import MobileBaseNav from "@/components/globalComps/NavComps/MobileBaseNav";

export default {
  name: "BaseSchoolBuild",

  components: {
    BaseNav,
    MobileTopNav,
    MobileBaseNav
  }
};
</script>

<style>
</style>
