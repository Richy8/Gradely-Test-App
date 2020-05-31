<template>
  <div class="todo-card-section">
    <!-- TODO CARD -->
    <div class="todo-card position-relative border-0 w-100 h-auto overflow-hidden">
      <!-- TODO LABEL -->
      <div class="todo-label position-absolute h-100 border_grey_light_bg"></div>
      <!-- TODO ROW -->
      <div class="todo-row d-flex justify-content-between align-items-center nowrap">
        <!-- LEFT SECTION -->
        <div class="left-info">
          <!-- TODO TIME -->
          <div class="todo-time border_grey_light_bg mr-3"></div>
          <!-- TODA DATA -->
          <div class="todo-data border_grey_light_bg"></div>
        </div>
        <!-- RIGHT SECTION -->
        <div class="right-info border_grey_light_bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultTask"
};
</script>

<style lang="scss" scoped>
.todo-card-section {
  margin-bottom: 5px;
  .todo-card {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    background: rgba(white, 0.5);

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
          width: 67px;
          height: 15px;

          @include breakpoint_max(md) {
            width: 50px;
          }
        }

        .todo-data {
          width: 221px;
          height: 30px;

          @include breakpoint_max(md) {
            width: 180px;
          }
        }
      }

      .right-info {
        width: 51px;
        height: 14px;

        @include breakpoint_max(md) {
          width: 40px;
        }
      }
    }
  }
}
</style>
