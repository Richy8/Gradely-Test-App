<template>
  <div>
    <vue-headful :title="getPageTitle" description="Description goes here"/>

    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">Profile Preferences</div>

      <!-- PERSONAL PROFILE CARD COMPONENT -->
      <PersonalProfileCard fullname="Anthony Joshua" avatar_img></PersonalProfileCard>
      <!-- PERSONAL PROFILE CARD COMPONENT -->

      <!-- FORM DIVIDEER -->
      <div class="form-divider"></div>
      <!-- PERSONAL PROFILE DETAILS COMPONENT -->
      <PersonalProfileDetails
        fullname="Anthony Joshua"
        email="anthonyjoshua@yahoo.com"
        student_code="FDR/2019/1128"
      ></PersonalProfileDetails>

      <!-- FORM DIVIDER -->
      <div class="form-divider"></div>
      <!-- CHILDREN LIST CONTAINER -->
      <ChildrenListContainer v-if="account_type==='parent'"></ChildrenListContainer>
      <!-- TEACHER CLASS CONTAINER -->
      <TeacherClassContainer v-if="account_type==='teacher'"></TeacherClassContainer>
      <!-- PARENT CLASS CONTAINER -->
      <ParentListContainer v-if="account_type==='student'"></ParentListContainer>

      <!-- FORM DIVIDER -->

      <!-- FORM DIVIDER -->
      <div class="form-divider" v-if="account_type==='student'"></div>
      <SchoolListContainer v-if="account_type==='student'"></SchoolListContainer>
      <div class="form-divider" v-if="account_type==='student'"></div>

      <!-- NOTIFICATION COLUMN COMPONENT -->
      <NotificationColumn
        notification_msg="Choose the type of notifications you want to receive from Gradely"
        :notification_route="'/'+account_type+'/dashboard/settings/notification'"
      ></NotificationColumn>
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";
import PersonalProfileCard from "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileCard";

export default {
  name: "SettingsPreferences",

  components: {
    PersonalProfileCard,
    PersonalProfileDetails: () =>
      import(/* webpackChunkName: "PersonalProfileDetails" */ "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileDetails"),
    ChildrenListContainer: () =>
      import(/* ChildrenListContainer */ "@/components/globalComps/SettingsComps/ProfileComps/ChildrenListContainer"),
    TeacherClassContainer: () =>
      import(/* TeacherClassContainer */ "@/components/globalComps/SettingsComps/ProfileComps/TeacherClassContainer"),
    ParentListContainer: () =>
      import(/* ParentListContainer */ "@/components/globalComps/SettingsComps/ProfileComps/ParentListContainer"),
    SchoolListContainer: () =>
      import(/* SchoolListContainer */ "@/components/globalComps/SettingsComps/ProfileComps/SchoolListContainer"),
    NotificationColumn: () =>
      import(/* webpackChunkName: "NotificationColumn" */ "@/components/globalComps/SettingsComps/ProfileComps/NotificationColumn")
  },

  computed: {
    getPageTitle() {
      return `Profile Preferences | Gradely.ng - ${capitalizeFirstLetter(
        this.account_type
      )}`;
    }
  },

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style>
</style>
