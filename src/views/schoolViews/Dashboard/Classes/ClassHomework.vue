<template>
  <div>
    <vue-headful title="Class Homework | School Dashboard" description="Description goes here"/>
    <div class="class-homework-section">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-left-layout">
            <MembersCard
              :class_id="class_option.id"
              :class_year="class_option.year"
              :class_branch="class_option.branch"
              :class_code="class_option.code"
              @getSelected="switchClass($event)"
            >
              <div slot="teacher__content">
                <!-- CONTENT TEACHER LIST -->
                <MembersTeacherRow v-if="teacher_count > 0" @toggleTeacher="toggleTeacherModal"></MembersTeacherRow>

                <!-- EMPTY TEACHER LIST -->
                <div class="teacher-list-empty mb-3">
                  <MembersEmptyTeacherRow
                    v-if="teacher_count === 0"
                    @toggleTeacher="toggleTeacherModal"
                  ></MembersEmptyTeacherRow>
                </div>
              </div>
            </MembersCard>
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS HOMEWORK -->
          <div class="col-12 offset-md-0 col-md-8 col-lg-9 right-layout">
            <!-- PAGE TITLE -->
            <div class="title-row d-flex justify-content-between align-items-center nowrap">
              <!-- TITLE -->
              <div class="page-title font-weight-bold color_text">Homework</div>
              <!-- ADD NEW -->
              <div class="avatar avatar_sm_md btn-accent pointer">
                <span class="flex-center icon-plus font-19"></span>
              </div>
            </div>

            <!-- CONTENT INFO AND DEFAULT COMPONENTS -->
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="in_view"></component>
              </keep-alive>
            </transition>
            <!-- CONTENT INFO AND DEFAULT COMPONENTS -->
          </div>
          <!-- CLASS HOMEWORK -->
        </div>
      </div>
    </div>

    <!-- ADD TEACHER MODAL -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <!-- ADD TEACHER MODAL -->
  </div>
</template>

<script>
import MembersCard from "@/components/schoolComps/dashboard/class/MembersCard";
import MembersEmptyTeacherRow from "@/components/schoolComps/dashboard/class/MembersEmptyTeacherRow";
import DefaultInfo from "@/components/schoolComps/dashboard/class/class_homework/DefaultInfo";

const MembersTeacherRow = () => ({
  component: import(/* webpackChunkName: "MembersTeacherRow" */ "@/components/schoolComps/dashboard/class/MembersTeacherRow"),
  loading: MembersEmptyTeacherRow,
  error: MembersEmptyTeacherRow,
  delay: 500,
  timeout: 7000
});

const ContentInfo = () => ({
  component: import(/* webpackChunkName: "ContentInfo" */ "@/components/schoolComps/dashboard/class/class_homework/ContentInfo"),
  loading: DefaultInfo,
  error: DefaultInfo,
  delay: 500,
  timeout: 7000
});

export default {
  name: "ClassHomework",

  components: {
    MembersCard,
    MembersEmptyTeacherRow,
    MembersTeacherRow,
    DefaultInfo,
    ContentInfo,
    AddTeacherModal: () =>
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/schoolComps/modals/AddTeacherModal")
  },

  data() {
    return {
      in_view: null,
      teacher_modal: false,
      teacher_count: 1,
      homework_count: 1,
      class_option: {
        id: "1",
        year: "Year 7",
        branch: "Gold",
        code: "IMD/JSS1B"
      }
    };
  },

  watch: {
    homework_count: "updateView"
  },

  mounted() {
    this.updateView();
  },

  methods: {
    updateView() {
      this.homework_count > 0
        ? (this.in_view = "ContentInfo")
        : (this.in_view = "DefaultInfo");
    },

    switchClass(event) {
      this.class_option.id = event.id;
      this.class_option.year = event.year;
      this.class_option.branch = event.branch;
    },

    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    }
  }
};
</script>

<style lang="scss">
</style>
