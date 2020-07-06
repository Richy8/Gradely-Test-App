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
      <PersonalProfileCard fullname="Kola Ajayi" avatar_img></PersonalProfileCard>
      <!-- PERSONAL PROFILE CARD COMPONENT -->

      <!-- FORM DIVIDEER -->
      <div class="form-divider"></div>
      <!-- PERSONAL PROFILE DETAILS COMPONENT -->
      <PersonalProfileDetails fullname="Kola Ajayi" email="kolaajayi@yahoo.com"></PersonalProfileDetails>

      <!-- FORM DIVIDER -->
      <div class="form-divider"></div>
      <!-- NOTIFICATION COLUMN COMPONENT -->
      <NotificationColumn
        notification_msg="Choose the type of notifications you want to receive from Gradely"
        notification_route="/school/dashboard/settings/notification"
      ></NotificationColumn>
    </div>
  </div>
</template>

<script>
import PersonalProfileCard from "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileCard";

export default {
  name: "SchoolSettingsUser",

  components: {
    PersonalProfileCard,
    PersonalProfileDetails: () =>
      import(/* webpackChunkName: "PersonalProfileDetails" */ "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileDetails"),
    NotificationColumn: () =>
      import(/* webpackChunkName: "NotificationColumn" */ "@/components/globalComps/SettingsComps/ProfileComps/NotificationColumn")
  }
};
</script>

<style>
</style>
