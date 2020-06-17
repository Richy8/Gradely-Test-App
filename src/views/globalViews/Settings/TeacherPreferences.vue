<template>
  <div>
    <vue-headful
      title="Profile Preferences | Gradely.ng - School"
      description="Description goes here"
    />

    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">Profile Preferences</div>

      <!-- PERSONAL PROFILE CARD COMPONENT -->
      <PersonalProfileCard fullname="Anthony Joshua" color_scheme="brand_tonic_bg brand_white"></PersonalProfileCard>
      <!-- PERSONAL PROFILE CARD COMPONENT -->

      <!-- FORM DIVIDEER -->
      <div class="form-divider"></div>
      <!-- PERSONAL PROFILE DETAILS COMPONENT -->
      <PersonalProfileDetails
        fullname="Anthony Joshua"
        email="anthonyjoshua@yahoo.com"
        user_edit_route="TeacherSettingsProfile"
        settings_route="TeacherSettingsAccount"
      ></PersonalProfileDetails>

      <!-- FORM DIVIDER -->
      <div class="form-divider"></div>
      <!-- TEACHER CLASS CONTAINER -->
      <TeacherClassContainer></TeacherClassContainer>

      <!-- FORM DIVIDER -->
      <div class="form-divider"></div>
      <!-- NOTIFICATION COLUMN COMPONENT -->
      <NotificationColumn
        notification_msg="Choose the type of notifications you want to receive from Gradely"
        notification_route="TeacherSettingsNotification"
      ></NotificationColumn>
    </div>
  </div>
</template>

<script>
import PersonalProfileCard from "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileCard";

export default {
  name: "TeacherPreferences",

  components: {
    PersonalProfileCard,
    PersonalProfileDetails: () =>
      import(/* webpackChunkName: "PersonalProfileDetails" */ "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileDetails"),
    TeacherClassContainer: () =>
      import(/* TeacherClassContainer */ "@/components/globalComps/SettingsComps/ProfileComps/TeacherClassContainer"),
    NotificationColumn: () =>
      import(/* webpackChunkName: "NotificationColumn" */ "@/components/globalComps/SettingsComps/ProfileComps/NotificationColumn")
  }
};
</script>

<style>
</style>
