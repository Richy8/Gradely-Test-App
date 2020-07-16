<template>
  <div class="w-100">
    <div class="new-post-input-section w-100">
      <!-- META TEXT -->
      <div class="meta-text border_grey_dark">Add Instructions</div>

      <!-- POST INPUT BLOCK -->
      <div class="input-block white rounded-5 w-100">
        <div class="title-row">
          <div class="title-text font-weight-bold color_text">New Assessment</div>

          <div class="cancel border_grey_dark pointer">Cancel</div>
        </div>

        <!-- TITLE INPUT -->
        <input
          type="text"
          class="form-control border-0 color_grey_dark title-input"
          placeholder="Assessment Title"
        >

        <!-- ASSESSMENT CATEGORY -->
        <div class="assessment-category d-flex justify-content-start align-items-center">
          <div
            class="category font-weight-bold pointer rounded-35 mr-3"
            :class="category.active ? 'active': ''"
            v-for="(category, index) in form.category"
            :key="index"
            @click="toggleCategory(index)"
          >{{ category.type }}</div>
        </div>
        <!-- ASSESSMENT CATEGORY -->

        <!-- INPUT ROW -->
        <div class="input-row d-flex justify-content-start align-items-center nowrap mt-4">
          <!-- START DATE -->
          <div class="input-selector date-input mr-3">
            <!-- AVATAR -->
            <div class="avatar">
              <span class="icon-calendar flex-center color_grey_dark font-24 font-weight-400"></span>
            </div>
            <datepicker
              placeholder="Start date"
              input-class="form-control color_white_bg border-0 input-form"
            ></datepicker>
          </div>

          <!-- RANGE  LINE -->
          <div class="range-line"></div>

          <!-- END DATE -->
          <div class="input-selector time-input ml-3">
            <datepicker
              placeholder="End date"
              input-class="form-control color_white_bg border-0 input-form"
            ></datepicker>
          </div>
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

export default {
  name: "NewLiveClassInput",

  components: {
    Datepicker
  },

  data() {
    return {
      form: {
        category: [
          { type: "Homework", active: true },
          { type: "Exam", active: false },
          { type: "Quiz", active: false }
        ]
      }
    };
  },

  methods: {
    toggleCategory(index) {
      this.form.category.map(category => (category.active = false));
      this.form.category[index].active = true;
    }
  }
};
</script>

<style lang="scss">
.new-post-input-section {
  .range-line {
    background: $border_grey_dark;
    height: 2px;
    width: 25px;
  }

  .assessment-category {
    margin-top: 20px;
    margin-bottom: 26px;

    .category {
      padding: 9px 18px;
      color: $color_grey_dark;
      font-size: 12.5px;
      line-height: 16px;
      transition: all 0.3s ease-in-out;
    }

    .active {
      background: $brand_accent_light;
      border: 1px solid $brand-accent;
      color: $brand_navy;
    }
  }
}
</style>
