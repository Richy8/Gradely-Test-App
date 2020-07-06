<template>
  <div>
    <vue-headful :title="getPageTitle" description="Description goes here"/>
    <div class="class-homework-section mt-5 base-type-layout">
      <div class="container px-1">
        <div class="row">
          <!-- CHILD INFO COLUMN -->
          <div class="col-12 col-md-3">
            <!-- PARENT CHILD COMPONENT -->
            <div v-if="account_type==='parent'">
              <ParentChildCard></ParentChildCard>
            </div>
            <!-- PARENT CHILD COMPONENT -->

            <!-- STUDENT PROFILE CARD COMPONENT -->
            <div v-else-if="account_type==='student'">
              <StudentProfileCard
                child_img="ManLg.png"
                parent_img
                child_name="Andrew Oshinaga"
                class_code="FDR/2019/1128"
                parent_name="Boye Oshinaga"
                parent_role="Father"
                card_type="student"
              ></StudentProfileCard>
            </div>
            <!-- STUDENT PROFILE CARD COMPONENT -->
          </div>
          <!-- CHILD INFO COLUMN -->

          <!-- CLASS HOMEWORK -->
          <div class="col-12 offset-md-0 col-md-8 col-lg-9 right-layout">
            <!-- PAGE TITLE -->
            <div class="title-row d-flex justify-content-between align-items-center nowrap">
              <!-- TITLE -->
              <div class="page-title font-weight-bold color_text">Homework</div>
              <!-- ADD NEW -->
              <div
                class="avatar avatar_sm_md btn-accent pointer"
                v-if="account_type==='school' || account_type==='teacher'"
              >
                <span class="flex-center icon-plus font-19"></span>
              </div>
            </div>

            <!-- HOMEWORK TAB -->
            <div class="page-tab w-100 d-flex justify-content-start align-items-center nowrap">
              <div class="tab select-none active" @click="switchView('new')">New</div>

              <div class="tab select-none" @click="switchView('old')">Completed</div>
            </div>
            <!-- HOMEWORK TAB -->

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
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";
import StudentProfileCard from "@/components/profileComps/studentprofile/StudentProfileCard";
import ParentChildCard from "@/components/classComps/parentSideBar/ParentChildCard";
import DefaultInfo from "@/components/classComps/homework/DefaultInfo";

const ContentInfo = () => ({
  component: import(/* webpackChunkName: "ContentInfo" */ "@/components/classComps/homework/ContentInfo"),
  loading: DefaultInfo,
  error: DefaultInfo,
  delay: 500,
  timeout: 7000
});

const ContentCompletedInfo = () => ({
  component: import(/* webpackChunkName: "ContentCompletedInfo" */ "@/components/classComps/homework/ContentCompletedInfo"),
  loading: DefaultInfo,
  error: DefaultInfo,
  delay: 500,
  timeout: 7000
});

export default {
  name: "Homework",

  components: {
    ParentChildCard,
    StudentProfileCard,
    DefaultInfo,
    ContentInfo,
    ContentCompletedInfo
  },

  computed: {
    getPageTitle() {
      return `Dashboard Homework | ${capitalizeFirstLetter(this.account_type)}`;
    }
  },

  data() {
    return {
      account_type: "",
      in_view: null,
      new_homework_count: 1,
      old_homework_count: 1
    };
  },

  watch: {
    new_homework_count: "updateNewHomeworkView"
  },

  mounted() {
    this.updateNewHomeworkView();
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    switchView(view) {
      let tabs = document.querySelectorAll(".tab");
      tabs.forEach(elm => {
        elm.classList.remove("active");
      });

      if (view === "new") {
        this.updateNewHomeworkView();
        event.target.classList.add("active");
      } else {
        this.updateOldHomeworkView();
        event.target.classList.add("active");
      }
    },

    updateNewHomeworkView() {
      this.new_homework_count > 0
        ? (this.in_view = "ContentInfo")
        : (this.in_view = "DefaultInfo");
    },

    updateOldHomeworkView() {
      this.old_homework_count > 0
        ? (this.in_view = "ContentCompletedInfo")
        : (this.in_view = "DefaultInfo");
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
