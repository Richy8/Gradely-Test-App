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
      <div class="recommendation-block rounded-5 white h-auto">
        <!-- TOP BLOCK -->
        <div class="top-block">
          <div class="d-flex justify-content-start align-items-center nowrap">
            <!-- AVATAR -->
            <div class="avatar avatar-square mr-2 mr-sm-3">
              <img :src="dynamicImg('Math1.png')" alt class="avatar-img">
            </div>

            <!-- TITLE -->
            <div class="title mr-3 mr-sm-4 font-14 font-weight-bold pointer">Number Bases</div>

            <!-- DROPDOWN ICON -->
            <div class="icon">
              <i class="icon-caret-down font-17 border_grey_dark pointer"></i>
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
              <StrugglingList v-if="in_view === 'StrugglingList'"></StrugglingList>

              <AverageList v-else-if="in_view === 'AverageList'"></AverageList>

              <TopList v-else-if="in_view === 'TopList'"></TopList>
            </keep-alive>
          </transition>
          <!-- COMPONENTS GOES HERE -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StrugglingList from "@/components/classComps/report/StrugglingList";

export default {
  name: "Recommendation",

  components: {
    StrugglingList,
    AverageList: () =>
      import(/* webpackChunkName: "ClassReport" */ "@/components/classComps/report/AverageList"),
    TopList: () =>
      import(/* webpackChunkName: "ClassReport" */ "@/components/classComps/report/TopList")
  },

  data() {
    return {
      in_view: "StrugglingList"
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
    }
  }
};
</script>

<style lang="scss">
.recommendation-section {
  margin-bottom: 60px;

  .section-intro {
    margin-bottom: 20px;

    .title {
      margin-bottom: 2px;
      font-size: 21px;
      line-height: 29px;

      @include breakpoint_max(md) {
        font-size: 19px;
      }

      @include breakpoint_max(sm) {
        font-size: 16.5px;
      }

      @include breakpoint_max(xs) {
        font-size: 15px;
      }
    }
  }

  // RECOMMENDATION BLOCK
  .recommendation-block {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

    .top-block {
      padding: 28px 20px;

      .title {
        transition: all 0.3s ease-in-out;
        color: $color_text;

        &:hover {
          color: darken($brand_accent, 15%);
        }
      }
    }

    .mid-block {
      padding-bottom: 30px;

      %tab-styling {
        &:after {
          position: absolute;
          content: "";
          left: 0;
          width: 100%;
          height: 2.5px;
          background: $brand_accent;
          bottom: -11px;
        }
      }

      .tabs {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 10px;
        margin-bottom: 5px;
        border-bottom: 1px solid $border_grey;

        .tab {
          position: relative;
          width: 33.33%;
          text-align: center;
          font-size: 14px;
          line-height: 19px;
          color: $border_grey_dark;
          cursor: pointer;
          transition: all 0.4s ease-in-out;

          @include breakpoint_max(lg) {
            font-size: 13px;
          }

          @include breakpoint_max(md) {
            font-size: 14px;
          }

          @include breakpoint_max(sm) {
            font-size: 13px;
          }

          &:hover {
            color: $color_text;
            @extend %tab-styling;
          }
        }

        .active {
          color: $color_text;
          font-weight: 600;
          @extend %tab-styling;
        }
      }
    }
  }
}
</style>
