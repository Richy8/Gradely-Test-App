<template>
  <div>
    <vue-headful
      title="Personal Information | Gradely.ng - School"
      description="Description goes here"
    />

    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">Personal Information</div>

      <!-- PERSONAL PROFILE CARD COMPONENT -->
      <PersonalProfileCard fullname="Kola Ajayi"></PersonalProfileCard>
      <!-- PERSONAL PROFILE CARD COMPONENT -->

      <!-- PERSONAL PROFILE FORM COMPONENT -->
      <PersonalProfileForm></PersonalProfileForm>
      <!-- PERSONAL PROFILE FORM COMPONENT -->
    </div>
  </div>
</template>

<script>
import PersonalProfileCard from "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileCard";

export default {
  name: "SchoolSettingsUserEdit",

  components: {
    PersonalProfileCard,
    PersonalProfileForm: () =>
      import(/* webpackChunkName: "PersonalProfileForm" */ "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileForm")
  }
};
</script>

<style>
</style>
