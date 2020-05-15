<template>
  <div class="todo-card-section">
    <!-- TODO CARD -->
    <div class="todo-card">
      <!-- TODO LABEL -->
      <div class="todo-label" :class="status"></div>
      <!-- TODO ROW -->
      <div class="todo-row">
        <!-- LEFT SECTION -->
        <div class="left-info">
          <!-- TODO TIME -->
          <div class="todo-time color_text">{{ time }}</div>
          <!-- TODA DATA -->
          <div class="todo-data">
            <div class="todo-title brand_navy">{{ title }}</div>
            <div class="todo-meta color_grey_dark">{{ todoMeta }}</div>
          </div>
        </div>
        <!-- RIGHT SECTION -->
        <div class="right-info btn-link pointer">More</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoTask",

  props: ["status", "time", "title", "class_year", "class_branch", "subject"],

  data() {
    return {
     
    };
  },

  computed: {
    todoMeta() {
      return `${this.class_year} - ${this.class_branch} • ${this.subject}`;
    }
  }
};
</script>

<style>
</style>
