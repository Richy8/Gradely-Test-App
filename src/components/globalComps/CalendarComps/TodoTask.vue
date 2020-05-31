<template>
  <div class="todo-card-section">
    <!-- TODO CARD -->
    <div class="todo-card white position-relative border-0 w-100 h-auto overflow-hidden">
      <!-- TODO LABEL -->
      <div class="todo-label position-absolute h-100" :class="label_color"></div>
      <!-- TODO ROW -->
      <div class="todo-row d-flex justify-content-between align-items-center nowrap">
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

  computed: {
    todoMeta() {
      return `${this.class_year} - ${this.class_branch} • ${this.subject}`;
    }
  },

  watch: {
    status: "setTaskLabel"
  },

  data() {
    return {
      label_color: ""
    };
  },

  mounted() {
    this.setTaskLabel(this.status);
  },

  methods: {
    setTaskLabel(status) {
      if (status === "lesson") {
        this.label_color = "brand_accent_bg";
      } else if (status === "homework") {
        this.label_color = "brand_inverse_bg";
      } else if (status === "exam") {
        this.label_color = "brand_tonic_bg";
      } else if (status === "event") {
        this.label_color = "color_grey_dark_bg";
      }
    }
  }
};
</script>

<style lang="scss">
.todo-card-section {
  margin-bottom: 5px;
  .todo-card {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

    &:hover {
      background-color: #f8f8f8;
    }

    .todo-label {
      top: 0;
      bottom: 0;
      left: 0;
      width: 6px;
    }

    .todo-row {
      padding: 8px 20px;
      .left-info {
        @include flex_row_start_nowrap;

        .todo-time {
          font-weight: normal;
          font-size: 13.5px;
          line-height: 19px;
          margin-right: 15px;
          text-align: left;
          width: 67px;

          @include breakpoint_max(sm) {
            font-size: 12.5px;
          }
        }

        .todo-title {
          font-weight: bold;
          font-size: 15px;
          line-height: 22px;
          margin-bottom: 1.5px;

          @include breakpoint_max(sm) {
            font-size: 14px;
          }
        }

        .todo-meta {
          font-size: 12px;
          line-height: 16px;

          @include breakpoint_max(sm) {
            font-size: 11px;
          }
        }
      }

      .right-info {
        font-weight: bold;
        font-size: 13.5px;
        line-height: 140%;
        text-decoration: none;

        @include breakpoint_max(sm) {
          font-size: 12.5px;
        }
      }
    }
  }
}
</style>
