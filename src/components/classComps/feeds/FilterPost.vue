<template>
  <div>
    <div class="filter-post-section">
      <div
        class="filter-text color_text pointer"
        v-on-clickaway="onDropFilter"
        @click="toggleFilter"
      >
        Filter posts by
        <span class="icon-caret-fill-down"></span>

        <!-- DROPDOWN -->
        <div class="dropdown-btn-menu placement-bottom" v-if="filter_option">
          <div class="d-flex justify-content-start align-items-start nowrap">
            <!-- POST TYPES -->
            <ul class="list-unstyled left-list">
              <li>
                <a href="javascript:void(0)" class="color_grey_dark list-title">Type</a>
              </li>
              <li>
                <a href>Poll</a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  v-on-clickaway="onDropFilter"
                  @click="toggleSubjectFilter"
                >Subject</a>
              </li>
              <li>
                <a href>Homework</a>
              </li>
            </ul>

            <!-- POST AUTHORS -->
            <ul class="list-unstyled right-list">
              <li>
                <a href="javascript:void(0)" class="color_grey_dark list-title">Author</a>
              </li>
              <li>
                <a href>Me</a>
              </li>
              <li>
                <a href>Teachers</a>
              </li>
              <li>
                <a href>Students / Parents</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- SUBJECT LIST DROPDOWN -->
        <div class="dropdown-btn-menu filter-by-subject placement-bottom" v-if="subject_filter">
          <div class="d-flex flex-column justify-content-start align-items-start nowrap">
            <!-- SUBJECTS -->
            <div
              class="list-title d-flex justify-content-start align-items-center pointer"
              v-on-clickaway="onDropSubjectFilter"
              @click="toggleSubjectFilter"
            >
              <div class="avatar">
                <span class="flex-center icon-arrow-left black-text font-18 mr-3"></span>
              </div>
              <div class="title text-uppercase font-weight-bold">Filter By Subject</div>
            </div>
            <!-- SUBJECT LIST -->
            <div class="subject-list">
              <a href>Mathematics</a>
              <a href>Chemistry</a>
              <a href>Biology</a>
              <a href>English Language</a>
              <a href>Physics</a>
              <a href>Geography</a>
              <a href>Economics</a>
              <a href>Agricultural Science</a>
            </div>
          </div>
        </div>
      </div>

      <!-- LINE -->
      <div class="line-filter"></div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "FilterPost",

  mixins: [clickaway],

  data() {
    return {
      filter_option: false,
      subject_filter: false
    };
  },

  methods: {
    toggleFilter() {
      this.filter_option = !this.filter_option;
    },

    onDropFilter() {
      this.filter_option = false;
    },

    toggleSubjectFilter() {
      this.subject_filter = !this.subject_filter;
    },

    onDropSubjectFilter() {
      this.subject_filter = false;
    }
  }
};
</script>

<style lang="scss">
.filter-post-section {
  padding-left: 2px;
  padding-right: 2px;
  margin-bottom: 10px;
  @include flex_row_start_nowrap;

  .filter-text {
    position: relative;
    font-size: 12px;
    line-height: 16px;

    span {
      font-size: 8px;
      margin-left: 11px;
      margin-right: 20px;
    }

    .dropdown-btn-menu {
      top: 20px;
      left: 0;
      width: 350px !important;

      @include breakpoint_max(sm) {
        width: 310px !important;
      }

      .list-title {
        font-size: 11.5px;
        line-height: 16px;
        color: $color_grey_dark;

        &:hover {
          background: transparent;
        }
      }

      a {
        padding-top: 8px;
        padding-bottom: 8px;
        color: $color_text;
      }

      .left-list {
        margin-right: 65px;

        @include breakpoint_max(sm) {
          margin-right: 40px;
        }
      }

      .right-list {
        margin-right: 50px;

        @include breakpoint_max(sm) {
          margin-right: 40px;
        }
      }
    }

    .filter-by-subject {
      width: 400px;
      padding-left: 25px;
      padding-right: 25px;
      cursor: text;

      @include breakpoint_max(sm) {
        width: 320px !important;
        padding-left: 20px;
        padding-right: 20px;
      }

      .subject-list {
        @include flex_row_start_wrap;
        margin-top: 8px;
        margin-bottom: 10px;

        a {
          display: block;
          width: 48%;
          font-size: 13px;
          padding: 7.5px;

          @include breakpoint_max(sm) {
            font-size: 11px;
          }

          &:hover {
            background: $brand_inverse_light;
          }
        }
      }
    }
  }

  .line-filter {
    border-top: 1px solid $border-grey;
    flex: 1;
  }
}
</style>
