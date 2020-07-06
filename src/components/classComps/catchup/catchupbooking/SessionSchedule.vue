<template>
  <div>
    <div class="session-schedule-section">
      <div
        class="session-title text-uppercase color_grey_dark font-weight-bold"
      >Weekly Session Schedule</div>
      <div class="session-meta color_text">Choose the days and time in the week for your lessons</div>

      <!-- SESSION ITEM COMPONENT -->
      <div v-for="(session, index) in session_items" :key="index">
        <SessionItem @removeItem="removeSession(index)"></SessionItem>
      </div>

      <div class="container-option">
        <div class="add-new-item mt-3 mb-1 pointer" @click="addDay">
          <div class="undone"></div>
          <div class="label-text font-weight-bold brand_accent">Add another Day</div>
        </div>
      </div>
      <!-- SESSION ITEM COMPONENT -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionSchedule",

  components: {
    SessionItem: () =>
      import(/* webpackChunkName: "SessionItem" */ "@/components/classComps/catchup/catchupbooking/SessionItem")
  },

  data() {
    return {
      session_items: [0, 1, 2]
    };
  },

  methods: {
    addDay() {
      let new_item = this.session_items.length;
      this.session_items.push(new_item);
    },

    removeSession(index) {
      let selected_index = this.session_items.findIndex(item => item === index);
      this.session_items.splice(selected_index, 1);
    }
  }
};
</script>

<style lang="scss">
.session-schedule-section {
  .session-title {
    font-size: 14.5px;
    line-height: 19px;
    margin-bottom: 11px;
  }

  .session-meta {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 20px;

    @include breakpoint_max(xs) {
      font-size: 13px;
    }
  }
}
</style>
