<template>
  <div>
    <div class="recommendation-section">
      <!-- SECTION INTRO TITLE -->
      <div class="section-intro">
        <div class="title color_text font-weight-bold">Recommendation</div>
        <div
          class="description color_ash font-11-5"
        >Help identified students CatchUp with the class.</div>
      </div>

      <!-- RECOMMENDATION BLOCK -->
      <div class="recommendation-block rounded-5 white">
        <!-- TOP BLOCK -->
        <div class="top-block">
          <div class="d-flex justify-content-start align-items-center nowrap">
            <!-- AVATAR -->
            <div class="avatar avatar-square mr-2 mr-sm-3">
              <img src="@/assets/images/Math1.png" alt class="avatar-img">
            </div>

            <!-- TITLE -->
            <div class="title mr-3 mr-sm-4 font-14 font-weight-bold pointer">Number Bases</div>

            <!-- DROPDOWN ICON -->
            <div class="icon">
              <i class="fas fa-chevron-down font-17 border_grey_dark pointer"></i>
            </div>
          </div>
        </div>

        <!-- MID BLOCK -->
        <div class="mid-block">
          <div class="tabs w-100">
            <div class="tab active" @click="changeView($event, 'struggling')">Struggling</div>
            <div class="tab" @click="changeView($event, 'average')">Average</div>
            <div class="tab" @click="changeView($event, 'top')">Top</div>
          </div>

          <!-- COMPONENTS GOES HERE -->
          <transition name="fade" mode="out-in">
            <keep-alive>

              <StrugglingList
                v-if="in_view === 'StrugglingList'"
                @toggleVideo="toggleVideoCard"
                @togglePractice="togglePracticeCard"
              ></StrugglingList>

              <AverageList
                v-else-if="in_view === 'AverageList'"
                @toggleVideo="toggleVideoCard"
                @togglePractice="togglePracticeCard"
              ></AverageList>

              <TopList
                v-else-if="in_view === 'TopList'"
                @toggleVideo="toggleVideoCard"
                @togglePractice="togglePracticeCard"
              ></TopList>

            </keep-alive>
          </transition>
          <!-- COMPONENTS GOES HERE -->
        </div>
      </div>
    </div>

    <!-- MODAL GOES HERE -->
    <VideoCardModal v-if="video_card" @closeTriggered="toggleVideoCard"></VideoCardModal>
    <PracticeCardModal v-if="practice_card" @closeTriggered="togglePracticeCard"></PracticeCardModal>
    <!-- MODAL GOES HERE -->
  </div>
</template>

<script>
import StrugglingList from "@/components/schoolComps/dashboard/class/class_report/StrugglingList";
import AverageList from "@/components/schoolComps/dashboard/class/class_report/AverageList";
import TopList from "@/components/schoolComps/dashboard/class/class_report/TopList";

// MODALS
import VideoCardModal from "@/components/schoolComps/dashboard/modals/VideoCardModal";
import PracticeCardModal from "@/components/schoolComps/dashboard/modals/PracticeCardModal";

export default {
  name: "Recommendation",

  components: {
    StrugglingList,
    AverageList,
    TopList,
    VideoCardModal,
    PracticeCardModal
  },

  data() {
    return {
      in_view: "StrugglingList",
      video_card: false,
      practice_card: false
    };
  },

  methods: {
    changeView(event, view) {
      let tabs = document.querySelectorAll(".tab");
      tabs.forEach(elm => elm.classList.remove("active"));

      if (view === "struggling") {
        this.in_view = "StrugglingList";
        event.target.classList.add("active");
      } else if (view === "average") {
        this.in_view = "AverageList";
        event.target.classList.add("active");
      } else if (view === "top") {
        this.in_view = "TopList";
        event.target.classList.add("active");
      }
    },

    toggleVideoCard() {
      this.video_card = !this.video_card;
    },

    togglePracticeCard() {
      this.practice_card = !this.practice_card;
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
