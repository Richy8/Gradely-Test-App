<template>
  <div>
    <div class="subject-pref-card w-100 h-auto white">
      <!-- SUBJECT -->
      <div class="subject font-weight-bold color_text">{{subject}}</div>

      <!-- CLASSES -->
      <div class="classes color_text">{{classes}}</div>

      <!-- OPTIONS -->
      <div class="options position-relative" v-on-clickaway="dropOptions" @click="toggleOptions">
        <div class="avatar avatar-square color_white_bg pointer">
          <span class="icon-ellipsis-h flex-center font-20 color_grey_dark"></span>
        </div>

        <!-- DROP DOWN MENU -->
        <div class="dropdown-btn-menu placement-bottom" v-if="subject_options">
          <ul class="list-unstyled">
            <li>
              <a href="javascript:void(0)">Subject Details</a>
            </li>
            <li>
              <router-link to>Assign to Class</router-link>
            </li>
            <li>
              <a href="javascript:void(0)">Remove Class</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "SubjectCard",

  mixins: [clickaway],

  props: ["subject", "classes"],

  data() {
    return {
      subject_options: false
    };
  },

  methods: {
    toggleOptions() {
      this.subject_options = !this.subject_options;
    },

    dropOptions() {
      this.subject_options = false;
    }
  }
};
</script>

<style lang="scss">
.subject-pref-card {
  padding: 15px 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  @include flex_row_between_nowrap;
  margin-bottom: 5px;

  .subject {
    width: 25%;
  }

  .subject,
  .classes {
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 12.5px;
    }
  }

  .options {
    span {
      @include breakpoint_max(sm) {
        font-size: 17px !important;
      }
    }
  }

  .dropdown-btn-menu {
    width: 220px;

    @include breakpoint_max(sm) {
      width: 150px;
    }
  }
}
</style>
