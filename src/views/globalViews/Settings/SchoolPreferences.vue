<template>
  <div>
    <vue-headful
      title="School Preferences | Gradely.ng - School"
      description="Description goes here"
    />
    <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">School Preferences</div>

      <!-- PREFERENCE TAB -->

      <div class="preference-tabs">
        <div class="tab tab-active" @click="switchView($event, 'CurriculumPreference')">Curriculums</div>
        <div class="tab" @click="switchView($event, 'SubjectPreference')">Subjects</div>
        <div class="tab" @click="switchView($event, 'UserPreference')">Users</div>
        <div class="tab" @click="switchView($event, 'AccountPreference')">Account</div>
      </div>
      <!-- PREFERENCE TAB -->

      <!-- SCHOOL PREFERENCES COMPONENTS -->
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="in_view"></component>
        </keep-alive>
      </transition>
      <!-- SCHOOL PREFERENCES COMPONENTS -->
    </div>
  </div>
</template>

<script>
import CurriculumPreference from "@/components/globalComps/SettingsComps/PreferenceComps/CurriculumPreference";

export default {
  name: "SchoolPreferences",

  components: {
    CurriculumPreference,
    SubjectPreference: () =>
      import(/* webpackChunkName: "Preference" */ "@/components/globalComps/SettingsComps/PreferenceComps/SubjectPreference"),
    UserPreference: () =>
      import(/* webpackChunkName: "Preference" */ "@/components/globalComps/SettingsComps/PreferenceComps/UserPreference"),
    AccountPreference: () =>
      import(/* webpackChunkName: "Preference" */ "@/components/globalComps/SettingsComps/PreferenceComps/AccountPreference")
  },

  data() {
    return {
      in_view: "CurriculumPreference"
    };
  },

  methods: {
    switchView(event, view) {
      // LOOP THROUGH ALL TABS AND REMOVE ACTIVE CLASS
      let all_tabs = document.querySelectorAll(".tab");
      all_tabs.forEach(elm => elm.classList.remove("tab-active"));

      // SET ACTIVE CLASS TO CLICKED ELEMENT
      event.target.classList.add("tab-active");
      this.in_view = view;
    }
  }
};
</script>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}

// SCHOOL PREFERENCES
%pref_tab_styling {
  position: absolute;
  content: "";
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: $brand_accent;
}

.preference-tabs {
  @include flex_row_start_nowrap;
  margin-top: 35px;
  width: 100%;
  border-bottom: 1px solid $border_grey;
  margin-bottom: 32px;
  overflow: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .tab {
    position: relative;
    width: auto;
    white-space: nowrap;
    padding-left: 14.25px;
    padding-right: 14.25px;
    padding-bottom: 8px;
    color: $border_grey_dark;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
    user-select: none;

    @include breakpoint_max(lg) {
      font-size: 13px;
    }

    &-active {
      color: $color_text;
      font-weight: 500;

      &::after {
        @extend %pref_tab_styling;
      }
    }

    &:hover {
      color: $color_text;

      &::after {
        @extend %pref_tab_styling;
      }
    }
  }
}
</style>
