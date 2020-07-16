<template>
  <div>
    <vue-headful title="Class Videos | Teachers" description="Description goes here"/>
    <div
      class="class-video-section base-type-layout"
      :class="account_type === 'school' ? 'school-top': ''"
    >
      <!-- BREADCRUMB -->
      <BreadCrumb
        item_one="Year 7 - Gold"
        item_three="Video"
        :current_page="0"
        :total_page="0"
        :show_nav="false"
        item_two="Library"
        :item_two_link="accountType+'Feeds'"
      ></BreadCrumb>
      <!-- BREADCRUMB -->

      <div class="container px-1 mt-5">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout">
            <!-- TEACHER CLASSES COMPONENT -->
            <TeacherClassCard></TeacherClassCard>
            <!-- TEACHER CLASSES COMPONENT -->
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS DOCUMENTS -->
          <div class="col-12 col-md-9 col-lg-9 right-layout">
            <!-- TITLE ROW -->
            <div class="title-row d-flex justify-content-between align-items-center nowrap">
              <!-- TEXT TITLE -->
              <div class="text-title font-weight-bold color_text">Videos</div>

              <!-- ADD NEW DOCUMENT -->
              <div class="avatar brand_accent_bg pointer" @click="toggleVideoModal">
                <span class="icon-plus flex-center color_text font-18"></span>
              </div>
              <!-- ADD NEW DOCUMENT -->
            </div>

            <!-- FILTER ROW -->
            <div class="filter-row d-flex justify-content-between align-items-center nowrap">
              <div class="file-count color_text">{{ setFileCount(10) }}</div>
              <div class="filter color_text">
                <span class="mr-3">Filters</span>
                <span class="icon-caret-fill-down font-9"></span>
              </div>
            </div>

            <!-- VIDEO CARD -->
            <div class="row">
              <div class="col-6 col-md-4">
                <VideoCard
                  video_poster="PostVideo.png"
                  video_file
                  video_title="Lesson 1 - Recording"
                  video_date="12th June, 2020"
                  video_time="2:46 PM"
                  video_tag="Lesson"
                ></VideoCard>
              </div>

              <div class="col-6 col-md-4">
                <VideoCard
                  video_poster="PostVideo.png"
                  video_file
                  video_title="Lesson 1 - Recording"
                  video_date="12th June, 2020"
                  video_time="2:46 PM"
                  video_tag="Lesson"
                ></VideoCard>
              </div>

              <div class="col-6 col-md-4">
                <VideoCard
                  video_poster="PostVideo.png"
                  video_file
                  video_title="Lesson 1 - Recording"
                  video_date="12th June, 2020"
                  video_time="2:46 PM"
                  video_tag="Lesson"
                ></VideoCard>
              </div>

              <div class="col-6 col-md-4">
                <VideoCard
                  video_poster="PostVideo.png"
                  video_file
                  video_title="Lesson 1 - Recording"
                  video_date="12th June, 2020"
                  video_time="2:46 PM"
                  video_tag="Lesson"
                ></VideoCard>
              </div>

              <div class="col-6 col-md-4">
                <VideoCard
                  video_poster="PostVideo.png"
                  video_file
                  video_title="Lesson 1 - Recording"
                  video_date="12th June, 2020"
                  video_time="2:46 PM"
                  video_tag="Lesson"
                ></VideoCard>
              </div>

              <div class="col-6 col-md-4">
                <VideoCard
                  video_poster="PostVideo.png"
                  video_file
                  video_title="Lesson 1 - Recording"
                  video_date="12th June, 2020"
                  video_time="2:46 PM"
                  video_tag="Lesson"
                ></VideoCard>
              </div>
            </div>
            <!-- VIDEO CARD -->

            <!-- PAGINATION COMPONENT -->
            <div class="container px-1">
              <div class="row d-flex justify-content-start">
                <Pagination></Pagination>
              </div>
            </div>
            <!-- PAGINATION COMPONENT -->
          </div>
          <!-- CLASS DOCUMENTS -->
        </div>
      </div>

      <!-- MODAL COMPONENTS -->
      <UploadVideoModal v-if="video_modal" @closeTriggered="toggleVideoModal"></UploadVideoModal>
      <!-- MODAL COMPONENTS -->
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";
import BreadCrumb from "@/components/globalComps/BreadCrumb";
import Pagination from "@/components/globalComps/Pagination";
import TeacherClassCard from "@/components/classComps/teacherSideBar/TeacherClassCard";

export default {
  name: "Videos",

  components: {
    BreadCrumb,
    Pagination,
    TeacherClassCard,
    VideoCard: () =>
      import(/* webpackChunkName: "VideoCard" */ "@/components/classComps/library/VideoCard"),
    UploadVideoModal: () =>
      import(/* webpackChunkName: "UploadVideoModal" */ "@/components/modalComps/classModals/UploadVideoModal")
  },

  computed: {
    accountType() {
      if (this.account_type === "school") {
        return capitalizeFirstLetter("class");
      } else {
        return capitalizeFirstLetter(this.account_type);
      }
    }
  },

  data() {
    return {
      account_type: "",
      video_modal: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    setFileCount(count) {
      if (count > 1) {
        return `${count} Files`;
      } else {
        return `${count} File`;
      }
    },

    toggleVideoModal() {
      this.video_modal = !this.video_modal;
    }
  }
};
</script>

<style lang="scss">
.class-video-section {
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
    .title-row {
      margin-bottom: 40px;
      .text-title {
        font-size: 21px;
        line-height: 29px;

        @include breakpoint_max(sm) {
          font-size: 18px;
        }
      }

      .avatar {
        @include equal_min_edge(32);
      }
    }

    .filter-row {
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid $border_grey;

      .file-count,
      .filter {
        font-size: 13px;
        line-height: 16px;
      }
    }
  }
}
</style>
