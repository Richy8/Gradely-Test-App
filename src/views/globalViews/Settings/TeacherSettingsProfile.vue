<template>
  <div>
    <vue-headful title="Teacher Profile Settings | Gradely.ng" description="Description goes here"/>

    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">Personal Information</div>

      <!-- PERSONAL PROFILE CARD COMPONENT -->
      <PersonalProfileCard fullname="Anthony Joshua" color_scheme="brand_tonic_bg brand_white"></PersonalProfileCard>
      <!-- PERSONAL PROFILE CARD COMPONENT -->

      <!-- PERSONAL PROFILE FORM COMPONENT -->
      <TeacherPersonalProfileForm></TeacherPersonalProfileForm>
      <!-- PERSONAL PROFILE FORM COMPONENT -->
    </div>
  </div>
</template>

<script>
import PersonalProfileCard from "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileCard";

export default {
  name: "TeacherSettingsProfile",

  components: {
    PersonalProfileCard,
    TeacherPersonalProfileForm: () =>
      import(/* webpackChunkName: "TeacherPersonalProfileForm" */ "@/components/globalComps/SettingsComps/ProfileComps/TeacherPersonalProfileForm")
  }
};
</script>

<style>
</style>
