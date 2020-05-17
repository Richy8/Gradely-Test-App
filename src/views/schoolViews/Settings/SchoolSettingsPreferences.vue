<template>
  <div>
    <vue-headful
      title="Preferences Settings | Gradely.ng - School"
      description="Description goes here"
    />
    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">School Preferences</div>

      <!-- PREFERENCE TAB -->

      <div class="preference-tabs">
        <div class="tab tab-active" @click="switchView($event, 'CurriculumPref')">Curriculums</div>
        <div class="tab" @click="switchView($event, 'SubjectPref')">Subjects</div>
        <div class="tab" @click="switchView($event, 'UserPref')">Users</div>
        <div class="tab" @click="switchView($event, 'AccountPref')">Account</div>
      </div>
      <!-- PREFERENCE TAB -->

      
      <!-- SCHOOL PREFERENCES COMPONENTS -->
      <transition name="fade" mode="out-in">
        <keep-alive>
          <comoonent :is="preference"></comoonent>
        </keep-alive>
      </transition>
      <!-- SCHOOL PREFERENCES COMPONENTS -->

    </div>
  </div>
</template>

<script>
import CurriculumPref from "@/components/schoolComps/dashboard/settings/CurriculumPref";
import SubjectPref from "@/components/schoolComps/dashboard/settings/SubjectPref";
import UserPref from "@/components/schoolComps/dashboard/settings/UserPref";
import AccountPref from "@/components/schoolComps/dashboard/settings/AccountPref";

export default {
  name: "SchoolSettingsPreferences",

  components: {
    CurriculumPref,
    SubjectPref,
    UserPref,
    AccountPref
  },

  data(){
    return {
      preference: 'CurriculumPref'
    }
  }, 

  methods: {
    switchView(event, view) {
        // LOOP THROUGH ALL TABS AND REMOVE ACTIVE CLASS
        let all_tabs = document.querySelectorAll('.tab');
        all_tabs.forEach(elm => elm.classList.remove('tab-active'));

        // SET ACTIVE CLASS TO CLICKED ELEMENT
        event.target.classList.add('tab-active');
        this.preference = view;
    }
  }
};
</script>

<style lang="scss" scoped>
   .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .2s ease-in;
    }
    .fade-leave-active{
        transition: opacity .2s ease-out;
        opacity: 0;
    }
</style>
