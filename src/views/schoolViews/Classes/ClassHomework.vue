<template>
  <div>
    <vue-headful title="Class Homework | School Dashboard" description="Description goes here"/>
    <div class="class-homework-section">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-left-layout">
            <MembersCard></MembersCard>
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS HOMEWORK -->
          <div class="col-12 offset-md-1 col-md-8 offset-lg-0 col-lg-9 right-layout">
            <!-- PAGE TITLE -->
            <div class="title-row d-flex justify-content-between align-items-start nowrap">
              <!-- TITLE -->
              <div
                class="page-title font-weight-bold color_text select-none pointer"
                @click="changeView"
              >Homework</div>
              <!-- ADD NEW -->
              <div class="avatar add-new btn-accent pointer">
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
  </div>
</template>

<script>
import MembersCard from "@/components/schoolComps/dashboard/class/class_members/MembersCard";
import ContentInfo from "@/components/schoolComps/dashboard/class/class_homework/ContentInfo";
import DefaultInfo from "@/components/schoolComps/dashboard/class/class_homework/DefaultInfo";

export default {
  name: "ClassHomework",

  components: {
    MembersCard,
    ContentInfo,
    DefaultInfo
  },

  data() {
    return {
      in_view: "ContentInfo"
    };
  },

  methods: {
    changeView() {
      if (this.in_view === "ContentInfo") {
        this.in_view = "DefaultInfo";
      } else if (this.in_view === "DefaultInfo") {
        this.in_view = "ContentInfo";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
