<template>
  <div class="school-setup-form">
    <form @submit.prevent>
      <!-- SCHOOL TYPE -->
      <div class="school-type">
        <div class="title color_grey_dark font-weight-bold">School Type</div>

        <div class="form_group">
          <div class="item">
            <label for="primary" class="radio">
              <input type="radio" id="primary" value="Primary" v-model="school_type.selected">
              <span class="label_title">Primary school only</span>
            </label>
          </div>

          <div class="item">
            <label for="secondary" class="radio">
              <input type="radio" id="secondary" value="Secondary" v-model="school_type.selected">
              <span class="label_title">Secondary school only</span>
            </label>
          </div>

          <div class="item">
            <label for="primSec" class="radio">
              <input
                type="radio"
                id="primSec"
                value="PrimarySecondary"
                v-model="school_type.selected"
              >
              <span class="label_title">Primary and Secondary school</span>
            </label>
          </div>
        </div>
      </div>

      <!-- NAMING STYLE -->
      <div class="naming-style">
        <div class="title color_grey_dark font-weight-bold">Naming Style</div>

        <div class="form-group">
          <div class="item">
            <label for="k12Style" class="white rounded-5 radio w-100">
              <input type="radio" id="k12Style" value="k-12" v-model="naming_style.selected">
              <div class="radio-info">
                <div class="title font-weight-bold color_text">Grade 1-12/Year 1-12</div>
                <div class="subtitle color_grey_dark">Use the K12 naming style of Grade 1 - Year 12</div>
              </div>
            </label>
          </div>

          <div class="item">
            <label for="defaultStyle" class="white rounded-5 radio w-100">
              <input type="radio" id="defaultStyle" value="default" v-model="naming_style.selected">
              <div class="radio-info">
                <div class="title font-weight-bold color_text">Nursery 1-2/ Primary 1-6/ JSS 1-SS 3</div>
                <div
                  class="subtitle color_grey_dark"
                >Use the defualt Nigerian class naming style of nursery, primary, Junior and Senior secondary class</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "setupForm",
  data() {
    return {
      school_type: {
        selected: "Secondary"
      },
      naming_style: {
        selected: null
      }
    };
  }
};
</script>

<style lang="scss">
%form-title {
  font-size: 14px !important;
  line-height: 19px !important;
  margin-bottom: 11.5px !important;
  text-transform: uppercase;
}

.school-setup-form {
  .school-type {
    margin-bottom: 34.5px;

    .title {
      @extend %form-title;
    }

    .item {
      margin-bottom: 16px;

      label {
        @include flex_row_start_nowrap;

        .label_title {
          display: block;
          font-size: 14px;
          color: $color_text;

          @include breakpoint_max(xs) {
            font-size: 13px;
          }
        }
      }
    }
  }

  .naming-style {
    margin-bottom: 80px;

    .title {
      @extend %form-title;
    }

    .item {
      margin-bottom: 10px;

      label {
        border: 1px solid $border_grey;
        padding: 15px 20px 20px;
        box-sizing: border-box;
        @include flex_row_start_nowrap;

        @include breakpoint_max(xs) {
          padding: 14px 17px 17px;
        }

        input {
          margin-right: 20px;

          @include breakpoint_max(xs) {
            margin-right: 17px;
          }
        }

        .title {
          font-size: 15px;
          line-height: 22px;
          margin-bottom: 10px;

          @include breakpoint_max(lg) {
            font-size: 14px;
          }

          @include breakpoint_max(xs) {
            font-size: 13px;
          }
        }

        .subtitle {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
}
</style>
