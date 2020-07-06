<template>
  <div>
    <div class="container-title text-uppercase color_grey_dark font-weight-bold">School Information</div>
    <!-- PARENT LIST COMPONENT -->
    <ListCard
      card_image="SchoolImg.png"
      card_text_top="Year 7"
      card_text_bottom="Gradely Intl. College"
    ></ListCard>

    <!-- OPTION -->
    <div class="container-option mt-3 d-flex justify-content-start align-items-center nowrap">
      <div class="avatar pointer border mr-2">
        <span class="flex-center icon-repeat brand_accent font-17"></span>
      </div>
      <div class="label-text font-weight-bold brand_accent font-13-5 pointer btn-link">Change Class</div>
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

  methods: {}
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
