<template>
  <div>
    <div class="container-title text-uppercase color_grey_dark font-weight-bold">My Parents</div>
    <!-- PARENT LIST COMPONENT -->
    <ListCard card_image card_text_top="Boye Oshinaga" card_text_bottom="Father"></ListCard>

    <!-- OPTION -->
    <div class="container-option">
      <div class="add-new-item pointer">
        <div class="undone"></div>
        <div
          class="label-text font-weight-bold brand_accent"
          @click="redirectToAddParent"
        >Add Parent</div>
      </div>
    </div>
  </div>
</template>

<script>
import ListCard from "@/components/globalComps/SettingsComps/ProfileComps/ListCard";

export default {
  name: "ParentListContainer",

  components: {
    ListCard
  },

  data() {
    return {
      classes: [
        {
          school_name: "Chistland Intl. College",
          class_year: "Year 7",
          class_branch: "Gold"
        }
      ]
    };
  },

  methods: {
    redirectToAddParent() {
      this.$router.push("/student/parent_invitation");
    }
  }
};
</script>

<style lang="scss">
.container-title {
  margin-top: 30px;
  margin-bottom: 21px;
  font-size: 16px;
  line-height: 22px;

  @include breakpoint_max(sm) {
    font-size: 13.5px;
  }
}

.container-option {
  font-size: 14px;
  line-height: 19px;

  @include breakpoint_max(sm) {
    font-soze: 12px;
  }
}
</style>
