<template>
  <div>
    <div class="class-branch rounded-5 white overflow-hidden position-relative">
      <!-- BRANCH LABEL -->
      <div class="branch-label w-100" :class="setLabelBg"></div>

      <!-- CLASS YEAR -->
      <div class="class-year color_text font-weight-bold">
        <span class="year">{{ class_year }}</span> -
        <span class="branch">{{ class_branch }}</span>
      </div>

      <!-- CLASS SUBJECTS -->
      <div class="class-subjects color_ash">{{ subjects }}</div>

      <!-- MORE ICONS -->
      <div class="icon-row d-flex justify-content-around align-items-center nowrap">
        <!-- CLASS FEED -->
        <div class="icon">
            <router-link to>
                <span class="icon-callout"></span>
            </router-link>
        </div>

        <!-- CLASS HOMEWORK -->
        <div class="icon">
            <router-link to>
                <span class="icon-library"></span>
            </router-link>
        </div>

        <!-- CLASS REPORT -->
        <div class="icon">
            <router-link to>
                <span class="icon-pie-chart"></span>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle } from "@/assets/jsComps/extFunc";

export default {
  name: "ClassBranch",

  props: {
      class_year: String,
      class_branch: String,
      subjects: String
  },

 computed: {
    setLabelBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(11, 0)];
    }
  },
};
</script>

<style>
</style>
