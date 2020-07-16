<template>
  <div>
    <vue-headful title="Class Feeds | School Dashboard" description="Description goes here"/>
    <div class="class-feeds-section sub-type-layout">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout">
            <!-- MEMBERS CARD COMPONENT -->
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
            <!-- MEMBERS CARD COMPONENT -->
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS FEEDS -->
          <div class="col-12 col-md-9 col-lg-9 right-layout">
            <PostInputCardNew fullname="Francis Sunday"></PostInputCardNew>

            <div class="row">
              <!-- POSTS SECTION -->
              <div class="col-12 col-md-7 order-2 order-lg-1 post-component">
                <!-- POST BLOCK COMPONENTS -->

                <!-- FILTER COMPONENTS -->
                <FilterPostLibrary @switchView="togglePostBlock"></FilterPostLibrary>
                <!-- FILTER COMPONENTS -->

                <div class="content-post-section" v-if="post_count > 0">
                  <transition>
                    <components :is="in_view"></components>
                  </transition>
                </div>

                <!-- DEFAULT BLOCK -->
                <div class="default-post-section" v-else>
                  <DefaultPostBlock account_type="school"></DefaultPostBlock>
                </div>

                <!-- POST BLOCK COMPONENTS -->
              </div>

              <!-- UPCOMING EVENTS -->
              <div class="col-12 col-md-5 order-1 order-lg-2 event-component">
                <UpcomingEventBlock @toggleTeacher="toggleTeacherModal"></UpcomingEventBlock>
              </div>
            </div>
          </div>
          <!-- CLASS FEEDS -->
        </div>
      </div>
    </div>

    <!-- MODAL COMPONENTS -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <!-- MODAL COMPONENTS -->
  </div>
</template>

<script>
import MembersCard from "@/components/classComps/studentSideBar/MembersCard";
import MembersEmptyTeacherRow from "@/components/classComps/studentSideBar/MembersEmptyTeacherRow";
import PostInputCardNew from "@/components/classComps/feeds/PostInputCardNew";
import FilterPostLibrary from "@/components/classComps/feeds/FilterPostLibrary";
import DefaultPostBlock from "@/components/classComps/feeds/DefaultPostBlock";
import PostBlock from "@/components/classComps/feeds/PostBlock";
import PostLibraryBlock from "@/components/classComps/feeds/PostLibraryBlock";

const MembersTeacherRow = () => ({
  component: import(/* webpackChunkName: "MembersTeacherRow" */ "@/components/classComps/studentSideBar/MembersTeacherRow"),
  loading: MembersEmptyTeacherRow,
  error: MembersEmptyTeacherRow,
  delay: 500,
  timeout: 7000
});

export default {
  name: "ClassFeeds",

  components: {
    MembersCard,
    MembersEmptyTeacherRow,
    MembersTeacherRow,
    PostInputCardNew,
    FilterPostLibrary,
    DefaultPostBlock,
    PostBlock,
    PostLibraryBlock,
    UpcomingEventBlock: () =>
      import(/* webpackChunkName: "upcomingevent" */ "@/components/classComps/feeds/UpcomingEventBlock"),
    AddTeacherModal: () =>
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/modalComps/schoolModals/AddTeacherModal")
  },

  data() {
    return {
      teacher_modal: false,
      in_view: "PostBlock",
      teacher_count: 1,
      post_count: 1,
      class_option: {
        id: "1",
        year: "Year 7",
        branch: "Gold",
        code: "IMD/JSS1B"
      }
    };
  },

  methods: {
    switchClass(event) {
      this.class_option.id = event.id;
      this.class_option.year = event.year;
      this.class_option.branch = event.branch;
    },

    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    },

    togglePostBlock() {
      this.active = !this.active;
      if (this.active) {
        this.in_view = "PostLibraryBlock";
      } else {
        this.in_view = "PostBlock";
      }
    }
  }
};
</script>

<style lang="scss">
.class-feeds-section {
  .right-layout {
    @include breakpoint_max(lg) {
      padding-left: 30px;
      padding-right: 0px;
    }

    @include breakpoint_max(md) {
      margin-bottom: 80px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .post-component {
    min-width: 63%;
    max-width: 63%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 60px;

    @include breakpoint_max(lg) {
      min-width: 100%;
      max-width: 100%;
    }
  }

  .event-component {
    min-width: 36%;
    max-width: 36%;
    padding-right: 5px;

    @include breakpoint_max(lg) {
      min-width: 100%;
      max-width: 100%;
      padding-right: 15px;
      margin-bottom: 20px;
    }
  }
}
</style>
