<template>
  <div>
    <vue-headful :title="getPageTitle" description="Description goes here"/>

    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">Personal Information</div>

      <!-- PERSONAL PROFILE CARD COMPONENT -->
      <PersonalProfileCard fullname="Anthony Joshua" avatar_img></PersonalProfileCard>
      <!-- PERSONAL PROFILE CARD COMPONENT -->

      <!-- PERSONAL PROFILE FORM COMPONENT -->
      <ParentChildProfileForm v-if="account_type==='parent' || account_type==='student'"></ParentChildProfileForm>
      <!-- PERSONAL PROFILE FORM COMPONENT -->

      <!-- PERSONAL PROFILE FORM COMPONENT -->
      <TeacherPersonalProfileForm v-else-if="account_type==='teacher'"></TeacherPersonalProfileForm>
      <!-- PERSONAL PROFILE FORM COMPONENT -->
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";
import PersonalProfileCard from "@/components/globalComps/SettingsComps/ProfileComps/PersonalProfileCard";

export default {
  name: "SettingsProfile",

  components: {
    PersonalProfileCard,
    ParentChildProfileForm: () =>
      import(/* webpackChunkName: "ParentChildProfileForm" */ "@/components/globalComps/SettingsComps/ProfileComps/ParentChildProfileForm"),
    TeacherPersonalProfileForm: () =>
      import(/* webpackChunkName: "TeacherPersonalProfileForm" */ "@/components/globalComps/SettingsComps/ProfileComps/TeacherPersonalProfileForm")
  },

  computed: {
    getPageTitle() {
      return `Profile Settings | Gradely.ng - ${capitalizeFirstLetter(
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
