<template>
  <div>
    <vue-headful title="Class Report | School Dashboard" description="Description goes here"/>
    <div class="class-report-section">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout">
            <MembersCard>
              <!-- Add Item -->
              <div slot="new__item">
                <div class="add-new">
                  <div class="avatar avatar_sm_md brand_accent_bg pointer">
                    <span class="flex-center icon-plus color_text font-24"></span>
                  </div>
                </div>
              </div>
            </MembersCard>
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS REPORT -->
          <div class="col-12 col-md-9 col-lg-9 right-layout">
            <!-- PAGE TITLE -->
            <div class="page-title font-weight-bold color_text">Class Report</div>
 
            <!-- REPORT ROW -->
            <div class="report-intro-row d-flex justify-content-between align-items-center nowrap">
              <!-- SUBJECT AND TERM -->
              <div class="left d-flex justify-content-start align-items-center nowrap">
                <!-- SUBJECT SELECT -->
                <div class="subject">
                  <select class="form-control">
                    <option value="Mathematics">Mathematics</option>
                    <option value="English Language">English Language</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Physics">Physics</option>
                  </select>
                </div>

                <!-- TERM SELECT -->
                <div class="term">
                  <select class="form-control">
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                  </select>
                </div>
              </div>

              <!-- EXPORT -->
              <div class="right d-none d-md-block">
                <div class="export-btn rounded-30 color_grey_dark pointer">
                  <div>Export</div>
                  <div class="avatar">
                    <span class="flex-center icon-printer color_ash"></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- TOPIC PROGRESS COMPONENT -->
            <TopicProgress></TopicProgress>
            <!-- TOPIC PROGRESS COMPONENT -->

            <!-- RECOMMENDATION COMPONENTONENT -->
            <Recommendation></Recommendation>
            <!-- RECOMMENDATION COMPONENTONENT -->
          </div>

          <!-- CLASS REPORT -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MembersCard from "@/components/schoolComps/dashboard/class/class_members/MembersCard";
import TopicProgress from "@/components/schoolComps/dashboard/class/class_report/TopicProgress";
import Recommendation from "@/components/schoolComps/dashboard/class/class_report/Recommendation";

export default {
  name: "ClassReport",

  components: {
    MembersCard,
    TopicProgress,
    Recommendation
  }
};
</script>

<style>
</style>
