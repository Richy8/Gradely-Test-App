<template>
  <div>
    <div class="subject-preference">
      <div class="preference-title-row">
        <!-- TITLE -->
        <div class="preference-title">Subjects</div>
        <!-- PLUS ICON -->
        <div class="avatar pointer" @click="toggleSubjectModal">
          <span class="flex-center icon-plus font-17 color_text font-weight-600"></span>
        </div>
      </div>

      <!-- SUBJECT CARD COMPONENTS -->
      <SubjectCard subject="Mathematics" classes="All classes"></SubjectCard>
      <SubjectCard subject="English Language" classes="8 classes"></SubjectCard>
      <SubjectCard subject="Introductory Technology" classes="5 classes"></SubjectCard>
      <SubjectCard subject="Introductory Science" classes="5 classes"></SubjectCard>
      <SubjectCard subject="Physics" classes="2 classes"></SubjectCard>
      <SubjectCard subject="Chemistry" classes="2 classes"></SubjectCard>
      <!-- SUBJECT CARD COMPONENTS -->

      <!-- CURRICULUM REQUEST MODAL COMPONENTS -->
      <AddSubjectModal v-if="subject_modal" @closeTriggered="toggleSubjectModal"></AddSubjectModal>
      <!-- CURRICULUM REQUEST MODAL COMPONENTS -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SubjectPreference",

  components: {
    SubjectCard: () =>
      import(/* webpackChunkName: "SubjectCard" */ "@/components/globalComps/SettingsComps/PreferenceComps/SubjectCard"),
    AddSubjectModal: () =>
      import(/* webpackChunkName: "SubjectCard" */ "@/components/schoolComps/modals/AddSubjectModal")
  },

  data() {
    return {
      subject_modal: false
    };
  },

  methods: {
    toggleSubjectModal() {
      this.subject_modal = !this.subject_modal;
    }
  }
};
</script>

<style lang="scss">
</style>
