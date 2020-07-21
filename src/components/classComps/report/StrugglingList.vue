<template>
  <div>
    <RecommendCard child_img="ChildSqr1.png" child_name="Haruna James" :percent_progress="42"></RecommendCard>
    <RecommendCard child_img="ChildSqr2.png" child_name="Joshua Okafor" :percent_progress="30"></RecommendCard>
    <RecommendCard child_img="ChildSqr3.png" child_name="Afolabi Andrew" :percent_progress="36"></RecommendCard>
    <RecommendCard child_img="ChildSqr4.png" child_name="Femi Adekunle" :percent_progress="15"></RecommendCard>
    <RecommendCard child_img="ChildSqr5.png" child_name="Bukola Salami" :percent_progress="35"></RecommendCard>
    <RecommendCard child_img="ChildSqr6.png" child_name="Jane Okoro" :percent_progress="25"></RecommendCard>

    <!-- GROUP REMEDIAL  -->
    <div class="group-remedial">
      <router-link to class="remedial-btn rounded-30" @click.native="toggleGroupRemedialModal">
        <span class="icon-videocam brand_inverse font-23 ml-0 mr-2"></span> Schedule a group class
      </router-link>
    </div>
    <!-- GROUP REMEDIAL  -->

    <!-- RECOMMENDATION NOTE -->
    <RecommendationNote
      progress_state="struggling"
      recommendation_text="We advice that you focus on the following students while in class. Make sure they get it first before moving on."
    ></RecommendationNote>
    <!-- RECOMMENDATION NOTE -->

    <!-- MODAL -->
    <GroupRemedialModal v-if="group_remedial" @closeTriggered="toggleGroupRemedialModal"></GroupRemedialModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import RecommendCard from "@/components/classComps/report/RecommendCard";

export default {
  name: "StrugglingList",

  components: {
    RecommendCard,
    RecommendationNote: () =>
      import(/* webpackChunkName: "Recommendation" */ "@/components/classComps/report/RecommendationNote"),
    GroupRemedialModal: () =>
      import(/* webpackChunkName: "GroupRemedialModal" */ "@/components/modalComps/classModals/GroupRemedialModal")
  },

  data() {
    return {
      group_remedial: false
    };
  },

  methods: {
    toggleGroupRemedialModal() {
      this.group_remedial = !this.group_remedial;
    }
  }
};
</script>

<style lang="scss">
.group-remedial {
  width: 96%;
  margin: 20px auto;

  .remedial-btn {
    padding: 12px 22px;
    color: $brand_navy;
    font-size: 13px;
    background: $brand_inverse_light;

    span {
      position: relative;
      top: 5px;
    }
  }
}
</style>
