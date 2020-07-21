<template>
  <div>
    <div class="teacher-class-container white rounded-5 w-100 h-auto">
      <!-- CLASS CARD COMPONENT -->
      <ChildCard
        :child_img="data.child_img"
        :child_name="data.child_name"
        :child_code="data.child_code"
        :active="data.active"
        v-for="(data, index) in children"
        :key="index"
      ></ChildCard>
      <!-- CLASS CARD COMPONENT -->

      <!-- ADD CLASS OPTION -->
      <div class="add-more-class">
        <div class="add-new-item pointer w-100 my-1" @click="goToAddChild">
          <div class="undone"></div>
          <div class="label-text color_text">Add another Child</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChildCard from "@/components/classComps/parentSideBar/ChildCard";

export default {
  name: "ParentChildCard",

  components: {
    ChildCard
  },

  data() {
    return {
      children: [
        {
          child_img: "avatar2.png",
          child_name: "Andrew Oshinaga",
          child_code: "FDR/2019/1128",
          active: true
        },
        {
          child_img: "avatar14.png",
          child_name: "Jasmine Oshinaga",
          child_code: "JMD/2019/1022",
          active: false
        }
      ]
    };
  },

  methods: {
    goToAddChild() {
      this.$router.push("/parent/onboarding/new-child");
    }
  }
};
</script>

<style lang="scss">
.teacher-class-container {
  @include breakpoint_max(lg) {
    width: 115% !important;
  }

  @include breakpoint_max(md) {
    width: 100% !important;
    margin-bottom: 20px;
  }
  .add-more-class {
    border-top: 1px solid $border_grey;
    padding: 15px 16px;
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(md) {
      display: none;
    }
  }
}
</style>
