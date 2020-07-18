<template>
  <div>
    <div class="container-title text-uppercase color_grey_dark font-weight-bold">My Children</div>
    <!-- CHILDREN LIST COMPONENT -->
    <ChildrenListCard child_img="avatar14.png" child_name="Omolade Giwa" child_code="XYS/2019/2992"></ChildrenListCard>
    <ChildrenListCard
      child_img="avatar4.png"
      child_name="Abdul-Jabal Giwa"
      child_code="VZK/2019/1127"
    ></ChildrenListCard>
    <!-- OPTION -->
    <div class="container-option">
      <div class="add-new-item pointer">
        <div class="undone"></div>
        <div
          class="label-text font-weight-bold brand_accent"
          @click="redirectToAddChild"
        >Add another Child</div>
      </div>
    </div>
  </div>
</template>

<script>
import ChildrenListCard from "@/components/globalComps/SettingsComps/ProfileComps/ChildrenListCard";

export default {
  name: "ChildrenListContainer",

  components: {
    ChildrenListCard
  },

  data() {
    return {
      classes: [
        {
          school_name: "Chistland Intl. College",
          class_year: "Year 7",
          class_branch: "Gold"
        },
        {
          school_name: "Chistland Intl. College",
          class_year: "Year 8",
          class_branch: "Gold"
        },
        {
          school_name: "Chistland Intl. College",
          class_year: "Year 9",
          class_branch: "Gold"
        }
      ]
    };
  },

  methods: {
    redirectToAddChild() {
      this.$router.push("/parent/onboarding/new-child");
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
