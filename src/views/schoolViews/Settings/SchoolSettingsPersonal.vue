<template>
  <div>
    <vue-headful
      title="Personal Information Settings | Gradely.ng - School"
      description="Description goes here"
    />

    <div class="settings-display-layout white rounded-10">
        <!-- PERSONAL INFO CARD COMPONENT -->
        <PersonalInfoCard></PersonalInfoCard>
        <!-- PERSONAL INFO CARD COMPONENT -->

        <!-- PERSONAL FORM COMPONENT -->
        <PersonalForm></PersonalForm>
        <!-- PERSONAL FORM COMPONENT -->
    </div>

  </div>
</template>

<script>
import PersonalForm from "@/components/schoolComps/dashboard/settings/PersonalForm"
import PersonalInfoCard from "@/components/schoolComps/dashboard/settings/PersonalInfoCard"

export default {
  name: "SchoolSettingsPersonal",
  components: {PersonalForm, PersonalInfoCard}
};
</script>

<style>
</style>
