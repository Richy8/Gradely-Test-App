<template>
  <div>
    <vue-headful :title="getPageTitle" description="Description goes here"/>
    <div class="catchup-section base-type-layout">
      <!-- CATCHUP CONTAINER -->
      <div class="container px-1">
        <!-- FIRST ROW -->
        <div class="row first-row d-flex justify-content-between align-items-center flex-wrap">
          <!-- TOP ROW -->
          <div class="col-12 col-md-6">
            <!-- CHILD DROPDOWN COMPONENT -->
            <ChildDropdown v-if="account_type==='parent'"></ChildDropdown>
            <!-- CHILD DROPDOWN COMPONENT -->
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-end">
            <!-- SEARCH BAR -->
            <SearchBar></SearchBar>
            <!-- SEARCH BAR -->
          </div>
        </div>
        <!-- FIRST ROW -->

        <!-- SECOND ROW -->
        <div class="row">
          <div class="col-12">
            <UpgradeAlertCard></UpgradeAlertCard>
          </div>
        </div>
        <!-- SECOND ROW -->

        <!-- THIRD ROW -->
        <div class="row">
          <div class="col-12">
            <CatchupBanner></CatchupBanner>
          </div>
        </div>
        <!-- THIRD ROW -->

        <!-- CARD SECTIONS -->
        <RecommendationRow></RecommendationRow>
        <RecentPracticeRow></RecentPracticeRow>
        <KeepWatchingRow></KeepWatchingRow>
        <!-- CARD SECTIONS -->
      </div>

      <!-- EXPLORE SECTION -->
      <section class="explore-section position-relative">
        <div class="box-overlay w-100 h-100 position-absolute rgba-black-light"></div>
        <div class="container px-1">
          <ExploreRow></ExploreRow>
        </div>
      </section>
      <!-- EXPLORE SECTION -->

      <div class="container px-1">
        <MathematicsRow></MathematicsRow>
        <EnglishRow></EnglishRow>
      </div>

      <!-- CATCHUP CONTAINER -->
    </div>
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";
import ChildDropdown from "@/components/classComps/catchup/ChildDropdown";
import SearchBar from "@/components/classComps/catchup/SearchBar";
import CatchupBanner from "@/components/classComps/catchup/CatchupBanner";
import RecommendationRow from "@/components/classComps/catchup/RecommendationRow";

export default {
  name: "Catchup",

  components: {
    ChildDropdown,
    SearchBar,
    CatchupBanner,
    RecommendationRow,
    UpgradeAlertCard: () =>
      import(/* webpackChunkName: "UpgradeAlertCard" */ "@/components/classComps/feeds/UpgradeAlertCard"),
    RecentPracticeRow: () =>
      import(/* webpackChunkName: "RecentPracticeRow" */ "@/components/classComps/catchup/RecentPracticeRow"),
    KeepWatchingRow: () =>
      import(/* webpackChunkName: "KeepWatchingRow" */ "@/components/classComps/catchup/KeepWatchingRow"),
    ExploreRow: () =>
      import(/* webpackChunkName: "ExploreRow" */ "@/components/classComps/catchup/ExploreRow"),
    MathematicsRow: () =>
      import(/* webpackChunkName: "MathematicsRow" */ "@/components/classComps/catchup/MathematicsRow"),
    EnglishRow: () =>
      import(/* webpackChunkName: "EnglishRow" */ "@/components/classComps/catchup/EnglishRow")
  },

  computed: {
    getPageTitle() {
      return `Dashboard Catchup | ${capitalizeFirstLetter(this.account_type)}`;
    }
  },

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.catchup-section {
  margin-top: 50px;

  .first-row {
    margin-bottom: 20px;
  }

  .explore-section {
    padding: 70px 0px 65px;
  }
}

// CATCHUP TITLE ROW
.catchup-title-row {
  margin-bottom: 25px;
  .left {
    .title {
      font-size: 20px;
      line-height: 165%;
      letter-spacing: 0.02em;

      @include breakpoint_max(sm) {
        font-size: 17px;
      }
    }

    .meta {
      font-size: 14px;
      line-height: 177.06%;

      @include breakpoint_max(sm) {
        font-size: 12px;
      }
    }
  }

  .right {
    .btn {
      background: rgba(0, 0, 0, 0.4);
      border-radius: 25px;
      padding-left: 10px;
      padding-right: 10px;

      &:hover {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        color: $brand_accent !important;
      }
    }
  }
}
</style>
