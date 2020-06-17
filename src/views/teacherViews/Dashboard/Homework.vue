<template>
  <div>
    <vue-headful title="Class Homework | Teachers" description="Description goes here"/>
    <div class="class-homework-section mt-5 base-type-layout">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout">
            <!-- TEACHER CLASSES COMPONENT -->
            <TeacherClassCard></TeacherClassCard>
            <!-- TEACHER CLASSES COMPONENT -->
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
    <!-- MODAL COMPONENTS -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <!-- MODAL COMPONENTS -->
  </div>
</template>

<script>
import TeacherClassCard from "@/components/classComps/teacherSideBar/TeacherClassCard";
import DefaultInfo from "@/components/classComps/homework/DefaultInfo";

const ContentInfo = () => ({
  component: import(/* webpackChunkName: "ContentInfo" */ "@/components/classComps/homework/ContentInfo"),
  loading: DefaultInfo,
  error: DefaultInfo,
  delay: 500,
  timeout: 7000
});

export default {
  name: "Homework",

  components: {
    TeacherClassCard,
    DefaultInfo,
    ContentInfo,
    AddTeacherModal: () =>
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/modalComps/schoolModals/AddTeacherModal")
  },

  data() {
    return {
      in_view: null,
      teacher_modal: false,
      homework_count: 1
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

    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    }
  }
};
</script>

<style lang="scss">
.class-homework-section {
  // PAGE TITLE
  .page-title {
    font-size: 22px;

    @include breakpoint_max(lg) {
      font-size: 20px;
    }

    @include breakpoint_max(sm) {
      font-size: 18px;
    }
  }

  .right-layout {
    @include breakpoint_max(lg) {
      width: 110% !important;
      right: -50px;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }

    @include breakpoint_max(md) {
      width: 100% !important;
      right: 0;
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
  }
}
</style>
