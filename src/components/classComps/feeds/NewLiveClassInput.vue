<template>
  <div class="w-100">
    <div class="new-post-input-section w-100">
      <!-- META TEXT -->
      <div class="meta-text border_grey_dark">Add Instructions</div>

      <!-- POST INPUT BLOCK -->
      <div class="input-block white rounded-5 w-100">
        <div class="title-row">
          <div class="title-text font-weight-bold color_text">New Live Class</div>

          <div class="cancel border_grey_dark pointer">Cancel</div>
        </div>

        <!-- TITLE INPUT -->
        <input
          type="text"
          class="form-control border-0 color_grey_dark title-input"
          placeholder="Give your live class a name"
        >

        <!-- INPUT ROW -->

        <div class="input-row d-flex justify-content-start align-items-center nowrap mt-4">
          <!-- DATE SELECTOR -->
          <div class="input-selector date-input mr-2">
            <!-- AVATAR -->
            <div class="avatar">
              <span class="icon-calendar flex-center color_grey_dark font-24 font-weight-400"></span>
            </div>
            <datepicker
              placeholder="Set lesson date"
              input-class="form-control color_white_bg border-0 input-form"
            ></datepicker>
          </div>

          <!-- TIME SELECTOR -->
          <div class="input-selector time-input ml-4">
            <!-- AVATAR -->
            <div class="avatar">
              <span class="icon-watch flex-center color_grey_dark font-24 font-weight-400"></span>
            </div>
            <vue-timepicker v-model="time_value" format="HH:mm"></vue-timepicker>
          </div>
        </div>

        <!-- WEEK SELECTOR -->
        <div class="input-selector mt-3">
          <!-- AVATAR -->
          <div class="avatar">
            <span class="icon-swap flex-center font-24 color_grey_dark font-weight-400"></span>
          </div>

          <!-- INPUT -->
          <select id class="form-control border-0 color_white_bg input-form">
            <option value selected disabled>Select Interval</option>
            <option value="weekly">Weekly</option>
            <option value="fortnightly">FortNightly</option>
          </select>
        </div>

        <!-- SUBJECT SELECTOR -->
        <div class="input-selector mt-3">
          <!-- AVATAR -->
          <div class="avatar">
            <span class="icon-book-cover flex-center font-24 color_grey_dark font-weight-400"></span>
          </div>

          <!-- INPUT -->
          <select id class="form-control border-0 color_white_bg input-form">
            <option value selected disabled>Select Subject</option>
            <option value="Further Mathematics">Further Mathematics</option>
            <option value="English Language">English Language</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import VueTimepicker from "vuejs-timepicker";

export default {
  name: "NewLiveClassInput",

  components: {
    Datepicker,
    VueTimepicker
  },

  data() {
    return {
      time_value: {
        HH: "10",
        mm: "05"
      }
    };
  }
};
</script>

<style lang="scss">
.new-post-input-section {
  .meta-text {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 16px;
  }

  .input-block {
    border: 1px solid #e5e5e5;
    padding: 15px 20px;

    .title-row {
      margin-bottom: 10px;

      @include flex_row_between_nowrap;
      .title-text {
        font-size: 15px;
        line-height: 22px;
      }

      .cancel {
        font-size: 12px;
        line-height: 16px;
        &:hover {
          color: $brand_tonic !important;
        }
      }
    }

    .title-input {
      border: 0;
      border-bottom: 1px solid $border_grey !important;
      &:focus {
        border-bottom: 1px solid $brand_accent !important;
      }
    }

    .input-selector {
      @include flex_row_start_nowrap;

      .input-form {
        width: 210px !important;
      }

      .display-time {
        background: $color_white;
        border: 0px solid transparent;
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
        width: 100%;
        min-height: 2.8125rem;
        border-radius: 0.3125rem;
        color: $color_grey_dark;
        text-indent: 0.0006rem;
        @include breakpoint_max(lg) {
          font-size: 0.8125rem;
        }

        @include breakpoint_max(xs) {
          font-size: 0.7813rem;
        }
      }
    }
  }
}
</style>
