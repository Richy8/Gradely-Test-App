<template>
  <div>
    <vue-headful title="Class Feeds | School Dashboard" description="Description goes here"/>
    <div class="class-feeds-section">
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
            <PostInputCard fullname="Francis Sunday"></PostInputCard>

            <!-- FILTER -->
            <div class="filter-post-section">
              <div
                class="filter-text color_text pointer"
                v-on-clickaway="onDropFilter"
                @click="toggleFilter"
              >
                Filter posts by
                <span class="icon-caret-fill-down"></span>

                <!-- DROPDOWN -->
                <div class="dropdown-btn-menu placement-bottom" v-if="filter_option">
                  <div class="d-flex justify-content-start align-items-start nowrap">
                    <!-- POST TYPES -->
                    <ul class="list-unstyled left-list">
                      <li>
                        <a href="javascript:void(0)" class="color_grey_dark list-title">Type</a>
                      </li>
                      <li>
                        <a href>Poll</a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          v-on-clickaway="onDropFilter"
                          @click="toggleSubjectFilter"
                        >Subject</a>
                      </li>
                      <li>
                        <a href>Homework</a>
                      </li>
                    </ul>

                    <!-- POST AUTHORS -->
                    <ul class="list-unstyled right-list">
                      <li>
                        <a href="javascript:void(0)" class="color_grey_dark list-title">Author</a>
                      </li>
                      <li>
                        <a href>Me</a>
                      </li>
                      <li>
                        <a href>Teachers</a>
                      </li>
                      <li>
                        <a href>Students / Parents</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- SUBJECT LIST DROPDOWN -->
                <div
                  class="dropdown-btn-menu filter-by-subject placement-bottom"
                  v-if="subject_filter"
                >
                  <div class="d-flex flex-column justify-content-start align-items-start nowrap">
                    <!-- SUBJECTS -->
                    <div
                      class="list-title d-flex justify-content-start align-items-center pointer"
                      v-on-clickaway="onDropSubjectFilter"
                      @click="toggleSubjectFilter"
                    >
                      <div class="avatar">
                        <span class="flex-center icon-arrow-left black-text font-18 mr-3"></span>
                      </div>
                      <div class="title text-uppercase font-weight-bold">Filter By Subject</div>
                    </div>
                    <!-- SUBJECT LIST -->
                    <div class="subject-list">
                      <a href>Mathematics</a>
                      <a href>Chemistry</a>
                      <a href>Biology</a>
                      <a href>English Language</a>
                      <a href>Physics</a>
                      <a href>Geography</a>
                      <a href>Economics</a>
                      <a href>Agricultural Science</a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- LINE -->
              <div class="line-filter"></div>
            </div>

            <div class="row">
              <!-- POSTS SECTION -->
              <div class="col-12 col-md-7 order-2 order-lg-1 post-component">
                <!-- POST BLOCK COMPONENTS -->

                <div class="content-post-section" v-if="post_count > 0">
                  <PostBlock></PostBlock>
                </div>
                <div class="default-post-section" v-else>
                  <DefaultPostBlock></DefaultPostBlock>
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
import { mixin as clickaway } from "vue-clickaway";
import MembersCard from "@/components/schoolComps/dashboard/class/MembersCard";
import MembersEmptyTeacherRow from "@/components/schoolComps/dashboard/class/MembersEmptyTeacherRow";
import PostInputCard from "@/components/schoolComps/dashboard/class/class_feeds/PostInputCard";
import DefaultPostBlock from "@/components/schoolComps/dashboard/class/class_feeds/DefaultPostBlock";
import PostBlock from "@/components/schoolComps/dashboard/class/class_feeds/PostBlock";
import UpcomingEventBlock from "@/components/schoolComps/dashboard/class/class_feeds/UpcomingEventBlock";

const MembersTeacherRow = () => ({
  component: import(/* webpackChunkName: "MembersTeacherRow" */ "@/components/schoolComps/dashboard/class/MembersTeacherRow"),
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
    PostInputCard,
    DefaultPostBlock,
    PostBlock,
    UpcomingEventBlock,
    AddTeacherModal: () =>
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/schoolComps/modals/AddTeacherModal")
  },

  mixins: [clickaway],

  data() {
    return {
      filter_option: false,
      subject_filter: false,
      teacher_modal: false,
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

    toggleFilter() {
      this.filter_option = !this.filter_option;
    },

    onDropFilter() {
      this.filter_option = false;
    },

    toggleSubjectFilter() {
      this.subject_filter = !this.subject_filter;
    },

    onDropSubjectFilter() {
      this.subject_filter = false;
    }
  }
};
</script>

<style lang="scss">
</style>
