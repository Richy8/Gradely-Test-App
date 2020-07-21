<template>
  <div>
    <RecommendCard child_img="ChildSqr6.png" child_name="Efemena Elvis" :percent_progress="65"></RecommendCard>
    <RecommendCard child_img="ChildSqr5.png" child_name="Richy Jones" :percent_progress="50"></RecommendCard>
    <RecommendCard child_img="ChildSqr4.png" child_name="Nelly Okoh" :percent_progress="69"></RecommendCard>
    <RecommendCard child_img="ChildSqr4.png" child_name="Esther Patrick" :percent_progress="74"></RecommendCard>
    <RecommendCard child_img="ChildSqr2.png" child_name="Jacob Dada" :percent_progress="55"></RecommendCard>
    <RecommendCard child_img="ChildSqr1.png" child_name="Hassan Ibrahim" :percent_progress="60"></RecommendCard>

    <!-- GROUP REMEDIAL  -->
    <div class="group-remedial">
      <router-link to class="remedial-btn rounded-30" @click.native="toggleGroupRemedialModal">
        <span class="icon-videocam brand_inverse font-23 ml-0 mr-2"></span> Schedule a group class
      </router-link>
    </div>
    <!-- GROUP REMEDIAL  -->

    <!-- RECOMMENDATION NOTE -->
    <RecommendationNote
      progress_state="average"
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
  name: "AverageList",

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

<style>
</style>
