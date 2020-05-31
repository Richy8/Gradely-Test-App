<template>
  <div>
    <div class="curriculum-preference">
      <div class="preference-title-row">
        <!-- TITLE -->
        <div class="preference-title">School CUrriculum</div>
      </div>

      <form @submit.prevent>
        <!-- Curriculum One -->
        <div class="preference-card">
          <div class="checkbox">
            <label for="curriculumOne" class="label label-active">
              <!-- INPUT -->
              <input
                type="checkbox"
                id="curriculumOne"
                @change="onChecked"
                v-model="form.curriculum_one"
              >
              <!-- TEXT CONTENT -->
              <div class="text-content">
                <div class="title">Nigerian Curriculum</div>
                <div
                  class="description"
                >Prepare your students for Nigerian accredited examinations at the Senior and Junior secondary School level</div>
              </div>
            </label>
          </div>
        </div>
        <!-- Curriculum One -->

        <!-- Curriculum Two -->
        <div class="preference-card">
          <div class="checkbox">
            <label for="curriculumTwo" class="label">
              <!-- INPUT -->
              <input
                type="checkbox"
                id="curriculumTwo"
                @change="onChecked"
                v-model="form.curriculum_two"
              >
              <!-- TEXT CONTENT -->
              <div class="text-content">
                <div class="title">British Curriculum</div>
                <div
                  class="description"
                >Designed to prepare students for the International General Certificate of Secondary Education.</div>
              </div>
            </label>
          </div>
        </div>
        <!-- Curriculum Two -->
      </form>

      <!-- CURRICULUM REQUEST SECTION -->
      <div class="preference-request rounded-5 pointer" @click="toggleCurriculumRequestModal">
        <span class="icon icon-help-circle d-block"></span>
        <div class="help-text">Request for more curriculum</div>
      </div>

      <!-- CURRICULUM REQUEST MODAL COMPONENTS -->
      <CurriculumRequestModal
        v-if="curriculum_request_modal"
        @closeTriggered="toggleCurriculumRequestModal"
      ></CurriculumRequestModal>
      <!-- CURRICULUM REQUEST MODAL COMPONENTS -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CurriculumPreference",

  components: {
    CurriculumRequestModal: () =>
      import(/* webpackChunkName: "CurriculumRequestModal" */ "@/components/schoolComps/modals/CurriculumRequestModal")
  },

  data() {
    return {
      form: {
        curriculum_one: true,
        curriculum_two: false
      },
      curriculum_request_modal: false
    };
  },

  methods: {
    onChecked(event) {
      event.target.checked
        ? event.target.parentElement.classList.add("label-active")
        : event.target.parentElement.classList.remove("label-active");
    },

    toggleCurriculumRequestModal() {
      this.curriculum_request = !this.curriculum_request;
    }
  }
};
</script>

<style lang="scss">
.curriculum-preference {
  .preference-card {
    width: 470px;

    @include breakpoint_max(lg) {
      width: 100%;
    }

    .label {
      @include flex_row_start_nowrap;
      align-items: flex-start;
      border: 1px solid $border_grey;
      background: #ffffff;
      box-sizing: border-box;
      padding: 18px 22px 14px;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
      cursor: pointer;

      &-sm {
        padding: 12px 22px 8px;
      }

      input {
        margin-right: 12px;
        margin-top: 4.5px;
      }

      .title {
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: $color_text;
        margin-bottom: 10px;
        text-transform: capitalize;

        @include breakpoint_max(lg) {
          font-size: 14.5px;
        }

        &-sm {
          margin-top: 2.5px;
          font-size: 14.5px;

          @include breakpoint_max(lg) {
            font-size: 14px;
          }
        }
      }

      .description {
        font-size: 12.5px;
        line-height: 18.5px;
        color: $color_grey_dark;

        @include breakpoint_max(lg) {
          font-size: 11.5px;
        }
      }

      &-active {
        border: 1px solid $brand_accent;
      }
    }
  }

  .preference-request {
    @include flex_row_start_nowrap;
    align-items: flex-start;
    width: 470px;
    background: #ffffff;
    border: 1px dashed $border_grey_dark;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 19px;
    color: $color_text;
    padding: 10px 22px;
    margin-bottom: 60px;

    @include breakpoint_max(lg) {
      width: 100%;
      font-size: 13px;
    }

    .icon {
      font-size: 24px;
      color: $border_grey_dark;
      margin-right: 10px;

      @include breakpoint_max(lg) {
        font-size: 22px;
      }
    }

    .help-text {
      margin-top: 2px;
    }
  }
}
</style>
