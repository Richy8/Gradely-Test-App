<template>
  <div>
    <div
      class="switch-class-row rounded-5 white w-100 h-auto pointer"
      @click="$emit('getSelected')"
    >
      <!-- CLASS LABEL -->
      <div class="switch-class-label" :class="setLabelBg"></div>

      <!-- CLASS INFO -->
      <div class="d-flex justify-content-between align-items-center nowrap">
        <!-- CLASS NAME -->
        <div class="switch-class-name color_text">{{ setClassName }}</div>

        <!-- SELECT OPTION -->
        <div class="select-option" v-if="selected">
          <div class="done"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, shuffle, random } from "@/scripts/utilities";
export default {
  name: "SwitchClassRow",

  props: {
    class_year: String,
    class_branch: String,
    selected: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    setLabelBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(11, 0)];
    },

    setClassName() {
      return `${this.class_year} - ${this.class_branch}`;
    }
  }
};
</script>

<style lang="scss">
.switch-class-row {
  position: relative;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 5px;
  padding: 16px 24px;
  overflow: hidden;

  .switch-class-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
  }

  .switch-class-name {
    font-size: 14px;
    line-height: 19px;
  }

  .done {
    @include equal_min_edge(20);
    &:after {
      font-size: 13px;
    }
  }
}
</style>
