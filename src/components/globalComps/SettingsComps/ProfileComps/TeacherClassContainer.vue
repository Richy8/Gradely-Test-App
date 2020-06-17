<template>
  <div>
    <div class="container-title text-uppercase color_grey_dark font-weight-bold">My Classes</div>
    <!-- TEACHER CLASS CARD COMPONENT -->
    <TeacherClassCard
      :school_name="data.school_name"
      :class_year="data.class_year"
      :class_branch="data.class_branch"
      v-for="(data, index) in classes"
      :key="index"
    ></TeacherClassCard>
    <!-- OPTION -->
    <div class="container-option">
      <router-link to class="btn-link link-no-underline">Show all</router-link>
    </div>
  </div>
</template>

<script>
import TeacherClassCard from "@/components/globalComps/SettingsComps/ProfileComps/TeacherClassCard";

export default {
  name: "TeacherClassContainer",

  components: {
    TeacherClassCard
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
