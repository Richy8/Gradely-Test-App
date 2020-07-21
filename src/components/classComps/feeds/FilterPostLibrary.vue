<template>
  <div>
    <div class="filter-post-library w-100">
      <!-- LEFT -->
      <div class="left index-1 pointer">
        <div
          class="d-flex justify-content-start align-items-center nowrap"
          v-if="active"
          @click="toggleSection"
        >
          <div class="avatar">
            <span class="font-20 flex-center brand_primary icon-folder"></span>
          </div>
          <div class="text brand_primary">Library</div>
        </div>

        <div
          class="d-flex justify-content-start align-items-center nowrap"
          v-else
          @click="toggleSection"
        >
          <div class="avatar">
            <span class="font-20 flex-center brand_primary icon-timeline"></span>
          </div>
          <div class="text brand_primary">Class Feed</div>
        </div>
      </div>

      <!-- CENTER -->
      <div class="center"></div>

      <!-- RIGHT -->
      <div class="right index-1 pointer">
        <span class="text mr-3 brand_primary">Filter</span>
        <span class="icon icon-caret-fill-down font-9 brand_primary"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterPostLibrary",

  data() {
    return {
      active: true
    };
  },

  methods: {
    toggleSection() {
      this.active = !this.active;
      this.$emit("switchView");

      // if (this.active) {
      //   this.active_section = "Class Feed";
      //   this.active_icon = "icon-timeline";
      //   this.$emit("switchView");
      // } else {
      //   this.active_section = "Library";
      //   this.active_icon = "icon-folder";
      //   this.$emit("switchView");
      // }
    }
  }
};
</script>

<style lang="scss">
.filter-post-library {
  @include flex_row_between_nowrap;
  margin: 0px 1px 5px;
  position: relative;

  .left {
    padding: 6px 7px;
    background: #f0f0f0;
    transition: all 0.3s ease-in-out;

    .avatar {
      margin-right: 10px;
      margin-left: -6px;
      transition: all 0.4s ease-in-out;
    }
    .text {
      font-size: 13.5px;
      line-height: 14px;
      transition: all 0.4s ease-in-out;
    }
  }

  .center {
    position: absolute;
    border-top: 1px solid $border_grey;
    width: 100%;
    top: 55%;
    transform: translateY(-50%);
  }

  .right {
    background: #f0f0f0;
    padding: 6px 7px;
    .text {
      font-size: 13.5px;
      line-height: 14px;
    }
  }
}
</style>
